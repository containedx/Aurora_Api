import { motion } from "framer-motion";
import aurora_header from "../../assets/aurora_header.png";


export default function AuroraHeader() {
  return (
    <motion.img
      src={aurora_header}
      alt="Aurora"
      whileHover={{
        scale: 1.07,
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 12,
      }}
      style={{
        cursor: "pointer",
      }}
    />
  );
}
