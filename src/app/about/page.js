import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#dcfc38] w-screen min-h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <div className="bg-black w-full h-20 flex items-center pl-5">
        <a href="home">
          <p className="font-mono text-2xl ml-10 sm:ml-20 text-white">
            Chartreused |
          </p>
        </a>

        <div className="w-50 h-10 bg-white rounded-full ml-5 flex items-center pl-2">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png"
            className="w-5 h-5"
            alt="Search"
          />
          <p className="text-gray-800 font-mono font-thin ml-2">
            Search . . .
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="w-full flex flex-col lg:flex-row flex-1 min-h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="bg-[#141414] w-full lg:w-1/5 p-6 md:p-8 lg:min-h-[calc(100vh-80px)]">
          <h2 className="font-mono text-2xl font-semibold pt-4 pb-8 text-white">
            Other stuff idk.
          </h2>

          <a href="about">
            <h2 className="font-mono font-thin text-xl py-2 text-gray-300 hover:text-white">
              About -
            </h2>
          </a>
          <hr className="opacity-40" />

          <a href="contentshehe">
            <h2 className="font-mono font-thin text-xl py-2 text-gray-300 hover:text-white">
              Contents -
            </h2>
          </a>
          <hr className="opacity-40" />

          <a href="contact">
            <h2 className="font-mono font-thin text-xl py-2 text-gray-300 hover:text-white">
              Contact Info -
            </h2>
          </a>
          <hr className="opacity-40" />

          <a href="notfound">
            <h2 className="font-mono font-thin text-xl py-2 text-gray-300 hover:text-white">
              Help -
            </h2>
          </a>
          <hr className="opacity-40" />

          <a href="lesson">
            <h2 className="font-mono font-thin text-xl py-2 text-gray-300 hover:text-white">
              Users -
            </h2>
          </a>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row items-center justify-center flex-1 min-h-[calc(100vh-80px)] p-6 md:p-10 lg:p-20 gap-10">
          {/* Text */}
          <div className="w-full max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-extrabold text-[#141414]">
              What is Chartreused?
            </h1>

            <p className="text-[#141414] font-mono mt-5">
              We&apos;ve built an extraordinary platform for people who want to expand their music territory. Chartreused specializes in creating an open platform for users to engage in an inclusive global music hub where everyone can share their own personal playlists and charts.
            </p>

            <p className="text-[#141414] font-mono mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="text-[#141414] font-mono mt-5">
              If there is anything you would like to say about our website, feel free to contact us via our contact page.
            </p>

            <div className="mt-10">
              <p className="text-black font-mono font-bold text-xl">
                Salad Days - Studio Album
              </p>
              <p className="text-black font-mono">
                By Mac Demarco
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-md">
            <img
              src="https://cdn-images.dzcdn.net/images/cover/96f16ccb3da4d231b72bc5de25a16202/0x1900-000000-80-0-0.jpg"
              className="w-full h-auto object-cover bg-black shadow-xl"
              alt="Album Cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}