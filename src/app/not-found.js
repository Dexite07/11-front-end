import Image from "next/image";

export default function NotFound() {
  return (
    <div className="bg-[#dcfc38] w-screen min-h-screen flex items-center justify-center overflow-x-hidden relative px-4">
      {/* Navbar */}
      <div className="bg-black w-full min-h-[80px] flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 py-3 absolute top-0 z-10 gap-3">
        <a href="/">
          <p className="font-mono text-lg sm:text-xl md:text-2xl text-white whitespace-nowrap">
            Chartreused |
          </p>
        </a>

        <div className="w-full sm:w-[220px] md:w-[260px] h-10 bg-white rounded-full flex items-center px-3 max-w-sm">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
            className="w-4 h-4 md:w-5 md:h-5"
            alt="search"
          />
          <p className="text-gray-800 font-mono font-thin ml-2 text-sm md:text-base truncate">
            Search . . .
          </p>
        </div>
      </div>

      {/* Background image */}
      <img
        src="https://img.freepik.com/premium-vector/hand-drawn-cute-doodle-illustration-design_90573-625.jpg"
        className="absolute w-full h-full object-cover opacity-10"
        alt="background"
      />

      {/* 404 Card */}
      <div className="bg-white rounded-3xl w-full max-w-md sm:max-w-lg md:max-w-xl min-h-[300px] shadow-xl p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center text-center relative z-10 mt-20">
        <p className="font-mono font-bold text-gray-900 text-5xl sm:text-6xl md:text-8xl">
          404
        </p>

        <p className="font-mono font-bold text-gray-900 text-base sm:text-lg md:text-xl mt-4 mb-6 px-2">
          Oops! Where tf are you headed to?
        </p>

        <button className="bg-black text-white px-6 py-2 rounded-xl font-mono font-semibold hover:bg-gray-700 transition">
          <a href="home">Leave</a>
        </button>
      </div>
    </div>
  );
}
