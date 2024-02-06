import { Metadata } from "next"

export const metadata : Metadata = {
  title:{
    absolute: "Absolute Title",
    default: "Default Title",
    template: "%s | My Title"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={
          {
            backgroundColor: 'lightblue',
            padding:"2em",
          }
        }>Header</header>
        {children}
        <footer style={
          {
            backgroundColor: '#CD5C5C',
            padding:"2em",
          }
        }>Footer</footer>
      </body>
    </html>
  )
}
