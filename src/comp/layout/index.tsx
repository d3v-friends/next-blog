"use client";
import { fnCss } from "@fn-nextjs";
import { ReactNode, useState } from "react";
import css from "./index.module.scss";
import { useSpring, animated } from "@react-spring/web";
import Title from "./title";

interface Props {
    mobileMenuHref?: string;
    title?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}

const sideWidth = 300;
const sideMinWidth = 60;

const onSide = {
    left: `0`,
    sideWidth: `${sideWidth}px`,
};


const offSide = {
    left: `-${sideWidth - sideMinWidth}px`,
    sideWidth: `${sideMinWidth}px`,
};

export default function({ title, children, footer }: Props) {
    const [style, api] = useSpring(() => ({
        from: offSide,
    }));
    const [sideOn, setSideOn] = useState(false);

    const handler = {
        onOpen: () => {
            api.start(onSide);
            setSideOn(true);
        },
        onClose: () => {
            api.start(offSide);
            setSideOn(false);
        },
    };


    return (
        <>
            <nav className={css.nav}>
                <Title>{title}</Title>
            </nav>
            <animated.div
                style={{ left: style.left, width: sideWidth }}
                className={fnCss.merge(css["side-cont"])}>

            </animated.div>
            <div className={fnCss.merge(css["content-cont"])}>
                <animated.div style={{ width: style.sideWidth }} />
                <animated.div style={{}} className={fnCss.merge(css["content"])}>
                    <button onClick={handler.onOpen}>open</button>
                    <button onClick={handler.onClose}>close</button>
                    {children}
                </animated.div>
            </div>
        </>
    );
}
