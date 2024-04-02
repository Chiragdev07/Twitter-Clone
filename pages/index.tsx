import React from "react";
import { BsTwitter } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { BiHash } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import FeedCard from "@/componets/FeedCard";
import { BiMoney } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";


interface TwitterSidebarButton {
  title: String;
  icon: React.ReactNode;
}

const sidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: "Home",
    icon: <BiHomeCircle />
  },
  {
    title: "Explore",
    icon: <BiHash />
  },
  {
    title: "Notification",
    icon: <BsBell />
  },
  {
    title: "Messages",
    icon: <BsEnvelope />
  },
  {
    title: "Bookmark",
    icon: <BsBookmark />
  },
  {
    title: "Twitter Blue ",
    icon: <BiMoney />
  },
  {
    title: "Profile",
    icon: <BiUser />
  },
  {
    title: "More",
    icon: <SlOptions />
  },
]

export default function Home() {
  return (
    <div >
      <div className="grid grid-cols-12 h-screen w-screen  px-56 ">
        
        <div className="col-span-3   justify-start text-white ml-18 ">
          <div className="text-2xl h-fit mt-1 hover:bg-gray-600 rounded-full p-4 cursor-pointer transition-all w-fit">
            <BsTwitter />
          </div>
          <div className="mt-1 text-xl pr-4">
            <ul>
              {sidebarMenuItems.map(item => <li className="flex justify-start items-center gap-4 cursor-pointer hover:bg-gray-800 rounded-full px-5 py-2 w-fit mt-2 ">
                <span className="text-3xl">{item.icon}</span><span>{item.title}</span></li>)}
            </ul>
            <div className="mt-5 px-3"> 
            <button className="bg-[#1d9bf0] font-semibold py-2 px-4 rounded-full w-full text-lg">
              Tweet
            </button>
            </div>
          </div>
        </div>


        <div className="col-span-6 text-white border-r-[1px] h-screen overflow-scroll no-scrollbar border-l-[1px] border-gray-700  ">
        

                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                  <FeedCard/>
                 
        </div>

        
        <div className="col-span-3 text-white">Follow</div>

      </div>
    </div>
  );
}
