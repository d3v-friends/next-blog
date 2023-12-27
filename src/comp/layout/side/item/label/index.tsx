import svg from "@comp/svg";
import fnCss from "@scss/index";
import Image from "next/image";
import Link from "next/link";
import {ReactNode} from "react";
import css from "./index.module.scss";

interface Props {
    href?: string,
    isOpen: boolean,
    hasSub: boolean,
    label: ReactNode,
    iconSrc: string,
    onClick?: Function
}

export default function ({href, label, iconSrc, onClick, isOpen, hasSub}: Props) {
    const labelItem = (
        <div className={fnCss.merge(css.cont)}>
            <Image className={css.img} src={iconSrc} alt={iconSrc} width={30} height={30}/>
            <div className={css.label}>{label}</div>
            {hasSub && <div className={css.check}>
                {isOpen && <Image className={fnCss.merge(css["check-up"], css.caret)} src="/asset/svg/abocado/caret-up.svg" width={20} height={20} alt="open"/>}
                {!isOpen && <Image className={fnCss.merge(css["check-up"], css.caret, "opacity-30p")} src="/asset/svg/white/caret-down.svg" width={20} height={20} alt="close"/>}
            </div>}
        </div>
    );

    if (href) {
        return (
            <Link className={fnCss.merge("height-100p")} href={href}>
                {labelItem}
            </Link>
        );
    }

    if (!onClick) {
        return null;
    }

    return (
        <div className={fnCss.merge("height-100p", "no-drag")} onClick={() => onClick!()}>
            {labelItem}
        </div>
    );
}
