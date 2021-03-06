import ServicePageWrapper from "@components/ServicePageWrapper";
import type { NextPage } from "next";
import Head from "next/head";
import featuredImage from "public/assets/tworzenie.jpg";
import Paragraph from "@components/Paragraph";
import ServiceHeading from "@components/ServiceHeading";

const ZakladanieSpolek: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ServicePageWrapper title="Zakładanie spółek" image={featuredImage} firm="ranga" serviceId="s-zk">
        <ServiceHeading>Dla naszych klientów</ServiceHeading>
        <Paragraph>
          Przez portal S24 można złożyć wniosek o wpis do Krajowego Rejestru Sądowego spółki z ograniczoną
          odpowiedzialnością, spółki jawnej i spółki komandytowej.{" "}
        </Paragraph>
        <Paragraph>
          Pomagamy naszym obecnym i potencjalnym klientom przejść przez proces rejestracji podmiotu.{" "}
        </Paragraph>
        <Paragraph>
          Po rejestracji podmiotu pomagamy w przygotowaniu niezbędnych dokumentów do Urzędu Skarbowego oraz do Zakładu
          Ubezpieczeń Społecznych, pozwalających rozpocząć działalność gospodarczą zgodnie z obowiązującymi przepisami.
        </Paragraph>
      </ServicePageWrapper>
    </>
  );
};

export default ZakladanieSpolek;
