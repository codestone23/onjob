import { Html, Head, Main, NextScript } from "next/document";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next';
import { GetStaticPropsContext } from 'next';

export default function Document() {
  
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export const getStaticProps = async (context: GetStaticPropsContext<{ locale: string | undefined }>) => {
//   const locale = context.locale || 'vn'; 

//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   };
// };


