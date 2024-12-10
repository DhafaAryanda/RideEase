import React, { type FC } from "react";
import FormVehicle from "../../components/form-vehicle";
import { getVehicleById } from "../../lib/action";

type Params = {
  id: string;
};

interface EditVehiclePageProps {
  params: Params;
}

const EditVehiclePage: FC<EditVehiclePageProps> = async ({ params }) => {
  const data = await getVehicleById(params.id);

  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Edit data Kendaraan</div>
      </div>

      <FormVehicle type="EDIT" defaultValues={data} />
    </div>
  );
};

export default EditVehiclePage;
