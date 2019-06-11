import React from "react"
import Img from "gatsby-image"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

export default ({quote}) => (
    <Col
        key={quote.id}
        className="quote-col"
        xs={12}
        md={6}
        lg={4}
    >
        <Container>
            <Card className="quote-card">
                <Card.Body className="main-page-quote">
                    <Img fixed={quote.photo.childImageSharp.fixed} alt={quote.name} />
                    <hr />
                    <blockquote className="blockquote mb-0 text-center">
                        <p>
                            {' ' + quote.text + ' '}
                        </p>
                        <footer className="blockquote-footer">
                            {quote.name} <cite title={quote.position}>{quote.position}</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </Container>
    </Col>
)