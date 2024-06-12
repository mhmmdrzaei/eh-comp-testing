import '../styles/global.scss'
export const metadata = {
  title: 'ExtraHop ',
  description: 'ExtraHop comps',
}
export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
