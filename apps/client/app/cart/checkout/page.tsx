"use client";

import "./styles.scss";

import CardVisaFront from "@/app/assets/images/card-visa-front.png";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="m-4 mx-auto">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white" x-data="creditCard">
        <div className="flex flex-col justify-center items-center">
          <div className="relative">
            <Image className="w-full h-auto" src={CardVisaFront} alt="front credit card" />
            <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
              <p className="number mb-5 text-2xl">{number || "0000 0000 0000 0000"}</p>
              <div className="flex flex-row justify-between">
                <p>{holder || "Card Holder"}</p>
                <div className="">
                  <span>{month || "00"}</span>
                  <span>/</span>
                  <span>{year.slice(2, 4) || "00"}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            {/* <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
              alt=""
            /> */}
            <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8  sm:bottom-24 right-0 sm:px-12">
              <div className="w-16 h-9 flex justify-center items-center">
                <p></p>
              </div>
            </div>
          </div>
          {/* <ul className="flex">
            <li className="mx-2">
              <img
                className="w-16"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                alt=""
              />
            </li>
            <li className="mx-2">
              <img
                className="w-14"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                alt=""
              />
            </li>
            <li className="ml-5">
              <img
                className="w-7"
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                alt=""
              />
            </li>
          </ul> */}
        </div>
        <div className="mt-4 p-4">
          <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
          <div className="">
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                max="22"
                value={holder}
                onChange={e => setHolder(e.currentTarget.value)}
              />
            </div>
            <div className="my-3">
              <input
                type="text"
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card number"
                max="19"
                value={number}
                onChange={e => setNumber(e.currentTarget.value)}
              />
            </div>
            <div className="my-3 flex flex-col">
              <div className="mb-2">
                <label className="text-gray-700">Expired</label>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  value={month}
                  onChange={e => setMonth(e.currentTarget.value)}
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                >
                  <option value="" disabled>
                    MM
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  value={year}
                  onChange={e => setYear(e.currentTarget.value)}
                  name=""
                  id=""
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                >
                  <option value="" disabled>
                    YY
                  </option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2026">2027</option>
                  <option value="2026">2028</option>
                  <option value="2026">2029</option>
                  <option value="2026">2030</option>
                  <option value="2026">2031</option>
                  <option value="2026">2032</option>
                  <option value="2026">2033</option>
                  <option value="2026">2034</option>
                </select>
                <input
                  type="password"
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  max="3"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4">
          <button className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors">
            Pay now
          </button>
        </div>
      </div>
    </div>
  );
}
