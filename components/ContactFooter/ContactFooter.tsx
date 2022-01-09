import Button from "@components/Button";
import { Phone } from "phosphor-react";
import { FC } from "react";
import { Media, MediaContextProvider } from "utils/media";
import styles from "./ContactFooter.module.scss";

const ContactFooter: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>Znalazłeś to, czego szukałeś?</h2>
      <MediaContextProvider>
        <Media at="xs">
          <Button
            icon={Phone}
            linkTo="/#contact"
            style={{ outlineColor: "white" }}
            fillIcon
            variant="filled-white"
            size="small"
          >
            Skontaktuj się z nami
          </Button>
        </Media>
        <Media greaterThan="xs">
          <Button icon={Phone} linkTo="/#contact" style={{ outlineColor: "white" }} fillIcon variant="filled-white">
            Skontaktuj się z nami
          </Button>
        </Media>
      </MediaContextProvider>
    </div>
  );
};

export default ContactFooter;
