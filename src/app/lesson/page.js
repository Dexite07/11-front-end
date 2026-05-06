"use client";

import { useState } from "react";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const filteredData = DataJson.filter((item) =>
    [item.first_name, item.last_name, item.email]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="w-screen min-h-screen bg-[#141414] overflow-x-hidden">
      <header>
        <div className="bg-black w-full min-h-[80px] flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 py-3 fixed top-0 z-10 gap-3">
          <a href="home">
            <p className="font-mono text-lg sm:text-xl md:text-2xl whitespace-nowrap text-white">
              Chartreused |
            </p>
          </a>

          <div className="w-full sm:w-64 md:w-72 h-10 bg-white rounded-full flex items-center relative max-w-md">
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
              className="w-4 h-4 md:w-5 md:h-5 absolute ml-3"
              alt="search"
            />
            <input
              className="w-full h-full rounded-full text-gray-800 font-mono pl-10 pr-4 outline-none text-sm md:text-base"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </header>

      <p className="text-white font-mono text-lg sm:text-xl pt-28 px-4 md:px-6">
        User Library
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 p-4 md:p-6">
        {filteredData.length === 0 && (
          <p className="text-white col-span-full font-mono italic text-center">
            No results found
          </p>
        )}

        {filteredData.map((item, index) => (
          <div
            key={index}
            className="bg-[#202020] border border-[#444444] rounded-3xl p-4 md:p-5 text-[#bbbbbb] font-mono shadow-xl/10 w-full"
          >
            {/* Type */}
            <div className="bg-[#333333] rounded-full mb-3 flex justify-end px-3 py-1">
              <p
                className={
                  item.type === "teacher"
                    ? "text-[#dcfc38] font-thin text-sm md:text-base"
                    : "text-[#555555] font-semibold text-sm md:text-base"
                }
              >
                {item.type}
              </p>
            </div>

            {/* Info */}
            <div className="flex flex-wrap text-sm md:text-base">
              <p className="font-bold mr-2 text-white">First Name:</p>
              <p className="text-[#d6d6d6]">{item.first_name}</p>
            </div>

            <div className="flex flex-wrap mb-4 text-sm md:text-base">
              <p className="font-bold mr-2 text-white">Last Name:</p>
              <p className="text-[#d6d6d6]">{item.last_name}</p>
            </div>

            <div className="ml-2 flex flex-wrap text-sm md:text-base">
              <p className="mr-2 font-semibold text-white">Age:</p>
              <p className="text-[#d6d6d6]">{item.age}</p>
            </div>

            <div className="ml-2 flex flex-wrap text-sm md:text-base">
              <p className="mr-2 font-semibold text-white">Country:</p>
              <p className="text-[#d6d6d6]">{item.country}</p>
            </div>

            <div className="ml-2 flex flex-wrap text-sm md:text-base">
              <p className="mr-2 font-semibold text-white">Points:</p>
              <p className="text-[#d6d6d6]">{item.point}</p>
            </div>

            <div className="mt-5 flex flex-wrap text-sm md:text-base">
              <p className="mr-2 font-semibold text-white">Created:</p>
              <p className="opacity-50 break-all">{item.created_at}</p>
            </div>

            {/* Image */}
            <div className="border border-[#555555] rounded-xl mt-4 overflow-hidden">
              <img
                src={item.image}
                alt="user"
                className="opacity-20 hover:opacity-100 transition duration-300 w-full h-auto object-cover"
              />
            </div>

            {/* Items */}
            <div className="w-full mt-4">
              <p className="text-sm md:text-base text-white">Items :</p>
              <div className="w-full flex flex-wrap gap-2 mt-2">
                <img
                  src={item.item1}
                  alt="item1"
                  className="w-10 h-10 object-cover grayscale opacity-20 hover:grayscale-0 hover:opacity-100 rounded-xl"
                />
                <img
                  src={item.item2}
                  alt="item2"
                  className="w-10 h-10 object-cover grayscale opacity-20 hover:grayscale-0 hover:opacity-100 rounded-xl"
                />
              </div>
            </div>

            <button className="bg-[#dcfc38] p-2 mt-4 rounded-xl font-semibold text-black hover:bg-[#aaff00] w-full text-sm md:text-base">
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
