import { graphql, useStaticQuery } from "gatsby"

const useSeo = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsSite {
        faviconMetaTags {
          tags
        }
        globalSeo {
          siteName
          titleSuffix
          fallbackSeo {
            title
            description
          }
        }
      }
    }
  `)

  return data.datoCmsSite
}

export default useSeo
