import { AllEvents } from "helpers/types";
import Image from "next/image";
import styles from "@/styles/Events.module.scss";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/router";

type Props = {
  data: AllEvents;
};

export default function Event({ data }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !router) return;
    const emailValue = inputRef.current.value;
    const eventId = router.query.id;

    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.event}>
      <Image src={data.image} alt={data.title} width={800} height={500} />
      <h1>{data.title}</h1>
      <p>{data.description} </p>
      <form onSubmit={onSubmit} className={styles.emailform}>
        <label htmlFor="email-input">Get registred for this event</label>
        <input
          ref={inputRef}
          required
          placeholder="Please insert email..."
          id="email-input"
          type="email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
