
import { FaCheck } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const GetToKnowUs = () => {



    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div className="bg-[#CCCCC] w-full">
            <div className="pt-36 w-full lg:w-[1280px] mx-auto text-center">
                <h3 data-aos="zoom-in" className="text-red-600 text-4xl lg:text-6xl font-semibold"><span className="text-3xl text-red-600 font-semibold">...</span>{" "}Get To Know Us{" "}<span className="text-3xl text-red-600 font-semibold">...</span></h3>  
                
                <div className="flex flex-col lg:flex-row items-center gap-20 mt-24 ">
                    
                    
                <div className="text-center w-full lg:w-1/2 flex flex-col justify-between">
                   <h3 className="lg:text-left text-4xl font-semibold ">
                   AutoHarbour: Your Trusted Source for Automotive Excellence</h3>
                   <p data-aos="zoom-out" className="leading-5 text-justify lg:text-left p-4 lg:p-0 lg:w-4/5 text-slate-500 text-sm my-5">At AutoHarbour, we are more than just an automotive destination; we are your trusted partner on the road to automotive excellence. With a rich history and a passion for all things automotive, our mission is to provide you with a personalized and unparalleled experience. </p>
                        <div className="lg:text-left text-xl">
                        <ul data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">
                            <p className="mb-2 flex gap-2 items-center justify-center lg:justify-normal "><FaCheck className="text-sm text-red-600"></FaCheck>Automotive Expertise</p>
                            <p className="mb-2 flex gap-2 items-center justify-center lg:justify-normal "><FaCheck className='text-sm text-red-600'></FaCheck>Wide Range of Brands</p>
                            <p className="mb-2 flex gap-2 items-center justify-center lg:justify-normal "><FaCheck className="text-sm text-red-600"></FaCheck>Quality Parts and Accessories</p>
                        </ul>
                   
                   </div>
               </div>


               <div className=' w-1/2'>
               <img data-aos="zoom-out-down" className=" rounded-md w-full" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
               </div>

               </div>

            </div>
            
   


        </div>
    );
};

export default GetToKnowUs;

