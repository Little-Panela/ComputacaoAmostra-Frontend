/* eslint-disable @next/next/no-img-element */

import { Heading } from "../../elements/Heading";

export function Header() {
  return (
    <header className="mx-auto bg-[url('/static/img/passeio-cotijuba.webp')] bg-cover bg-center bg-no-repeat py-32">
      <div className="mx-auto flex max-w-7xl items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <Heading size="2xl" className="text-white md:text-6xl">
            <span>Amazon</span> Hacking
          </Heading>
          <div className="flex items-center justify-center gap-6">
            <img
              src="/static/icons/wavy-bars.svg"
              alt="barras"
              className="w-20 md:w-32"
            />
            <Heading size="2xl" className="text-white md:text-4xl">
              2023
            </Heading>
            <img
              src="/static/icons/wavy-bars.svg"
              alt="barras"
              className="w-20 md:w-32"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
