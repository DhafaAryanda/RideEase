"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { type FC } from "react";
import { useFormState } from "react-dom";
import { saveVehicle, updateVehicle } from "../lib/action";
import type { Vehicle } from "@prisma/client";
import SubmitFormButton from "../../components/submit-form-button";
import { ActionResult } from "@/app/dashboard/(auth)/signin/lib/actions";

interface FormVehicleProps {
  type?: "ADD" | "EDIT";
  defaultValues?: Vehicle | null;
}

const initialFormState: ActionResult = {
  errorTitle: null,
  errorDesc: [],
};

const FormVehicle: FC<FormVehicleProps> = ({ type, defaultValues }) => {
  const updateVehicleWithId = (_state: ActionResult, formData: FormData) =>
    updateVehicle(null, defaultValues?.id!!, formData);

  const [state, formAction] = useFormState(
    type === "ADD" ? saveVehicle : updateVehicleWithId,
    initialFormState
  );

  return (
    <form action={formAction} className="w-[40%] space-y-4">
      {state.errorTitle !== null && (
        <div className="mx-auto my-7 bg-red-500 w-[400px] p-4 rounded-lg text-white ">
          <div className="font-bold mb-4">{state.errorTitle}</div>
          <ul className="list-disc list-inside">
            {state.errorDesc?.map((value, index) => (
              <li key={index + value}>{value}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="code">Kode Kendaraan</Label>
        <Input
          placeholder="Kode kendaraan..."
          name="code"
          id="code"
          defaultValue={defaultValues?.code}
          required
        ></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Nama Kendaraan</Label>
        <Input
          placeholder="Nama kendaraan..."
          name="name"
          id="name"
          defaultValue={defaultValues?.name}
          required
        ></Input>
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Upload Foto</Label>
        <Input
          type="file"
          placeholder="Upload foto kendaraan..."
          name="image"
          id="image"
          defaultValue={defaultValues?.image}
          required
        ></Input>
      </div>
      <SubmitFormButton />
    </form>
  );
};

export default FormVehicle;
