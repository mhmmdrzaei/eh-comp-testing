import Image from "next/image";

import { v4 as uuidv4 } from 'uuid';
import { Source_Sans_3 } from "next/font/google";
import SMCarousel from "./carousel.componnet";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400", '600',"700"] });
const Staff = ({ c }) => {
  return (

    <section className={`${source_sans_3.className} container m-auto useCasesContainer p-45 md:p-60 lg:p-90 items-center grid grid-cols-9 lg:gap-40 gap-24`}>
      <div className="Heading col-span-9">
            <p className="text-tangerine font-semibold uppercase text-[16px] tracking-[4.5px] ">{c.staffHeadingContainer.staffSubHead}</p>
            <h2 className="font-bold">{c.staffHeadingContainer.staffHeader}</h2>
      </div>
      <section className="staff m-auto lg:col-span-5 md:col-span-5 col-span-9">
        <Image src={c.pplImag.pplImg} key={uuidv4()}width={700} height={700} alt={c.pplImag.caption} />

      </section>
      <section className="slider lg:col-span-4 md:col-span-4 lg:px-40 col-span-9">
      <SMCarousel c={c}/>
      </section>
      <section className="slider col-span-4 px-40">
        

</section>

    


      
    </section>

  );
};
export default Staff;
