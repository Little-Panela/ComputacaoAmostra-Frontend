/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-i18next";

import { Heading } from "../../elements/Heading";
import { TextInput } from "../../elements/TextInput";
import { SwitchCourse } from "../../modules/SwitchCourse";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  course: "bcc" | "ecomp";
  onChangeText: (value: string) => void;
}

export function Header({ course, onChangeText }: HeaderProps): JSX.Element {
  const { t } = useTranslation("common");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(event.target.value);
  };

  return (
    <header className="mt-5 flex flex-col items-center gap-4 md:mt-14 md:gap-10">
      <Heading size="lg" className="md:text-4xl">
        {t("voting.header.projects")}
      </Heading>

      <SwitchCourse course={course} />

      <div className="flex w-80 md:w-3/6">
        <TextInput.Root>
          <TextInput.Input
            id="projeto"
            placeholder={t("voting.header.searchPlaceholder") ?? ""}
            onChange={handleInputChange}
          />
          <TextInput.Icon>
            <MagnifyingGlassIcon/>
          </TextInput.Icon>
        </TextInput.Root>
      </div>
    </header>
  );
}
