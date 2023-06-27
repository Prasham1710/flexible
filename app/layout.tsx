import './global.css'
export const metadata = {
  title: 'Flexible',
  description: 'showcase and develop remarkable projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     
      <body>
        <main>{children}</main>
      </body>
     
    </html>
  )
}
