import React from "react";
import Image  from "next/image";
import { BiMessageRounded } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUpload } from "react-icons/ai";

const FeedCard:React.FC=()=>{
  
    return (
        <div className="border  border-r-0 border-l-0 border-b-0 border-gray-500 p-4  hover:bg-slate-900  transition-all cursor-pointer" >
        <div className="grid grid-cols-12 gap-2" >
              <div className="col-span-1" >
                  <Image src="https://livewiredemos.com/images/avatar.png" alt="User-image" height={50} width={50}/>
              
              </div> 

              <div className="col-span-11">
              <h5>RAVAL CHIRAG</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, doloribus aspernatur! Accusantium unde doloremque obcaecati suscipit laborum maxime culpa similique?</p>
              <div className=" mt-2 flex justify-between text-2xl" style={{ justifyContent: 'space-between' }}>
                    <div> 
                        <BiMessageRounded/>
                    </div>

                    <div> 
                        <FaRetweet/>
                    </div>

                    <div> 
                        <AiOutlineHeart/>
                    </div>

                    <div> 
                        <AiOutlineUpload/>
                    </div>
                    
              </div>
              </div>

        </div>
    </div>
      
    );
}

export default FeedCard;