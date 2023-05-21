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
    bg-[#00000028] divide-x divide-pallete-primary-dark 
    rounded-xl flex aling-center justify-center py-3 font-montserrat ">
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
    <div className="flex aling-center justify-center px-2 py-1 md:px-9 md:py-5">
      <Text
        size="sm"
        className={clsx("text-xs transition-all pb-1 md:text-2xl", {
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
