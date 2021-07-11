import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </>
  );
}

export default Home;
