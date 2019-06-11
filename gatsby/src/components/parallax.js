import React from "react"

import {Parallax} from "react-parallax"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"


export default ({title, subtitle, button, src}) => (
    <Parallax bgImage={src} bgImageAlt={title} strength={100}>
        <Container>
            <div style={{ height: 500 }}>
                <div className="parallax-header" >
                    <div>
                        <h1>
                            {title}
                        </h1>
                        <h2>
                            {subtitle}
                        </h2>
                    </div>
                    {!(button === "" || button === undefined) && (
                        <Button variant="secondary">
                            { button }
                        </Button> 
                    )}
                </div>
            </div>
        </Container>
    </Parallax>
)