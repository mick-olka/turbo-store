import { getDictionary } from "@/dictionaries/get-dictionary";
import { Locale } from "@/shared/configs/i18n-config";
import { I_ProductFeatures } from "@/shared/models";
import React from "react";

type Props = {
  lang: Locale;
  list: I_ProductFeatures;
};

export const FeaturesList = async ({ lang, list }: Props) => {
  const dictionary = await getDictionary(lang);
  return (
    <div className="my-4">
      <h3 className="font-bold text-lg mb-4 mt-8">{dictionary.product.features}</h3>
      {list[lang].map(f => (
        <div key={f.key} className="flex justify-between max-w-xl">
          <span>{f.key}:</span>
          <hr className="flex-1 mx-4 border-gray-300 mt-3" />
          <span className="font-semibold">{f.value}</span>
        </div>
      ))}
    </div>
  );
};
