import { ReactElement } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Head from "next/head";
import styles from "@/styles/Layout.module.scss";

type Props = {
  children: ReactElement | ReactElement[];
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Event App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
