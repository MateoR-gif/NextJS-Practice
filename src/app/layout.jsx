import Header from "../components/layout/Header"
import '../styles/global.css'

export const metadata = {
  title: 'Practice',
  description: 'Practicing Next.js',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
