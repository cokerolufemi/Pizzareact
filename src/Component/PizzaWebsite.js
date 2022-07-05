import React from "react"

import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import PizzaTypes from "./PizzaTypes"
import AboutPizza from "./AboutPizza"

function PizzaWebsite(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <AboutPizza/>
        <PizzaTypes/>
        <Footer/>
        </>
    )
}

 export default PizzaWebsite