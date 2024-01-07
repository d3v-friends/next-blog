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
            navMenu={[
                {
                    label: "Dashboard",
                    href: "/dashboard",
                    imgSrc: "/asset/svg/white/account.svg",
                },
                {
                    label: "Javascript",
                    href: "/lang/js",
                    imgSrc: "/asset/svg/white/account.svg",
                },
                {
                    label: "C++",
                    href: "/lang/cpp",
                    imgSrc: "/asset/svg/white/account.svg",
                },
                {
                    label: "Golang",
                    href: "/lang/go",
                    imgSrc: "/asset/svg/white/account.svg",
                },
            ]}
            sideMenu={[
                {
                    label: "Dashboard",
                    href: "/dashboard",
                    imgSrc: "/asset/svg/white/account.svg",
                    sub: <>Dashboard</>,
                },
                {
                    label: "Javascript",
                    href: "/lang/js",
                    imgSrc: "/asset/svg/white/account.svg",
                    sub: <>Javascript</>,
                },
                {
                    label: "C++",
                    href: "/lang/cpp",
                    imgSrc: "/asset/svg/white/account.svg",
                    sub: <>Cpp</>,
                },
                {
                    label: "Golang",
                    href: "/lang/go",
                    imgSrc: "/asset/svg/white/account.svg",
                    sub: <>Golang</>,
                },
            ]}
            title={"next-blog"}>
            {children}
        </Layout>
        </body>
        </html>
    );
}
