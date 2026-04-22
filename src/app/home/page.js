import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#dcfc38] w-screen h-screen flex flex-col">
      <div className="bg-black w-full h-20 flex items-center pl-5">
        <a href="home">
 <p className="font-mono text-2xl ml-50">Chartreused |</p>
        </a>
        
         <div className="w-50 h-2/5 bg-white rounded-full ml-5 flex items-center pl-1">
         <img src="https://icons.veryicon.com/png/o/miscellaneous/simple-linear-icon-library/search-316.png" className="w-5 h-5" alt="Search"></img>
         <p className="text-gray-800 font-mono font-thin ml-1">Search . . .</p>
         </div>
      </div>
      <div className="w-full h-full flex ">
      <div className="bg-[#141414] w-1/5 h-full p-5 pl-10 pr-10">
        <h2 className="font-mono text-2xl font-semibold pt-8 pb-10">Other stuff idk.</h2>
        <a href="about">
          <h2 className="font-mono font-thin text-xl pt-2 pb-2 hover:font-semibold">About -</h2>
        </a>
        
        <hr className="opacity-50"></hr>
        <a href="contentshehe">
                  <h2 className="font-mono font-thin text-xl pt-2 pb-2 hover:font-semibold">Contents -</h2>
        </a>

        <hr className="opacity-50"></hr>

        <a href="contact">
          <h2 className="font-mono font-thin text-xl pt-2 pb-2 hover:font-semibold">Contact Info -</h2>
        </a>
        
        <hr className="opacity-50"></hr>
        <a href="notfound">
        <h2 className="font-mono font-thin text-xl pt-2 pb-2 hover:font-semibold">Help -</h2>
        </a>

        <hr className="opacity-50"></hr>

        <a href="lesson">
        <h2 className="font-mono font-thin text-xl pt-2 pb-2 hover:font-semibold">Users -</h2>
        </a>
        <hr className="opacity-50"></hr>
      </div>
      <div className="w-4/5 h-full flex p-20">
      <div className="w-150 h-50 ">
        <h1 className="text-8xl text-[#141414] font-mono font-extrabold">Welcome to Chartreused.</h1>
        <div className="w-80 h-full">
          <p className="text-[#141414] font-mono mt-5"> We&apos;ve built an extraordinary platform for people who wants to expand their music territory.</p>
        </div>
        <p className="text-black font-mono font-bold text-xl mt-60 ml-110 absolute">Bewitched - Studio Album</p>
        <p className="text-black font-mono font-regular text-lg mt-70 ml-157 absolute">By Laufey</p>
        
      </div>
      <div className="w-140 h-140 bg-black ml-50 mt-40 shadow-xl/40">
        <img src="https://i.scdn.co/image/ab67616d0000b27374c732f8aa0e0ccbb3d17d96"></img>
      </div>
      
      
      </div>
      </div>


      </div>
  );
}
