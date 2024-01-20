import {motion} from "framer-motion";
import {SelectedPage} from "@/shared/types";
import BenefitsPageGraphic from "@/assets/bild.jpeg";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const BenefitsPromo = ({ setSelectedPage }: Props) => {
    return (
        <section id="leistungen-promo" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div  onViewportEnter={() => setSelectedPage(SelectedPage.BenefitsPromo)}>
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* GRAPHIC */}
                    <img
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative mt-5">
                            <div>
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{once: true, amount: 0.5}}
                                    transition={{duration: 0.5}}
                                    variants={{
                                        hidden: {opacity: 0, x: 50},
                                        visible: {opacity: 1, x: 0},
                                    }}
                                >
                                    <HText>
                                        Atmosphäre zum <span className="text-secondary-500">Wohlfühlen</span>{" "}in Nürnberg Innenstadt.

                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.5}}
                            transition={{delay: 0.2, duration: 0.5}}
                            variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0},
                            }}
                        >
                            <p className="my-5">
                                Genieße vor deinem Termin eine Tasse Espresso in unserer stilvoll modernisierten Altbaupraxis mitten
                                in
                                der Innenstadt Nürnbergs.
                                Danach begleiten wir dich in einen unserer großzügigen Therapieräume. Hier hast du genügend Luft zum
                                Atmen und genießt absolute Privatsphäre.
                            </p>
                            <p className="mb-5">
                                Nimm dir vor Behandlungsbeginn einen Moment Zeit und wirf einen Blick auf unsere exklusive
                                Bildergalerie
                                des lokalen Fotokünstlers Lérot.

                                Die Therapieliegen werden auf Wunsch für dich angenehm beheizt. Für frische Handtücher sorgen wir. Für
                                alles andere auch.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div
                                className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    TERMIN BUCHEN
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default BenefitsPromo;