"use client";
import localFont from "next/font/local";
import GlobalStyles from "./styles/GlobalStyles";
import StyledComponentsRegistry from "./registry";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-sacle=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:lcale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 本はNext.js 12なので、14だとstyled-componentsの設定方法が説明と合わない */}
        {/* 一旦以下のサイトの方法で適用させておく */}
        {/* REFE:https://zenn.dev/takfjp/articles/38f6971a87ee37 */}
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
