import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
const Player = dynamic(() => import("../../elements/Player"), {
  ssr: false,
});

export function Video() {
  const { t } = useTranslation("common");

  return (
    <section className="relative px-4 py-32 sm:px-6 lg:px-8">
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -left-96"/>
      <img src="/static/img/light-focus.png" alt="Foco de Luz" className="absolute -top-24 -right-96"/>
      <img src="/static/img/video-right-tree.png" alt="Planta da direita" className="absolute h-[600px] xl:h-[800px] top-20 lg:top-48 right-0"/>
      <img src="/static/img/video-left-tree.png" alt="Planta da esquerda" className="absolute h-[600px] xl:h-[800px] top-20 lg:top-48 left-0"/>
      
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto my-6">
          <Player videoId="PuRcj4yvfso" />
        </div>
      </div>
    </section>
  );
}
