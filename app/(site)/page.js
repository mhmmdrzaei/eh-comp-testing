import { getInformation } from "@/sanity/sanity.utils";
import UseCases from "./components/usecases.component";
import HeadingQuoteLogo from "./components/headingQuoteLogo";
import Education from "./components/education.component";
import { v4 as uuidv4 } from 'uuid';

export default async function Home() {
  const page = await getInformation();
  return (
    <>
      {page.map((pageInfo) => {
        const usecase = pageInfo.usecasesContainer;
        const hql = pageInfo.headingQuoteLogo;
        const education = pageInfo.education

        return (
          <main className="page" key={uuidv4()}>
            <h2 >{pageInfo.title}</h2>
            <UseCases usecase={usecase} />
            <HeadingQuoteLogo hql={hql} />
            <Education education={education}/>
           </main>
        );
      })}
   </>
  );
}
