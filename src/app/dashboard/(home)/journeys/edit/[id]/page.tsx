import type { Metadata } from "next";
import React, { type FC } from "react";
import { getVehicles } from "../../../vehicles/lib/data";
import FormJourney from "../../components/form-journey";
import { getJourneyById } from "../../lib/data";

type Params = {
  id: string;
};

interface EditJourneyPageProps {
  params: Params;
}

export const metadata: Metadata = {
  title: "Dashboard | Edit Data Journey",
};

const EditJourneyPage: FC<EditJourneyPageProps> = async ({ params }) => {
  const vehicles = await getVehicles();
  const journey = await getJourneyById(params.id);

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit data Journey</div>
      </div>

      <FormJourney type="EDIT" vehicles={vehicles} defaultValues={journey} />
    </div>
  );
};

export default EditJourneyPage;
