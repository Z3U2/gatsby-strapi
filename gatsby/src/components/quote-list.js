import React from "react"
import MainContent from "./main-content"
import Row from "react-bootstrap/Row"

export default ({title, children}) => (
    <MainContent>
        <div className="main-page-markdown">
            <h1>{title}</h1>

        </div>
        <Row>
            {children}
        </Row>
    </MainContent>
)