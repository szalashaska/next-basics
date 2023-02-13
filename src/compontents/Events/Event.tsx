import { AllEvents } from "helpers/types";
import Image from "next/image";
import styles from "@/styles/Events.module.scss";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/router";

type Props = {
  data: AllEvents;
};
const validRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default function Event({ data }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [message, setMessage] = useState<string>("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage("");
    if (!inputRef.current || !router) return;
    const emailAddress = inputRef.current.value;
    const eventId = router.query.id;

    if (!emailAddress.match(validRegex)) {
      setMessage("Enter a valid address");
      return;
    }
    try {
      const req = await fetch("/api/email-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailAddress,
          eventId,
        }),
      });
      if (!req.ok) throw new Error(`Error: ${req.status}`);
      const res = await req.json();
      setMessage(res.message);
      inputRef.current.value = "";
    } catch (err) {
      console.log("Error occured:", err);
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
      {message && <p>{message}</p>}
    </div>
  );
}
