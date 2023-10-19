import React, { useState } from "react";
import clsx from "clsx";
import { Text } from "../elements/Text";

interface SwitchProps {
  year?: string;
  onYearChange: (selectedYear: "2022" | "2023") => void;
}
interface OptionProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export function SwitchYear({ onYearChange }: SwitchProps) {
  const [selectedYear, setSelectedYear] = useState<"2022" | "2023">("2023");

  const handleOptionClick = (selectedYear: "2022" | "2023") => {
    setSelectedYear(selectedYear);
    onYearChange(selectedYear);
  };

  return (
    <div className="gap-8 rounded-xl text-center flex items-center justify-center pb-1 pt-2 font-montserrat z-10">
      <Option label="2022" active={selectedYear === "2022"} onClick={() => handleOptionClick("2022")} />
      <Option label="2023" active={selectedYear === "2023"} onClick={() => handleOptionClick("2023")} />
    </div>
  );
}

function Option({ label, active, onClick }: OptionProps) {
  return (
    <div className={clsx("flex aling-center justify-center border-pallete-primary-light border-2 rounded-xl px-6 py-2 md:px-12", {
      "bg-transparent": !active, "bg-pallete-primary-light": active,
    })}
    onClick={onClick}>
      <Text
        size="sm"
        className={clsx("text-[10px] transition-all md:py-6 md:text-xl lg:text-2xl", {
          "text-white hover:text-gray-600": !active,
          "text-pallete-background-blue": active,
        })}
      >
        {label}
      </Text>
    </div>
  );
}
