import { useState, useEffect } from "react";
import styles from "./Layout.module.scss";
import DesktopHero from "../assets/hero-image-desktop.png";
import MobileHero from "../assets/hero-image-mobile.png";
import { ChildrenProps } from "../interfaces/interfaces";
import Footer from "../containers/Footer/Footer";
import NavBar from "../components/Navbar/NavBar";

const Layout = ({ children }: ChildrenProps) => {
  const [screenSize, setScreenSize] = useState<string>("no-size");

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setScreenSize("no-mobile");
    } else {
      setScreenSize("mobile");
    }
  }, []);

  return (
    <div className={styles.layoutContainer}>
      <NavBar />
      {screenSize === "mobile" && (
        <img
          className={styles.layoutMobileImage}
          width={678}
          height={706}
          src={MobileHero}
          alt="Hero"
        />
      )}
      {screenSize === "no-mobile" && (
        <img
          className={styles.layoutDesktopImage}
          src={DesktopHero}
          width={1228}
          height={1278}
          alt="Hero"
        />
      )}
      <div className={styles.layoutElements}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
