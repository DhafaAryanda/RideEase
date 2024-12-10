import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./components/columns-table";
import { getVehicles } from "./lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Vehicles",
};

export default async function VehiclePage() {
  const vehicles = await getVehicles();

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Vehicles</div>
        <Button asChild>
          <Link href={"/dashboard/vehicles/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={vehicles} />
    </>
  );
}
