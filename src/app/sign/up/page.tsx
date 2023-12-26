import {Metadata} from "next";
import SignUp from "@comp/sign-up";
import Link from "next/link";

export const generateMetadata = async (): Promise<Metadata> => {
    return {
        title: "dev_friends::sign_up",
    };
};

interface Props {
}

export default async function ({}: Props) {
    return (
        <>
            <h1 className="margin-bottom-300p-rem">sign up</h1>
            <SignUp/>

        </>
    );
}
