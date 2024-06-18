import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const Education = ({ c }) => {
  return (
    <section className="  bg-dark-blue">
      <section className={` ${c.containerClass ? c.containerClass : ''} ${c.darkBg ? "text-white" : ""} [&>*]:text-balance container m-auto useCasesContainer p-45 md:p-60 lg:p-90 grid lg:grid-cols-2 gap-20 grid-cols-1 items-center`}
      >
        <section className="eduText text-white m-auto">
          <div className="heading mb-24">
            <h4 className={`large pb-8 font-light${c.subHeadingClass}`}>{c.edHeading.edSubHead}</h4>
            <h2 className={`${c.headingClass}`}>{c.edHeading.edHead}</h2>
          </div>
          <ul className="lg:flex gap-16 ulCheckmarkCyan mb-24 text-ps">
            {c.edListpoints.map((listpoint) => (
              <li key={uuidv4()} >{listpoint}</li>
            ))}

          </ul>
          <div className="edText mb-24 max-w-md">{c.edText}</div>
            <div className="cta">
              <a
                className="button_btn__FDfac font-semibold text-ps button_btnBasic__vnYO3 text-h5 py-10 px-30 button_btnTangerine__8KI_w undefined"
                href={c.ctaButton.edCTAurl}
                target={c.ctaButton.tabopen ? "_blank" : "_self"}
                rel={c.ctaButton.tabopen ? "noopener noreferrer" : ""}
              >
                <span className="button_btnGradient__iPhiB"></span>
                <span>{c.ctaButton.edCTAText} </span>
                
              </a>
            </div>
        </section>
        { (c.edImag.edImg && !c.imgTop) 
                ? <div className={` font-bold flex items-end p-35 bg-no-repeat bg-contain ${c.imgCss ? c.imgCss : 'bg-center'}`} style={{ height: c.imgHeight ? c.imgHeight :'450px' ,backgroundImage: `url(${c.edImag.edImg})` }} alt={c.edImag.caption} >
                  </div>
                : ''
            }
        {/* <section className="eduImg m-auto">
        
        <Image src={education.edImag.edImg} key={uuidv4()}width={500} height={500} alt={education.edImag.caption} />

        </section> */}
      </section>
    </section>
  );
};
export default Education;
