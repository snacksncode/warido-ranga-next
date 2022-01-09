import { FC } from "react";
import styles from "./Gallery.module.scss";
import Masonry from "react-masonry-css";
import SectionTitle from "@components/SectionTitle";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import cert1 from "public/assets/certificates/1.jpg";
import cert2 from "public/assets/certificates/2.jpg";
import cert3 from "public/assets/certificates/3.jpg";
import cert4 from "public/assets/certificates/4.jpg";
import cert5 from "public/assets/certificates/5.png";
import cert6 from "public/assets/certificates/6.jpg";
import cert7 from "public/assets/certificates/7.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];

const Gallery: FC = () => {
  return (
    <section className={styles.wrapper} id="certificates">
      <SectionTitle text="Certyfikaty" />
      <Masonry
        breakpointCols={{
          default: 4,
          1100: 3,
          700: 2,
          500: 1,
        }}
        className={styles.grid}
        columnClassName={styles.grid__column}
      >
        {certificates.map((image, index) => {
          return (
            <Zoom
              key={`${image.src}_${index}`}
              overlayBgColorStart="rgba(0, 0, 0, 0)"
              overlayBgColorEnd="rgba(0, 0, 0, 0.75)"
              zoomMargin={16}
            >
              <Image
                className={styles.image}
                src={image}
                objectFit="contain"
                placeholder="blur"
                alt={`Certifikat #${index + 1}`}
              />
            </Zoom>
          );
        })}
      </Masonry>
    </section>
  );
};

export default Gallery;
