import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import Parallax from "../components/parallax"
import Section from "../components/section"

export default ({ data }) => {

    const page = data.strapiArticle
    const image1 = page.banner.childImageSharp.fixed

    return (
        <Layout>
            <Parallax
                title={page.title}
                subtitle={page.subtitle}
                button={""}
                src={image1.src}
            />

            {page.sections.map(section => {
                return (
                    <Section section={section} key={section.name}/>
                )
            })}

        </Layout>   
    )
}

export const query = graphql`
{
  strapiArticle(title: {eq: "Histoire"}) {
    title
    subtitle
    banner {
      childImageSharp {
        fixed(height: 600) {
           ...GatsbyImageSharpFixed
        }
      }
  	}
    sections {
      image {
          childImageSharp {
            fluid(maxWidth: 900) {
      ...GatsbyImageSharpFluid_noBase64
    }
          }
        
      }
      text
      name
    }
  }
}

`