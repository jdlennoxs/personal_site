export default function PageTitle({ children }) {
  return (
    <h1 className="text-4xl font-normal font-serif leading-9 tracking-tight text-gray-800 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
      {children}
    </h1>
  )
}
