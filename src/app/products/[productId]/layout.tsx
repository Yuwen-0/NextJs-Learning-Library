export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const num = Math.floor(Math.random() * 5);
  if (num == 1) {
    throw new Error("error");
  }
  return (
    <>
      {children}
      <h1>Featured Products</h1>
    </>
  );
}
