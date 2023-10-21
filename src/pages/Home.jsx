import Brands from "../components/Brands";
import Banner from "./Banner";
import Footer from "./Footer";

import { useLoaderData } from "react-router-dom";
import GetToKnowUs from "../components/GetToKnowUs";
import Testimonial from "../components/Testimonial";



const Home = () => {
    
    // const toggle = theme ? "dark" : "light";


    const brand = useLoaderData();
 
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
