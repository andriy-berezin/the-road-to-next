import Link from "next/link";

import { ticketPath } from "@/paths";

import initialData from "../../data";

const TicketsPage = () => {
  return (
    <>
    {initialData.map((ticket) => (
      <div key={ticket.id}>
        <h1 className="text-lg">{ticket.title}</h1>
        <Link href={ticketPath(ticket.id.toString())} className="underline text-sm">View ticket</Link>
      </div>
    ))}
    </>
  );
}
export default TicketsPage;