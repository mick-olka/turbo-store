"use client";

import { Selector } from "@/app/components/inputs/selector";
import { Carousel } from "@/app/components/ui/carousel";
import { I_PhotosBlock } from "@/app/lib/models";
import Image from "next/image";
import { useState } from "react";

interface I_Props {
  photos: I_PhotosBlock[];
}
const api_url = process.env.NEXT_PUBLIC_API_URL;

export const Gallery = ({ photos }: I_Props) => {
  const [current, setCurrent] = useState<string | null>(null);
  const list = photos.map(p => ({ name: `${p.main_color["ua"]} ${p.pill_color["ua"]}`, id: p._id }));
  return (
    <div className="max-w-lg max-h-lg">
      <Carousel autoSlide={true}>
        {[
          ...photos[0].path_arr.map(s => (
            <Image key={s} alt={s} width={640} height={640} src={api_url + "/upload/" + s} />
          )),
        ]}
      </Carousel>
      <Selector list={list} onChange={setCurrent} value={current} />
    </div>
  );
};
