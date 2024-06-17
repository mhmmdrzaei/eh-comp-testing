import { v4 as uuidv4 } from "uuid";
import { Source_Sans_3 } from "next/font/google";

const source_sans_3 = Source_Sans_3({ subsets: ["latin"], weight: ["400", '600',"700"] });
const Opportunities = ({ c }) => {
  return (
    <section className={`${source_sans_3.className} opp-bg bg-gradient`} >
      <section className="container  m-auto useCasesContainer p-45 md:p-60 lg:p-90 grid lg:grid-cols-2 gap-90 grid-cols-1">
        <div className="headingContainer lg:flex flex-wrap justify-between	 w-full	col-span-2">
          <div className="Heading mb-24 text-white lg:w-3/6 w-6/6	">
            <p className="text-tangerine font-semibold uppercase text-[16px] tracking-[4.5px] mb-20 ">
              {c.oppHeadingContainer.oppSubHead}
            </p>
            <h2 className="font-bold leading-tight max-md:text-h3 my-25 undefined text-balance lg:w-4/6">
              {c.oppHeadingContainer.oppHeader}
            </h2>
            <p className="body lg:w-5/6">{c.oppHeadingContainer.oppDesc}</p>
          </div>
          <div className="countries bg-white/[.1] text-white p-40 lg:w-2/6 rounded-md">
            <span className="text-3xl font-bold">{c.oppNumber}</span>
            <h4 className="body-lg">Countries</h4>
            <p className="body-sm">Where employees are based</p>
          </div>
        </div>

        <section className="listedOpp col-span-2  grid lg:grid-cols-2 gap-24 grid-cols-1">
          {c.oppListedContainer.map((opp) => (
            <div className="opp p-24 bg-white rounded-md" key={opp._key}>
              <a className="body font-semi-bold fs-h5 flex justify-between items-end	" href={opp.oppPosURL} target="_blank">
                <div className="flex items-center">
                {opp.oppPosition}
                <span className="bg-cyan rounded-xl text-white py-2 px-7">{opp.oppRolesOpen}</span>

                </div>

                <div className="arrow"></div>
                
              </a>
            </div>
          ))}
        </section>
        <section className="ctaBox col-span-2 bg-tangerine-gradient rounded-lg  lg:px-90 lg:py-40 p-30 lg:flex justify-between items-center">
          <h2 className="text-white font-bold  lg:w-3/6 leading-tight lg:mb-0 mb-20">{c.ctaBox.ctaHeading}</h2>
          <a
            className="button_btn__FDfac font-semibold text-ps bg-white h-fit	 text-h5 py-10 px-30 button_btnTangerine__8KI_w undefined"
            href={c.ctaBox.oppctaButton.oppCTAurl}
            target={c.ctaBox.oppctaButton.opptabopen ? "_blank" : "_self"}
            rel={c.ctaBox.oppctaButton.opptabopen ? "noopener noreferrer" : ""}
          >
            <span className="button_btnGradient__iPhiB"></span>
            <span>{c.ctaBox.oppctaButton.oppCTAText} </span>
          </a>
        </section>
      </section>
    </section>
  );
};
export default Opportunities;
 