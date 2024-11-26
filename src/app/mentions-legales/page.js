import Head from "next/head";
import React from "react";

const MentionsLegales = () => {
    return (
        <>
            <main className="p-6 md:p-12 bg-gray-100 text-justify">
                <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-2xl md:text-4xl font-bold text-left mb-12">
                        Mentions légales
                    </h1>
                    <section className="space-y-3">
                        <h2 className="text-xl font-semibold mb-6">Informatiques & libertés</h2>
                        <p className="mb-4">
                            Les destinataires des données sont : <strong>KEYS - INTERIM & RECRUTEMENT</strong>
                        </p>
                        <p className="mb-4">
                            Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée, vous bénéficiez d&#39;un droit d&#39;accès, de rectification, de suppression des informations qui vous concernent, que vous pouvez exercer en remplissant le formulaire par un clic sur <strong>Nous contacter</strong> ou par un courrier à :<br />
                        </p>
                        <p className="mb-4">
                            <strong>KEYS - INTERIM & RECRUTEMENT</strong><br />
                            29 RUE CDT FAURAX 69006 LYON<br />
                        </p>
                        <p className="mb-4">
                            Ce site n'implante pas de cookie dans votre ordinateur.
                        </p>
                    </section>
                    <section className="space-y-3 mt-6">
                        <h2 className="text-xl font-semibold mb-6">Propriétés intellectuelles</h2>
                        <p className="mb-4">
                            Les contenus de ce site (structure, design, texte, image, animation, logo) sont la propriété exclusive de <strong>KEYS - INTERIM & RECRUTEMENT</strong>.
                        </p>
                        <p className="mb-4">
                            Toute représentation totale ou partielle de ce site est soumise à l&#39;autorisation préalable, écrite et expresse de <strong>KEYS - INTERIM & RECRUTEMENT</strong>.
                        </p>
                    </section>
                    <section className="space-y-3 mt-6">
                        <h2 className="text-xl font-semibold mb-6">Limitation de responsabilité</h2>
                        <p className="mb-4">

                            Ce site ne saurait être tenu pour responsable des erreurs rencontrées sur le site, problèmes techniques, interprétation des informations publiées et les conséquences de leurs utilisations. L&#39;utilisateur reconnaît dans ce cas utiliser ces informations sous sa responsabilité exclusive.

                        </p>
                        <p className="mb-4">
                            Les informations fournies par les candidats et l'envoi de CV ne constituent pas une inscription définitive au sein des agences <strong>KEYS - INTERIM & RECRUTEMENT</strong>.<br />
                        </p>
                        <p className="mb-4">
                            Une inscription pourra être validée par ces agences qu'après un entretien en face à face et personnalisé. Les inscriptions des candidats sur la liste (dépot de CV, offres d'emploi) sont provisoires, une inscription ne deviendra définitive qu'après validation émanant de l'agence.<br />
                            Toute inscription validée n'implique aucunement d'obligation à la formation d'un contrat.
                        </p>
                    </section>
                    <section className="space-y-3 mt-6">
                        <h2 className="text-xl font-semibold mb-6">Données à caractère personnel</h2>
                        <p className="mb-4">
                            Aux fins d&#39;établissement des contrats, de traitement des rémunérations et des déclarations sociales et fiscales, et plus généralement de la gestion du personnel à l&#39;occasion de la conclusion, l&#39;exécution et la cessation de votre contrat de travail, nous sommes amenés à traiter des données personnelles vous concernant.
                        </p>
                        <p className="mb-4">
                            Vous pouvez consulter notre charte de confidentialité sur <a href="https://www.keys-rh.fr" className="text-yellow-500">www.keys-rh.fr</a>.<br />
                            Pour exercer vos droits Informatique et libertés et pour toute demande d&#39;information, nous avons désigné un Délégué à la Protection des Données (DPO) à contacter par mail : <a href="mailto:contact.dpo@keys-rh.fr" className="text-yellow-500">contact.dpo@keys-rh.fr</a> ou par courrier :
                        </p>
                        <p className="mb-4">
                            <strong>KEYS - INTERIM & RECRUTEMENT</strong> - A l&#39;attention du PDO – 29 RUE CDT FAURAX 69006 LYON
                        </p>
                    </section>
                    <section className="space-y-3 mt-6">
                        <h2 className="text-xl font-semibold mb-6">Éditeur du site</h2>
                        <p className="mb-4">
                            <strong>KEYS - INTERIM & RECRUTEMENT</strong><br />
                            29 RUE CDT FAURAX 69006 LYON<br />
                            Directeur de la publication : Guillaume MATHIEU<br />
                            Groupe KEYS - INTERIM & RECRUTEMENT
                        </p>
                    </section>
                    <section className="space-y-3 mt-6">
                        <h2 className="text-xl font-semibold mb-6">Développement du site sur mesure</h2>
                        <p className="mb-4">Développé par <strong> Christopher Luvumbo</strong>, développeur web freelance, ce site a été conçu sur mesure pour répondre aux besoins spécifiques de l'agence de travail temporaire Keys-RH. Grâce à une approche personnalisée et à l'utilisation des dernières technologies, ce site garantit une expérience utilisateur fluide et moderne.</p>
                    </section>
                    <section className="space-y-3 mt-6">
                        <h2 className="text-xl font-semibold mb-6">Hébergeur</h2>
                        <p className="mb-4">
                            OVH SAS au capital de 10 000 000 €<br />
                            RCS Roubaix Code APE 6202A - N° TVA : FR 22 424 761 419<br />
                            2 rue Kellermann 59100 Roubaix - France
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
};

export default MentionsLegales;
