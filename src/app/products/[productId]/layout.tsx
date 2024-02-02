export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
        <h1>Featured Products</h1>
      </>
    )
  }
  