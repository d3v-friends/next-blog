import {NavItem} from "@comp/layout/nav";
import {SideItem} from "@comp/layout/side";
import svg from "@comp/svg";
import {ReactNode} from "react";
import Layout from "@comp/layout";
import "@scss/index.scss";

interface Props {
    children?: ReactNode;
}

export default async function ({children}: Props) {
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
        iconSrc: svg.white.manage,
        href: "/",
    },
    {
        label: "content",
        iconSrc: svg.white.manage,
        sub: [
            {
                label: "important",
                iconSrc: svg.white.manage,
                sub: [
                    {
                        label: "really",
                        iconSrc: svg.white.manage,
                    },
                ],
            },
        ],
    },
];

const navItems: NavItem[] = [
    {
        iconSrc: svg.white.signUp,
        label: "회원가입",
        href: "/sign/up",
    },
    {
        iconSrc: svg.white.signIn,
        label: "로그인",
        href: "/sign/in",
    },

];
