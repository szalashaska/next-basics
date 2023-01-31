import { Inter } from "@next/font/google";
import { EventCategories } from "helpers/types";
import Home from "@/compontents/Home/Home";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  data: EventCategories[];
};

export default function HomePage({ data }: Props) {
  return (
    <>
      <Home data={data} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await import("data/data.json");
  const { events_categories } = data;

  return {
    props: {
      data: events_categories,
    },
  };
}
