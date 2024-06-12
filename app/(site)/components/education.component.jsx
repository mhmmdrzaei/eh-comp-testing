import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
const Education = ({ education }) => {
  return (
    <section className="  bg-dark-blue">
      <section className="container m-auto useCasesContainer p-45 md:p-60 lg:p-90 grid lg:grid-cols-2 gap-20 grid-cols-1 items-center">
        <section className="eduText text-white m-auto">
          <div className="Heading mb-24">
            <p className="large pb-8 text-teal">{education.edHeading.edSubHead}</p>
            <h2 className="font-semibold">{education.edHeading.edHead}</h2>
          </div>
          <ul className="lg:flex gap-16 ulCheckmarkCyan mb-24 text-ps">
            {education.edListpoints.map((listpoint) => (
              <li key={uuidv4()} >{listpoint}</li>
            ))}

          </ul>
          <div className="edText mb-24 max-w-md">{education.edText}</div>
            <div className="cta">
              <a
                className="button_btn__FDfac font-semibold text-ps button_btnBasic__vnYO3 text-h5 py-10 px-30 button_btnTangerine__8KI_w undefined"
                href={education.ctaButton.edCTAurl}
                target={education.ctaButton.tabopen ? "_blank" : "_self"}
                rel={education.ctaButton.tabopen ? "noopener noreferrer" : ""}
              >
                <span className="button_btnGradient__iPhiB"></span>
                <span>{education.ctaButton.edCTAText} </span>
                
              </a>
            </div>
        </section>
        <section className="eduImg m-auto">
        <Image src={education.edImag.edImg} key={uuidv4()}width={500} height={500} alt={education.edImag.caption} />

        </section>
      </section>
    </section>
  );
};
export default Education;
