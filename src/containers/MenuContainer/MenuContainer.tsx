import { ReactChild } from "react"
import styles from "./MenuContainer.module.scss";
import { motion } from "framer-motion";

interface Props {
  children: ReactChild | ReactChild[];
}

const MenuContainer = ({ children }: Props) => {
  const menuContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={menuContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.menuContainer}
    >
      {children}
    </motion.div>
  );
};

export default MenuContainer;
