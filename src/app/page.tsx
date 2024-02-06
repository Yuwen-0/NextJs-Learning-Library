import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>
    </div>
  );
};

export default Home;
