import { getInformation } from "@/sanity/sanity.utils";
import UseCases from "./components/usecases.component";
import HeadingQuoteLogo from "./components/headingQuoteLogo.component";
import Education from "./components/education.component";
import { v4 as uuidv4 } from 'uuid';
import Opportunities from './components/opportunities.component'
import Staff from "./components/staff.component";

export default async function Home() {
  const page = await getInformation();
  return (
    <>
      {page.map((pageInfo) => {
        const usecase = pageInfo.usecase;
        const hql = pageInfo.hql;
        const education = pageInfo.education
        const opportunity = pageInfo.opportunitiesBox
        const staff = pageInfo.staffContainer

        return (
          <main className="page" key={uuidv4()}>
            <h2 >{pageInfo.title}</h2>
            <UseCases usecase={usecase} />
            <HeadingQuoteLogo hql={hql} />
            <Education education={education}/>
            <Opportunities c={opportunity}/>
            <Staff c={staff}/>
           </main>
        );
      })}
   </>
  );
}
