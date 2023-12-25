import { NavItem } from "@comp/layout/nav";
import { SideItem } from "@comp/layout/side";
import { ReactNode } from "react";
import Layout from "@comp/layout";
import "@scss/index.scss";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return (
        <html lang="ko">
        <body className="no-scrollBar">
        <Layout title={"next-blog"} sideItems={sideItems} navItems={navItems}>{children}</Layout>
        </body>
        </html>
    );
}

const sideItems: SideItem[] = [
    {
        label: "dashboard",
        iconSrc: "",
        href: "/",
    },
    {
        label: "content",
        iconSrc: "",
        sub: [
            {
                label: "important",
                iconSrc: "",
                sub: [
                    {
                        label: "really",
                        iconSrc: "",
                    },
                ],
            },
        ],
    },
];

const navItems: NavItem[] = [
    {
        iconSrc: "",
        label: "sign in",
        href: "/sign/in",
    },
];
