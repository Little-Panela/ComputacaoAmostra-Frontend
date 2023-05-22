import clsx from "clsx";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { LinkComponent } from "../elements/Link";

import { Text } from "../elements/Text";

interface OptionProps {
  label: string;
  active: boolean;
}

export function SwitchCourse ({ course }: { course: "bcc" | "ecomp" }) {
  const { t } = useTranslation("common");

  return (
    <div className="
    bg-[#00000028] divide-x divide-gray-400
    rounded-xl flex aling-center justify-center pb-1 pt-2 font-montserrat z-10">
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

function Option ({ label, active }: OptionProps) {
  return (
    <div className="flex aling-center justify-center px-5 py-1 md:px-12">
      <Text
        size="sm"
        className={clsx("text-[10px] transition-all py-4 md:py-6 md:text-xl lg:text-2xl", {
          "text-gray-400 hover:text-gray-600": !active,
          "border-b-2 border-pallete-primary-xdark text-pallete-primary-light":
            active,
        })}
      >
        {label}
      </Text>
    </div>
  );
}
