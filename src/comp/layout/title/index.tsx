import { ReactNode } from "react";
import css from "./index.module.scss";
import Link from "next/link";

interface Props {
    children?: ReactNode;
}

export default function({ children }: Props) {
    return (
        <Link href="/" className={css.cont}>
            <div className={css.box}>NB</div>
            <div className={css.title}>{children}</div>
        </Link>
    );
}
