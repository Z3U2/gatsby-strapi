import React from "react"


import Navbar from "./navbar"
import Footer from "./footer"

export default ({children}) => {
    return (
        <div>
            <Navbar/>
            
                {children}
            
            <Footer/>
        </div>
    )
}