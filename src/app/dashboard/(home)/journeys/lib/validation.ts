import { z } from "zod";

export const formJourneySchema = z.object({
  vehicleId: z.string({ required_error: "Kendaraan tidak boleh kosong" }),
  price: z.string({ required_error: "Harga tiket tidak boleh kosong" }),
  departureCity: z.string({
    required_error: "Kota keberangkatan tidak boleh kosong",
  }),
  departureDate: z.date(),
  departureCityCode: z
    .string({ required_error: "Kode kota keberangkatan tidak boleh kosong" })
    .min(3, { message: "Kode kota keberangkatan minimal 3 karakter" })
    .max(3, { message: "Kode kota keberangkatan maksimal 3 karakter" }),
  destinationCity: z.string({
    required_error: "Kota tujuan tidak boleh kosong",
  }),
  arrivalDate: z.date(),
  destinationCityCode: z
    .string({ required_error: "Kode kota tujuan tidak boleh kosong" })
    .min(3, { message: "Kode kota tujuan minimal 3 karakter" })
    .max(3, { message: "Kode kota tujuan maksimal 3 karakter" }),
});
