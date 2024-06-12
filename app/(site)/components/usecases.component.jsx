const UseCases=({usecase})=> {
    return (
        <section className="  bg-dark-blue">
        <section className="container m-auto useCasesContainer py-45 md:py-60 lg:py-90 w-11/12 lg:wfull">
        <h4 className="text-white pb-40 font-semibold">{usecase.usecasesContHeading}</h4>
        {usecase.usecases.map((usecase)=> {
          return (
            <div key={usecase._key} className="useCaseContainer grid lg:grid-cols-3 gap-24  grid-cols-1 items-start mb-40">
              <section className="usecaseTitle bg-white text-deep-blue p-40 rounded-md h-full	lg:col-span-1 col-span-2">
                <p className="text-ps mb-16 text-deep-blue/[.5]">Use case</p>
                <h4 className="font-semibold leading-32">{usecase.useCaseHead}</h4>
              </section>
              <div className="benefitSolution bg-white/[.1] rounded-md lg:grid-cols-2 gap-20 grid-cols-1 grid  col-span-2 h-full">
                <section className="useCaseBenefit p-40">
                  <p className="text-ps semi-bold text-white/[.5] mb-16">
                    Benefits
                  </p>
                  <p className="text-ps text-white leading-24">{usecase.useCaseBenefits}</p>
  
                </section>
                <section className="useCaseSolution p-40">
                <p className="text-ps  text-white/[.5] mb-16">
                    Solution
                  </p>
                  <p className="text-ps text-white leading-24">{usecase.useCaseSolution}</p>
                </section>
  
              </div>
  
  
  
            
             </div>
  
          )
  
         })}
  
        </section>
  
        </section>

    )
}
export default UseCases;

