/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useTranslation } from "next-i18next";
import { useState, useEffect } from "react";
import Image from "next/image";

import { env } from "../../env.mjs";
import { useRouter } from "next/router.js";

const cdn = env.NEXT_PUBLIC_CDN_URL;
const cdnPath = `${cdn}/flags/`;

interface FlagIconProps {
  countryCode: string;
}

function FlagIcon({ countryCode = "" }: FlagIconProps) {
  const locale = countryCode === "en" ? "us" : "br";
  return (
    <Image
      src={`${cdnPath}${locale}.svg`}
      width={16}
      height={16}
      alt="flag"
      className="mr-2 inline-block"
    />
  );
}

interface Language {
  key: string;
  name: string;
}

const LANGUAGE_SELECTOR_ID = "language-selector";

export const LanguageSelector = () => {
  const router = useRouter()
  const { i18n } = useTranslation();
  const languages = [
    {
      key: "pt",
      name: "Português",
    },
    {
      key: "en",
      name: "English",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = languages.find(
    (language) => language.key === i18n.language
  );

  const handleLanguageChange = async (language: Language) => {
    await router.push(router.asPath, router.asPath, { locale: language.key })
    
    setIsOpen(false);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleWindowClick = (event: any) => {
      const target = event.target.closest("button");
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  if (!selectedLanguage) {
    return null;
  }

  return (
    <>
      <div className="z-40 flex items-center justify-center">
        <div className="relative inline-block text-left">
          <div className="mt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              id={LANGUAGE_SELECTOR_ID}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <FlagIcon countryCode={selectedLanguage.key} />
              {selectedLanguage.name}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="absolute -right-32 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="grid grid-cols-2 gap-2 py-1" role="none">
                {languages.map((language, index) => {
                  return (
                    <button
                      key={language.key}
                      onClick={() => handleLanguageChange(language)}
                      className={`${
                        selectedLanguage.key === language.key
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700"
                      } block inline-flex items-center px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                        index % 2 === 0 ? "rounded-r" : "rounded-l"
                      }`}
                      role="menuitem"
                    >
                      <FlagIcon countryCode={language.key} />
                      <span className="truncate">{language.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
