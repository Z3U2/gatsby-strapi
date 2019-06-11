import React from "react"
import { graphql } from "gatsby"
import remark from "remark"
import remark2react from "remark-react"

import Layout from "../components/layout"
import MainContent from "../components/main-content"
import Parallax from "../components/parallax"
import QuoteList from "../components/quote-list"
import Quote from "../components/quote"
import ImageSection from "../components/image-section"

export default ({data}) => {

    const page = data.allStrapiFirstpage.edges[0].node
    const image1 = page.banner.image.childImageSharp.fixed
    const image2 = page.events.image.childImageSharp.fixed

    return (
        <Layout>
            <Parallax 
                title = {page.banner.title}
                subtitle={page.banner.subtitle}
                button ={page.presentation_button}
                src = {image1.src}
            />
            <MainContent>
                <div className="main-page-markdown">
                    {
                        remark()
                            .use(remark2react)
                            .processSync(page.presentation).contents
                    }
                </div>
            </MainContent>
            <Parallax
                title={page.events.title}
                subtitle={page.events.subtitle}
                button={page.events_button}
                src={image2.src}
            />
            <QuoteList title="Le bureau">
                {
                    page.quotes.map(quote => (
                        <Quote key={quote.id} quote={quote}/>
                    ))
                }
            </QuoteList>
            <ImageSection 
                image = {page.participate_icon}
                button = {page.participate_button}
                text = {page.participate}
            />
            <ImageSection
                image = {page.donation_icon}
                button = {page.donation_button}
                text = {page.donation}
                imageAlign = "left"
            />
        </Layout>
    )
}

export const query = graphql`
{
  allStrapiFirstpage {
    edges {
      node {
        id
        banner {
          id
          title
          subtitle
          image {
            childImageSharp {
                fixed(height: 600) {
                    ...GatsbyImageSharpFixed
                }
            }
          }
        }
        presentation
        presentation_button
        events {
          title
          subtitle
          image {
            childImageSharp {
                fixed(height: 600) {
                    ...GatsbyImageSharpFixed
                }
            }
          }
        }
        events_button
        quotes {
          id
          name
          position
          text
          photo {
            childImageSharp {
                fixed(height: 150) {
                    ...GatsbyImageSharpFixed
                }
            }
          }
        }
        participate
        participate_button
        participate_icon
        donation
        donation_button
        donation_icon
      }
    }
  }
}
`