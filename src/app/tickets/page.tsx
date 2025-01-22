import { Heading } from "@/components/heading";
import TicketItem from "@/features/ticket/components/ticket-item";

import initialData from "../../data";

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets Page" description="All your tickets at one place" />
      <div className="flex-1 flex flex-col items-center gap-y-4 animate-fade-from-top">
        {initialData.map((ticket) => (
          <TicketItem key={ticket.id} ticket={ticket} />
        ))}
      </div>

    </div>
  );
}
export default TicketsPage;