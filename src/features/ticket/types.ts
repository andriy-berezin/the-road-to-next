export type Ticket = {
    id: number;
    status: TicketStatus;
    title: string;
    content: string;
}

export type TicketStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE'