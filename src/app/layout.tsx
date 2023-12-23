import { ReactNode } from "react";
import Layout from "@comp/layout";
import "@scss/index.scss";

interface Props {
    children?: ReactNode;
}

export default async function({ children }: Props) {
    return (
        <html lang="ko">
        <body className="no-scrollBar nav-padding-top">
        <Layout>{children}</Layout>
        </body>
        </html>
    );
}

