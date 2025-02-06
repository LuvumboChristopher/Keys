"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ jobId, jobTitle }) => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter(Boolean);

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = "/" + pathSegments.slice(0, index + 1).join("/");

        let label = decodeURIComponent(segment.replace(/-/g, " "));

        if (index === pathSegments.length - 1 && jobId && jobTitle) {
            label = jobTitle.charAt(0).toUpperCase() + jobTitle.slice(1).toLowerCase();
        }

        if (segment === "jobs") {
            label = "Emplois"; 
        }

        return { path, label };
    });

    return (
        <nav aria-label="Breadcrumb" className="text-xxs md:text-xs dark:text-gray-200 text-gray-700 capitalize">
            <ul className="flex space-x-2">
                <li>
                    <Link href="/">
                        <span className="hover:text-yellow-500">Accueil</span>
                    </Link>
                    <span className="ml-2">/</span>
                </li>
                {breadcrumbs.map((crumb, index) => (
                    <li key={crumb.path}>
                        {index === breadcrumbs.length - 1 ? (
                            <span>{crumb.label}</span>
                        ) : (
                            <>
                                <Link href={crumb.path}>
                                    <span className="hover:text-yellow-500">{crumb.label}</span>
                                </Link>
                                <span className="ml-2">/</span>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
