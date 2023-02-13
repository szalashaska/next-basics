import Image from "next/image";
import Link from "next/link";
import { AllEvents } from "helpers/types";
import styles from "@/styles/Events.module.scss";

type Props = {
  data: AllEvents[];
  eventId: string;
};

export default function EventsCategory({ data, eventId }: Props) {
  return (
    <div className={styles.category}>
      <h1>Events in {eventId}</h1>
      <div className={styles.content}>
        {data.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            className={styles.card}
          >
            <Image
              src={event.image}
              width={300}
              height={300}
              alt={event.title}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
