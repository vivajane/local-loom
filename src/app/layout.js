"use client";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Context from "./components/Context";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hidePages = ["/pages/paySuccess" , "/pages/payNotSuccess", "/pages/login", "/pages/signup"];
  const hiddenPages = hidePages.includes(pathname);

  useEffect(() => {
  Aos.init({});
}, []);
  return (
    <html lang="en">
      <body className={`${bricolage.className}`}>
        {!hiddenPages && <Header />}
        <ToastContainer />
        <Context>{children}</Context>

        {!hiddenPages && <Footer />}
      </body>
    </html>
  );
}
