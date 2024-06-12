// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config.js'



  export async function getInformation(){
    return createClient(clientConfig).fetch(
      groq`*[_type == "samplePage"]{
        _id,
        title,
        usecasesContainer,
          headingQuoteLogo {
          hqlHeading,
          hqlQuoteContainer,
          hqlLogos[]{
            "hqlImg": asset->url,
            _key,
            caption,
          },
          }
        
    }`,

    )
  }
