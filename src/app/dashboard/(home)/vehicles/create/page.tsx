import React, { type FC } from "react";
import FormVehicle from "../components/form-vehicle";

const CreateVehiclePage: FC = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Tambah data Kendaraan</div>
      </div>

      <FormVehicle type="ADD" />
    </div>
  );
};

export default CreateVehiclePage;
