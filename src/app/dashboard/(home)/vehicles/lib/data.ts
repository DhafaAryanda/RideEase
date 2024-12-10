"use server";

import prisma from "../../../../../../lib/prisma";

export async function getVehicles() {
  try {
    const vehicles = await prisma.vehicle.findMany({});

    return vehicles;
  } catch (error) {
    console.log("Database error: ", error);
    return [];
  }
}
