import type { ReactNode } from "react";
import { NextSeo } from "next-seo";

import { Navbar } from "../modules/Navbar";
import { Footer } from "../modules/Footer";

interface DefaultProps {
  title?: string;
  description?: string;
  path?: string;
  children: ReactNode;
}

export function Default({ title, description, path, children }: DefaultProps) {
  const url = `https://computacao-amostra.com${path ?? ""}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url,
          title
        }}
      />
      <div className="flex flex-col">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
