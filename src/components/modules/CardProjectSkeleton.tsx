import { Text } from "../elements/Text";

export function CardProjectSkeleton() {
  return (
    <div className="flex min-h-[9.125rem] animate-pulse flex-col gap-3 rounded-md border border-solid border-gray-800 p-6 shadow-lg transition-shadow hover:shadow-xl">
      <Text asChild size="md" className="h-6 rounded bg-slate-700 md:text-2xl">
        <strong></strong>
      </Text>
      <Text className="h-4 rounded bg-slate-700 text-xs md:text-lg">{""}</Text>
      <button className="h-8 flex-1 rounded border bg-slate-700 px-3 py-1 transition-colors"></button>
    </div>
  );
}
