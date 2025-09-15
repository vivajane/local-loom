import { Bricolage_Grotesque } from 'next/font/google'
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
 });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bricolage.className}`}
        
      >
        {children}
      </body>
    </html>
  );
}
