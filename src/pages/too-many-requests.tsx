import { type NextPage } from "next";
import { Default } from "../components/layouts/Default";
import { Heading } from "../components/elements/Heading";
import { Text } from "../components/elements/Text";

const projects: NextPage = () => {
  return (
    <Default
      title="Too many requests"
      description="Too many requests, Please try again later."
    >
      <div className="flex h-96 flex-col items-center justify-center gap-7">
        <Heading className="text-7xl">429</Heading>
        <Text size="md">Too many requests</Text>
        <div className="h-[1px] w-1/2 bg-gray-200" />
        <Text>Por favor, tente novamente mais tarde.</Text>
      </div>
    </Default>
  );
};

export default projects;
