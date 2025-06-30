import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { AppContextProvider } from "@/context/appContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContextProvider>
      <Navbar />
      <Component {...pageProps} className={`${poppins.className}`} />
      <Footer />
    </AppContextProvider>
  );
}
