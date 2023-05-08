/* eslint-disable @typescript-eslint/no-misused-promises */
import type { HTMLAttributes, ReactNode } from "react";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { env } from "../../env.mjs";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

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
  const isHomePage = router.pathname === "/";
  const isVotingPage = router.pathname.startsWith(`/voting`);

  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Link href="/">
                  <div className="flex flex-shrink-0 items-center gap-2 text-white">
                    <Image
                      className="block w-auto"
                      height={8}
                      width={8}
                      src="/static/icons/logo.svg"
                      alt="Computação amostra"
                    />
                    <h1 className="w-10 text-xs sm:text-sm">
                      Computação Amostra
                    </h1>
                  </div>
                </Link>
                <div className="hidden sm:ml-6 sm:block"></div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <div className="flex space-x-4">
                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                    <Link
                      href="/"
                      className={clsx(
                        "rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700 hover:text-white",
                        {
                          "bg-gray-900 text-white hover:bg-gray-900":
                            isHomePage,
                        }
                      )}
                    >
                      Início
                    </Link>
                    {/* <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Sobre
                    </a> */}
                    <Link
                      href={linkToVoting}
                      className={clsx(
                        "rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700 hover:text-white",
                        {
                          "bg-gray-900 text-white hover:bg-gray-900":
                            isVotingPage,
                        }
                      )}
                    >
                      Votação
                    </Link>
                    {/* <a
                      href="#"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Vencedores
                    </a> */}
                  </div>

                  {/* Profile dropdown */}
                  {isUserLoggedIn ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="rounded-full"
                            height={40}
                            width={40}
                            src={user?.image ?? "/static/img/empty-avatar.jpg"}
                            alt={`${user?.name ?? "user"}} avatar`}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                                onClick={() => signOut()}
                              >
                                Sair
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : isVotingEnd || !isVotingStarted ? (
                    <div />
                  ) : (
                    <div className="mx-6">
                      <NavButton onClick={() => signIn("google")}>
                        Login
                      </NavButton>
                    </div>
                  )}
                </div>
              </div>
              <div className="-mr-2 flex gap-2 sm:hidden">
                <NavButton onClick={() => router.push(linkToVoting)}>
                  VOTAÇÃO
                </NavButton>

                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="/"
                className={clsx(
                  "block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition-colors hover:bg-gray-700 hover:text-white",
                  {
                    "bg-gray-900 text-white hover:bg-gray-900": isHomePage,
                  }
                )}
              >
                Início
              </Disclosure.Button>
              {/* <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Sobre
              </Disclosure.Button> */}
              <Disclosure.Button
                as="a"
                href={linkToVoting}
                className={clsx(
                  "block rounded-md px-3 py-2 text-base font-medium text-gray-300 transition-colors hover:bg-gray-700 hover:text-white",
                  {
                    "bg-gray-900 text-white hover:bg-gray-900": isVotingPage,
                  }
                )}
              >
                Votação
              </Disclosure.Button>
              {/* <Disclosure.Button
                as="a"
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Vencedores
              </Disclosure.Button> */}
            </div>
            {isUserLoggedIn ? (
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image
                      className="rounded-full"
                      height={40}
                      width={40}
                      src={user?.image ?? "/static/img/empty-avatar.jpg"}
                      alt={`${user?.name ?? "user"}} avatar`}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user?.name ?? "Usuário"}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user?.email ?? ""}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Disclosure.Button
                    as="button"
                    onClick={() => signOut()}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Sair
                  </Disclosure.Button>
                </div>
              </div>
            ) : isVotingEnd || !isVotingStarted ? (
              <div />
            ) : (
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="space-y-1 px-2">
                  <Disclosure.Button
                    as="button"
                    onClick={() => signIn("google")}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Login
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

type NavButtonProps = HTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

function NavButton({ children, ...props }: NavButtonProps) {
  return (
    <button
      {...props}
      className="rounded border border-green-400 px-3 py-1 text-green-400"
    >
      {children}
    </button>
  );
}
