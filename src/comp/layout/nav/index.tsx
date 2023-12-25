import fnCss from "@scss/index";
import { ReactNode } from "react";
import css from "./index.module.scss";

interface Props {
    items: NavItem[],
}

export interface NavItem {
    iconSrc: string;
    href: string;
    label: string;
}

export default function({ items }: Props) {
    return items.map((v, i) => (
        <div className={fnCss.merge("no-drag")} key={i}>{v.label}</div>
    ));
}
