import Image from "next/image";
const HeadingQuoteLogo=({hql})=> {
    return (
        <section className="container m-auto">
        <section className="headingQuoteLogoContainer p-45 md:p-60 lg:p-90 ">
        <h2 className="text-center font-semibold mb-55 lg:mx-90 leading-48 md:mx-60 max-30 ">{hql.hqlHeading} </h2>
        <div className="hqlinnerContainer grid lg:grid-cols-2 gap-24 grid-cols-1 items-center">
          <section className="logos grid grid-cols-3 lg:gap-24 gap-16">
            {hql.hqlLogos.map((logoimg)=>(
              <Image src={logoimg.hqlImg} key={logoimg._key} width={200} height={200} alt={logoimg.caption} className="justify-self-center"/>
            ))}

          </section>
          <section className="quote text-center text-deep-blue mx-16">
            <h4 className="mb-16 font-semibold leading-32">
              {hql.hqlQuoteContainer.hqlQuote}
            </h4>
            <p className="body mb-4">{hql.hqlQuoteContainer.hqlPerson}</p>
            <p className="text-deep-blue/[.5] body"> {hql.hqlQuoteContainer.hqlTitle}</p>
          </section>

        </div>

        </section>

      </section>

    )
}
export default HeadingQuoteLogo;