/* eslint-disable @next/next/no-img-element */
export function Winners() {
  return (
    <section className="mx-auto max-w-4xl px-2 pb-20 sm:px-6 lg:px-8">
      <h1 className="pt-10 pb-6 text-center text-4xl font-bold">Vencedores</h1>
      <div className="flex flex-col items-center gap-10 lg:flex-row">
        <div className="flex h-96 w-full max-w-sm flex-col items-center border p-4 shadow-md">
          <div className="flex items-center gap-4">
            <img src="/icons/lines.svg" alt="linhas" />
            <h2 className="font-bold text-blue-900">Ano 2023</h2>
            <img src="/icons/lines.svg" alt="linhas" />
          </div>
          <div className="my-28 flex flex-col items-center justify-center gap-2">
            <span>Ainda não há vencedores!!</span>
            <button className="rounded bg-green-400 px-14 py-1 text-white shadow">
              Vote agora
            </button>
          </div>
        </div>
        <div className="flex h-96 w-full max-w-sm flex-col items-center border p-3 shadow-md md:p-4">
          <div className="flex items-center gap-4">
            <img src="/icons/lines.svg" alt="" />
            <h2 className="font-bold text-blue-900">Ano 2022</h2>
            <img src="/icons/lines.svg" alt="" />
          </div>
          <div className="my-10 flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Vencedores de ciência da computação:
                </h2>
                <ol className="flex w-full flex-col gap-1">
                  <li className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="mr-1 font-bold">1º</span> Nome do projeto
                    </span>
                    <a href="#" className="text-xs text-indigo-900">
                      Ver detalhes {"->"}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="mr-1 font-bold">2º</span> Nome do projeto
                    </span>
                    <a href="#" className="text-xs text-indigo-900">
                      Ver detalhes {"->"}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="mr-1 font-bold">3º</span> Nome do projeto
                    </span>
                    <a href="#" className="text-xs text-indigo-900">
                      Ver detalhes {"->"}
                    </a>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-bold">
                  Vencedores de engenharia da computação:
                </h2>
                <ol className="flex w-full flex-col gap-1">
                  <li className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="mr-1 font-bold">1º</span> Nome do projeto
                    </span>
                    <a href="#" className="text-xs text-indigo-900">
                      Ver detalhes {"->"}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="mr-1 font-bold">2º</span> Nome do projeto
                    </span>
                    <a href="#" className="text-xs text-indigo-900">
                      Ver detalhes {"->"}
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-sm">
                      <span className="mr-1 font-bold">3º</span> Nome do projeto
                    </span>
                    <a href="#" className="text-xs text-indigo-900">
                      Ver detalhes {"->"}
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
