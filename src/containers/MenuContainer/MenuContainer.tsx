import styles from "./MenuContainer.module.scss";
import { motion } from "framer-motion";
import { menuListProps } from "../../interfaces/interfaces";

const MenuContainer = ({ children }: menuListProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.menuContainer}
    >
      {children}
    </motion.div>
  );
};

export default MenuContainer;
