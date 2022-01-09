import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { Media, MediaContextProvider } from "utils/media";
import styles from "./Logos.module.scss";
import rangaSmallWhite from "public/assets/ranga_small_white.min.svg";
import rangaSmall from "public/assets/ranga_small.min.svg";
import rangaWhite from "public/assets/ranga_white.min.svg";
import ranga from "public/assets/ranga.min.svg";
import warido from "public/assets/warido_logo.png";
import waridoWhite from "public/assets/warido_logo_white.png";

interface Props {
  white?: boolean;
}

const Logos: FC<Props> = ({ white }) => {
  return (
    <MediaContextProvider>
      <div className={styles.wrapper}>
        <Media at="xs">
          <Image
            width={34.72}
            height={25}
            src={white ? rangaSmallWhite : rangaSmall}
            alt="Ranga"
            loading="eager"
            priority={true}
            layout="fixed"
            draggable={false}
          />
        </Media>
        <Media at="sm">
          <Image
            width={50}
            height={36}
            src={white ? rangaSmallWhite : rangaSmall}
            alt="Ranga"
            loading="eager"
            priority={true}
            layout="fixed"
            draggable={false}
          />
        </Media>
        <Media greaterThan="sm">
          <Image
            width={162}
            height={37}
            src={white ? rangaWhite : ranga}
            alt="Ranga"
            loading="eager"
            priority={true}
            layout="fixed"
            draggable={false}
          />
        </Media>
        <div className={classNames(styles.separator, { [styles["separator--white"]]: white })} />
        <Media className={styles.logo_width_fix_small} at="xs">
          <Image
            width={94.4}
            height={25}
            src={white ? waridoWhite : warido}
            layout="fixed"
            loading="eager"
            priority={true}
            alt="Warido"
            draggable={false}
          />
        </Media>
        <Media className={styles.logo_width_fix} greaterThan="xs">
          <Image
            width={136}
            height={36}
            src={white ? waridoWhite : warido}
            loading="eager"
            sizes="136px"
            priority={true}
            alt="Warido"
            draggable={false}
          />
        </Media>
      </div>
    </MediaContextProvider>
  );
};

export default Logos;
