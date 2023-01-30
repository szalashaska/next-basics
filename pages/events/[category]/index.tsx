import { AllEvents } from "helpers/types";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
type Props = {
  data: AllEvents[];
};

function Category({ data }: Props) {
  return (
    <div>
      {data.map((event) => (
        <a key={event.id} href={`/events/${event.city}/${event.id}`}>
          <Image src={event.image} width={100} height={100} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </a>
      ))}
    </div>
  );
}

export default Category;

export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const { events_categories } = data;

  const allPaths = events_categories.map((event) => ({
    params: {
      category: event.id.toString(),
    },
  }));

  return {
    paths: allPaths,
    // fallback: false prevents rendering page that is not defined in our data
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?.category;
  const data = await import("../../../data/data.json");
  const { allEvents } = data;
  const currentData = allEvents.filter((event) => event.city === id);

  return {
    props: {
      data: currentData,
    },
  };
}
