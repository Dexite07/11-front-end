import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#dcfc38] w-screen h-screen flex flex-col">
      <div className="bg-black w-full h-20 flex items-center pl-5">
<a href="home">
 <p className="font-mono text-2xl ml-50">Chartreused |</p>
        </a>         <div className="w-50 h-2/5 bg-white rounded-full ml-5 flex items-center pl-1">
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
      </div>
      <div className="w-4/5 h-full flex p-20">
      <div className="w-150 h-50 ">
        <h1 className="text-8xl text-[#141414] font-mono font-extrabold">Our contents.</h1>
        <a href="https://youtu.be/dQw4w9WgXcQ?si=-KFg61Q6RasEqksq">
            <button className="bg-black rounded-xl p-5 mt-5 font-mono font-semibold shadow-xl/30 b hover:bg-gray-800">Go to our Youtube Channel</button>
        <p className="text-black font-mono font-bold text-xl mt-60 ml-130 absolute">Igor - Studio Album</p>
        </a>
        
        <p className="text-black font-mono font-regular text-lg mt-70 ml-130 absolute">By Tyler, The Creator</p>
        
      </div>
      <div className="w-140 h-140 bg-black ml-50 mt-40 shadow-xl/40">
        <img src="https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg" className="w-full" alt="Album Cover"></img>
      </div>
      
      
      </div>
      </div>


      </div>
  );
}
