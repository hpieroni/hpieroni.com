import Script from "next/script";
import "../styles/global.css";

const isProduction = process.env.NODE_ENV === "production";
const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Tag Manager - Global base code */}
      {isProduction && (
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
          }}
        />
      )}
      <Component {...pageProps} />
    </>
  );
}
