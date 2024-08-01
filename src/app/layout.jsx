import { Inter, Fira_Sans_Extra_Condensed, Montserrat } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans_Extra_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-fira',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: [ '300','400', '500', '600', '700', '800'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: "Yevhenii Mynenko",
  description: "Portfolio by Yevhenii Mynenko",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body   className={`
        ${fira.variable}
        ${montserrat.variable}`}>{children}</body>
    </html>
  );
}
