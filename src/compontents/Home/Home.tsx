import { EventCategories } from "helpers/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

type Props = {
  data: EventCategories[];
};

export default function Home({ data }: Props) {
  return (
    <div className={styles.home}>
      {data.map((event) => (
        <Link
          className={styles.card}
          key={event.id}
          href={`/events/${event.id}`}
        >
          <div className={styles.image}>
            <Image src={event.image} alt={event.title} fill />
          </div>
          <div className={styles.content}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
