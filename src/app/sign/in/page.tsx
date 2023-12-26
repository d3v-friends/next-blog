"use server";
import SignIn from "@comp/sign-in";
import {Metadata} from "next";
import Link from "next/link";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "dev_friends::sign_in",
    };
};

interface Props {
}

export default async function ({}: Props) {
    return <>
        <h1 className="margin-bottom-300p-rem">sign in</h1>
        <SignIn/>
        <Link href="/sign/up">
            <button className="outline">회원가입</button>
        </Link>
    </>;
}
