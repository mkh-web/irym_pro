import Link from "next/link";
import Headermobile from "./header/headerMobile"
import Image from "next/image";

export default function Header() {

     return (
          <div className=" h-[70px] flex justify-evenly items-center fixed w-full  z-50 bg-white/10 backdrop-blur-md rounded-xl  hover:border-white/20">

               <div className="flexCenter flex-row">
                    <Image src={"/favicon.ico"} width={50} height={50}/>
                    <Link href={""} className="text-3xl">BitX</Link>
               </div>

               <div className=" md:flex justify-center items-center gap-10 hidden font-bold text-xl">
                    <Link href={"/"} className=" hover:text-[#6a0dad] transition-all">الرئيسية</Link>
                    <Link href={"#about"} className=" hover:text-[#6a0dad] transition-all">من نحن</Link>
                    <Link href={"#goal"} className=" hover:text-[#6a0dad] transition-all">هدفنا</Link>
                    <Link href={"#serv"} className=" hover:text-[#6a0dad] transition-all">خدماتنا</Link>
                    <Link href={"#proj"} className=" hover:text-[#6a0dad] transition-all">مشاريع</Link>
                    <button className="bg-[#4a007a] text-white  p-2 rounded-full shadow-xl hover:text-[#450f64] hover:bg-white transition-all">
                         <Link  href={""}>تواصل معنا</Link>
                    </button>



               </div>

                    <button className="block lg:hidden" >
                         <Headermobile />
                    </button>

          </div>
     )
}