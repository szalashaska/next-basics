import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { EventCategories } from "helpers/types";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  data: EventCategories[];
};

export default function Home({ data }: Props) {
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About us</a>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((event) => (
          <a key={event.id} href={`/events/${event.id}`}>
            <Image
              src={event.image}
              alt={event.title}
              width={200}
              height={200}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </a>
        ))}
      </main>

      <footer className={styles.footer}>
        <p> © 2023 Coding time - A Project Built with Next.js </p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const data = await import("../data/data.json");
  const { events_categories } = data;

  return {
    props: {
      data: events_categories,
    },
  };
}
