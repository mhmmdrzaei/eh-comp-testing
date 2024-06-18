import Image from "next/image";

import { v4 as uuidv4 } from 'uuid';
import { Source_Sans_3 } from "next/font/google";
import SMCarousel from "./carousel.componnet";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400", '600',"700"] });
const Staff = ({ c }) => {
  return (

    <section className={`${source_sans_3.className}  ${c.containerClass ? c.containerClass : ''} ${c.darkBg ? "text-white" : ""} [&>*]:text-balance`}>
      <div className="Heading col-span-9">
            <h4 className={`${c.subHeadingClass} font-light uppercase text-[16px] tracking-[4.5px]`}>{c.staffHeadingContainer.staffSubHead}</h4>
            <h2 className={`${c.headingClass} font-bold`}>{c.staffHeadingContainer.staffHeader}</h2>
      </div>
      { (c.pplImag.pplImg && !c.imgTop) 
                ? <div className={` font-bold flex items-end p-35 bg-no-repeat bg-cover ${c.imgCss ? c.imgCss : 'bg-center'}`} style={{ height: c.imgHeight ? c.imgHeight :'450px' ,backgroundImage: `url(${c.pplImag.pplImg})` }} alt={c.pplImag.caption} >
                  </div>
                : ''
            }
      {/* <section className="staff m-auto lg:col-span-5 md:col-span-5 col-span-9">
        <Image src={c.pplImag.pplImg} key={uuidv4()}width={700} height={700} alt={c.pplImag.caption} />

      </section> */}
      <section className={`${c.testiCSS} lg:col-span-4 md:col-span-4 lg:px-40 col-span-9 slider` }>
      <SMCarousel c={c}/>
      </section>
    


      
    </section>

  );
};
export default Staff;
