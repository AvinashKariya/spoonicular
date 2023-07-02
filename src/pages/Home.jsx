import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Desserts from "../components/Desserts";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      inital={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Popular />
      <Veggie />
      <Desserts />
    </motion.div>
  );
};

export default Home;
