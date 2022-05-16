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
    document.body.classList.toggle("no-scroll");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={styles.navBar}>
        {!isOpen && (
          <a
            className={styles.skipButton}
            href="#about"
            title="Enlace al contenido principal"
          >
            Saltar al contenido
          </a>
        )}

        <button
          onClick={handleOpenMenu}
          className={styles.navButton}
          aria-label="Botón de menú"
          title="Botón de menú"
        >
          <motion.hr
            animate={{ rotateZ: isOpen ? "45deg" : "0deg" }}
            className={styles.navButtonLine}
            transition={{ when: "" }}
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
              {links.map(({ name, direction, id }) => (
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 * id }}
                  key={id}
                >
                  <a
                    onClick={handleOpenMenu}
                    className={styles.menuListItem}
                    href={direction}
                    title={`Ir a ${name.toLocaleLowerCase()}`}
                  >
                    {name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </MenuContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
