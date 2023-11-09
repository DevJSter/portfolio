import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import animationData from "../img/swipeUp.json";
import Lottie from "lottie-react";

const languageVariants = {
  hidden: { x: -100, color: "white", backgroundColor: "transparent" },
  visible: { x: 0, color: "black", backgroundColor: "white" },
};

const hoverVariants = {
  hover: (color) => ({ backgroundColor: color, color: "white" }),
};

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <motion.div
        className="flex flex-col items-center justify-center h-510 md:h-685 pb-40 md:pb-0"
        initial={{ opacity: 0 }} // Initial opacity
        animate={{ opacity: 1 }} // Fade in when component mounts
        exit={{ opacity: 0 }}
      >
        <div className="">
          <p className=" text-[3rem] md:text-[5rem] leading-tight md:leading-normal">
            Hi! My Name is{" "}
            <span className="bg-yellowColor text-lightGrey font-semibold">
              {/* <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> */}
              Vwakee
            </span>{" "}
          </p>
          <p className="md:text-[3rem] text-[1.8rem] mt-6 md:mt-0">
            I speak in{" "}
            <motion.span
              className="font-outline-1 text-whiteColor cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={languageVariants}
              transition={{ delay: 0.2 }}
              whileHover="hover"
            >
              <motion.span variants={hoverVariants}>HTML</motion.span>
            </motion.span>
            ,{" "}
            <motion.span
              className="font-outline-1 text-whiteColor cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={languageVariants}
              transition={{ delay: 0.4 }}
              whileHover="hover"
            >
              <motion.span variants={hoverVariants}>CSS</motion.span>
            </motion.span>
            ,{" "}
            <motion.span
              className="font-outline-1 text-whiteColor cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={languageVariants}
              transition={{ delay: 0.6 }}
              whileHover="hover"
            >
              <motion.span variants={hoverVariants}>ReactJs</motion.span>
            </motion.span>{" "}
            &{" "}
            <motion.span
              className="font-outline-1 text-whiteColor cursor-pointer"
              initial="hidden"
              animate="visible"
              variants={languageVariants}
              transition={{ delay: 0.8 }}
              whileHover="hover"
            >
              <motion.span variants={hoverVariants}>Firebase</motion.span>
            </motion.span>
            <p>
              Generally, I{" "}
              <span className="bg-accBlue text-lightGrey font-semibold">
                <Typewriter
                  words={["Eat", "Sleep", "Code", "&", "Repeat!"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </p>
        </div>
      </motion.div>



      <Lottie animationData={animationData} className="w-20 h-20 mt-auto" />

      <p className="mb-auto">Scroll Down to see my Projects.</p>
    </div>
  );
};

export default HeroSection;
