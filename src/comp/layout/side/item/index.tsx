"use client";
import {SideItem} from "@comp/layout/side";
import fnCss from "@scss/index";
import {useState} from "react";
import css from "./index.module.scss";
import Label from "./label";

interface Props {
    data: SideItem;
}

export default function Comp({data}: Props) {
    const [open, setOpen] = useState(false);
    const {label, href, iconSrc, elem} = data;
    const children = data.sub || [];
    const onClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <Label
                hasSub={0 < children.length}
                href={href} label={label} iconSrc={iconSrc} onClick={onClick} isOpen={open}/>
            {open && <>
              <div>{elem}</div>
              <div className={css.sub}>{children.map((v, i) => (<Comp data={v} key={i}/>))}</div>
            </>}
        </div>
    );
}
