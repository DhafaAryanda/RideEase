import React, { useMemo, type FC } from "react";
import type { JourneyColumn } from "./column-journey";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { mappingSeats, rupiahFormat } from "@/lib/utils";

interface ColumnSeatPriceProps {
  journey: JourneyColumn;
}

const ColumnSeatPrice: FC<ColumnSeatPriceProps> = ({ journey }) => {
  const { bookedSeats, totalSeats } = useMemo(
    () => mappingSeats(journey.seats),
    [journey]
  );

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="w-full">
        <AccordionTrigger>Kursi Tersedia</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <div className="font-medium">
              <span className="text-primary">Harga tiket:</span>{" "}
              {rupiahFormat(journey.price)}
            </div>
            <div className="font-medium">
              <span className="text-primary">Sisa kursi:</span>{" "}
              {totalSeats - bookedSeats}/{totalSeats}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColumnSeatPrice;
