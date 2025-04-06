import Link from "next/link";


export default function Footer() {



     return (
          <div className="flexCenter flex-col bg-[#121212] text-white gap-10 py-2">

               <h1 className="text-3xl">BitX</h1>
               <div>
                    ملعومات التواصل
                    782902986
               </div>
          {/*      <div className="flexBetween gap-10">
                    <Link href={""} className=" hover:text-orange-400 transition-all">من نحن</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">هدفنا</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">خدماتنا</Link>
                    <Link href={""} className=" hover:text-orange-400 transition-all">مشاريع</Link>
               </div> */}

               <h1>جميع الحقوق محفوظة لدى BitX@2025</h1>


          </div>
     )
}