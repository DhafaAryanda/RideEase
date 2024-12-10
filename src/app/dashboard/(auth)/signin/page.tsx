import { Metadata } from "next";
import React from "react";
import FormSignIn from "./components/FormSignIn";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};

const SignInPages = async () => {
  const { session, user } = await getUser();

  if (session && user.role === "ADMIN") {
    redirect("/dashboard");
  }

  return <FormSignIn />;
};

export default SignInPages;
