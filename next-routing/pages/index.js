import Link from "next/link";
import router from "next/router";

function Home() {
  const handleClick = () => {
    console.log("Placing Your Order");
    router.push("/product");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
