"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Layout/Header";
import HeaderBlack from "@/components/Layout/HeaderBlack";

export default function DynamicHeader() {
  const pathname = usePathname();
  
  // Seleccionar el Header adecuado
  return pathname === "/" ? <Header /> : <HeaderBlack />;
}
