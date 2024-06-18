import Image from "next/image";
const HeadingQuoteLogo=({c})=> {
    return (
        <section className="container m-auto">
        <section className={` ${c.containerClass ? c.containerClass : ''} ${c.darkBg ? "text-white" : ""} [&>*]:text-balance`}>
        <h2 className={`${c.headingClass}`}>{c.hqlHeading} </h2>
        <div className={`${c.colClass} grid gap-24 grid-cols-1 lg:grid-cols-2 `}>
          <section className="logos grid grid-cols-3 lg:gap-24 gap-16">
            {c.hqlLogos.map((logoimg)=>(
              <Image src={logoimg.hqlImg} key={logoimg._key} width={200} height={200} alt={logoimg.caption} className="justify-self-center"/>
            ))}

          </section>
          <section className={`${c.quoteCSS}`}>
            <h4 className="mb-16 font-semibold leading-32">
              {c.hqlQuoteContainer.hqlQuote}
            </h4>
            <p className="body mb-4">{c.hqlQuoteContainer.hqlPerson}</p>
            <p className="text-deep-blue/[.5] body"> {c.hqlQuoteContainer.hqlTitle}</p>
          </section>

        </div>

        </section>

      </section>

    )
}
export default HeadingQuoteLogo;