import styles from "./MenuContainer.module.scss";
import { motion } from "framer-motion";
import { menuListProps } from "../../interfaces/interfaces";

const MenuContainer = ({ children }: menuListProps) => {
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
