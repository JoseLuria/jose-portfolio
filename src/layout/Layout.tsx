import { useState, useEffect, ReactElement } from "react";
import styles from "./Layout.module.scss";
import DesktopHero from "../assets/hero-image-desktop.png";
import MobileHero from "../assets/hero-image-mobile.png";
import Footer from "../containers/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";

export interface Props {
  children?: ReactElement | ReactElement[];
}

const Layout = ({ children }: Props) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      {screenSize >= 768 ? (
        <img
          className={styles.layoutDesktopImage}
          src={DesktopHero}
          width={1228}
          height={1278}
          alt="Hero"
        />
      ) : (
        <img
          className={styles.layoutMobileImage}
          width={678}
          height={706}
          src={MobileHero}
          alt="Hero"
        />
      )}
      <div className={styles.layoutElements}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
