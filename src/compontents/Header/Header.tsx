import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topNav}>
        <Image
          src={"/images/logo_black.png"}
          alt={"logo"}
          width={100}
          height={100}
        />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur</h1>
      </div>
    </header>
  );
}
