import { EventCategories } from "helpers/types";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Events.module.scss";

type Props = {
  data: EventCategories[];
};

export default function Events({ data }: Props) {
  return (
    <div className={styles.events}>
      {data.map((event) => (
        <Link
          className={styles.card}
          key={event.id}
          href={`/events/${event.id}`}
        >
          <Image src={event.image} width={500} height={500} alt={event.title} />
          <h2>{event.title}</h2>
        </Link>
      ))}
    </div>
  );
}
