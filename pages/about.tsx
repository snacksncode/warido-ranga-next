import Container from "@components/Container";
import Header from "@components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { Media, MediaContextProvider } from "utils/media";
import styles from "styles/About.module.scss";
import Paragraph from "@components/Paragraph";
import { At, Files, MapPin, Phone, UsersThree } from "phosphor-react";
import Button from "@components/Button";
import Image from "next/image";
import BlurBall from "@components/BlurBall";
import SectionTitle from "@components/SectionTitle";
import FirmInfoTag from "@components/FirmInfoTag";
import ContactInfo from "@components/ContactInfo";
import Gallery from "@components/Gallery";
import Team from "@components/Team";
import Footer from "@components/Footer";
import waridoLogo from "public/assets/warido_logo.png";
import rangaLogo from "public/assets/ranga.min.svg";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>O Nas | Ranga &times; Warido</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <MediaContextProvider>
        <Container className={styles.wrapper}>
          <Header activeMenuItem="about" />
          <section className={styles.hero}>
            <div className={styles.content}>
              <div className={styles.heading}>O Nas</div>
              <Paragraph>
                Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość.
                Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc
                wiedzę i kompetencje.
              </Paragraph>
              <Media at="xs">
                <div className={styles.buttons}>
                  <Button icon={Files} size="small" linkTo="/about#certificates">
                    Certyfikaty
                  </Button>
                  <Button icon={UsersThree} size="small" variant="outline" linkTo="/about#team">
                    Nasz zespół
                  </Button>
                </div>
              </Media>
              <Media greaterThan="xs">
                <div className={styles.buttons}>
                  <Button icon={Files} linkTo="/about#certificates">
                    Certyfikaty
                  </Button>
                  <Button icon={UsersThree} variant="outline" linkTo="/about#team">
                    Nasz zespół
                  </Button>
                </div>
              </Media>
            </div>
            <Media greaterThan="xs" className={styles.art}>
              <Image
                width={758.67004}
                layout="responsive"
                loading="eager"
                height={615.32637}
                alt={"background art"}
                src={"/assets/about_hero.svg"}
              />
            </Media>
            <BlurBall className={styles.left_ball} blur={300} size={300} color="#C57583" />
            <BlurBall className={styles.right_ball} blur={500} size={300} />
          </section>
          <section className={styles.firm_info}>
            <SectionTitle text="Informacje o firmach" />
            <div className={styles.warido}>
              <Image
                width={264.4}
                height={70}
                src={waridoLogo}
                loading="eager"
                placeholder="blur"
                priority={true}
                alt="Warido"
                draggable={false}
              />
              <div className={styles.tags}>
                <FirmInfoTag tag="REGON" value="364663997" />
                <FirmInfoTag tag="NIP" value="547-216-16-12" />
                <FirmInfoTag tag="KRS" value="0000622267" />
                <FirmInfoTag tag="Kapitał zakładowy" value="5.000,00 PLN" />
              </div>
              <div className={styles.contact}>
                <ContactInfo icon={At} data={["info@audytasg.pl"]} />
                <Media at="xs">
                  <ContactInfo icon={Phone} data={["+(48) 515 096 788"]} />
                </Media>
                <Media at="xs">
                  <ContactInfo icon={Phone} data={["+(48) 33 818 43 17"]} />
                </Media>
                <Media greaterThan="xs">
                  <ContactInfo icon={Phone} data={["+(48) 515 096 788", "+(48) 33 818 43 17"]} />
                </Media>
                <ContactInfo icon={MapPin} data={["ul. Tadeusza 8, Bielsko-Biała 43-382"]} />
              </div>
              <div className={styles.content}>
                <h1 className={styles.content__title}>
                  WARIDO AUDYT ASG Sp. z o.o.<span>Podmiot uprawniony do badania sprawozdań finansowych nr 4077</span>
                </h1>
                <Paragraph>
                  Kancelaria Biegłych Rewidentów WARIDO AUDYT ASG SP. z o.o. świadczy usługi w zakresie badania
                  sprawozdań finansowych oraz audytu projektów unijnych.
                </Paragraph>
                <Paragraph>
                  Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość.
                  Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc
                  wiedzę i kompetencje.
                </Paragraph>
              </div>
            </div>
            <div className={styles.ranga}>
              <Image
                width={306.48}
                height={70}
                src={rangaLogo}
                alt="Ranga"
                loading="eager"
                priority={true}
                draggable={false}
              />
              <div className={styles.tags}>
                <FirmInfoTag tag="REGON" value="070868416" />
                <FirmInfoTag tag="NIP" value="937-139-95-21" />
                <FirmInfoTag tag="Kapitał zakładowy" value="????? PLN" />
              </div>
              <div className={styles.contact}>
                <ContactInfo icon={At} data={["info@ranga.net.pl"]} />
                <Media at="xs">
                  <ContactInfo icon={Phone} data={["+(48) 515 096 788"]} />
                </Media>
                <Media at="xs">
                  <ContactInfo icon={Phone} data={["+(48) 33 818 43 17"]} />
                </Media>
                <Media greaterThan="xs">
                  <ContactInfo icon={Phone} data={["+(48) 515 096 788", "+(48) 33 818 43 17"]} />
                </Media>
                <ContactInfo icon={MapPin} data={["ul. Tadeusza 8, Bielsko-Biała 43-382"]} />
              </div>
              <div className={styles.content}>
                <h1 className={styles.content__title}>
                  Usługi Księgowe i Audytorskie „RANGA” Angelika Sadłoń-Grabska
                  <span>Podmiot uprawniony do badania sprawozdań finansowych nr 4020</span>
                </h1>
                <Paragraph>
                  Od 2006 r. posiadamy doświadczenie w prowadzeniu ksiąg rachunkowych oraz spraw kadrowych zarówno w
                  podmiotach krajowych, jak i o kapitale zagranicznym. W tym samym roku rozpoczęliśmy również proces
                  zdobywania wiedzy praktycznej i teoretycznej z dziedziny rewizji finansowej oraz innych usług
                  świadczonych przez biegłego rewidenta. Posiadamy wieloletnie doświadczenie w zakresie badania planów
                  przekształcenia, przeglądzie ksiąg rachunkowych oraz w sporządzaniu dokumentacji cen transferowych.
                  Świadczymy usługi doradcze w sprawach ekonomiczno-finansowych i podatkowych.
                </Paragraph>
              </div>
            </div>
          </section>
          <Gallery />
          <Team />
        </Container>
        <Footer />
      </MediaContextProvider>
    </>
  );
};

export default About;
