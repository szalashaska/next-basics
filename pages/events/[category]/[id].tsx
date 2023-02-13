import Event from "@/compontents/Events/Event";
import { AllEvents } from "helpers/types";
import { GetStaticPropsContext } from "next";

type Props = {
  data: AllEvents;
};

export default function EventPage({ data }: Props) {
  return <Event data={data} />;
}

export async function getStaticPaths() {
  const data = await import("data/data.json");
  const { allEvents } = data;

  const allPaths = allEvents.map((event) => ({
    params: {
      category: event.city,
      id: event.id,
    },
  }));

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context?.params?.id;
  const data = await import("data/data.json");
  const { allEvents } = data;

  const eventData = allEvents.find((event) => event.id === id);

  return {
    props: { data: eventData },
  };
}

// {
//   params: { category: 'london', id: "'edtech-world-summit-2022" },
//   locales: undefined,
//   locale: undefined,
//   defaultLocale: undefined
// }
