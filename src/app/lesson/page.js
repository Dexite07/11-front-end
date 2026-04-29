"use client";

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
    <div className="w-screen min-h-screen bg-[#141414]">
      <header>
        <div className="bg-black w-full h-20 flex items-center pl-5 z-10 fixed top-0">
          <a href="home">
            <p className="font-mono text-2xl">Chartreused |</p>
          </a>

          <div className="w-64 h-2/5 bg-white rounded-full ml-5 flex items-center relative">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
              className="w-5 h-5 absolute ml-2"
              alt="search"
            />
            <input
              className="w-full h-full rounded-full text-gray-800 font-mono pl-8 outline-none"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <p className="text-white font-mono text-xl pt-24 pl-6">
        User Library
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 p-6">
        {filteredData.length === 0 && (
          <p className="text-white col-span-full font-mono italic">
            No results found
          </p>
        )}

        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-[#202020] border border-[#444444] rounded-3xl p-5 text-[#bbbbbb] font-mono shadow-xl/10"
          >
            {/* Type */}
            <div className="bg-[#333333] rounded-full mb-3 flex justify-end px-2">
              <p
                className={
                  item.type === "teacher"
                    ? "text-[#dcfc38] font-thin"
                    : "text-[#555555] font-semibold"
                }
              >
                {item.type}
              </p>
            </div>

            {/* Info */}
            <div className="flex">
              <p className="font-bold mr-2">First Name:</p>
              <p>{item.first_name}</p>
            </div>

            <div className="flex mb-4">
              <p className="font-bold mr-2">Last Name:</p>
              <p>{item.last_name}</p>
            </div>

            <div className="ml-2 flex">
              <p className="mr-2 font-semibold">Age:</p>
              <p>{item.age}</p>
            </div>

            <div className="ml-2 flex">
              <p className="mr-2 font-semibold">Country:</p>
              <p>{item.country}</p>
            </div>

            <div className="ml-2 flex">
              <p className="mr-2 font-semibold">Points:</p>
              <p>{item.point}</p>
            </div>

            <div className="mt-5 flex">
              <p className="mr-2 font-semibold">Created:</p>
              <p className="opacity-50">{item.created_at}</p>
            </div>

            {/* Image */}
            <div className="border border-[#555555] rounded-xl mt-4 overflow-hidden">
              <img
                src={item.image}
                alt="user"
                className="opacity-20 hover:opacity-100 transition duration-300 w-full"
              />
            </div>
            <div className="w-full h-contain mt-4">
              <p>Items :</p>
              <div className="w-full h-10 flex mt-2">
                <img src={item.item1} alt="item1" className="w-10 h-full object-cover mr-2 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 rounded-xl" />
                <img src={item.item2} alt="item2" className="w-10 h-full object-cover grayscale opacity-20 hover:grayscale-0 hover:opacity-100 rounded-xl" />
              </div>
            </div>

            <button className="bg-[#dcfc38] p-2 mt-4 rounded-xl font-semibold text-black hover:bg-[#aaff00] w-full">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}