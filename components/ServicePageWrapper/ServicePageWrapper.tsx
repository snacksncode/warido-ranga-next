import ContactFooter from "@components/ContactFooter";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Image from "next/image";
import { FC, ReactNode } from "react";
import styles from "./ServicePageWrapper.module.scss";
import ranga from "public/assets/ranga.min.svg";
import warido from "public/assets/warido_logo.png";
import Container from "@components/Container";
import SectionTitle from "@components/SectionTitle";
import { Media, MediaContextProvider } from "utils/media";
import Head from "next/head";
import classNames from "classnames";

interface Props {
  image: StaticImageData;
  title: string;
  serviceId: "s-ks" | "s-au" | "s-zk" | "s-dok";
  firm: "ranga" | "warido" | "both";
  subtitle?: ReactNode;
  passRawSubtitle?: boolean;
}

const ServicePageWrapper: FC<Props> = ({ image, title, subtitle, serviceId, passRawSubtitle, children, firm }) => {
  const firmLogo = firm === "ranga" ? ranga : warido;
  return (
    <>
      <Head>
        <title>{title} | Ranga &times; Warido</title>
      </Head>
      <Container>
        <Header activeMenuItem={serviceId} />
      </Container>
      <MediaContextProvider>
        <div className={styles.background} />
        <div className={classNames(styles.wrapper, "service-page-content")}>
          <Media at="xs">
            <SectionTitle passRawChild={passRawSubtitle} className={styles.title} text={title}>
              {subtitle}
            </SectionTitle>
          </Media>
          <Media greaterThan="xs">
            <h1 className={styles.title}>{title}</h1>
          </Media>
          <div className={styles.image}>
            <Image
              src={image}
              sizes="(min-width: 1200px) 960px, (max-width: 1200px) 100vw"
              placeholder="blur"
              layout="fill"
              loading="eager"
              alt={`background image - ${title}`}
            />
            {firm !== "both" ? (
              <div className={styles.logo}>
                <Image src={firmLogo} alt={firm} sizes="100px" />
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1.25rem" }}>
                <div className={classNames(styles.logo, styles.logo__both)}>
                  <Image src={ranga} alt="ranga" objectFit="contain" sizes="100px" />
                </div>

                <div className={classNames(styles.logo, styles.logo__both)}>
                  <Image src={warido} className={styles.warido} alt="warido" objectFit="contain" sizes="100px" />
                </div>
              </div>
            )}
          </div>
          <Media className={styles.subtitle} greaterThan="xs">
            {subtitle}
          </Media>
          <div className={styles.content}>{children}</div>
        </div>
      </MediaContextProvider>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default ServicePageWrapper;
