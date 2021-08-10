import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { formatSlug } from './mdx'

const getUniqueLinks = (rawMD) => {
  const uniqueLinks = [...new Set(rawMD.match(/\[\[(.*?)\]]/g))]
  return uniqueLinks
}

// const linkSub = (rawMD, links, baseUrl) => {
//     let newMD = rawMD;
//     for (const each of links) {
//         let replacement;
//         const bareName = each.substring(2, each.length - 2);
//         replacement = `[${bareName}](${baseUrl}notes/${encodeURI(bareName)})`;
//         newMD = newMD.split(each).join(replacement);
//     }
//     return newMD;
// };

module.exports = (prefixPaths, filesToSearch) => {
  const outgoingLinks = {}
  filesToSearch.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { content } = matter(source)
    const links = getUniqueLinks(content)
    if (links.length > 0) {
      links.forEach((link) => {
        const linkAsSlug = link.replace(/\[\[|\]\]/g, '')
        const slug = formatSlug(fileName)
        outgoingLinks[linkAsSlug]
          ? outgoingLinks[linkAsSlug].push(slug)
          : (outgoingLinks[linkAsSlug] = [slug])
      })
    }
  })
  return outgoingLinks
}
