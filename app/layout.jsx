import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}

      <head />

      <body>
      <nav>
          <h1>Logo</h1>
          <ul>
              <li><a href="#">About</a>
              </li>
              <li><a href="#">Signup</a>
              </li>
          </ul>
      </nav>
      {children}</body>
    </html>
  )
}
