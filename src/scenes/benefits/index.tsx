import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
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
    <section id="leistungen" className="mx-auto w-5/6 py-20">
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

      </motion.div>
    </section>
  );
};

export default Benefits;
