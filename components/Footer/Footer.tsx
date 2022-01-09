import Logos from "@components/Logos";
import { FC } from "react";
import styles from "./Footer.module.scss";
import Container from "@components/Container";

const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Container className={styles.inner}>
        <Logos white />
        <p className={styles.text}>
          © {new Date().getFullYear()} Ranga &times; Warido. Wszelkie prawa zastrzeżone.
          <br />
          Wykonane przez <a href="https://github.com/snacksncode/">@snacksncode</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
