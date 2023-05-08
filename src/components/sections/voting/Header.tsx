/* eslint-disable @next/next/no-img-element */
import { Heading } from "../../elements/Heading";
import { TextInput } from "../../elements/TextInput";
import { SwitchCourse } from "../../modules/SwitchCourse";

interface HeaderProps {
  course: "bcc" | "ecomp";
  onChangeText: (value: string) => void;
}

export function Header({ course, onChangeText }: HeaderProps): JSX.Element {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeText(event.target.value);
  };

  return (
    <header className="mt-5 flex flex-col items-center gap-4 md:mt-14 md:gap-10">
      <Heading size="lg" className="md:text-4xl">
        Projetos
      </Heading>

      <SwitchCourse course={course} />

      <div className="flex w-80 md:w-3/6">
        <TextInput.Root>
          <TextInput.Input
            id="projeto"
            placeholder="Procurar projeto"
            onChange={handleInputChange}
          />
          <TextInput.Icon>
            <img src="/static/icons/search.svg" alt="Procurar projeto" />
          </TextInput.Icon>
        </TextInput.Root>
      </div>
    </header>
  );
}
