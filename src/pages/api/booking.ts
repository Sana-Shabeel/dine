// create an endpoint that sends data to the database using the POST method and prisma
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, time, date, people } = req.body;
  const result = await prisma.booking.create({
    data: {
      name,
      email,
      time,
      date,
      people,
    },
  });

  res.status(201).json({ message: "Booking created", result });
}
