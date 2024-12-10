import type { Vehicle, Journey, Seat } from "@prisma/client";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export const CHECKOUT_KEY = "CHECKOUT_KEY";

export type Checkout = {
  id?: string;
  journeyDetail?: Journey & { vehicle: Vehicle };
  seatDetail?: Seat;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateSeatPerClass = (journeyId: string) => {
  const SEAT_CODE = ["A", "B", "C", "D"];

  const seats: { seatNumber: string; journeyId: string }[] = [];

  for (const seat of SEAT_CODE) {
    for (let i = 1; i <= 5; i++) {
      seats.push({
        seatNumber: seat + i,
        journeyId,
      });
    }
  }

  return seats;
};

export const dateFormat = (
  date: Date | string,
  format = "DD MMM YYYY HH:mm"
) => {
  if (!date) {
    return "-";
  }

  const dateformat = dayjs(date).format(format);

  return dateformat;
};

export const rupiahFormat = (value: number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
};

export const objectToParams = (obj: { [key: string]: unknown }) => {
  const queryParams = Object.keys(obj)
    .map((key) => {
      if (obj[key] !== null) {
        return `${key}=${obj[key]}`;
      }
      return "";
    })
    .filter((key) => key !== "")
    .join("&");
  return queryParams;
};

export const mappingSeats = (seats: Seat[]) => {
  const totalSeats = seats.length;
  const bookedSeats = seats.filter((item) => item.isBooked).length;

  return {
    bookedSeats,
    totalSeats,
  };
};

export function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

console.log(makeid(5));
