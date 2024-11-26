import Head from 'next/head';
import Link from 'next/link';

export default function CookiesPolicy() {
    return (
        <>
            <Head>
                <title>Politique de gestion des cookies | KEYS - INTERIM & RECRUTEMENT</title>
                <meta
                    name="description"
                    content="Découvrez notre politique de gestion des cookies pour comprendre comment nous protégeons votre vie privée sur notre site et notre application."
                />
            </Head>
            <main className="p-6 md:p-12 bg-gray-100 text-justify">
                <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-left mb-8">
                    Politique de gestion des cookies
                    </h1>
                    <p className="mb-6">
                        KEYS - INTERIM & RECRUTEMENT s&#39;engage à protéger au service de votre vie privée. Pour
                        en savoir plus, référez-vous à notre 
                        <Link href="/politique-de-confidentialite" className="text-yellow-500 pl-1.5">
                        politique de confidentialité.
                        </Link></p> <p>
                        La politique ci-dessous vise à vous donner toutes les informations utiles s&#39;agissant
                        des cookies utilisés par nos sites et notre application.
                    </p>
                    <h2 className="text-xl font-semibold mt-8 mb-4">Qu'est-ce qu'un cookie ?</h2>
                    <p className="mb-6">
                        Les cookies sont des fichiers souvent cryptés qui sont stockés dans votre navigateur.
                        Ils sont créés pour une durée limitée lorsque le navigateur d&#39;un utilisateur charge un
                        site Internet donné : le site envoie des informations au navigateur, qui crée alors un
                        fichier texte. Chaque fois que l&#39;utilisateur revient sur le même site, le navigateur
                        récupère ce fichier et l&#39;envoie au serveur du site Internet.
                    </p>
                    <p className="mb-6">
                        Les informations stockées par les cookies portent notamment sur les pages visitées, le
                        type de navigateur que vous utilisez, votre adresse IP, voire les informations que vous
                        avez saisies sur un site afin de vous éviter de les saisir à nouveau. Ils peuvent être
                        de différents types en fonction de leur objectif :
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>
                            <strong>Cookies techniques :</strong> indispensables à la connexion ou permettant
                            l&#39;identification.
                        </li>
                        <li>
                            <strong>Cookies fonctionnels :</strong> offrent des fonctionnalités d&#39;optimisation de
                            la navigation ou encore de l&#39;apparence du site.
                        </li>
                        <li>
                            <strong>Cookies statistiques :</strong> permettent de connaître les performances du
                            site.
                        </li>
                        <li>
                            <strong>Cookies publicitaires :</strong> pour vous présenter des offres adaptées à
                            vos centres d'intérêt.
                        </li>
                        <li>
                            <strong>Cookies des réseaux sociaux :</strong> pour permettre le partage de contenus
                            spécifiques.
                        </li>
                    </ul>
                    <h2 className="text-xl font-semibold mt-8 mb-4">Comment paramétrer vos cookies ?</h2>
                    <p className="mb-6">
                        Vous pouvez bien entendu paramétrer vos cookies. Le menu d'aide de votre navigateur vous
                        permettra de savoir de quelle manière exprimer ou modifier vos préférences en matière
                        de cookies :
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>
                            Pour Internet Explorer™ :{' '}
                            <a
                                href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500"
                            >
                                Aide Internet Explorer
                            </a>
                        </li>
                        <li>
                            Pour Safari™ :{' '}
                            <a
                                href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500"
                            >
                                Aide Safari
                            </a>
                        </li>
                        <li>
                            Pour Chrome™ :{' '}
                            <a
                                href="https://support.google.com/chrome/answer/95647?hl=fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500"
                            >
                                Aide Chrome
                            </a>
                        </li>
                        <li>
                            Pour Firefox™ :{' '}
                            <a
                                href="https://support.mozilla.org/fr/kb/empecher-sites-enregistrer-preferences"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-500"
                            >
                                Aide Firefox
                            </a>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}
