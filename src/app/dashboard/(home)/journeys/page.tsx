import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import React, { FC } from "react";
import { columns } from "./components/column-journey";
import { getJourneys } from "./lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Journeys",
};

const JourneyPage: FC = async () => {
  const data = await getJourneys();
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Journeys</div>
        <Button asChild>
          <Link href={"/dashboard/journeys/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
};

export default JourneyPage;
