import React from "react";
import Navbar from "../../component/navbar/Navbar"
import Header from "../../component/header/Header"
import Featured from "../../component/featured/Featured";
import PropertyList from "../../component/propertyList/PropertyList";
import "./home.css"
import FeaturedProperties from "../../component/featuredProperties/FeaturedProperties";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";

const Home = () =>{
    return(<div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by Property Type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Homes Guests Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
        </div>
    </div>) 
}

export default Home