import Link from "next/link";

export default function PlanDuSite() { 
    return (
    <div>
        <h1>Plan du Site</h1>
        <ul>
            <li><Link href="/">Accueil</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/companies">Entreprises</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/jobs">Offres d'emploi</Link></li>
            <li><Link href="/mentions-legales">Mentions Légales</Link>
            </li><li><Link href="/cgu">CGU</Link></li>
        </ul>
    </div>
    );
}
