import { Footer, Header, Sidebar } from "@/app/[lang]/components/layout";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { type Locale } from "@/shared/configs/i18n-config";
import { DictionaryProvider } from "@/shared/hooks";
import { TextBlocks } from "@/shared/models";
import { getCollections, getTextByName } from "@/shared/service";
import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

type Props = Readonly<{
  params: { lang: Locale };
  children: React.ReactNode;
}>;

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const description = await getTextByName(TextBlocks.main_description);
  return {
    title: "Shop",
    description: description.text[params.lang],
  };
}

export default async function RootLayout({ params: { lang }, children }: Props) {
  const collections = await getCollections();
  const dictionary = await getDictionary(lang);
  const phones = await getTextByName(TextBlocks.phones);
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <DictionaryProvider dictionary={dictionary}>
          <main
            className="min-h-screen w-full bg-gray-100 text-gray-700 overflow-hidden"
            x-data="layout"
            style={{ minWidth: "360px" }}
          >
            <Header lang={lang} phones={phones} />
            <div className="flex min-h-screen pt-14">
              <Sidebar list={collections} dictionary={dictionary} lang={lang} />
              {children}
            </div>
            <Footer dictionary={dictionary} lang={lang} />
          </main>
        </DictionaryProvider>
      </body>
    </html>
  );
}
