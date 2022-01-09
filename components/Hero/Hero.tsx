import BlurBall from "@components/BlurBall";
import Button from "@components/Button";
import Paragraph from "@components/Paragraph";
import Image from "next/image";
import { Eye, Phone } from "phosphor-react";
import { FC } from "react";
import { Media, MediaContextProvider } from "utils/media";
import styles from "./Hero.module.scss";
import dotsSvg from "public/assets/dots.svg";
import heroImage from "public/assets/hero.jpg";

const Hero: FC = () => {
  return (
    <MediaContextProvider>
      <div className={styles.wrapper}>
        <div className={styles.floating_card}>
          <h1 className={styles.heading}>Świadczymy profesjonalne usługi księgowe</h1>
          <Paragraph className={styles.subheading}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua
          </Paragraph>
          <Media at="xs">
            <div className={styles.buttons}>
              <Button linkTo="/#services" icon={Eye} size="small">
                Nasze Usługi
              </Button>
              <Button icon={Phone} linkTo="/#contact" fillIcon variant="outline" size="small">
                Kontakt
              </Button>
            </div>
          </Media>
          <Media greaterThan="xs">
            <div className={styles.buttons}>
              <Button linkTo="/#services" icon={Eye}>
                Nasze Usługi
              </Button>
              <Button linkTo="/#contact" icon={Phone} fillIcon variant="outline">
                Kontakt
              </Button>
            </div>
          </Media>
        </div>
        <Media greaterThan="xs" className={styles.dots}>
          <Image src={dotsSvg} alt="dots, visual element" />
        </Media>
        <Media greaterThan="xs">
          <div className={styles.image}>
            <Image
              src={heroImage}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              loading="eager"
              alt="Background Image"
            />
          </div>
        </Media>
        <BlurBall className={styles.right_ball} size={300} blur={120} />
        <BlurBall className={styles.left_ball} size={250} color="#C57583" blur={100} />
      </div>
    </MediaContextProvider>
  );
};

export default Hero;
