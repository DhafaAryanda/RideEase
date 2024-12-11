import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavbarAuth from "./navbar-auth";
import { Flame, Search, Package, BookOpen, Info } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      id="Navbar"
      className="container max-w-[1130px] mx-auto flex justify-between items-center pt-[30px] px-4"
    >
      <Link
        href="/"
        className="flex items-center shrink-0 hover:scale-105 transition-all duration-300"
      >
        <Image
          width={120}
          height={60}
          src="/assets/images/logos/logo-white.svg"
          alt="logo"
          className="drop-shadow-lg"
        />
      </Link>
      <ul className="nav-menus flex gap-[30px] items-center w-fit">
        <li>
          <Link
            href=""
            className="font-medium hover:text-rideease-light-purple hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            <Flame className="w-4 h-4 text-red-500" />
            Flash Sale
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="font-medium hover:text-rideease-light-purple hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            <Search className="w-4 h-4" />
            Discover
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="font-medium hover:text-rideease-light-purple hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            <Package className="w-4 h-4" />
            Packages
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="font-medium hover:text-rideease-light-purple hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Stories
          </Link>
        </li>
        <li>
          <Link
            href=""
            className="font-medium hover:text-rideease-light-purple hover:scale-110 transition-all duration-300 flex items-center gap-2"
          >
            <Info className="w-4 h-4" />
            About
          </Link>
        </li>
        <NavbarAuth />
      </ul>
    </nav>
  );
}
