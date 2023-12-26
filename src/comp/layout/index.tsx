import fnCss from "@scss/index";
import Link from "next/link";
import {ReactNode} from "react";
import css from "./index.module.scss";
import Nav, {NavItem} from "./nav";
import Side, {SideItem} from "./side";

interface Props {
    mobileMenuHref?: string;
    title?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
    sideItems?: SideItem[],
    navItems?: NavItem[],
}

export default async function ({title, children, footer, sideItems, navItems}: Props) {
    sideItems = sideItems || [];
    navItems = navItems || [];

    return (
        <>
            <div className={css.side}>
                <Link href="/">
                    <div className={fnCss.merge(css["title"], "no-drag")}>{title}</div>
                </Link>
                <Side items={sideItems}/>
            </div>
            <div className={fnCss.merge(css["content"], css["content-width"])}>
                <nav className={fnCss.merge("z-index-50", css["nav"], css["content-padding"], css["content-width"])}>
                    <menu className={css["nav-menu"]}>menu</menu>
                    <div className={fnCss.merge(css["nav-content"])}>
                        <Nav items={navItems}/>
                    </div>
                </nav>
                <main className={fnCss.merge("z-index-0", css["main"], css["content-padding"])}>{children}</main>
                <footer>{footer}</footer>
            </div>
        </>
    );
}
