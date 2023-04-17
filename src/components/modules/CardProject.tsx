/* eslint-disable @next/next/no-img-element */
import { Text } from "../elements/Text";

interface CardProjectProps {
  name: string;
  description: string;
}

export function CardProject({ name, description }: CardProjectProps) {
  return (
    <div className="flex min-w-[22rem] flex-col gap-3 rounded-md border border-solid border-gray-800 p-6 shadow-lg transition-shadow hover:shadow-xl">
      <div className="flex gap-2">
        <img src="/icons/github.svg" alt="PLogo do github" />
        <Text asChild size="md" className="md:text-2xl">
          <strong>{name}</strong>
        </Text>
      </div>
      <Text className="text-xs md:text-lg">{description}</Text>
      <div className="flex gap-3">
        <button className="flex-1 rounded-md border bg-green-600 py-1 px-3 text-white  transition-colors hover:bg-green-500">
          Votar
        </button>
        <button className="flex-1 rounded-md border border-gray-600 py-1 px-3 text-gray-600 transition-colors hover:text-gray-400">
          Ver detalhes
        </button>
      </div>
    </div>
  );
}
