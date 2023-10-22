import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {


    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    };
    

    useEffect(() => {
      AOS.init();
    }, [])
  
    return (
        <div className="w-full bg-cover h-[500px] bg-fixed lg:h-[750px] relative"
        style={{ backgroundImage: "url(https://i.ibb.co/mNTJKyV/car-banner.jpg)" }}>
            <div className="max-w-[1280px]">
        
              <div style={overlayStyle}></div>

              <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
           
                  <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="text-white font-bold  text-5xl lg:text-7xl ">
                  Welcome to AutoHarbour <br />
            
                </p>
                <p data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" className="text-white text-2xl font-semibold my-6">
                  Your Destination for Automotive Excellence!
                </p>
          
                <Link to="/">
                <button className="btn text-white bg-red-600 border-none hover:text-white hover:bg-black">
                  Get Started
                </button>
              </Link>
              </div> 
            </div>
        </div>
    );
};

export default Banner;
