import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Image from "../images/img-1.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <Header />
      <Hero image={Image} title="메인화면" desc="앵무새" />
    </motion.div>
  );
};

export default Home;
