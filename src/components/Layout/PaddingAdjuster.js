"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PaddingAdjuster({ children }) {
    const pathname = usePathname();
    const [paddingTop, setPaddingTop] = useState("0");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setPaddingTop(pathname !== "/" ? "150px" : "0");
        }
    }, [pathname]);

    return <div className="min-h-screen" style={{ paddingTop }}>{children}</div>;
}
