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
                    label: "SignUp",
                    href: "/sign/up",
                    imgSrc: "/asset/svg/white/sign-up.svg",
                },
                {
                    label: "SignIn",
                    href: "/sign/in",
                    imgSrc: "/asset/svg/white/sign-in.svg",
                },
            ]}
            sideMenu={[
                {
                    label: "Dashboard",
                    href: "/dashboard",
                    imgSrc: "/asset/png/dashboard.png",
                    sub: <>Dashboard</>,
                },
                {
                    label: "Golang",
                    href: "/lang/golang",
                    imgSrc: "/asset/png/go.png",
                    sub: <>Golang</>,
                },
                {
                    label: "Javascript",
                    href: "/lang/js",
                    imgSrc: "/asset/png/typescript.png",
                    sub: <>Javascript</>,
                },
                {
                    label: "C++",
                    href: "/lang/cpp",
                    imgSrc: "/asset/png/cpp.png",
                    sub: <>Cpp</>,
                },
                {
                    label: "UnrealEngine",
                    href: "/fw/ue",
                    imgSrc: "/asset/png/ue.png",
                    sub: <>Unreal engine</>,
                },
            ]}
            title={"d3v-friends"}>
            {children}
        </Layout>
        </body>
        </html>
    );
}
