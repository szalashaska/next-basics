import { EventCategories } from "helpers/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: EventCategories[];
};

export default function EventsPage({ data }: Props) {
  return (
    <div>
      <h1> Events </h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image
              src={event.image}
              width={100}
              height={100}
              alt={event.title}
            />
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await import("data/data.json");
  const { events_categories } = data;

  return {
    props: {
      data: events_categories,
    },
  };
}
