import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#dcfc38] w-screen h-screen flex flex-col">
      <div className="bg-black w-full h-20 flex items-center pl-5">
<a href="">
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
        <a href="lesson">
        <h2 className="font-mono font-thin text-xl pt-2 pb-2 hover:font-semibold">Users -</h2>
        </a>
        <hr className="opacity-50"></hr>
      </div>
      <div className="w-4/5 h-full flex p-20">
      <div className="w-150 h-50 ">
        <h1 className="text-8xl text-[#141414] font-mono font-extrabold">What is  Chartreused?</h1>
        <div className="w-150 h-contain">
          <p className="text-[#141414] font-mono mt-5"> We&apos;ve built an extraordinary platform for people who wants to expand their music territory. Chartreused specializes in creating an oen platform for users to engage in inclusive global music hub where everyone can share their own personal playlists and charts.</p>
        </div>
        <div className="w-170 h-contain">
          <p className="text-[#141414] font-mono mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="w-150 h-contain">
          <p className="text-[#141414] font-mono mt-5">If there is anything you would like to say about our website, feel free to contacts us via our website&apos;s contact page.</p>
        </div>
        <p className="text-black font-mono font-bold text-xl mt-15 ml-116 absolute">Salad Days - Studio Album</p>
        <p className="text-black font-mono font-regular text-lg mt-24 ml-153 absolute">By Mac Demarco</p>
        
      </div>
      <div className="w-140 h-140 bg-black ml-50 mt-40 shadow-xl/40">
        <img src="https://cdn-images.dzcdn.net/images/cover/96f16ccb3da4d231b72bc5de25a16202/0x1900-000000-80-0-0.jpg" className="w-full" alt="Album Cover"></img>
      </div>
      
      
      </div>
      </div>


      </div>
  );
}
