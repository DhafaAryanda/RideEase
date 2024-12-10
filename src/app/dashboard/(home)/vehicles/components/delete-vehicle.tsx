"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { type FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteVehicle } from "../lib/action";

interface DeleteVehicleProps {
  id: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button size="sm" type="submit" disabled={pending} variant={"destructive"}>
      <Trash className="mr-2 h-4 w-4 " /> Hapus
    </Button>
  );
}

const DeleteVehicle: FC<DeleteVehicleProps> = ({ id }) => {
  const deleteVehicleWithId = deleteVehicle.bind(null, id);
  return (
    <form action={deleteVehicleWithId}>
      <SubmitButton />
    </form>
  );
};

export default DeleteVehicle;
