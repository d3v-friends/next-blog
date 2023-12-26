"use client";
import {useRouter} from "next/navigation";
import {ReactNode, useEffect, useState,} from "react";
import {useFormStatus} from "react-dom";
import Loading from "@comp/loading";

interface Props {
    children?: ReactNode;
    className?: string;
}

export default function ({children, className}: Props) {
    const router = useRouter();
    const {pending} = useFormStatus();
    const [init, setInit] = useState(false);

    className = className || "";
    useEffect(() => {
        if (init) return;
        if (!pending) return;
        router.refresh();
    }, [pending]);
    return (
        <>
            <button className={className} disabled={pending} aria-disabled={pending}>
                {children}
            </button>
            <Loading pending={pending}/>
        </>
    );
}
