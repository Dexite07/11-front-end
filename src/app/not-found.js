import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-[#dcfc38] w-screen h-screen flex items-center justify-center">
      <div className="bg-black w-full h-20 flex items-center pl-5 absolute z-5 mb-220 mr-4">
<a href="home">
 <p className="font-mono text-2xl ml-50">Chartreused |</p>
        </a>         <div className="w-50 h-2/5 bg-white rounded-full ml-5 flex items-center pl-1">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png" className="w-5 h-5"></img>
         <p className="text-gray-800 font-mono font-thin ml-1">Search . . .</p>
         </div>
      </div>
      <img src="https://img.freepik.com/premium-vector/hand-drawn-cute-doodle-illustration-design_90573-625.jpg" className="absolute w-screen opacity-10 "></img>
      <div className="bg-white rounded-3xl w-150 h-70 shadow-xl/30 p-10 flex-col flex absolute">
      <p className="font-mono font-bold text-gray-900 text-8xl ">404</p>
      <p className="font-mono font-bold text-gray-900 text-xl m-4">Oops! Where tf are you headed to?</p>
      <button className="bg-black p-2 rounded-xl font-mono font-semibold hover:bg-gray-600">
        <a href="index.js">Leave</a>

      </button>

      </div>
    </div>
  );
}
