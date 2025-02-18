"use client";

import { usePathname } from "next/navigation";

export default function PaddingAdjuster({ children }) {
    const pathname = usePathname();

    const paddingClass = pathname !== "/" ? "pt-[110px]" : "pt-0";

    return <div className={paddingClass}>{children}</div>;
}
