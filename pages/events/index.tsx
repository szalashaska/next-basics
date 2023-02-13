import Events from "@/compontents/Events/Events";
import { EventsCategories } from "helpers/types";

type Props = {
  data: EventsCategories[];
};

export default function EventsPage({ data }: Props) {
  return <Events data={data} />;
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
