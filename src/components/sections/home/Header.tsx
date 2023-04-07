/* eslint-disable @next/next/no-img-element */

export function Header() {
  return (
    <header className="mx-auto bg-[url('/passeio-cotijuba.webp')] bg-cover bg-center bg-no-repeat py-32">
      <div className="mx-auto flex max-w-7xl items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            <span>Amazon</span> Hacking
          </h1>
          <div className="flex items-center justify-center gap-6">
            <img src="/wavy-bars.svg" alt="barras" className="w-20 md:w-32" />
            <h2 className="text-4xl font-bold text-white md:text-6xl">2023</h2>
            <img src="/wavy-bars.svg" alt="barras" className="w-20 md:w-32" />
          </div>
        </div>
      </div>
    </header>
  );
}
