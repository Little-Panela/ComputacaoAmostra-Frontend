import type { ReactNode } from "react";
import { NextSeo } from "next-seo";

import { Navbar } from "../modules/Navbar";
import { Footer } from "../modules/Footer";
import { Button } from "../elements/Button";
import { TextInput } from "../elements/TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({subsets: ['latin'], weight: ["800", "700", "500"], variable: "--font-montserrat"});

interface DefaultProps {
  title?: string;
  description?: string;
  path?: string;
  banner?: string;
  children: ReactNode;
}

export function Default({
  title,
  description,
  banner,
  path,
  children,
}: DefaultProps) {
  const url = `https://computacao-amostra.com${path ?? ""}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title,
          ...(banner && {
            images: [
              {
                url: banner,
                width: 1200,
                height: 720,
                alt: "Computação Amostra",
              },
            ],
          }),
        }}
      />
      <div className={`${montserrat.variable} flex flex-col bg-pallete-background-blue`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

