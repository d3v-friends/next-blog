import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import css from "./index.module.scss";

interface Props {
    href?: string,
    isOpen: boolean,
    label: ReactNode,
    iconSrc: string,
    onClick?: Function
}

export default  function({ href, label, iconSrc, onClick, isOpen }: Props) {
    const labelItem = (
        <div>
            <Image src={iconSrc} alt={iconSrc} width={50} height={50} />
            {label}
        </div>
    );

    if (href) {
        return (
            <Link href={href}>
                {labelItem}
            </Link>
        );
    }

    if (!onClick) {
        return null;
    }

    return (
        <div onClick={() => onClick()}>
            {labelItem}
        </div>
    );
}
