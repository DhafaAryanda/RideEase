"use server";

import prisma from "../../../../lib/prisma";

export const getCityFilter = async () => {
  try {
    const data = await prisma.journey.groupBy({
      by: ["departureCity", "destinationCity"],
      where: {
        departureDate: {
          gt: new Date(),
        },
      },
      _count: {
        departureCity: true,
        destinationCity: true,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getVehicles = async () => {
  try {
    const data = await prisma.vehicle.findMany({
      where: {
        journeys: {
          every: {
            id: undefined,
          },
        },
      },
    });

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getJourneyById = async (id: string) => {
  try {
    const data = await prisma.journey.findFirst({
      where: {
        id: id,
      },
      include: {
        seats: {
          orderBy: {
            seatNumber: "asc",
          },
        },
        vehicle: true,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
