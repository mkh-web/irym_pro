import Image from "next/image";
import Link from "next/link";


export default function Hero() {

     return (
          <div className=" h-screen flex justify-evenly items-center bg-[#F2F6D0]">

                    <div className="flex justify-evenly items-center w-full flex-col lg:flex-row">
                         <div className="w-96 flex gap-3.5 flex-col">
                                   <h1 className="text-orange-500 text-4xl font-bold">فريق sytnrix</h1>
                              <div>
                                   <p className=" text-2xl"
                                   >فريق متخصص في تقديم حلول إبداعية وخدمات احترافية لتحقيق رؤيتكم وتطلعاتكم بأعلى معايير الجودة والدقة
                                        .</p>

                              </div>
                         </div>

                         <div>
                              <Image src={"web-developer.svg"} width={500} height={600} alt="webdev"/>
                         </div>
                    </div>


          </div>
     )
}