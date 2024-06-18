// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config.js";

export async function getInformation() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "samplePage"]{
        _id,
        title,
        usecase,
        usecasesContainer,
        hql {
          hqlHeading,
          hqlQuoteContainer,
          hqlLogos[]{
            "hqlImg": asset->url,
            _key,
            caption,
          },
          containerClass,
          darkBg,
          headingClass,
          quoteCSS
        },
        education {
            edListpoints,
            edImag {
            "edImg": asset->url,
              caption,
            },
          imgCss,
          imgTop,
          imgDark,
          imgHeight,

          edHeading,
          edText,
          ctaButton,
          containerClass,
          darkBg,
          headingClass,
          subHeadingClass
          
        },
        staffContainer {
        containerClass,
        darkBg,
          staffHeadingContainer,
          headingClass,
          subHeadingClass,
          pplImag {
            "pplImg": asset->url,
              caption,
          },
          imgCss,
          imgTop,
          imgDark,
          imgHeight,
          staffTestiCont,
          testiCSS,
    
      
        },
        opportunitiesBox
        
    }`
  );
}
