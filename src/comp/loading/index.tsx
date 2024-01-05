import { ReactNode } from "react";
import css from "./index.module.scss";

interface Props {
    pending: boolean;
    children?: ReactNode;
}

export default async function({ pending, children }: Props) {
    return <>{children}</>;
}
