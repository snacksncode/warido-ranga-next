import ServicePageWrapper from "@components/ServicePageWrapper";
import type { NextPage } from "next";
import Head from "next/head";
import featuredImage from "public/assets/audytorskie.jpg";
import Paragraph from "@components/Paragraph";
import ServiceHeading from "@components/ServiceHeading";
import SectionTitle from "@components/SectionTitle";

const UslugiAudytorskie: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <ServicePageWrapper title="Usługi Audytorskie" image={featuredImage} firm="both" serviceId="s-au">
        <ServiceHeading>Świadczymy usługi w zakresie</ServiceHeading>
        <ul>
          <li>
            Badania i przeglądów jednostkowych i skonsolidowanych sprawozdań finansowych zgodnie z polskimi zasadami
            rachunkowości oraz Międzynarodowymi Standardami Sprawozdawczości Finansowej.
          </li>
          <li>Audyt projektów unijnych.</li>
          <li>
            Badania planów przekształcenia jednostek gospodarczych w zakresie poprawności i rzetelności, podziału i
            łączenia spółek.
          </li>
          <li>
            Innych usług atestacyjnych, takich jak: sprawdzenie działania systemów kontroli, usprawnienia systemów
            finansowo-księgowych, budżetowania i planowania finansowego oraz zgodności operacji gospodarczych z umowami
            i innymi regulacjami.
          </li>
          <li>Wykonywania ekspertyz i opinii ekonomiczno-finansowych.</li>
        </ul>
        <hr />
        <SectionTitle text="Badanie sprawozdań finansowych">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </SectionTitle>
        <ServiceHeading>Badanie sprawozdań finansowych ma na celu potwierdzenie, że:</ServiceHeading>
        <ul>
          <li>
            Sprawozdanie finansowe przedstawia rzetelny i jasny obraz sytuacji majątkowej i finansowej jednostki na
            dzień bilansowy, jej wyniku finansowego oraz przepływów pieniężnych za rok obrotowy, zgodnie z mającymi
            zastosowanie przepisami ustawy o rachunkowości lub Międzynarodowych Standardów
            Rachunkowości/Międzynarodowych Standardów Sprawozdawczości Finansowej - jeśli te jednostkę obowiązują.
          </li>
          <li>
            Sprawozdanie finansowej jest zgodne co do formy i treści z obowiązującymi jednostkę przepisami prawa oraz
            Umową/Statutem jednostki, jeśli stanowi postawę jej funkcjonowania.
          </li>
          <li>
            Sprawozdanie finansowe zostało sporządzone na podstawie prawidłowo prowadzonych ksiąg rachunkowych zgodnie z
            przepisami 2 Ustawy o rachunkowości.
          </li>
        </ul>
        <Paragraph>
          Badanie sprawozdań finansowych przeprowadzamy zgodnie z Krajowymi Standardami Badania w brzmieniu
          Międzynarodowych Standardów Badania oraz stosownie do ustawy z dnia 19 lipca 2019 roku o biegłych rewidentach,
          firmach audytorskich oraz nadzorze publicznym.
        </Paragraph>
        <Paragraph>
          Polecamy usługę badania sprawozdania finansowego także jednostkom, które nie są do tego zobligowane.
        </Paragraph>
        <Paragraph>
          Badanie sprawozdania finansowego daje aktualnym i potencjalnym odbiorcom sprawozdania finansowego gwarancję,
          że zbadane sprawozdanie finansowe zawiera rzetelne, prawidłowe i wiarygodne informacje, na podstawie których
          mogą zostać podjęte decyzje inwestycyjne, kluczowe dla rozwoju firmy.
        </Paragraph>
        <hr />
        <SectionTitle text="Badanie planów przekształcenia i połączenia">
          Nasza kancelaria, między innymi z racji partnera w postaci biegłego rewidenta - biegłego sądowego z zakresu
          rachunkowości, przeprowadziła wiele badań planów przekształcenia.{" "}
        </SectionTitle>
        <ServiceHeading>I tak - przykładowo - Plan przekształcenia powinien zawierać:</ServiceHeading>
        <ul>
          <li>
            Projekt Uchwały w sprawie przekształcenia (w przypadku osoby fizycznej prowadzącej działalność gospodarczą -
            jest to Oświadczenie sporządzone w formie Aktu Notarialnego)
          </li>
          <li>Projekt Umowy spółki przekształconej</li>
          <li>Wycenę składników majątku (aktywów i pasywów) jednostki przekształcanej na dzień przekształcenia</li>
          <li>Sprawozdanie finansowe jednostki przekształcanej na dzień przekształcenia w przypadku:</li>
          <ul>
            <li>
              prowadzenia w podmiocie przekształcanym wyłącznie ewidencji podatkowej - jest to bilans sporządzony na
              podstawie spisu inwentarza,
            </li>
            <li>
              prowadzenia pełnej księgowości - jest to sprawozdanie finansowe sporządzane analogicznie według wzoru
              ostatniego rocznego sprawozdania finansowego.
            </li>
          </ul>
        </ul>
        <Paragraph>
          Jeśli mają Państwo jakiekolwiek wątpliwości w zakresie procesu przekształcenia, w jaki sposób go
          przeprowadzić, jakie dokumenty przygotować, z jakimi wiąże się on kosztami, służymy naszą wiedzą i
          doświadczeniem.
        </Paragraph>
      </ServicePageWrapper>
    </>
  );
};

export default UslugiAudytorskie;
