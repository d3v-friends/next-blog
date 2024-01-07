"use client";
import { fnCss } from "@fn-nextjs";
import Image from "next/image";
import { ReactNode, useState } from "react";
import css from "./index.module.scss";
import { useSpring, animated } from "@react-spring/web";
import Title from "./title";
import SideItem from "./sideItem";

interface Props {
    mobileMenuHref?: string;
    title?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}

export const SideMenuSize = {
    width: 300,
    minWidth: 60,
};

const onSide = {
    show: {
        left: 0,
        contentLeft: SideMenuSize.width,
        sideLeftWidth: 0,
        sideLabelWidth: SideMenuSize.width - SideMenuSize.minWidth,
        sideIconRotate: "rotate(270deg)",
    },
    hide: {
        left: -(SideMenuSize.width - SideMenuSize.minWidth),
        contentLeft: SideMenuSize.minWidth,
        sideLeftWidth: SideMenuSize.width - SideMenuSize.minWidth,
        sideLabelWidth: 0,
        sideIconRotate: "rotate(90deg)",
    },
};

export default function({ title, children, footer }: Props) {
    const [style, api] = useSpring(() => ({
        from: onSide.show,
    }));
    const [isShow, setIsShow] = useState(false);

    const handler = {
        onOpen: () => {
            api.start(onSide.show);
            setIsShow(true);
        },
        onClose: () => {
            api.start(onSide.hide);
            setIsShow(false);
        },
        toggle: () => {
            if (isShow) {
                handler.onClose();
            } else {
                handler.onOpen();
            }
        },
    };


    return (
        <>
            <nav className={css.nav}>
                <Title>{title}</Title>
            </nav>
            <animated.div
                style={{ left: style.left, width: SideMenuSize.width }}
                className={fnCss.merge(css["side-cont"])}>
                <div
                    onClick={() => handler.toggle()}
                    style={{ width: SideMenuSize.width }}
                    className={fnCss.merge(css["side-button"])}>
                    <animated.div
                        style={{ width: style.sideLeftWidth }} />
                    <animated.div
                        className={fnCss.merge(css["side-icon"])}
                        style={{ width: SideMenuSize.minWidth, transform: style.sideIconRotate }}>
                        <Image
                            className={fnCss.merge(css["side-button-icon"], "no-drag")}
                            src={"/asset/svg/white/caret-up.svg"}
                            alt={"caret"}
                            width={SideMenuSize.minWidth}
                            height={SideMenuSize.minWidth} />
                    </animated.div>
                    <animated.div
                        style={{ width: style.sideLabelWidth }}
                        className={fnCss.merge(css["side-label"])}>
                        메뉴닫기
                    </animated.div>
                </div>
                <SideItem
                    width={SideMenuSize.width}
                    minWidth={SideMenuSize.minWidth}
                    imgSrc={"/asset/svg/white/account.svg"}
                    href={"/dashboard"}
                    label={"dashboard"}
                    leftSpaceWidth={style.sideLeftWidth}
                    rightLabelWidth={style.sideLabelWidth} />
            </animated.div>
            <div className={fnCss.merge(css["content-cont"])}>
                <animated.div
                    style={{ width: style.contentLeft }} />
                <div
                    className={fnCss.merge(css["content"])}>
                    {children}
                    {footer}
                </div>
            </div>
        </>
    );
}
