import svg from "@comp/svg";
import { ReactNode } from "react";
import Layout from "@comp/layout";
import "@scss/index.scss";
import "@theme/dark/index.scss";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return (
        <html lang="ko">
        <body className="no-scrollBar">
        <Layout
            title={"next-blog"}>
            {children}
        </Layout>
        </body>
        </html>
    );
}

const sideItems = [
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

const navItems = [
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
