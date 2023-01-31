// import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        {/* <Image
          src={"images/logo_black.png"}
          alt={"logo"}
          width={100}
          height={100}
        /> */}
        <nav>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About us</Link>
        </nav>
      </div>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
    </header>
  );
}
