"use client";

import { Selector } from "@/app/shared/components/inputs/selector";
import { Carousel } from "@/app/shared/components/ui";
import { I_PhotosBlock } from "@/app/shared/models";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";

interface I_Props {
  photos: I_PhotosBlock[];
}
const api_url = process.env.NEXT_PUBLIC_API_URL;

export const Gallery = ({ photos }: I_Props) => {
  const [current, setCurrent] = useState<string | null>(photos[0]?._id || null);
  const [photosBlock, setPhotosBlock] = useState<I_PhotosBlock | null>(photos[0] || null);
  const gallery = (): ReactNode[] => {
    if (photosBlock)
      return [
        ...photosBlock?.path_arr.map(s => (
          <Image key={s} alt={s} width={640} height={640} src={api_url + "/upload/" + s} />
        )),
      ];
    return [
      <div key={"0"} style={{ width: "460px", height: "300px" }} className="flex items-center justify-center">
        No photos
      </div>,
    ];
  };
  useEffect(() => {
    setPhotosBlock(photos.find(p => p._id === current) || null);
  }, [photos, current]);
  const list = photos.map(p => ({ name: `${p.main_color["ua"]} ${p.pill_color["ua"]}`, id: p._id }));
  return (
    <div className="max-w-lg max-h-lg">
      <Carousel autoSlide={true}>{gallery()}</Carousel>
      <Selector list={list} onChange={setCurrent} value={current} title="Specification" />
    </div>
  );
};
