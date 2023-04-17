/* eslint-disable @next/next/no-img-element */
import { Heading } from "../../elements/Heading";
import { TextInput } from "../../elements/TextInput";
import { SwitchCourse } from "../../modules/SwitchCourse";

export function Header() {
  return (
    <header className="mt-5 flex flex-col items-center gap-4 md:mt-14 md:gap-10">
      <Heading size="lg" className="md:text-4xl">
        Projetos
      </Heading>

      <SwitchCourse />

      <div className="flex w-80 md:w-3/6">
        <TextInput.Root>
          <TextInput.Input id="projeto" placeholder="Procurar projeto" />
          <TextInput.Icon>
            <img src="/icons/search.svg" alt="Procurar projeto" />
          </TextInput.Icon>
        </TextInput.Root>
      </div>
    </header>
  );
}
