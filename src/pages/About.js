import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-2.jpg";
import { motion } from "framer-motion";
import { animationTwo } from "../animations";

const About = () => {
  return (
    <motion.div initial="out" animate="in" exit="out" variants={animationTwo}>
      <Header />
      <Hero image={Image} title="어바웃 화면" desc="카메레온" />
      About
    </motion.div>
  );
};

export default About;
