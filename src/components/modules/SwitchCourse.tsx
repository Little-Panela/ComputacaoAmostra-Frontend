import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { Text } from "../elements/Text";

interface OptionProps {
  label: string;
  active: boolean;
}

export function SwitchCourse({ course }: { course: "bcc" | "ecomp" }) {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Link href="?course=bcc">
        <Option
          label={t("voting.header.courses.cs")}
          active={course === "bcc"}
        />
      </Link>
      <Link href="?course=ecomp">
        <Option
          label={t("voting.header.courses.ce")}
          active={course === "ecomp"}
        />
      </Link>
    </div>
  );
}

function Option({ label, active }: OptionProps) {
  return (
    <div className="flex items-center px-[0.375rem] py-[0.375rem]  md:px-2 md:py-2">
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
