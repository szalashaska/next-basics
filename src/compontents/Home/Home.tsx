import { EventCategories } from "helpers/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: EventCategories[];
};

export default function Home({ data }: Props) {
  return (
    <main>
      {data.map((event) => (
        <Link key={event.id} href={`/events/${event.id}`}>
          <Image src={event.image} alt={event.title} width={200} height={200} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </main>
  );
}
