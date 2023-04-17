/* eslint-disable @next/next/no-img-element */
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div
          className="-mb-6 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="flex items-center gap-2">
            <img src="/icons/logo.svg" alt="logo computação amostra" />
            <span className="text-2xl">Computação amostra</span>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-10">
          <a
            href="https://www.facebook.com/CesupaOnline"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/facebook.svg" alt="facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/cesupaonline/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/instagram.svg" alt="instagram logo" />
          </a>
          <a
            href="https://www.youtube.com/c/CesupaOnline"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/youtube.svg" alt="youtube logo" />
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 CESUPA. Todos os direitos reservados.
        </p>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          Feito com ♥ por Panic
        </p>
      </div>
    </footer>
  );
}
