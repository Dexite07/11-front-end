"use client";

import Link from "next/link";
import { useState } from "react";
import DataJson from "../utils/data.json";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) =>
    [item.first_name, item.last_name, item.email]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="w-screen h-screen bg-[#141414]">
      <header>
        <div className="bg-black w-full h-20 flex items-center pl-5 z-10 absolute">
          <a href="home">
            <p className="font-mono text-2xl ml-50">Chartreused |</p>
          </a>

          <div className="w-50 h-2/5 bg-white rounded-full ml-5 flex items-center">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
              className="w-5 h-5 absolute ml-1"
            />
            <input
              className="w-full h-full rounded-full text-gray-800 font-mono font-regular pl-7"
              placeholder="Search . . ."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <p className="">User Library</p>

      <div className="bg-[#141414] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 p-6 pt-20">
        {filteredData.length === 0 && (
          <p className="text-white col-span-full font-mono italic">No results found</p>
        )}

        {filteredData.map((item, index) => (
          <div
            key={index}
            className="w-70 h-contain bg-[#202020] border border-[#444444] rounded-4xl p-5 text-[#bbbbbb] font-mono shadow-xl/10"
          >
            
            <div className="font-semibold bg-[#333333] rounded-full mb-3 flex justify-end">
              
              {item.type === "teacher" ? (
                <p className="w-full font-thin rounded-full pr-2 text-[#dcfc38] flex justify-end">
                  {item.type}
                </p>
              ) : (
                <p className="font-semibold rounded-full pr-2 text-[#555555] flex justify-end">
                  {item.type}
                </p>
              )}
            </div>

            <div className="flex">
              <p className="font-bold mr-2">First Name:</p>
              {item.first_name}
            </div>

            <div className="flex">
              <p className="font-bold mr-2 mb-4">Last Name:</p>
              {item.last_name}
            </div>

            <div className="ml-5 flex">
              <p className="mr-2 font-semibold">Age :</p>
              {item.age}
            </div>

            <div className="ml-5 flex">
              <p className="mr-2 font-semibold">Country :</p>
              {item.country}
            </div>

            <div className="ml-5 flex">
              <p className="mr-2 font-semibold">Points :</p>
              {item.point}
            </div>

            <div className="mt-5 flex">
              <p className="mr-2 font-semibold">Created at :</p>
              <p className="opacity-50">{item.created_at}</p>
            </div>
            <div className="border border-[#555555] rounded-xl mt-4">
              <img src={item.image} className="opacity-10 rounded-xl hover:opacity-100 transition duration-300"></img>
            </div>

            <button className="bg-[#dcfc38] p-2 mt-4 rounded-xl font-semibold text-black shadow-xl/10 hover:bg-[#aaff00]">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}