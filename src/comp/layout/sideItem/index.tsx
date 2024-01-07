import { animated, SpringValue, useSpring } from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import css from "./index.module.scss";
import { fnCss } from "@fn-nextjs";

export interface SideItemData {
    label: string;
    imgSrc: string;
    href: string;
    width: number;
    minWidth: number;
    leftSpaceWidth: SpringValue<number>;
    rightLabelWidth: SpringValue<number>;
}

// --transparent-button-color: transparent;
// --transparent-button-active-color: #5a626d;

const buttonBg = {
    show: "rgba(90,98,109,1)",
    hide: "rgba(90,98,109,0)",
};

export default function({ href, width, minWidth, label, imgSrc, leftSpaceWidth, rightLabelWidth }: SideItemData) {
    const pathname = usePathname();
    const [style, api] = useSpring(() => ({
        from: {
            buttonBg: pathname.startsWith(href) ? buttonBg.show : buttonBg.hide,
        },
    }));

    useEffect(() => {
        if (pathname.startsWith(href)) {
            api.start({
                buttonBg: buttonBg.show,
            });
        } else {
            api.start({
                buttonBg: buttonBg.hide,
            });
        }

    }, [pathname]);

    return (
        <Link
            href={href}
            style={{ width: width }}
            className={fnCss.merge(css["cont"])}>
            <animated.div
                style={{ width: leftSpaceWidth }} />
            <animated.div
                className={fnCss.merge(css["icon"])}
                style={{ width: minWidth }}>
                <animated.div
                    style={{ backgroundColor: style.buttonBg }}
                    className={fnCss.merge(css["bg-img"])}>
                    <Image
                        className={fnCss.merge("no-drag")}
                        src={imgSrc}
                        alt={label}
                        width={25}
                        height={25} />
                </animated.div>

            </animated.div>
            <animated.div
                style={{ width: rightLabelWidth }}
                className={fnCss.merge(css["label"])}>
                {label}
            </animated.div>
        </Link>
    );
}
