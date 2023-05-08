import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div
          className="-mb-6 flex justify-center space-x-12"
          aria-label="Footer"
        >
          <div className="flex items-center gap-2">
            <img
              src="/static/img/logo-comp-amostra.png"
              alt="logo computação amostra"
              className="w-44"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center space-x-10">
          <a
            href="https://www.facebook.com/CesupaOnline"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/static/icons/facebook.svg" alt="facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/cesupaonline/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/static/icons/instagram.svg" alt="instagram logo" />
          </a>
          <a
            href="https://www.youtube.com/c/CesupaOnline"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/static/icons/youtube.svg" alt="youtube logo" />
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 CESUPA. Todos os direitos reservados.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center space-x-7">
          <Link href="/legal/privacy-policy">
            <p className="text-xs leading-5 text-gray-500 transition-colors hover:text-gray-400">
              Política de Privacidade
            </p>
          </Link>
          <Link href="/legal/terms">
            <p className="text-xs leading-5 text-gray-500 transition-colors hover:text-gray-400">Termos de Serviço</p>
          </Link>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          Feito com ♥ por Panic
        </p>
      </div>
    </footer>
  );
}
