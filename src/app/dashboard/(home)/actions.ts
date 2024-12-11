"use server";

import { getUser, lucia } from "@/lib/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// Tipe untuk hasil action
type ActionResult = {
  success?: boolean;
  error?: {
    title: string;
    messages: string[];
  };
};

export async function logout(): Promise<ActionResult | never> {
  try {
    // Dapatkan user session
    const { session } = await getUser();

    // Cek jika tidak ada session
    if (!session) {
      return {
        success: false,
        error: {
          title: "Error",
          messages: ["Sesi tidak ditemukan"],
        },
      };
    }

    // Invalidate session yang ada
    await lucia.invalidateSession(session.id);

    // Buat cookie kosong
    const sessionCookie = lucia.createBlankSessionCookie();

    // Set cookie baru
    const cookieStore = await cookies();
    cookieStore.set(sessionCookie.name, sessionCookie.value, {
      ...sessionCookie.attributes,
      // Tambahkan secure flag untuk production
      secure: process.env.NODE_ENV === "production",
      // Tambahkan httpOnly untuk keamanan
      httpOnly: true,
    });

    // Redirect ke halaman signin
    redirect("/dashboard/signin");
  } catch (error) {
    console.log("🚀 ~ logout ~ error:", error);
    // Handle error
    return {
      success: false,
      error: {
        title: "Error",
        messages: ["Terjadi kesalahan saat logout"],
      },
    };
  }
}
