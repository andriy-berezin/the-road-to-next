import Link from "next/link";
import React from "react";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import initialData from "@/data";
import TicketItem from "@/features/ticket/components/ticket-item";
import { ticketsPath } from "@/paths";
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = ({ params }: TicketPageProps) => {
  const { ticketId } = React.use(params)
  const ticket = initialData.find((ticket) => ticket.id === Number(ticketId));

  if (!ticket) {
    return <Placeholder label="Ticket not found" button={
      <Button><Link href={ticketsPath()}>Go to Tickets</Link></Button>
    } />;
  }

  return (
    <div className="flex justify-center animate-fade-from-top">
      <TicketItem ticket={ticket} isDetail />
    </div>
  );
}
export default TicketPage;