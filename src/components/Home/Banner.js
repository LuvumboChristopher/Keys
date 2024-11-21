import Image from "next/image";

const Banner = () => {
    return (
        <section className="bannerCustom-sectionComposedBannerContainer-2Sc">
            <div className="bannerCustom-sectionComposedBanner-opU">
                <div className="bannerCustom-sectionComposedCentral-3Db">
                    <h2 className="bannerCustom-composedBannerTitle-1dl">
                        Keys <span>Intérimaires</span>
                    </h2>
                    <Link
                        className="bannerCustom-composedBannerLinkDiscover-2RH buttons-btn-fill-blue-2lE buttons-btn-fvD buttons-fill-blue-1Cn"
                        href="/candidat-digital-pour-vous"
                    >
                        Découvrir
                    </Link>
                    <h3 className="bannerCustom-composedBannerSubTitle-20_">Notre appli pour</h3>
                    <Image
                        loading="lazy"
                        alt="Trouver un job"
                        className="bannerCustom-composedBannerFindJob-3Ow"
                        src="/composed-banner-findjob-3f6.svg"
                        width={500} 
                        height={300} 
                    />
                    <footer>
                        Disponible sur App Store et Google Play Store
                        <Link
                            href="https://apps.apple.com/fr/app/myproman-int%C3%A9rimaires/id1185469336"
                            target="_blank"
                            className="bannerCustom-composedBannerLinkApple-7Mu"
                            rel="noopener noreferrer"
                        >
                            <Image
                                loading="lazy"
                                alt="Apple Store"
                                src="/composed-banner-apple-6gC.svg"
                                width={220}
                                height={220}
                            />
                        </Link>
                        <Link
                            href="https://play.google.com/store/apps/details?id=fr.taskl.myproman.interim&hl=fr&gl=US"
                            target="_blank"
                            className="bannerCustom-composedBannerLinkAndroid-32f"
                            rel="noopener noreferrer"
                        >
                            <Image
                                loading="lazy"
                                alt="Play Store"
                                src="/composed-banner-android-4Lj.svg"
                                width={220}
                                height={220}
                            />
                        </Link>
                    </footer>
                    <Image
                        loading="lazy"
                        alt="Arrow"
                        className="bannerCustom-composedBannerArrow-3aG"
                        src="/composed-banner-fleche-wBS.svg"
                        width={100} 
                        height={50}
                    />
                    <Image
                        loading="lazy"
                        alt="Logo"
                        className="bannerCustom-composedBannerLogo-1st"
                        src="/composed-banner-logo-new-KMz.svg"
                        width={200}
                        height={100} 
                    />
                </div>
                <Image
                    loading="lazy"
                    alt="Phone"
                    className="bannerCustom-composedBannerPhone-3vW"
                    src="/composed-banner-phone-desktop-newlook-aUW.png"
                    width={500} 
                    height={300} 
                />
            </div>
        </section>
    );
};

export default Banner;
