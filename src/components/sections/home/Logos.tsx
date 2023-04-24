import Image from "next/image";

export function Logos() {
  return (
    <section className="bg-green-900 px-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex flex-wrap max-w-7xl justify-around py-10 max-sm:flex-col max-sm:gap-5">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">Realização</h2>
          {/* <span className="text-white">LOGO</span> */}
          {/* <span className="text-white">LOGO</span> */}
          {/* <img
              src="/icons/wavy-bars.svg"
              alt=""
              className="w-20 md:w-32"
            /> */}
          <Image
            src="img/ArgoLogo.svg"
            alt=""
            width={20}
            height={20}
            className="md:w-32"
          />
          <Image
            src="img/OmniLogo.svg"
            alt=""
            width={20}
            height={20}
            className="md:w-32"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">Apoio</h2>
          <span className="text-white">LOGO</span>
          <span className="text-white">LOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">Organização</h2>
          <span className="text-white">LOGO</span>
          <span className="text-white">LOGO</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white">Parceria</h2>
          <span className="text-white">LOGO</span>
          <span className="text-white">LOGO</span>
        </div>
      </div>
    </section>
  );
}
