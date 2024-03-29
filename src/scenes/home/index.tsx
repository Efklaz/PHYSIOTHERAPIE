import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/Physiotherapie Nürnberg.png";
import HomePageGraphic from "@/assets/Physiotherapie-physioconcept.jpeg";
import Sponsor1 from "@/assets/s1.png";
import Sponsor2 from "@/assets/s2.png";
import Sponsor3 from "@/assets/s3.png";
import Sponsor4 from "@/assets/s4.png";
import Sponsor5 from "@/assets/s5.png";
import Sponsor6 from "@/assets/s6.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="physiotherapie" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5 py-10">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm">
              Praxis für moderne Physiotherapie in Nürnberg
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              TERMIN BUCHEN
            </ActionButton>
            <AnchorLink
              className="text-md font-bold text-secondary-500 underline hover:text-primary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>MEHR ERFAHREN</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center z-10 md:z-10
              md:ml-40 md:mt-16 md:justify-items-end h-4/5"
        >
          <img  className="object-cove h-full w-full" alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="w-full bg-white py-10">
          <div className="mx-auto w-5/6">
            <div className="flex  items-center justify-between gap-8">
              <img alt="redbull-sponsor" src={Sponsor1}/>
              <img alt="forbes-sponsor" src={Sponsor2}/>
              <img alt="fortune-sponsor" src={Sponsor3}/>
              <img alt="redbull-sponsor" src={Sponsor4}/>
              <img alt="forbes-sponsor" src={Sponsor5}/>
              <img alt="fortune-sponsor" src={Sponsor6}/>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
