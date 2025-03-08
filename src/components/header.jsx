import Link from "next/link";
import Headermobile from "./header/headerMobile"

export default function Header() {

     return (
          <div className=" h-[70px] flex justify-evenly items-center bg-[#F2F6D0]">

               <div>
                    <Link href={""} className="text-3xl">sytnrix</Link>
               </div>

               <div className=" md:flex justify-center items-center gap-10 hidden">
                    <Link href={""} className=" hover:text-orange-400 transition-all">الرئيسية</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">من نحن</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">هدفنا</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">خدماتنا</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">مشاريع</Link>
                    <button className="bg-[#D98324] text-white  p-2 rounded-full shadow-2xl hover:text-[#D98324] hover:bg-white transition-all">
                         <Link  href={""}>تواصل معنا</Link>
                    </button>



               </div>

                    <button className="block lg:hidden" >
                         <Headermobile />
                    </button>

          </div>
     )
}