import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/bild.jpeg";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <p>01.</p>,
    title: "Hochqualifizierte Physiotherapeuten.",
    description:
      "Höchste Therapiekompetenz ist das Fundament unserer Arbeit. Jeder unserer Physiotherapeuten verfügt über verschiedene Spezialisierungen und bildet sich regelmäßig weiter. So wirst du immer von einem Experten mit neuesten Therapiemethoden betreut.",
  },
  {
    icon: <p>02.</p>,
    title: "Du stehst im Fokus.",
    description:
    "Im Gegensatz zu vielen Praxen müssen unsere Physiotherapeuten nicht gleichzeitig Termine vereinbaren, Zuzahlungen kassieren oder Räume vorbereiten. Sie haben den Kopf frei, sich ausschließlich auf deine individuelle Geschichte zu konzentrieren."
  },
  {
    icon: <p>03.</p>,
    title: "Außergewöhnlicher Komfort.",
    description:
    "Es ist wissenschaftlich erwiesen, dass der Therapieerfolg stark vom Behandlungsumfeld abhängt. Daher halten wir nichts von Massenabfertigung oder Abtrennvorhängen. Wir setzen alles daran, es dir so angenehm wie möglich zu machen."
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="leistungen" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Mehr als nur Massage.</HText>
          <p className="my-5 text-md">
            Was uns auszeichnet.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
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
            <div className="relative">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
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
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Genieße vor deinem Termin eine Tasse Espresso in unserer stilvoll modernisierten Altbaupraxis mitten in der Innenstadt Nürnbergs.
                Danach begleiten wir dich in einen unserer großzügigen Therapieräume. Hier hast du genügend Luft zum Atmen und genießt absolute Privatsphäre.
              </p>
              <p className="mb-5">
                Nimm dir vor Behandlungsbeginn einen Moment Zeit und wirf einen Blick auf unsere exklusive Bildergalerie des lokalen Fotokünstlers Lérot.

                Die Therapieliegen werden auf Wunsch für dich angenehm beheizt. Für frische Handtücher sorgen wir. Für alles andere auch.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  TERMIN BUCHEN
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
