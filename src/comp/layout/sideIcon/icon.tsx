import { fnCss } from "@fn-nextjs";
import Image from "next/image";
import css from "./index.module.scss";

interface Props {
    size: number;
    imgSrc: string;
    bgColor: string;
    label: string;
}

export default function({ size, imgSrc, bgColor, label }: Props) {
    return (
        <div
            style={{
                width: size,
                height: size,
            }}
            className={fnCss.merge(css["cont"])}>
            <div
                className={fnCss.merge(css["bg-cont"])}
                style={{
                    width: size - 20,
                    height: size - 20,
                    backgroundColor: bgColor,
                }}>
                <Image
                    className={fnCss.merge(css["img"], "no-drag")}
                    src={imgSrc} alt={label}
                    width={size}
                    height={size} />
            </div>

        </div>
    );
}
