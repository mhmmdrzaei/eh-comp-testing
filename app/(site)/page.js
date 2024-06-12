import { getInformation } from "@/sanity/sanity.utils";
import Image from "next/image";

export default async function Home() {
  const page = await getInformation();
  return (
    <main className="page">
      {page.map((pageInfo) => ( 
      
      <>
      <h2>{pageInfo.title}</h2>



      <section className="  bg-dark-blue">
      <section className="container m-auto useCasesContainer p-45 md:p-60 lg:p-90">
      <h4 className="text-white pb-40">{pageInfo.usecasesContainer.usecasesContHeading}</h4>
      {pageInfo.usecasesContainer.usecases.map((usecase)=> {
        return (
          <div key={usecase._key} className="useCaseContainer grid lg:grid-cols-3 gap-20 grid-cols-1 items-start mb-40">
            <section className="usecaseTitle bg-white text-deep-blue p-24 rounded-md h-full	lg:col-span-1 col-span-2">
              <p className="text-ps mb-24 text-deep-blue/[.5]">Use case</p>
              <h4 className="font-bold"> {usecase.useCaseHead}</h4>
            </section>
            <div className="benefitSolution bg-white/[.1] rounded-md lg:grid-cols-2 gap-20 grid-cols-1 grid  col-span-2 h-full">
              <section className="useCaseBenefit p-24">
                <p className="text-ps semi-bold text-white/[.5] mb-24">
                  Benefits
                </p>
                <p className="text-ps text-white">{usecase.useCaseBenefits}</p>

              </section>
              <section className="useCaseSolution p-24">
              <p className="text-ps  text-white/[.5] mb-24">
                  Solution
                </p>
                <p className="text-ps text-white">{usecase.useCaseSolution}</p>
              </section>

            </div>



          
           </div>

        )

       })}

      </section>

      </section>

      <section className="container m-auto">
        <section className="headingQuoteLogoContainer p-45 md:p-60 lg:p-90 ">
        <h2 className="text-center font-semibold mb-55 lg:mx-90 md:mx-60 ">{pageInfo.headingQuoteLogo.hqlHeading} </h2>
        <div className="hqlinnerContainer grid lg:grid-cols-2 gap-20 grid-cols-1 items-end">
          <section className="logos grid grid-cols-3 gap-16">
            {pageInfo.headingQuoteLogo.hqlLogos.map((logoimg)=>(
              <Image src={logoimg.hqlImg} key={logoimg._key} width={200} height={200} alt={logoimg.caption} />
            ))}

          </section>
          <section className="quote text-center">
            <h4 className="mb-20">
              {pageInfo.headingQuoteLogo.hqlQuoteContainer.hqlQuote}
            </h4>
            <p className="body mb-5">{pageInfo.headingQuoteLogo.hqlQuoteContainer.hqlPerson}</p>
            <p className="text-gray body"> {pageInfo.headingQuoteLogo.hqlQuoteContainer.hqlTitle}</p>
          </section>

        </div>

        </section>

      </section>






      </>

      ))}

    </main>
  );
}
