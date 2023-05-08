import { DefaultUi, Player as VimePlayer, Youtube } from "@vime/react";

import "@vime/core/themes/default.css";

type PlayerProps = {
  videoId: string;
};

export default function Player({ videoId }: PlayerProps) {
  return (
    <div className="aspect-video h-full w-full">
      <VimePlayer>
        <Youtube videoId={videoId} />
        <DefaultUi />
      </VimePlayer>
    </div>
  );
}
