import React from "react";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Services from './components/services/Services'
import Faq from './components/faq/Faq'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
    return(
        <>
        <Header/>
        <Nav/>
        <Services/>
        <Faq/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default App