"use client";
import fnCss from "@scss/index";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import css from "./index.module.scss";

interface Props {
    items: NavItem[],
}

export interface NavItem {
    iconSrc: string | any;
    href: string;
    label: string;
}

export default function ({items}: Props) {
    const pathname = usePathname();
    const isActive = (href: string): boolean => {
        return pathname.startsWith(href);
    }
    return items.map((v, i) => (
        <Link href={v.href} key={i}>
            <div className={fnCss.merge(css["cont"], "no-drag")}>
                <Image className={fnCss.merge(css["img"],)} src={v.iconSrc} alt={v.label} width={50} height={50}/>
                <div className={fnCss.merge(css["label"], isActive(v.href) ? css["active"] : "")}>{v.label}</div>
            </div>
        </Link>
    ));
}
