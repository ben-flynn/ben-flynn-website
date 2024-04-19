export const metadata = {
  title: 'BenFlynn',
  description: 'Personal website'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <head>
        <link rel="icon" href="icons/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
