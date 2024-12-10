"use client";
import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import type { Vehicle, Journey, Seat } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ColumnRouteFlight from "./column-route-journey";
import ColumnSeatPrice from "./column-seatprice";
import DeleteJourney from "./delete-journey";

export type JourneyColumn = Journey & {
  vehicle: Vehicle;
  seats: Seat[];
};

export const columns: ColumnDef<JourneyColumn>[] = [
  {
    accessorKey: "vehicleId",
    header: "Kendaraan",
    cell: ({ row }) => {
      const journey = row.original;
      const vehicleImageUrl = getUrlFile(journey.vehicle.image);
      return (
        <div className="inline-flex items-center gap-5">
          <Image
            src={vehicleImageUrl}
            width={120}
            height={120}
            alt="Image Vehicle"
            className="rounded-xl"
          />
          <div className="font-bold">{journey.vehicle.name}</div>
        </div>
      );
    },
  },
  {
    accessorKey: "departureCity",
    header: "Rute",
    cell: ({ row }) => {
      const journey = row.original;

      return <ColumnRouteFlight journey={journey} />;
    },
  },
  {
    accessorKey: "price",
    header: "Harga / Kursi",
    cell: ({ row }) => {
      const journey = row.original;

      return <ColumnSeatPrice journey={journey} />;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const journey = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/journeys/edit/${journey.id}`}>
              <Pencil className="mr-2 w-4 h-4" /> Edit
            </Link>
          </Button>
          <DeleteJourney id={journey.id} />
        </div>
      );
    },
  },
];
