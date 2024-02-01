import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaTwitter />
                        <span className="text-[15px] ml-[6px]"><a href="https://twitter.com/Ongeri1Felix" target="_blank" rel="noopener noreferrer">Twitter</a></span>  
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]"><a href="https://github.com/FelixOgero" target="_blank" rel="noopener noreferrer">GitHub</a></span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]"><a href="https://www.linkedin.com/in/felix-ongeri-b5a228261/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=felixogero414@gmail.com" target="_blank" rel="noopener noreferrer">felixogero414@gmail.com</a></span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Felix Ongeri 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
    </>
  )
}


export default Footer;