import clsx from "clsx";
import { Text } from "../elements/Text";

interface OptionProps {
  label: string;
  active: boolean;
  // handleSwitchCourse: () => void;
}

export function SwitchCourse() {
  return (
    <div className="flex flex-wrap justify-center gap-1">
      <Option label="Todos os projetos" active />
      <div className="md:ml-40 md:mr-20">
        <Option label="Ciência da Computação" active={false} />
      </div>
      <Option label="Engenharia da Computação" active={false} />
    </div>
  );
}

function Option({ label, active }: OptionProps) {
  return (
    <div className="flex items-center py-[0.375rem] px-[0.375rem]  md:py-2 md:px-2">
      <Text
        size="sm"
        className={clsx("font-bold transition-colors md:text-2xl", {
          "text-gray-400 hover:text-gray-600": !active,
          "border-b-2 border-gray-900 px-3 hover:border-gray-500 hover:text-gray-500":
            active,
        })}
      >
        {label}
      </Text>
    </div>
  );
}
