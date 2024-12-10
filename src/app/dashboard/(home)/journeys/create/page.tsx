import type { Metadata } from "next";
import React, { type FC } from "react";
import FormJourney from "../components/form-journey";
import { getVehicles } from "../../vehicles/lib/data";

export const metadata: Metadata = {
  title: "Dashboard | Create Data Flight",
};

const CreateFlightPage: FC = async () => {
  const vehicles = await getVehicles();

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah data Flight</div>
      </div>

      <FormJourney type="ADD" vehicles={vehicles} />
    </div>
  );
};

export default CreateFlightPage;
