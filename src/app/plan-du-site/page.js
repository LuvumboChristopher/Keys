import Head from "next/head";
import React from "react";

const PlanDuSite = () => {
  return (
    <main className="min-h-screen p-6 md:p-12 bg-gray-100 text-justify">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-left mb-12">
          Plan du Site
        </h1>
        <div>
          <h2 className="text-xl font-semibold mb-4">1. Accueil</h2>
          <p>Page principale du site</p>

          <h2 className="text-xl font-semibold mt-6 mb-4">2. Nos solutions</h2>
          <ul>
            <li>Intérimaires</li>
            <li>Recruteurs</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">3. Mon espace</h2>
          <ul>
            <li>Mon compte</li>
            <li>Suivi des candidatures</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">4. Nos agences</h2>
          <ul>
            <li>Liste des agences</li>
            <li>Trouver une agence</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">5. Offres d'emploi</h2>
          <ul>
            <li>Liste des offres disponibles</li>
            <li>Postuler à une offre</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-4">6. Liens utiles</h2>
          <ul>
            <li>Mentions légales</li>
            <li>CGU (Conditions générales d'utilisation)</li>
            <li>Politique de confidentialité</li>
            <li>Politique de gestion des cookies</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default PlanDuSite;
