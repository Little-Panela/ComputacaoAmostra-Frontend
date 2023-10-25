import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
const Player = dynamic(() => import("../../elements/Player"), {
  ssr: false,
});

export function Video() {
  const { t } = useTranslation("common");

  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -left-96 z-[1]"/>
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -right-96 z-[1]"/>
      <img src="/static/img/video-right-tree.png" alt="Planta da direita" className="absolute h-[600px] xl:h-[800px] -top-14 sm:top-0 md:top-10 lg:top-48 -right-10 md:right-0 z-[1]"/>
      <img src="/static/img/video-left-tree.png" alt="Planta da esquerda" className="absolute h-[600px] xl:h-[800px] -top-20 md:top-0 lg:top-48 -left-10 md:left-0 z-[1]"/>
      
      <div className="mx-auto max-w-7xl z-10">
        <div className="mx-auto my-6 z-10">
          <Player videoId="IKr2TJyrBBY" />
        </div>
      </div>
    </section>
  );
}
