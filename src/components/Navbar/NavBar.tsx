import styles from "./NavBar.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import MenuContainer from "../../containers/MenuContainer/MenuContainer";
import { AnimatePresence } from "framer-motion";
import MenuData from "../../data/data.json";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { links } = MenuData;

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle("no-scroll");
  };

  return (
    <>
      <nav className={styles.navBar}>
        <button
          onClick={handleOpenMenu}
          className={styles.navButton}
          aria-label="Botón de menú"
        >
          <motion.hr
            animate={{ rotateZ: isOpen ? "45deg" : "0deg" }}
            className={styles.navButtonLine}
          />
          <motion.hr
            animate={{
              rotateZ: isOpen ? "-45deg" : "0deg",
              position: isOpen ? "absolute" : "static",
            }}
            className={styles.navButtonLine}
          />
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <MenuContainer>
            <ul className={styles.menuListContainer}>
              {links.map(({ name, direction }, index) => (
                <li key={index}>
                  <a
                    onClick={handleOpenMenu}
                    className={styles.menuListItem}
                    href={direction}
                    title={`Ir a ${name}`}
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
