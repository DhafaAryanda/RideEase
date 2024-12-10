import { dateFormat } from "@/lib/utils";
import type { Journey } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import React, { type FC } from "react";

interface ColumnRouteJourneyProps {
  journey: Journey;
}

const ColumnRouteJourney: FC<ColumnRouteJourneyProps> = ({ journey }) => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <div className="text-center">
        <div className="font-bold">{journey.departureCityCode}</div>
        <div className="font-medium">{journey.departureCity}</div>
        <div className="font-xs text-gray-500">
          {dateFormat(journey.departureDate)}
        </div>
      </div>
      <ArrowRight className="h-5 w-5" />
      <div className="text-center">
        <div className="font-bold">{journey.destinationCityCode}</div>
        <div className="font-medium">{journey.destinationCity}</div>
        <div className="font-xs text-gray-500">
          {dateFormat(journey.arrivalDate)}
        </div>
      </div>
    </div>
  );
};

export default ColumnRouteJourney;
