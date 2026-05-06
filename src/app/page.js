import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#dcfc38] w-screen min-h-screen flex flex-col overflow-x-hidden">
      
      {/* Navbar */}
      <div className="bg-black w-full min-h-[80px] flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 py-3 gap-3">
        <a href="/">
          <p className="font-mono text-lg sm:text-xl md:text-2xl whitespace-nowrap text-white">
            Chartreused |
          </p>
        </a>

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

      {/* Main Layout */}
      <div className="w-full flex flex-col lg:flex-row flex-1">
        
        {/* Sidebar */}
        <div className="bg-[#141414] w-full lg:w-[20%] xl:w-[18%] h-auto p-5 md:p-8 lg:p-10">
          <h2 className="font-mono text-xl md:text-2xl font-semibold pb-6 md:pb-10 text-white">
            Other stuff idk.
          </h2>

          {[
            ["about", "About -"],
            ["contentshehe", "Contents -"],
            ["contact", "Contact Info -"],
            ["notfound", "Help -"],
            ["lesson", "Users -"],
          ].map(([link, text]) => (
            <div key={link}>
              <a href={link}>
                <h2 className="font-mono font-thin text-base md:text-lg lg:text-xl py-2 text-gray-200 hover:text-white hover:font-semibold transition-all duration-200">
                  {text}
                </h2>
              </a>
              <hr className="opacity-30 border-gray-500" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-[80%] xl:w-[82%] flex flex-col xl:flex-row items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 gap-10 xl:gap-16">
          
          {/* Text Section */}
          <div className="w-full xl:w-1/2 text-center xl:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#141414] font-mono font-extrabold leading-tight break-words">
              Welcome to Chartreused.
            </h1>

            <div className="w-full max-w-md mx-auto xl:mx-0">
              <p className="text-[#141414] font-mono mt-5 text-sm sm:text-base md:text-lg">
                We&apos;ve built an extraordinary platform for people who want to
                expand their music territory.
              </p>
            </div>

            <div className="mt-8 md:mt-12 xl:mt-20">
              <p className="text-black font-mono font-bold text-lg md:text-xl">
                Bewitched - Studio Album
              </p>
              <p className="text-black font-mono text-base md:text-lg">
                By Laufey
              </p>
            </div>
          </div>

          {/* Album Cover */}
          <div className="w-full xl:w-1/2 flex justify-center">
            <div className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px] bg-black shadow-xl">
              <img
                src="https://i.scdn.co/image/ab67616d0000b27374c732f8aa0e0ccbb3d17d96"
                className="w-full h-full object-cover"
                alt="Album Cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}