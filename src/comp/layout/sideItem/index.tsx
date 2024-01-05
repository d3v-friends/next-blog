import { ReactNode } from "react";
import css from "./index.module.scss";

interface Props {
    isShort: boolean;
    children?: ReactNode;
}

export default function({ children }: Props) {
    return <>{children}</>;
}
