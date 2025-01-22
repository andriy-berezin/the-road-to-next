import React from 'react'

type HeadingProps = {
    title: string;
    description: string;
}

import { Separator } from './ui/separator'

const Heading = ({ title, description }: HeadingProps) => {
    return (
        <>
            <div className='px-8'>
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                <p className="text-sm text-muted-foreground">
                    {description}
                </p>
            </div>
            <Separator />
        </>
    )
}

export { Heading }