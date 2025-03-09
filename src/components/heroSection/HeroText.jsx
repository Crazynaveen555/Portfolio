import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useEffect, useState } from "react";

const HeroText = () => {
  const [title, setTitle] = useState("Front-End Web Developer");
  const titles = [
    "Front-End Web Developer",
    "WordPress Developer",
    "Figma Designer",
    "UI/UX Designer",
    "Full-Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitle((prevTitle) => {
        const currentIndex = titles.indexOf(prevTitle);
        const nextIndex = (currentIndex + 1) % titles.length;
        return titles[nextIndex];
      });
    }, 5000); // Change title every 5 seconds (slower interval)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [titles]);

  return (
    <div className="flex flex-col container-fluid gap-4 align-left md:text-left sm:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-3xl sm:text-xl uppercase text-lightGrey flex flex-wrap"
      >
        <AnimatePresence mode="wait">
          {title.split("").map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Slower animation
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-while font-bold uppercase"
      >
        Naveenkumar.V<br className="sm:hidden md:block" />
        B.e-CSE
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        A Passionate Full stack Developer and Designer <br /> with passion of hard work.
      </motion.p>
    </div>
  );
};

export default HeroText;