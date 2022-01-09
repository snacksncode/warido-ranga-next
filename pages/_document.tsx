import Document, { Html, Head, Main, NextScript } from "next/document";
import { mediaStyles } from "utils/media";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Playfair+Display:wght@700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.png" />
          <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
