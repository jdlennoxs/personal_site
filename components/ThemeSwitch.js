import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react'
import sun from '@iconify/icons-la/sun'
import moon from '@iconify/icons-la/moon'

import tw, { styled } from 'twin.macro'

const Pill = styled.div(() => [
  tw`rounded-full transition-colors flex items-center bg-gray-100`,
  `position: relative;
    `,
])

const ToggleButton = styled.div(() => [
  `
    transform: translateX(1.75em);
    position: absolute;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.1em #ffbb52;
    transition: background-color 250ms, border-color 250ms, transform 500ms cubic-bezier(.28,1.52,.4,.92);
    `,
])

const Light = styled.div(() => [
  tw`p-1`,
  `
  opacity: 1;
  transform: rotate(15deg);
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2,.46,.71);
    `,
])

const Dark = styled.div(() => [
  tw`p-1`,
  `
  position: absolute;
  opacity: 0;
  transform-origin: 50% 50%;
  transition: opacity 150ms, transform 500ms cubic-bezier(.26,2.5,.46,.71);
    `,
])

const Toggle = styled.input(() => [
  tw`cursor-pointer`,
  `position: absolute;
    opacity: 0;
    height: 0;
    width: 0;`,
  `&:checked + ${Pill} {
        background: #2A2A2F; 
        ${ToggleButton} {
            background-color: #485367;
            box-shadow: inset 0px 0px 0px 0.75em white;
            transform: translateX(0.25em);
        }
        ${Light} {
            opacity: 0;
            transform: rotate(0deg);
          }
          ${Dark} {
            opacity: 1;
            transform:rotate(-15deg);
        }
    }`,
])

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <>
      {mounted && (
        <label>
          <Toggle
            type="checkbox"
            defaultChecked={theme === 'light' || resolvedTheme === 'light'}
            onChange={() =>
              setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')
            }
          ></Toggle>
          <Pill>
            <Light>
              <Icon icon={sun} color="#2A2A2F" height="1.25em" />
            </Light>
            {/* <ToggleButton></ToggleButton> */}
            <Dark>
              <Icon icon={moon} color="#fff" height="1.25em" />
            </Dark>
          </Pill>
        </label>
      )}
    </>
    // <button
    //   aria-label="Toggle Dark Mode"
    //   type="button"
    //   className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
    //   onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    // >
    /* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="text-gray-900 dark:text-gray-100"
      >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg> */
    // </button>
  )
}

export default ThemeSwitch
