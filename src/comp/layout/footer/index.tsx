import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return <footer>{children}</footer>;
}
