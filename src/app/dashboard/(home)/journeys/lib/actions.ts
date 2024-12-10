"use server";

import { redirect } from "next/navigation";
import { formJourneySchema } from "./validation";
import prisma from "../../../../../../lib/prisma";
import { generateSeatPerClass } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/app/dashboard/(auth)/signin/lib/actions";

export async function saveJourney(
  prevState: unknown,
  formData: FormData
): Promise<ActionResult> {
  const departureDate = new Date(formData.get("departureDate") as string);
  const arrivalDate = new Date(formData.get("arrivalDate") as string);

  const validate = formJourneySchema.safeParse({
    vehicleId: formData.get("vehicleId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate,
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate,
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  const data = await prisma.journey.create({
    data: {
      ...validate.data,
      price: Number.parseInt(validate.data.price),
    },
  });

  const seats = generateSeatPerClass(data.id);

  await prisma.seat.createMany({
    data: seats,
  });

  revalidatePath("/dashboard/journeys");

  redirect("/dashboard/journeys");
}

export async function updateJourney(
  prevState: unknown,
  id: string,
  formData: FormData
): Promise<ActionResult> {
  const departureDate = new Date(formData.get("departureDate") as string);
  const arrivalDate = new Date(formData.get("arrivalDate") as string);

  const validate = formJourneySchema.safeParse({
    vehicleId: formData.get("vehicleId"),
    price: formData.get("price"),
    departureCity: formData.get("departureCity"),
    departureDate,
    departureCityCode: formData.get("departureCityCode"),
    destinationCity: formData.get("destinationCity"),
    destinationCityCode: formData.get("destinationCityCode"),
    arrivalDate,
  });

  if (!validate.success) {
    const errorDesc = validate.error.issues.map((issue) => issue.message);

    return {
      errorTitle: "Error Validation",
      errorDesc,
    };
  }

  await prisma.journey.update({
    where: {
      id: id,
    },
    data: {
      ...validate.data,
      price: Number.parseInt(validate.data.price),
    },
  });

  revalidatePath("/dashboard/journeys");
  redirect("/dashboard/journeys");
}

export async function deleteJourney(id: string) {
  try {
    await prisma.seat.deleteMany({ where: { journeyId: id } });
    await prisma.journey.delete({ where: { id: id } });
  } catch (error) {
    console.log(error);
  }

  revalidatePath("/dashboard/journeys");
  redirect("/dashboard/journeys");
}
