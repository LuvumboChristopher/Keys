"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const [pathnames, setPathnames] = useState([]);

  useEffect(() => {
    if (pathname) {
      const segments = pathname
        .split("/")
        .filter((x) => x);
      setPathnames(segments);
    }
  }, [pathname]);

  const getBreadcrumbs = () => {
    let breadcrumbs = [{ name: "Accueil", href: "/" }];

    pathnames.forEach((part, index) => {
      let href = "/" + pathnames.slice(0, index + 1).join("/");

      if (part === "secteurs") {
        href = "#";
      }

      const breadcrumbName = part
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());

      breadcrumbs.push({
        name: breadcrumbName,
        href: href,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="p-2">
      <ol className="flex space-x-2 text-xs">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            <Link href={breadcrumb.href} className="hover:text-yellow-500">
              {breadcrumb.name}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
