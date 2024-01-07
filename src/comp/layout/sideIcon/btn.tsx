import { fnCss } from "@fn-nextjs";
import { useSpring, animated } from "@react-spring/web";
import { useEffect } from "react";
import Image from "next/image";
import css from "./index.module.scss";

interface Props {
    size: number;
    isActive: boolean;
}

const animState = {
    on: {
        transform: "rotate(0deg)",
    },
    off: {
        transform: "rotate(-180deg)",
    },
};

export default function({ isActive, size }: Props) {
    const [style, api] = useSpring(() => (isActive ? animState.on : animState.off));

    useEffect(() => {
        api.start({
            to: isActive ? animState.on : animState.off,
        });
    }, [isActive]);

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
                    // backgroundColor: bgColor,
                }}>
                <animated.div className={fnCss.merge("display-flex-center")} style={{ transform: style.transform }}>
                    <Image
                        style={{ transform: "rotate(90deg)" }}
                        className={fnCss.merge(css["img"], "no-drag")}
                        src={"/asset/svg/white/caret-up.svg"} alt={""}
                        width={size}
                        height={size} />
                </animated.div>
            </div>
        </div>
    );
}
