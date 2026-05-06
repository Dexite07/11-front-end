import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[#dcfc38] text-gray-900 w-screen min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <div className="bg-black w-full min-h-[80px] flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 py-3 gap-3">
        <Link href="/" className="font-mono text-xl sm:text-2xl text-white whitespace-nowrap">
          Chartreused |
        </Link>

        <div className="w-full sm:w-[220px] md:w-[260px] h-10 bg-white rounded-full flex items-center px-3">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
            className="w-4 h-4 md:w-5 md:h-5"
            alt="Search"
          />
          <p className="text-gray-800 font-mono font-thin ml-2 text-sm md:text-base truncate">
            Search . . .
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row flex-1">
        {/* Sidebar */}
        <div className="bg-[#141414] text-gray-200 w-full lg:w-1/5 p-6 md:p-8">
          <h2 className="font-mono text-xl md:text-2xl font-semibold pb-6 text-white">
            Other stuff idk.
          </h2>

          {[
            ["about", "About -"],
            ["contentshehe", "Contents -"],
            ["contact", "Contact Info -"],
            ["notfound", "Help -"],
          ].map(([link, text]) => (
            <div key={link}>
              <a href={link}>
                <h2 className="font-mono font-thin text-lg py-2 text-gray-300 hover:text-white transition">
                  {text}
                </h2>
              </a>
              <hr className="opacity-30 border-gray-700" />
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-10 p-6 md:p-10 lg:p-20">
          {/* Text */}
          <div className="w-full max-w-3xl text-gray-900">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-extrabold">
              Our contents.
            </h1>

            <a
              href="https://youtu.be/dQw4w9WgXcQ?si=-KFg61Q6RasEqksq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white rounded-xl px-5 py-3 mt-5 font-mono font-semibold hover:bg-gray-800 transition">
                Go to our YouTube Channel
              </button>
            </a>

            <div className="mt-10">
              <p className="font-mono font-bold text-lg md:text-xl">
                Igor - Studio Album
              </p>
              <p className="font-mono text-base md:text-lg">
                By Tyler, The Creator
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-md">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg"
              className="w-full h-auto object-cover bg-black shadow-xl"
              alt="Album Cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
