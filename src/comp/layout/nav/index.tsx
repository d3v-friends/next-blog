import { ReactNode } from "react";
import Title from "./title";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return <nav>
        <Title>ABCD</Title>
        {children}</nav>;
}
