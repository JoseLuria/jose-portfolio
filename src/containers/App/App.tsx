import { Toaster } from "sonner";
import Layout from "../../layout/Layout";
import styles from "./App.module.scss";
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <main className={styles.mainContainer}>
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </Layout>
      <Toaster position="top-right" richColors closeButton />
    </>
  );
}

export default App;
