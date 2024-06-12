// sanity.utils
import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config.js'



  export async function getInformation(){
    return createClient(clientConfig).fetch(
      groq`*[_type == "samplePage"]{
        _id,
        title,
        usecase,
          hql {
          hqlHeading,
          hqlQuoteContainer,
          hqlLogos[]{
            "hqlImg": asset->url,
            _key,
            caption,
          },
          },
        education {
            edListpoints,
            edImag {
            "edImg": asset->url,
              caption
            },
          edHeading,
          edText,
          ctaButton
          
        },
        
    }`,

    )
  }
