import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/Susana/team.jpg";
import image2 from "@/assets/Susana/team2.jpg";
import image3 from "@/assets/Susana/team3.jpg";
import image4 from "@/assets/Susana/team4.jpg";
import image5 from "@/assets/Susana/team5.jpg";
import image6 from "@/assets/Susana/team6.jpg";
import image7 from "@/assets/Susana/team7.jpg";

import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import Marquee from "react-fast-marquee";

const team: Array<ClassType> = [
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Lorem ipsum",
    image: image2,
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Lorem ipsum",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    image: image5,
  },
  {
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
  {
    name: "Lorem ipsum",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image7,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurTeam = ({ setSelectedPage }: Props) => {
  return (
    <section id="team" className="w-full bg-gray-20 py-8">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurTeam)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Team.</HText>
            <p className="py-5">
              Some Text.
            </p>
          </div>
        </motion.div>
        <div className="mt-2 h-[353px] w-full overflow-hidden">
          <Marquee pauseOnHover={true} direction={'right'}>
            {team.map((item: ClassType, index) => (
                <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                />
            ))}
          </Marquee>
        </div>
      </motion.div>
    </section>
  );
};

export default OurTeam;
