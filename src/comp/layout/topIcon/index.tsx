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
        <Link
            className={fnCss.merge(css["cont"])}
            href={href}>
            <Image
                className={fnCss.merge(css["img"], css["gray-filter"])}
                src={imgSrc}
                alt={label}
                width={30}
                height={30} />
        </Link>
    );
}
