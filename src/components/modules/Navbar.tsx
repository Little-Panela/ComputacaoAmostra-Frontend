/* eslint-disable @typescript-eslint/no-misused-promises */
import type { ReactNode } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useTranslation } from "next-i18next";
import { env } from "../../env.mjs";
import { Button } from "../elements/Button";
import * as Popover from "@radix-ui/react-popover";

interface NavbarProps {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}

function NavBarItem (props: NavbarProps) {
  return (
    <button className="w-full" onClick={props.onClick}>
      <div
        className={clsx(
          "flex w-full justify-start bg-gradient-to-r px-8 py-4 hover:text-pallete-primary",
          {
            "rounded-lg  from-pallete-menu-item-start to-pallete-menu-item-end             sm:items-center sm:justify-center sm:gap-0 sm:rounded-none sm:bg-none sm:px-0 sm:py-0":
              !props.selected,
          },
          {
            "rounded-none text-pallete-primary border-l-4 border-pallete-primary from-black from-[50.15%] to-pallete-menu-item-selected-end to-[127%]             sm:items-center sm:justify-center sm:gap-0 sm:rounded-none sm:border-b-2 sm:border-l-0 sm:bg-none sm:px-3 sm:py-5":
              props.selected,
          }
        )}
      >
        {props.children}
      </div>
    </button>
  );
}

function AvatarButton (props: {
  user?: { name?: string | null; image?: string | null };
}) {
  return (
    <div className="flex-shrink-0">
      <Image
        className="rounded-full"
        height={40}
        width={40}
        src={props.user?.image ?? "/static/img/empty-avatar.jpg"}
        alt={`${props.user?.name ?? "user"}} avatar`}
      />
    </div>
  );
}

export function Navbar () {
  const router = useRouter();
  const { data: session } = useSession();
  const { t } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = router.pathname === "/";
  const isVotingPage = router.pathname.startsWith(`/voting`);

  const isUserLoggedIn = session !== null;
  const user = session?.user;
  const isVotingStarted =
    new Date().getTime() >
    new Date(env.NEXT_PUBLIC_VOTING_START_DATE).getTime();
  const isVotingEnd = new Date() > new Date(env.NEXT_PUBLIC_VOTING_END_DATE);

  const randomCourse = Math.random() > 0.5 ? "bcc" : "ecomp";
  const linkToVoting = isVotingStarted
    ? `/voting?course=${randomCourse}`
    : "/voting/countdown";
  function toggleMenu () {
    setIsMenuOpen((prev) => !prev);
  }

  const menuItens = [
    {
      name: t("navbar.home"),
      href: "/",
      selected: isHomePage,
    },
    {
      name: t("navbar.voting"),
      href: "/voting",
      selected: isVotingPage,
    },
  ];

  return (
    <nav className="z-[100] w-full">
      <div className="flex h-40 items-center justify-between bg-transparent p-7">
        <Link href="/">
          <div className="flex flex-shrink-0 items-center gap-2 text-white">
            <Image
              className="block w-auto"
              height={8}
              width={8}
              src="/static/icons/logo.svg"
              alt="Computação amostra"
            />
            <h1 className="w-fit text-xs sm:text-sm">Computação Amostra</h1>
          </div>
        </Link>
        {/* Mobile */}
        <div className="flex sm:hidden">
          {isUserLoggedIn ? (
            <div className="pb-3 pt-4">
              <div className="relative flex items-center justify-center px-5 text-center">
                <AvatarButton user={{ name: user?.name, image: user?.image }} />
              </div>
            </div>
          ) : (
            <div />
          )}
          <button onClick={toggleMenu}>
            <Bars3Icon width={32} height={32} />
          </button>
        </div>
        {/* Overlay */}
        <div
          className={clsx(
            "fixed top-0 block h-[100dvh] w-[100vw] overflow-hidden bg-pallete-background-blue transition-all duration-700 sm:hidden",
            { "right-[-150vw] opacity-0": !isMenuOpen },
            { "right-0 opacity-100": isMenuOpen }
          )}
        >
          {/* Header */}
          <div className="flex h-40 items-center justify-between border-b-2 border-b-white/30 bg-transparent p-7">
            <Link href="/">
              <div className="flex flex-shrink-0 items-center gap-2 text-white">
                <Image
                  className="block w-auto"
                  height={8}
                  width={8}
                  src="/static/icons/logo.svg"
                  alt="Computação amostra"
                />
                <h1 className="w-10 text-xs sm:text-sm">Computação Amostra</h1>
              </div>
            </Link>
            <button onClick={toggleMenu}>
              <XMarkIcon width={32} height={32} />
            </button>
          </div>
          {/* Items */}
          <div className="flex flex-col gap-3 p-3 pt-14">
            {menuItens.map((item) => (
              <NavBarItem
                selected={item.selected}
                key={item.name}
                onClick={() => router.push(item.href)}
              >
                {item.name}
              </NavBarItem>
            ))}
          </div>
          {/* Login / Profile */}
          <div className="flex w-full justify-center align-middle">
            {isUserLoggedIn ? (
              <div className="mt-12 flex flex-col w-full justify-between gap-5 px-4 align-middle">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={40}
                      width={40}
                      src={user?.image ?? "/static/img/empty-avatar.jpg"}
                      alt={`${user?.name ?? "user"}} avatar`}
                    />
                  </div>
                  <div className="ml-3 w-max">
                    <div className="text-base font-medium text-white">
                      {user?.name ?? "Usuário"}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user?.email ?? ""}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-y-1 px-2 items-center">
                  <Button onClick={() => signOut()}>
                    {t("navbar.logout")}
                  </Button>
                </div>
              </div>
            ) : isVotingEnd || !isVotingStarted ? (
              <div />
            ) : (
              <div className="mt-12 px-3">
                <Button onClick={() => signIn("google")}>Login</Button>
              </div>
            )}
          </div>
          {/* Radial Blur Superior */}
          <div className="absolute right-[-40px] top-[-120px] z-[-100] h-[288px] w-[526px] rounded-full bg-pallete-primary-light/20 blur-[50px]" />
          {/* Green Effect Superior */}
          <div className="absolute right-[-90px] top-[-10px] z-[-90] h-[220px] w-[600px] bg-dots-1 bg-contain bg-no-repeat opacity-50 mix-blend-screen" />
          {/* Radial Blur Inferior */}
          <div className="absolute right-[80%] top-[55%] z-[-100] h-[288px] w-[526px] rounded-full bg-pallete-primary-light/20 blur-[50px]" />
          {/* Green Effect Inferior */}
          <div className="absolute bottom-14 left-0 z-[-90]  h-[462px] w-[181px] bg-dots-2 bg-contain bg-no-repeat opacity-50 mix-blend-screen" />
        </div>
        {/* Desktop */}
        <div className="hidden w-full flex-row justify-end items-center sm:flex pr-12 py-5">
          <div className="flex items-center gap-14">
            {/* Items */}
            {menuItens.map((item) => (
              <NavBarItem
                selected={item.selected}
                key={item.name}
                onClick={() => router.push(item.href)}
              >
                {item.name}
              </NavBarItem>
            ))}
            {isUserLoggedIn ? (
              <div className="flex w-full justify-between px-4 align-middle">
                <div className="flex w-max items-center">
                  <div className="flex-shrink-0">
                    <Popover.Root>
                      <Popover.Trigger asChild>
                        <Image
                          className="rounded-full cursor-pointer"
                          height={40}
                          width={40}
                          src={user?.image ?? "/static/img/empty-avatar.jpg"}
                          alt={`${user?.name ?? "user"}} avatar`}
                        />
                      </Popover.Trigger>
                      <Popover.Anchor />
                      <Popover.Portal>
                        <Popover.Content sideOffset={15} align="end" sticky="always" hideWhenDetached className="z-20">
                          <Popover.Arrow className="fill-pallete-primary-xdark" />
                          <div className="flex px-[30px] py-[20px] gap-8 shadow-userPopover justify-between items-center bg-pallete-background-blue rounded-2xl border-2 border-pallete-primary-xdark">
                            <div className="flex flex-col gap-2 justify-center">
                              <div className="font-montserrat text-sm font-semibold text-white">
                                {user?.name ?? "Usuário"}
                              </div>
                              <div className="text-xs font-montserrat font-normal text-gray-500">
                                {user?.email ?? ""}
                              </div>
                            </div>
                            <Button onClick={() => signOut()}>
                              {t("navbar.logout")}
                            </Button>
                          </div>
                        </Popover.Content>
                      </Popover.Portal>
                    </Popover.Root>

                  </div>
                  {/* <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user?.name ?? "Usuário"}
                    </div>
                    <div className="text-xs font-medium text-gray-400">
                      {user?.email ?? ""}
                    </div>
                  </div> */}
                </div>
                {/* <div className="flex justify-center space-y-1 px-2 align-middle">
                  <Button onClick={() => signOut()}>
                    {t("navbar.logout")}
                  </Button>
                </div> */}
              </div>
            ) : isVotingEnd || !isVotingStarted ? (
              <div />
            ) : (
              <Button onClick={() => signIn("google")}>Login</Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
