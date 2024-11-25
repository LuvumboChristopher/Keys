import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ isMenuOpen, toggleMenu, colorChanged }) {
  return (
    <div
      className={`sidebar fixed top-0 left-0 py-12 px-10 w-full sm:w-[450px] h-full ${colorChanged ? "bg-black text-white border-r-2" : "bg-white text-black "} transform z-[9999] ${isMenuOpen ? "open" : "closing"
        } flex flex-col`}
    >
      <div className="w-full flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src={colorChanged ? "/images/keyslogos/Keys-logo-white-yellow.svg" : "/images/keyslogos/Keys-logo-black-yellow.svg"}
              alt="Logo de Keys-RH"
              width={100}
              height={100}
              className="transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className={`hamburger-btn ${isMenuOpen ? "open open-menu" : ""} text-black transition-transform duration-300 ease-in-out`}
        >
            <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
            <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
            <p className={`line transition-all duration-300 ease-in-out ${colorChanged ? "bg-white" : "bg-black"}`}></p>
        </button>
        
      </div>
      <nav className="py-5">
        <ul className="py-2 space-y-4">
          <li className="relative group flex items-start space-x-2">
            <div>
              <Link
                href="/about"
                className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
                onClick={toggleMenu} 
              >
                <h4>Qui sommes-nous ?</h4>
              </Link>
              <p className="text-xs pt-1">Présentation de l&#39;agence</p>
            </div>
          </li>
          <li className="relative group flex items-start space-x-2">
            <div>
              <Link
                href="/jobs"
                className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
                onClick={toggleMenu} 
              >
                <h4>Offres d&#39;emploi</h4>
              </Link>
              <p className="text-xs pt-1">Nos offres actuelles</p>
            </div>
          </li>
          <li className="relative group flex items-start space-x-2">
            <div>
              <Link
                href="/contact"
                className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
                onClick={toggleMenu} 
              >
                <h4>Contact</h4>
              </Link>
              <p className="text-xs pt-1">Nous contacter</p>
            </div>
          </li>
        </ul>
      </nav>
      <div className="border-t py-5">
        <div className="flex flex-row items-start gap-4">
          <Link href="https://www.keys-rh.fr/worker/" className="w-full mx-auto" onClick={toggleMenu}>
          <div className={`flex flex-col gap-2 items-center justify-center p-4 text-black hover:outline-1 hover:shadow-sm hover:bg-gray-50 cursor-pointer transition-all duration-500 group ease-in-out ${colorChanged && "text-white hover:text-black" }`}>
          <span className="text-6xl">🧑🏼‍🏭</span>
              <p className="w-full text-center text-sm pt-2 ">Vous êtes Candidat?</p>
            </div>
          </Link>

          <Link href="https://www.keys-rh.fr/company/security/login" className="w-full mx-auto" onClick={toggleMenu}>
            <div className={`flex flex-col gap-2 items-center justify-center p-4 text-black hover:outline-1 hover:shadow-sm hover:bg-gray-50 cursor-pointer transition-all duration-500 group ease-in-out ${colorChanged && "text-white hover:text-black" }`}>
              <span className="text-6xl">👨🏼‍💻</span>
              <p className="w-full text-center text-sm pt-2">Vous êtes Recruteur?</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="border-t py-5">
        <div className="flex flex-col gap-6">
          <div className="w-full mx-auto flex items-start">
            <div>
              <h3 className="text-md font-semibold pb-2 flex items-start">Agence de Lyon</h3>
              <Link
                href="https://www.google.com/maps?q=143+Cr+Émile-Zola,+69100+Villeurbanne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-500"
                onClick={toggleMenu} 
              >
                143 Cr Émile-Zola, 69100 Villeurbanne
              </Link>
              <Link
                href="tel:+33491901835"
                className="text-sm block group"
                onClick={toggleMenu} 
              >
                Tél: <span className="group-hover:text-yellow-500">04 91 90 18 35</span>
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto flex items-start">
            <div>
              <h3 className="text-md font-semibold pb-2 flex items-start">Agence de Toulouse</h3>
              <Link
                href="https://www.google.com/maps?q=52+Bd+Déodat+de+Sévérac,+31300+Toulouse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-yellow-500"
                onClick={toggleMenu} 
              >
                52 Bd Déodat de Sévérac, 31300 Toulouse
              </Link>
              <Link
                href="tel:+33561804950"
                className="text-sm block group"
                onClick={toggleMenu} 
              >
                Tél: <span className="group-hover:text-yellow-500">05 61 80 49 50</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
