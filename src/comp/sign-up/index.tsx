"use client"

import Submit from "@comp/submit";
import Link from "next/link";

export default function () {
    return (
        <form>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" name="username"/>

            <label htmlFor="password">Password (1/2)</label>
            <input id="password" type="password" name="password"/>

            <label htmlFor="confirm">Password (2/2)</label>
            <input id="confirm" type="password" name="confirm"/>

            <hr/>
            <Submit>회원가입</Submit>
            <Link href="/sign/in">
                <button className="outline" type="button">로그인</button>
            </Link>
        </form>
    );
}
