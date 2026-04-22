import Link from "next/link";

import DataJson from "../utils/province.json";

export default function HomePage() {
  console.log(DataJson);
  return (
    <div className="bg-gray-300  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6 ">
      {DataJson.map((item) => (
        <div  key={item.id} className="w-70 h-80 bg-white p-4 text-black font-serif font-bold shadow-xl/10 flex flex-col items-center">
          
          <div className="w-99/100 h-0.5 bg-gray-400 rounded-xl mt-4"></div>
          <div className="w-99/100 h-50 bg-gray-300 mb-4">
          <img src={item.aress} className="w-full h-full grayscale object-cover opacity-40 hover:grayscale-0 hover:opacity-100 transition duration-300" alt="muehe"></img>
          </div>
          {item.name}
        </div>
      ))}

      {/* DataJson.map((user, index) => ( 
            )) */}
    </div>
  );
}
