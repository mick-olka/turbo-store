import { Footer, Header, Sidebar } from "@/app/[lang]/components/layout";
import { getDictionary } from "@/dictionaries/get-dictionary";
import { type Locale, i18n } from "@/shared/configs/i18n-config";
import { DictionaryProvider } from "@/shared/hooks";
import { getCollections } from "@/shared/service";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// export async function generateStaticParams() {
//   return i18n.locales.map(locale => ({ lang: locale }));
// }

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: { lang: Locale };
  children: React.ReactNode;
}>) {
  const collections = await getCollections();
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <DictionaryProvider dictionary={dictionary}>
          <main className="min-h-screen w-full bg-gray-100 text-gray-700 overflow-hidden" x-data="layout">
            <Header lan={params.lang} />
            <div className="flex min-h-screen pt-14">
              <Sidebar list={collections} dictionary={dictionary} lang={params.lang} />
              {children}
            </div>
            <Footer dictionary={dictionary} />
          </main>
        </DictionaryProvider>
      </body>
    </html>
  );
}
