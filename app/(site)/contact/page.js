import { getDemos } from "@/sanity/sanity.utils";
import DemoBox from "../components/contact/DemoBox";
import { v4 as uuidv4 } from "uuid";
import styles from '../components/contact/demo-container.module.scss';

export default async function Contact() {
  const demos = await getDemos();
  return (
    <>
      {demos.map((c) => {
        const self = c.demoOptions.selfGuided.descriptionFields;
        const p = c.demoOptions.personalized.descriptionFields;
        return (
          <main key={uuidv4()}>
            <h1>{c.title}</h1>
            <section className={`${
              styles.demoContainer}`}>
              <DemoBox c={c}/>
            </section>
          </main>
        );
      })}
    </>
  );
}
