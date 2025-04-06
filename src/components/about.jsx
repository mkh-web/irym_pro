

export default function About() {

     return (
          <div className=" h-fit lg:h-[80vh] flex justify-center items-center flex-col gap-10 py-5 bg-[#4a007a]" id="about">

               <div className="font-bold text-white text-4xl">المزيد عن فريق Bix</div>

               <div className="flexCenter flex-col lg:flex-row gap-5">
                    
                    <div className="pt-7 bg-white rounded-[8px] shadow-2xl h-[300px] w-[400px] flex justify-start items-center flex-col gap-7 px-2 hover:-translate-y-2 transition-all">
                         <h1 className="text-3xl">من نحن</h1>
                         <h1>
                              نحن فريق متكامل من الخبراء والمتخصصين في مجالات متنوعة، نجمع بين الخبرة والإبداع لتقديم حلول استثنائية تلبي احتياجات عملائنا وتتجاوز توقعاتهم.
                              <br />
                              تأسس فريق BitX بهدف تقديم خدمات احترافية في مجالات التصميم والتطوير والتسويق الرقمي وإدارة المشاريع ومختلف الخدمات الالكترونية والتقنية والتحليلية الاخرى، ونحرص على مواكبة أحدث التقنيات والاتجاهات العالمية لضمان تقديم خدمات متميزة.
                         </h1>
                    </div>

                    <div className="pt-7 bg-white rounded-[8px] shadow-2xl h-[300px] w-[400px] flex justify-start items-center flex-col gap-7 px-2 hover:-translate-y-2 transition-all">
                         <h1 className="text-3xl">هدفنا</h1>
                         <h1>
                         "في عالم يتسارع فيه التطور التكنولوجي، يقف فريق BitX كشريك موثوق لتقديم حلول مبتكرة واستثنائية. نحن نجمع بين الخبرة الواسعة والإبداع اللامحدود لتحقيق أهدافكم وتجاوز توقعاتكم."
                         </h1>
                    </div>

                    <div className="pt-7 bg-white rounded-[8px] shadow-2xl h-[300px] w-[400px] flex justify-start items-center flex-col gap-7 px-2 hover:-translate-y-2 transition-all">
                         <h1 className="text-3xl">رسالة</h1>
                         <h1>
                              رسالتنا هي تمكين عملائنا من تحقيق أهدافهم من خلال تقديم حلول إبداعية وخدمات متكاملة تلبي احتياجاتهم وتساهم في نموهم وتطورهم.

                              نلتزم بأعلى معايير الجودة والدقة في جميع مشاريعنا، ونسعى دائمًا للتطوير المستمر وتبني أحدث التقنيات والأساليب لضمان تقديم أفضل النتائج لعملائنا.
                         </h1>
                    </div>

               </div>
          </div>
     )
}