import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string({ required_error: "Nama tidak boleh kosong" })
    .min(4, { message: "Nama minimal 4 karakter" }),
  email: z
    .string({ required_error: "Email tidak boleh kosong" })
    .email({ message: "Email tidak valid" }),
  password: z
    .string({ required_error: "Password tidak boleh kosong" })
    .min(8, { message: "Password minimal 8 karakter" }),
});
