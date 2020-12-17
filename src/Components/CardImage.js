import React from "react";
import { motion } from "framer-motion";

export default function CardImage({ url }) {
  return (
    <motion.div
      className="mx-5 p-5"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
    >
      <img src={url} alt="" style={{ width: "100%", borderRadius: "2rem" }} />
    </motion.div>
  );
}
