import React from "react";

import initialData from "@/data";
type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = ({params}: TicketPageProps) => {
const {ticketId} = React.use(params)
const ticket = initialData.find((ticket) => ticket.id === Number(ticketId));

  return (
    <div>
      <h1 className="text-lg">{ticket?.title}</h1>
      <p>{ticket?.content}</p>
    </div>
  );
}
export default TicketPage;