import Brands from "../components/Brands";
import Banner from "./Banner";
import Footer from "./Footer";

// import { useLoaderData } from "react-router-dom";
import GetToKnowUs from "../components/GetToKnowUs";
import Testimonial from "../components/Testimonial";
import { useEffect, useState } from "react";



const Home = () => {


    // const { brand } = useLoaderData();
    const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetch("/brand.json")
      .then(response => response.json())
      .then(data => setBrand(data));

  }, []); 
    
 
    return (
        <div>

            <Banner ></Banner>
             <Brands brand={brand}></Brands>
            <GetToKnowUs></GetToKnowUs>
            
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;
