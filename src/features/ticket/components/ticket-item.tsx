import { Ticket } from "@prisma/client";
import clsx from "clsx";
import { CircleCheck, FileText, LucideSquareArrowOutUpRight, LucideTrash, Pencil } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/paths";

import { deleteTicket } from "../actions/delete-ticket";


type TicketItemProps = {
    ticket: Ticket,
    isDetail?: boolean;
};

const TICKET_ICONS = {
    OPEN: <FileText />,
    IN_PROGRESS: <Pencil />,
    DONE: <CircleCheck />,
};
const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Button asChild variant="outline" size="icon">
            <Link href={ticketPath(ticket.id)}>
                <LucideSquareArrowOutUpRight className="h-4 w-4" />
            </Link>
        </Button>
    )

    const deleteButton = (
        <form action={deleteTicket.bind(null, ticket.id)} >
            <Button variant="outline" size="icon">
                <LucideTrash className="h-4 w-4" />
            </Button>
        </form>
    )

    return (
        <div className={clsx("w-full flex gap-x-1", {
            "max-w-[420px]": !isDetail,
            "max-w-[640px]": isDetail
        })}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle className='flex gap-x-2'>
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span className="truncate">{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className={clsx("whitespace-break-spaces", {
                        "line-clamp-3": !isDetail,
                    })}>{ticket.content}</p>
                </CardContent>
            </Card>
            {!isDetail && <div className="flex flex-col gap-y-1">
                {detailButton}
            </div>}
            {deleteButton}
        </div>
    )
};

export default TicketItem;

