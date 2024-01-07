"use client";
import { fnCss } from "@fn-nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import css from "./index.module.scss";
import { useSpring, animated } from "@react-spring/web";
import SideIcon from "./sideIcon";
import TopIcon from "./topIcon";
import Icon from "./sideIcon/icon";
import IconBtn from "./sideIcon/btn";

interface Props {
    mobileMenuHref?: string;
    title?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
    sideMenu: SideMenu[];
    navMenu: NavMenu[];
}

export const SideSize = {
    parent: 60,
    children: 300,
};

const animStatus = {
    show: {
        sideLeft: 0,
        contentLeftWidth: SideSize.children,
    },
    hide: {
        sideLeft: -SideSize.children + SideSize.parent,
        contentLeftWidth: SideSize.parent,
    },
};

export interface SideMenu {
    label: string;
    imgSrc: string;
    href: string;
    sub?: ReactNode;
}

export interface NavMenu {
    href: string;
    imgSrc: string;
    label: string;
}

export default function({ title, children, footer, sideMenu, navMenu }: Props) {
    const [style, api] = useSpring(() => ({
        from: animStatus.show,
    }));
    const [sideActive, setSideActive] = useState(true);
    const [sideChildren, setSideChildren] = useState<ReactNode | null>(sideMenu[0].sub);
    const router = useRouter();
    const pathname = usePathname();

    const handler = {
        onHide: () => {
            api.start(animStatus.hide);
            setSideActive(false);
        },
        onShow: () => {
            api.start(animStatus.show);
            setSideActive(true);
        },
        onToggle: (idx: number) => {
            const { href, sub } = sideMenu[idx];

            if (!pathname.startsWith(href)) {
                router.push(href);
                setSideChildren(sub);
                return;
            }

            sideActive ? handler.onHide() : handler.onShow();

        },
    };

    return (
        <>
            <nav className={css.nav}>
                <div
                    className={fnCss.merge(css["nav-title-cont"])}
                    style={{ width: SideSize.children }}>
                    <Icon
                        label="dev-friends"
                        imgSrc={"/asset/png/dev-friends.png"}
                        size={SideSize.parent}
                        bgColor={"transparent"}
                    />
                    <div className={fnCss.merge(css["nav-title-label"], "display-flex-center", "flex-grow-1")}>
                        <Link href="/">
                            {title}
                        </Link>
                    </div>

                </div>
                <div className={fnCss.merge(css["nav-side-cont"])}>
                    {navMenu.map((v, i) => (<TopIcon key={i} {...v}></TopIcon>))}
                </div>
            </nav>


            {/* 고정형 1단*/}
            <div
                style={{ width: SideSize.parent }}
                className={fnCss.merge(css["side"], css["side-parent"])}>
                {sideMenu.map((v, i) => (
                    <div key={i} onClick={() => handler.onToggle(i)}>
                        <SideIcon
                            label={v.label}
                            isActive={pathname.startsWith(v.href)}
                            imgSrc={v.imgSrc}
                            size={SideSize.parent} />
                    </div>
                ))}
                <div className={fnCss.merge(css["side-div"])} />
                <div onClick={() => sideActive ? handler.onHide() : handler.onShow()}>
                    <IconBtn size={SideSize.parent} isActive={sideActive} />
                </div>
            </div>

            {/* 이동형 2단 */}
            <animated.div
                style={{
                    left: style.sideLeft,
                    width: SideSize.children,
                }}
                className={fnCss.merge(css["side"], css["side-children"])}>
                {sideChildren}
            </animated.div>
            <div className={fnCss.merge(css["content-cont"])}>
                <animated.div
                    style={{ width: style.contentLeftWidth }} />
                <div
                    className={fnCss.merge(css["content"])}>
                    {children}
                    {footer}
                </div>
            </div>
        </>
    );
}

