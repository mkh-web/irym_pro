"use client";
import { useState } from "react";



export default function Headermobile() {

     const [isOpen, setIsOpen] = useState(false);

     return (
          <div className="xl:hidden">

               <div className="flex flex-col gap-[4.5px] cursor-pointer" onClick={() => { setIsOpen((prev) => !prev) }}>
                    <div className={`w-6 h-1 bg-orange-500 rounded-sm ${isOpen ? "rotate-45" : ""} origin-left ease-in-out duration-500`} />
                    <div className={`w-6 h-1 bg-orange-500 rounded-sm ${isOpen ? "opacity-0" : ""} ease-in-out duration-500`} />
                    <div className={`w-6 h-1 bg-orange-500 rounded-sm ${isOpen ? "-rotate-45" : ""} origin-left ease-in-out duration-500`} />
               </div>

         {/*       {NavbarList.list.map((links) => (
                    <Link href={links.pathname} key={links.title} className={`${pathname === links.pathname && "bg-white text-[#171717] rounded-lg !opacity-100"}
                            flex justify-between items-center w-full p-5 flex-row`}>
                         {links.title}
                         {links.icon}
                    </Link>
               ))} */}
          </div>
     )


}