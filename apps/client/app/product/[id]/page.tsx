import { BreadCrumps } from "@/app/components/ui/breadcrumps";
import { Carousel } from "@/app/components/ui/carousel";
import { getProductById } from "@/app/lib/service";
import Image from "next/image";
import Link from "next/link";

import { Gallery } from "./gallery";

const api_url = process.env.NEXT_PUBLIC_API_URL;

export default async function Product({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  const breadcrumps = [{ name: product.name["ua"], link: product.url_name }];
  // const allPhotos = product.photos.map
  const photosArr = [];
  return (
    <div className="p-4">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadCrumps items={breadcrumps} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* <div className="max-w-lg max-h-lg">
              <Carousel autoSlide={true}>
                {[
                  ...product.photos[0].path_arr.map(s => (
                    <Image key={s} alt={s} width={640} height={640} src={api_url + "/upload/" + s} />
                  )),
                ]}
              </Carousel>
            </div> */}
            <Gallery photos={product.photos} />
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {product.name["ua"]}
              </h2>
              <p className="text-gray-500 text-sm">
                By{" "}
                <Link href="#" className="text-indigo-600 hover:underline">
                  ABC Company
                </Link>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-indigo-600 text-3xl">25</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">Save 12%</p>
                  <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                </div>
              </div>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
              </div>
              <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: product.description["ua"] }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
