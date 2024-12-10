"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import React, { type FC } from "react";
import { useFormStatus } from "react-dom";
import { deleteJourney } from "../lib/actions";

interface DeleteJourneyProps {
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

const DeleteJourney: FC<DeleteJourneyProps> = ({ id }) => {
  const deleteJourneyWithId = deleteJourney.bind(null, id);
  return (
    <form action={deleteJourneyWithId}>
      <SubmitButton />
    </form>
  );
};

export default DeleteJourney;
