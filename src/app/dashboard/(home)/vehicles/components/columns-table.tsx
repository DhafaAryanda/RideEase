"use client";

import { Button } from "@/components/ui/button";
import { getUrlFile } from "@/lib/supabase";
import type { Vehicle } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteVehicle from "./delete-vehicle";

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <Image
          src={getUrlFile(plane.image)}
          alt="Image Airplane"
          width={140}
          height={140}
        />
      );
    },
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const vehicle = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/vehicles/edit/${vehicle.id}`}>
              <Pencil className="mr-2 w-4 h-4" /> Edit
            </Link>
          </Button>
          <DeleteVehicle id={vehicle.id} />
        </div>
      );
    },
  },
];
