export const metadata = {
  title: 'BenFlynn',
  description: 'Personal website of Ben Flynn'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Ben Flynn"/>
        <meta name="author" content="Ben Flynn"/>
        <link rel="icon" href="icons/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
