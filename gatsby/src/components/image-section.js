import React from "react"
import remark from "remark"
import remark2react from "remark-react"

import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import MainContent from "./main-content"

export default ({ text, image, button, imageAlign }) => (
    <MainContent>
        <Row>
            <Col
                xs={{
                    span : 12,
                    order : 2
                }}
                md={{
                    order : (imageAlign === "left" ? 2 : 1),
                    span : 6
                }}

            >
                <div className="main-page-markdown image-section-markdown-col">
                    {
                        remark()
                            .use(remark2react)
                            .processSync(text).contents
                    }
                    <div>
                        <Button variant="secondary">
                            {button}
                        </Button>
                    </div>
                </div>
            </Col>
            <Col className="image-section-image-col"
                xs={{
                    span: 12,
                    order: 1
                }}
                md={{
                    span : 6, 
                    order: (imageAlign === "left" ? 1 : 2) 
                }}
            >
                <div className="round-icon">
                    <i className={image}></i>
                </div>
            </Col>
        </Row>
    </MainContent>
)