import Link from "next/link";

import DataJson from "../utils/data.json";

export default function HomePage() {
  console.log(DataJson);
  return (
    <div className="bg-gray-300  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6 ">
      {DataJson.map((item) => (
        <div className="w-70 h-80 bg-white rounded-4xl p-5 text-black font-mono shadow-xl/10">
          <p className="font-semibold bg-purple-200 rounded-full pr-2 text-purple-500 mb-3 flex justify-end">
            {item.type}
          </p>
          <p className="flex">
            <p className="font-bold mr-2">{"First Name:"}</p>
            {item.first_name}
          </p>
          <p className="flex">
            <p className="font-bold mr-2 mb-4">{"Last Name:"}</p>
            {item.last_name}
          </p>
          <p className="ml-5 flex ">
            <p className="mr-2 font-semibold">Age :</p>
            {item.age}
          </p>
          <p className="ml-5 flex ">
            <p className="mr-2 font-semibold">Country :</p>
            {item.country}
          </p>
          <p className="ml-5 flex ">
            <p className="mr-2 font-semibold">Points :</p>
            {item.point}
          </p>
          <p className="mt-5 flex ">
            <p className="mr-2 font-semibold">Created at :</p>
            <p className="opacity-50">{item.created_at}</p>
          </p>
          <button className="bg-purple-500 p-2 mt-4 rounded-xl font-semibold text-white shadow-xl/10 hover:bg-orange-300">
            Details
          </button>
        </div>
      ))}

      {/* DataJson.map((user, index) => ( 
            )) */}
    </div>
  );
}
