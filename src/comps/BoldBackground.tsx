import { motion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 0.1,
    transition: {
      duration: 2,
      staggerChildren: 0.1, // Adjust the stagger duration as needed
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0 },
  show: { opacity: [0, 0.3] },
};

const colors = [
  "text-borange",
  "text-bpink",
  "text-light",
  "text-bpink",
  "text-borange",
  "text-light hidden sm:inline-block",
  "text-bpink hidden sm:inline-block",
  "text-light hidden sm:inline-block",
  "text-borange hidden sm:inline-block",
];

function BoldBackground() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="fixed inset-0 z-[-1] flex select-none flex-col items-center justify-center text-[15vh] font-bold opacity-[3.5%] sm:flex-wrap sm:text-[20vh] sm:opacity-[2.5%]"
    >
      {colors.map((color, index) => (
        <motion.span key={index} variants={staggerItem} className={color}>
          Bold.
        </motion.span>
      ))}
    </motion.div>
  );
}

export default BoldBackground;
