import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
    label: string;
    icon?: React.ReactElement;
    button?: React.ReactNode;
};

const Placeholder = ({ label, icon = <LucideMessageSquareWarning />, button = null }: PlaceholderProps) => {
    return <div className="flex-1 flex flex-col items-center justify-center gap-y-2">
        {cloneElement(icon)}
        <h2>{label}</h2>
        {button}
    </div>;
}

export { Placeholder };