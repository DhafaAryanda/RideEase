"use server";

import prisma from "../../../../../../lib/prisma";

export const getJourneys = async () => {
  try {
    const journeys = await prisma.journey.findMany({
      include: {
        vehicle: true,
        seats: true,
      },
    });

    return journeys;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getJourneyById = async (id: string) => {
  try {
    const journey = await prisma.journey.findFirst({
      where: {
        id: id,
      },
    });
    return journey;
  } catch (error) {
    console.error(error);
    return null;
  }
};
