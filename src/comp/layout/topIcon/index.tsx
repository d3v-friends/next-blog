import { fnCss } from "@fn-nextjs";
import Image from "next/image";
import Link from "next/link";
import css from "./index.module.scss";

interface Props {
    href: string;
    imgSrc: string;
    label: string;
}

export default function({ href, label, imgSrc }: Props) {
    return (
        <Link className={fnCss.merge(css["cont"])} href={href}>
            <Image src={imgSrc} alt={label} width={50} height={50} />
            <div>{label}</div>
        </Link>
    );
}
