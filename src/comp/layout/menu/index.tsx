import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export default function({ children }: Props) {
    return <menu>{children}</menu>;
}
