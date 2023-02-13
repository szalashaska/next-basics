// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
import { EventsCategories, AllEvents } from "../../helpers/types";

const validRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

type Data = {
  message: string;
};

type DatabaseType = {
  allEvents: AllEvents[];
  events_categories: EventsCategories[];
};

function buildPath(): string {
  // Build path with current Working Directory
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath: string): DatabaseType {
  // Load file and parse it as object. readFileSync returns Buffer and need to be converted
  const jsonData = fs.readFileSync(filePath).toString();
  return JSON.parse(jsonData);
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;
  const filePath: string = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents)
    return res.status(404).json({
      message: "Events data not found.",
    });

  if (method === "POST") {
    const { emailAddress, eventId } = req.body;
    if (!emailAddress || !emailAddress.match(validRegex))
      return res.status(422).json({
        message: "Invalid email address.",
      });

    let error = false;
    allEvents.forEach((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(emailAddress)) {
          res.status(409).json({
            message: `Email address ${emailAddress} is already subscribed to this event.`,
          });
          error = true;
        }
        event.emails_registered = [...event.emails_registered, emailAddress];
      }
    });

    if (error) return;

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents })
    );

    res.status(200).json({
      message: `Registration with address: ${emailAddress} to event: ${eventId} went successfull.`,
    });
  }
}
