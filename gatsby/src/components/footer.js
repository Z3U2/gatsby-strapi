import React from "react"
import { StaticQuery, graphql } from "gatsby"
import remark from "remark"
import remark2react from "remark-react"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const Footer = class extends React.Component {
    
    constructor(props) {
        super(props)
        this.pathname = ''
    }

    componentDidMount() {
        this.pathname = window.location.pathname
        this.render()
    }
    
    render() {
        const footer = this.props.data.allStrapiFooter.edges[0].node
        return (
            <footer className={"footer " + (this.pathname === "/" ? "home-footer" : "")}>
                <Container>
                    <Row className="footer-row">
                        <Col className="footer-social-buttons">
                            <div style={{ textAlign: 'center' }}>
                                {footer.socialmedias.map(media => (
                                    <a key={media.social_media} href={media.link} className={media.icon}></a>
                                ))}
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col xs="12" md="3" lg="2">
                                    <div className="footer-donate-icon">
                                        <i className={footer.paragraph_icon}></i>
                                    </div>
                                </Col>
                                <Col xs="12" md="9" lg="10">
                                    {
                                        remark()
                                            .use(remark2react)
                                            .processSync(footer.paragraph).contents
                                    }
                                </Col>
                            </Row>


                        </Col>
                    </Row>
                </Container>
                <div className="footer-bottom-bar">
                    <Container>
                        <Row style={{ paddingTop: '20px' }}>
                            <p>&copy; {footer.copyright_year}. {footer.organization_name}.</p>
                        </Row>
                    </Container>
                </div>
            </footer>
        )
    }

    }

export default (props) => {
    return (
        <StaticQuery
            query={graphql`
            {
                allStrapiFooter {
                    edges {
                    node {
                        paragraph
                        paragraph_icon
                        organization_name
                        copyright_year
                        socialmedias {
                            link
                            icon
                            social_media
                        }
                    }
                    }
                }
            }
             `}
            render={data => <Footer data={data} {...props} />}
        />
    )
}