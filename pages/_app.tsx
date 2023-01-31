import MainLayout from "@/compontents/Layout/MainLayout";
import "@/styles/globals.css";
// import styles from "../src/styles/general.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
