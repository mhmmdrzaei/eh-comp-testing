import { v4 as uuidv4 } from "uuid";
import styles from './demo-container.module.scss';
const DemoTab = ({ c, style }) => {
    
  return (
    <div className="text-white">
      <section className={styles.demoTabTitle}>
        <span className="font-bold leading-tight">{c.heading}</span>
        <h2 className={`${style? style :''} font-bold leading-tight mb-40`}>{c.demoTitle}</h2>
        <h4 >{c.headingDesc}</h4>
      </section>
      <section className="demo-points">
        <h4 class="font-semibold text-cyan pt-25 pb-25">
          {c.demoPointers.demoPointersHeading}
        </h4>
        <ul class="ulCheckmarkCyan mb-24 text-ps">
          {c.demoPointers.demoPoints.map((point) => (
            <li class="text-h5 pb-20" key={uuidv4()}>
              {point}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DemoTab;
