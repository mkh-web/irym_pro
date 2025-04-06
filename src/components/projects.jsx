import Image from "next/image"

export default function Projects() {


     return (
          <div className="flex justify-center items-center flex-col flex-wrap w-full gap-4 mt-5" id="proj">
                    <h1 className="text-3xl mb-5">مشاريع الفريق</h1>

               <div className="flexCenter w-full flex-wrap gap-2 my-2">
            
               <div className=" overflow-clip lg:col-span-1 row-span-1  relative rounded-lg w-[600px] h-[300px]">

               <Image src={"/web1.png"} alt={"wireframe"} width={1920} height={1080} className="bg-cover w-full  h-full rounded-md shadow-md" />

                    <div className=" absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full">
                        <div className="flex justify-start items-end w-full h-full text-white pb-16  pr-5 2xl:pr-20 ">

                            <div className="h-[100px]">
                                <h1 className="font-bold lg:text-xl">  مجموعة الاحقاف</h1>
                                <h1 className="h-[110px] w-full lg:w-[80%] lg:h-[60px] text-md ml-7">مشروع تم تصميمة بستخدام احدث الادوات و التققنيات الي تساعدة في SEO   </h1>
                            </div>

                        </div>
                    </div>

                </div>
               <div className=" overflow-clip lg:col-span-1 row-span-1  relative rounded-lg w-[600px] h-[300px]">

               <Image src={"/web2.png"} alt={"wireframe"} width={1920} height={1080} className="bg-cover w-full  h-full rounded-md shadow-md" />

                    <div className=" absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full">
                        <div className="flex justify-start items-end w-full h-full text-white pb-16  pr-5 2xl:pr-20 ">

                            <div className="h-[100px]">
                                <h1 className="font-bold lg:text-xl">  موقع IADN</h1>
                                <h1 className="h-[110px] w-full lg:w-[80%] lg:h-[60px] text-md ml-7">مقع للسفريات تم تصميمة باستخدام مكتبة نيسكت </h1>
                            </div>

                        </div>
                    </div>

                </div>

               <div className=" overflow-clip lg:col-span-1 row-span-1  relative rounded-lg w-[600px] h-[300px]">

               <Image src={"/web3.png"} alt={"wireframe"} width={1920} height={1080} className="bg-cover w-full  h-full rounded-md shadow-md" />

                    <div className=" absolute top-0 left-0 bg-gradient-to-t from-black to-transparent w-full h-full">
                        <div className="flex justify-start items-end w-full h-full text-white pb-16  pr-5 2xl:pr-20 ">

                            <div className="h-[100px]">
                                <h1 className="font-bold lg:text-xl">  موقع سوشل ميديا mkh</h1>
                                <h1 className="h-[110px] w-full lg:w-[80%] lg:h-[60px] text-md ml-7">موقع تم تصتيممة باستخدام مكاتب قوية مثل رياكت و فريمر موشن   </h1>
                            </div>

                        </div>
                    </div>

                </div>


               </div>

          </div>
     )
}