import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";

type TLayout = {
  children: React.ReactNode;
  title: string;
};

export const Layout = ({ children, title }: TLayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="min-h-screen w-screen">{children}</div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
