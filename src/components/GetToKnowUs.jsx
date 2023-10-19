
import { FaCheck } from 'react-icons/fa';

const GetToKnowUs = () => {
    return (
        <div className="bg-[#CCCCC] w-full">
            <div className="pt-36 w-full lg:w-[1280px] mx-auto text-center">
                <h3 className="text-4xl lg:text-6xl font-semibold"><span className="text-3xl text-red-600 font-semibold">...</span>{" "}Get To Know Us{" "}<span className="text-3xl text-red-600 font-semibold">...</span></h3>  
                
                <div className="flex flex-col lg:flex-row  gap-20 mt-20 ">
                    
                    
                <div className="text-center w-full lg:w-1/2">
                   <h3 className="lg:text-left text-4xl font-semibold text-black">
                   AutoHarbour: Your Trusted Source for Automotive Excellence</h3>
                   <p className="leading-5 text-justify p-4 lg:p-0 lg:w-4/5 text-slate-500 text-sm my-5">At AutoHarbour, we are more than just an automotive destination; we are your trusted partner on the road to automotive excellence. With a rich history and a passion for all things automotive, our mission is to provide you with a personalized and unparalleled experience. </p>
                        <div className="lg:text-left text-xl mt-8">
                        <ul>
                            <p className="mb-2 flex gap-2 items-center justify-center lg:justify-normal text-red-500"><FaCheck></FaCheck>Automotive Expertise</p>
                            <p className="mb-2 flex gap-2 items-center justify-center lg:justify-normal text-red-500"><FaCheck></FaCheck>Wide Range of Brands</p>
                            <p className="mb-2 flex gap-2 items-center justify-center lg:justify-normal text-red-500"><FaCheck></FaCheck>Quality Parts and Accessories</p>
                        </ul>
                   
                   </div>
               </div>


               <div className=' w-1/2'>
               <img className=" rounded-md w-full" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
               </div>

               </div>

            </div>
            
   


        </div>
    );
};

export default GetToKnowUs;

