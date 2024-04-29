"use client";

import NoImage from "@/app/[lang]/assets/images/no-img.png";
import { Selector } from "@/app/[lang]/components/inputs/selector";
import { Carousel } from "@/app/[lang]/components/ui";
import { I_PhotosBlock } from "@/shared/models";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface I_Props {
  photos: I_PhotosBlock[];
  onSpecificationSelect?: (p: I_PhotosBlock | null) => void;
}
const api_url = process.env.NEXT_PUBLIC_API_URL;

export const Gallery = ({ photos, onSpecificationSelect }: I_Props) => {
  const [current, setCurrent] = useState<string | null>(photos[0]?._id || null);
  const [photosBlock, setPhotosBlock] = useState<I_PhotosBlock | null>(photos[0] || null);
  const handleItemSelect = (id: string | null) => {
    const item = photos.find(p => p._id === id);
    if (item) {
      setCurrent(item._id);
    }
    onSpecificationSelect && onSpecificationSelect(item || null);
  };
  const gallery = (): ReactNode[] => {
    if (photosBlock)
      return [
        ...photosBlock?.path_arr.map(s => (
          <Image key={s} alt={s} width={640} height={640} src={api_url + "/upload/" + s} />
        )),
      ];
    return [<Image key={1} alt={"No photo"} width={640} height={640} src={NoImage} />];
  };
  useEffect(() => {
    setPhotosBlock(photos.find(p => p._id === current) || null);
  }, [photos, current]);
  const list = photos.map(p => ({ name: `${p.main_color["ua"]} ${p.pill_color["ua"]}`, value: p._id }));
  return (
    <div className="max-w-lg max-h-lg">
      <Carousel autoSlide={true}>{gallery()}</Carousel>
      <p className="m-2 size-4 font-light">Specification</p>
      <Selector list={list} onItemSelect={handleItemSelect} value={current} />
    </div>
  );
};
