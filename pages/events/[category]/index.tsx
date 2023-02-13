import { GetStaticPropsContext } from "next";
import { AllEvents } from "helpers/types";
import EventsCategory from "@/compontents/Events/EventsCategory";

type Props = {
  data: AllEvents[];
  eventId: string;
};

export default function CategoryPage({ data, eventId }: Props) {
  return <EventsCategory data={data} eventId={eventId} />;
}

export async function getStaticPaths() {
  const data = await import("data/data.json");
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
  const data = await import("data/data.json");
  const { allEvents } = data;
  const currentData = allEvents.filter((event) => event.city === id);

  return {
    props: {
      data: currentData,
      eventId: id,
    },
  };
}
