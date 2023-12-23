import { ReactNode } from "react";
import css from "./index.module.scss";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return <div className={css.cont}>{children}</div>;
}
