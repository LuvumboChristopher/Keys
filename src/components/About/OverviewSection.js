import Image from "next/image";

export default function ServicesShowcase() {
    return (
        <div>
            <div className="lg:grid grid-cols-4 grid-rows-3  font-display text-3xl text-white">
                <a href="#" className="bg-gray-800 border shadow-lg col-span-1 row-span-1 relative flex items-center justify-center py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
                    <span className="relative z-10">BTP</span>
                    <Image
                        layout="responsive"
                        width={16}
                        height={9} 
                        src="https://via.placeholder.com/1500x1000"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform transform hover:scale-105"
                        alt="BTP"
                    />
                </a>
                <a href="#" className="bg-gray-800 border shadow-lg col-span-1 row-span-1 relative flex items-center justify-center py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
                    <span className="relative z-10">Logistique</span>
                    <Image
                       layout="responsive"
                        width={16}
                        height={9} 
                        src="https://via.placeholder.com/1500x1000"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform transform hover:scale-105"
                        alt="Logistique"
                    />
                </a>
                <a href="#" className="bg-gray-800 border shadow-lg col-span-2 row-span-2 relative flex items-center justify-center py-24 overflow-hidden">
                    <div className="p-12 relative z-10">
                        <h2 className="text-[0.75rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">Qui Sommes-Nous ?</h2>
                        <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] tracking-[-0.03em] mb-5">
                            Une agence de recrutement qui valorise la stratégie et l"engagement humain.
                        </h3>
                        <p className="!mb-6">
                            Chez Keys, nous croyons en l"importance d"une approche sur-mesure pour chaque client et candidat. Notre équipe s"efforce d"identifier des talents qui correspondent parfaitement aux besoins des entreprises tout en respectant les aspirations des individus.
                        </p>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-80 z-0"></div> {/* Overlay */}
                    <Image
                       layout="responsive"
                                                    width={16}
                                                    height={9} 
                        src="/images/free-photo-of-malatya-arapgir-bugday-hasadi.jpeg"
                        className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform transform hover:scale-105"
                        alt="E-commerce"
                    />
                </a>
                <a href="#" className="bg-gray-800 border shadow-lg col-span-2 row-span-2 relative flex items-center justify-center py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
                    <span className="relative z-10">Agriculture</span>
                    <Image
                       layout="responsive"
                                                    width={16}
                                                    height={9} 
                        src="https://via.placeholder.com/1500x1000"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform transform hover:scale-105"
                        alt="Agriculture"
                    />
                </a>
                <a href="#" className="bg-gray-800 border shadow-lg col-span-1 row-span-1 relative flex items-center justify-center py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
                    <span className="relative z-10">Transport</span>
                    <Image
                       layout="responsive"
                                                    width={16}
                                                    height={9} 
                        src="https://via.placeholder.com/1500x1000"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform transform hover:scale-105"
                        alt="Transport"
                    />
                </a>
                <a href="#" className="bg-gray-800 border shadow-lg col-span-1 row-span-1 relative flex items-center justify-center py-24 overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Overlay */}
                    <span className="relative z-10">Grande distribution</span>
                    <Image
                       layout="responsive"
                                                    width={16}
                                                    height={9} 
                        src="https://via.placeholder.com/1500x1000"
                        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform transform hover:scale-105"
                        alt="Grande distribution"
                    />
                </a>
            </div>
        </div>
    );
}
