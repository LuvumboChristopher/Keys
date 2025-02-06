import Head from "next/head";
import ScrollToTop from "@/app/components/Layout/ScrollToTop";
import PaddingAdjuster from "@/app/components/Layout/PaddingAdjuster";
import Header from "@/app/components/Layout/Header";
import { JobsProvider } from "@/app/context/JobContext";
import { FavoritesProvider } from "@/app/context/FavoritesContext";
import { SearchProvider } from "@/app/context/SearchContext";
import "@/styles/globals.css";
import Footer from "@/app/components/Layout/Footer";
import { UIProvider } from "@/app/context/UIContext";

function MyApp({ Component, pageProps }) {
  return (
    <JobsProvider>
      <UIProvider>
      <FavoritesProvider>
        <SearchProvider>
          <Header />
          <PaddingAdjuster>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            </Head>
            <Component {...pageProps} />
          </PaddingAdjuster>
          <Footer />
          <ScrollToTop />
        </SearchProvider>
      </FavoritesProvider>
      </UIProvider>
    </JobsProvider>
  );
}

export default MyApp;
