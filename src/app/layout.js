import { Bricolage_Grotesque } from 'next/font/google'
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
 });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className}`}
        
      >
        <Header/>
        <ToastContainer />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
