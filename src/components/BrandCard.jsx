import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const BrandCard = ({ brand }) => {
    useEffect(() => {
        AOS.init();
      }, [])

        const {  title, image} = brand;
    return (
        <div className="p-3 lg:p-0">
            <Link to={`/brandProducts/${title}`}>  
            <div  className="relative rounded-xl drop-shadow-xl" data-aos="zoom-in">

              
                <img className="hover:drop-shadow-xl rounded-md h-[250px] w-full" src={image} alt="" /> 
              
                    <p className="pl-4 mb-2 absolute bottom-0 bg-black bg-opacity-60 w-full text-red-600 font-normal text-2xl  ">{title}</p>
                 
          
    
                </div>
                </Link>
    </div>
  );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object
} 