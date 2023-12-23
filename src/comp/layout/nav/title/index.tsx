import { ReactNode } from "react";
import {} from "fn/css";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return <div
        className="padding-rem-50per display-flex justify-content-center align-item-center height-100per background-color-normal color-background">{children}</div>;
}
