import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ isMenuOpen, toggleMenu, colorChanged }) {
  return (
    <div
      className={`sidebar fixed top-0 left-0 py-12 px-10 w-full sm:w-[475px] h-full ${colorChanged ? "bg-black text-white border-r-2" : "bg-white text-black "} transform z-[9999] ${isMenuOpen ? "open" : "closing"
        } flex flex-col md:rounded-se-[50px] overflow-hidden `}
    >
      <div className="w-full flex justify-between items-center">
        <div>

          <Image
            src={colorChanged ? "/images/keyslogos/Keys-logo-white-yellow.svg" : "/images/keyslogos/Keys-logo-black-yellow.svg"}
            alt="Logo de Keys-RH"
            width={100}
            height={100}
            className="transition-transform duration-500 ease-in-out hover:scale-105"
          />

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
        <ul className="py-2 space-y-2">
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
        <div className="flex flex-col items-start gap-4">
          <Link href="https://www.keys-rh.fr/worker/" className="w-full mx-auto" onClick={toggleMenu}>
            <div className={`flex flex-row gap-6 items-center justify-center py-4 px-8 border rounded-3xl text-black hover:outline-1 hover:shadow-sm hover:bg-gray-100 cursor-pointer transition-all duration-500 group ease-in-out`}>
              <span className="text-4xl">🧑🏼‍🏭</span>
              <p className="w-full text-sm text-left ">Vous êtes Candidat?</p>
            </div>
          </Link>

          <Link href="https://www.keys-rh.fr/company/security/login" className="w-full mx-auto" onClick={toggleMenu}>
            <div className={`flex flex-row gap-6 items-center justify-center py-4 px-8 border rounded-3xl border text-black hover:outline-1 hover:shadow-sm hover:bg-gray-100 cursor-pointer transition-all duration-500 group ease-in-out`}>
              <span className="text-4xl">👨🏼‍💻</span>
              <p className="w-full text-sm text-left ">Vous êtes Recruteur?</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
