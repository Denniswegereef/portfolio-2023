import "../theme/globals.css";
import type { AppProps } from "next/app";
// import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
// const neueMontrealRegular = localFont({
//   src: "../assets/fonts/NeueMontreal-Regular.woff2",
//   fallback: ["Helvetica", "ui-sans-serif"],
// });

// const suisseIntlMedium = localFont({
//   src: "../assets/fonts/SuisseIntl-Medium.woff2",
//   fallback: ["Helvetica", "ui-sans-serif"],
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <style jsx global>{`
        :root {
          --font-base: ${neueMontrealRegular.style.fontFamily};
          --font-heading: ${suisseIntlMedium.style.fontFamily};
        }
      `}</style> */}

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}
