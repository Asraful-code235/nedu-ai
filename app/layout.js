import "./globals.scss";
import Head from "next/head";
import Script from "next/script";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://smtpjs.com/v3/smtp.js"></Script>
      <body className="bg-[#010101] ">
        <main>{children}</main>
      </body>
    </html>
  );
}
