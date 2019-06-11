import React from "react"

import Container from "react-bootstrap/Container"

export default ({children}) => (
    <div className="main-page-section">
        <Container>
            {children}
        </Container>
    </div>
)