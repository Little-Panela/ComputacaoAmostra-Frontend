import Head from "next/head";
import type { ReactNode } from "react";
import { Footer } from "../modules/Footer";
import { Navbar } from "../modules/Navbar";

interface DefaultProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export function Default({ title, description, children }: DefaultProps) {
  return (
    <>
      <Head>
        <title>
          {!title ? "Computação Amostra" : `Computação Amostra - ${title}`}
        </title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
