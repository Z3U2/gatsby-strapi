import React from "react"
import remark from "remark"
import remark2react from "remark-react"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default ({section}) => {
        return (
            <div className="article-section">
                <Container>
                    <div className="main-page-markdown">
                        {
                            remark()
                                .use(remark2react)
                                .processSync(section.text).contents
                        }
                    </div>
                    <Col
                        className = "section-image-col"
                        xs={{ span: 12, offset: 0 }}
                        md={{ span: 10, offset: 1 }}
                    >
                        <Img fluid={section.image.childImageSharp.fluid} />
                    </Col>
                </Container>
            </div> 
        )
}