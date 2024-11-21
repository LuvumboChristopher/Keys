import Image from "next/image";
import Link from "next/link";

const HowItWorks = () => {
    return (
        <div className="container py-10">
            <div className="sectionHeading">
                <h2 className="headingTitle">Comment ça marche</h2>
            </div>
            <div className="sectionDescription">
                Simplifiez votre processus de recrutement grâce à des canaux stratégiques pour atteindre des candidats qualifiés.
            </div>
            <section className="stepsSection">
                <div className="stepsContainer">
                    <div className="stepItem">
                        <div className="stepInner">
                            <div className="stepTop">
                                <div className="stepImage">
                                    <Link href="/" target="_self">
                                        <Image loading="lazy" decoding="async"    layout="responsive"
                                                    width={16}
                                                    height={9}  src="https://demoapus1.com/jobtex-new/wp-content/uploads/2023/12/f1.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="stepContent">
                                <div className="stepNumber">ÉTAPE 1</div>
                                <Link href="/" target="_self">
                                    <h3 className="stepTitle">Explorez des emplois</h3>
                                </Link>
                                <div className="stepDescription">Découvrez des opportunités de carrière adaptées à vos compétences et intérêts.</div>
                            </div>
                        </div>
                    </div>
                    <div className="stepItem">
                        <div className="stepInner">
                            <div className="stepTop">
                                <div className="stepImage">
                                    <Link href="/" target="_self">
                                        <Image    layout="responsive"
                                                    width={16}
                                                    height={9}  loading="lazy" decoding="async"  src="https://demoapus1.com/jobtex-new/wp-content/uploads/2023/12/f2.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="stepContent">
                                <div className="stepNumber">ÉTAPE 2</div>
                                <Link href="/" target="_self">
                                    <h3 className="stepTitle">Fournir des informations</h3>
                                </Link>
                                <div className="stepDescription">Soumettez vos informations personnelles et professionnelles pour postuler facilement.</div>
                            </div>
                        </div>
                    </div>
                    <div className="stepItem">
                        <div className="stepInner">
                            <div className="stepTop">
                                <div className="stepImage">
                                    <Link href="/" target="_self">
                                        <Image    layout="responsive"
                                                    width={16}
                                                    height={9}  loading="lazy" decoding="async" src="https://demoapus1.com/jobtex-new/wp-content/uploads/2023/12/f3.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="stepContent">
                                <div className="stepNumber">ÉTAPE 3</div>
                                <Link href="/" target="_self">
                                    <h3 className="stepTitle">Optimiser votre CV</h3>
                                </Link>
                                <div className="stepDescription">Améliorez votre CV pour attirer l&#39;attention des recruteurs avec nos conseils.</div>
                            </div>
                        </div>
                    </div>
                    <div className="stepItem">
                        <div className="stepInner">
                            <div className="stepTop">
                                <div className="stepImage">
                                    <Link href="/" target="_self">
                                        <Image    layout="responsive"
                                                    width={16}
                                                    height={9}  loading="lazy" decoding="async" src="https://demoapus1.com/jobtex-new/wp-content/uploads/2023/12/f4.jpg" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="stepContent">
                                <div className="stepNumber">ÉTAPE 4</div>
                                <Link href="/" target="_self">
                                    <h3 className="stepTitle">Soumettre et suivre</h3>
                                </Link>
                                <div className="stepDescription">Soumettez vos candidatures et suivez leur progression facilement.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowItWorks;
