import { Inter, Fira_Sans_Extra_Condensed, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const measurementId = "G-LPC7G8EQ4B";

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
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${measurementId}');
                `}
      </Script>
    </html>
  );
}
