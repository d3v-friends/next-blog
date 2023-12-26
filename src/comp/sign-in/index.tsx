import Submit from "@comp/submit";
import Link from "next/link";
import css from "./index.module.scss";
import {ReactNode} from "react";

interface Props {
}

export default async function ({}: Props) {
    return <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username"/>

        <label htmlFor="password">Password</label>
        <input id="password" type="text" name="password"/>

        <hr/>
        <Submit>로그인</Submit>
    </form>;
}
