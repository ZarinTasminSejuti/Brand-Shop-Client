import BrandCard from "./BrandCard";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Brands = ({ brand }) => {
    
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="bg-[#CCCCC] w-full">

            <div className="pt-36 w-full lg:w-[1280px] mx-auto">
                <div className="text-center">
                    <h3 data-aos="zoom-in" className="text-red-600 text-6xl font-semibold"><span className="text-3xl text-red-600 font-semibold">...</span>{" "}Our Brands{" "}<span className="text-3xl text-red-600 font-semibold">...</span></h3>
                    <p className="text-grey-400 text-xl lg:w-1/2 my-16 mx-auto">At <span className="text-red-600 text-xl font-bold mt-5 mb-16">AutoHarbor</span>, we pride ourselves on delivering our core products with the utmost professionalism and dedication.</p>
                </div>




                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto'>
                    
                    {
                        brand.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)
                    }
                </div>

            </div>
            
   


        </div>
    );
};

export default Brands;

Brands.propTypes = {
    brand: PropTypes.array
}