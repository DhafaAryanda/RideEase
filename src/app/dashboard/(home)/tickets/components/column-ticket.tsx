"use client";

import type { Journey, Seat, Ticket, User } from "@prisma/client";
import type { ColumnDef } from "@tanstack/react-table";
import ColumnRouteFlight from "../../journeys/components/column-route-journey";
import { Badge } from "lucide-react";
import { cn } from "@/lib/utils";

type TicketType = Ticket & {
  journey: Journey;
  customer: User;
  seat: Seat;
};
export const columns: ColumnDef<TicketType>[] = [
  {
    accessorKey: "customerId",
    header: "Nama Penumpang",
    cell: ({ row }) => {
      const ticket = row.original;

      return ticket.customer.name;
    },
  },
  {
    accessorKey: "journeyId",
    header: "Detail Perjalanan",
    cell: ({ row }) => {
      const ticket = row.original;

      return <ColumnRouteFlight journey={ticket.journey} />;
    },
  },
  {
    accessorKey: "seatId",
    header: "Nomor Kursi",
    cell: ({ row }) => {
      const ticket = row.original;

      return <Badge>{ticket.seat.seatNumber}</Badge>;
    },
  },
  {
    id: "status_transaction",
    header: "Status Transaksi",
    cell: ({ row }) => {
      const ticket = row.original;

      return (
        <div className="space-y-1">
          <Badge
            className={cn(
              ticket.status === "SUCCESS"
                ? "bg-green-500"
                : ticket.status === "PENDING"
                ? "bg-yellow-500"
                : "bg-red-500"
            )}
          ></Badge>
        </div>
      );
    },
  },
];
