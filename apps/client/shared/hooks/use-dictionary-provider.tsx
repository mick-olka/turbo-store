"use client";

import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/shared/configs/i18n-config";
import { createContext, useContext } from "react";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

const DictionaryContext = createContext<{ lang: Locale; dictionary: Dictionary } | null>(null);

export function DictionaryProvider({
  dictionary,
  lang,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
  lang: Locale;
}) {
  return <DictionaryContext.Provider value={{ dictionary, lang }}>{children}</DictionaryContext.Provider>;
}

export function useDictionary() {
  const dictionary = useContext(DictionaryContext);
  if (dictionary === null) {
    throw new Error("useDictionary hook must be used within DictionaryProvider");
  }

  return dictionary;
}
