import { ReactNode } from "react";
import css from "./index.module.scss";
import Item from "./item";


interface Props {
    items: SideItem[],
}

export interface SideItem {
    label: ReactNode;
    elem?: ReactNode;
    iconSrc: string | any;
    href?: string;
    sub?: SideItem[];
}

export default async function({ items }: Props) {
    return items.map((v, i) => (<div key={i}><Item data={v} /></div>));
}
