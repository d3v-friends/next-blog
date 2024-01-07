"use client";
import Image from "next/image";
import { fnCss } from "@fn-nextjs";
import { useSpring, useTransition, animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import css from "./index.module.scss";

interface Props {
    size: number;
    isActive?: boolean;
    imgSrc: string;
    label?: string;
}

const animStatus = {
    active: {
        bgColor: "rgba(76,80,91,1)",
    },
    inactive: {
        bgColor: "rgba(76,80,91,0)",
    },
};

export default function({ size, isActive, imgSrc, label }: Props) {
    isActive = isActive || false;
    label = label || "";

    const [bgStyle, bgApi] = useSpring(() => ({
        from: isActive ? animStatus.active : animStatus.inactive,
    }));

    const [onHover, setOnHover] = useState(false);
    const [styleLabel, labelApi] = useTransition(onHover, () => ({
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
    }));

    useEffect(() => {
        if (isActive) {
            bgApi.start(animStatus.active);
        } else {
            bgApi.start(animStatus.inactive);
        }
    }, [isActive]);


    useEffect(() => {
        labelApi.start();
    }, [onHover]);

    const labelHandler = {
        mouseOver: () => {
            setOnHover(true);
        },
        mouseLeave: () => {
            setOnHover(false);
        },
    };

    return (
        <div
            style={{
                width: size,
                height: size,
            }}
            className={fnCss.merge(css["cont"])}
            onMouseLeave={labelHandler.mouseLeave}
            onMouseOver={labelHandler.mouseOver}>
            <animated.div
                className={fnCss.merge(css["bg-cont"])}
                style={{
                    width: size - 20,
                    height: size - 20,
                    backgroundColor: bgStyle.bgColor,
                }}>
                <Image
                    className={fnCss.merge(css["img"], "no-drag")}
                    src={imgSrc} alt={label}
                    width={size}
                    height={size} />
            </animated.div>
            {label && styleLabel((style, item) => (
                <>
                    {item &&
                        <>
                            <animated.div
                                style={{
                                    top: 0,
                                    left: size,
                                    height: size,
                                    opacity: style.opacity,
                                }}
                                className={fnCss.merge(css["label-cont"])}>
                                <div className={fnCss.merge(css["label-inner-cont"])}>
                                    {label}
                                </div>
                            </animated.div>
                        </>}
                </>
            ))}


        </div>
    );
}
