import { ReactNode } from "react";
import Nav from "./nav";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return (
        <>
            <Nav></Nav>
            <main>{children}</main>

        </>
    );
}
