import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const BrandCard = ({brand}) => {
        const {  title, image} = brand;
    return (
        <div className="p-2 lg:p-0">
          
            <div  className="relative rounded-xl drop-shadow-xl" data-aos="zoom-in">

              
                <img className="drop-shadow-xl rounded-md h-[250px] w-full" src={image} alt="" /> 
                <Link to={`/brandProducts/${title}`}>  
                    <p className="pl-4 mb-2 absolute bottom-0 bg-black bg-opacity-60 w-full text-red-600 font-normal text-2xl hover:bg-red-600 hover:text-white hover:bg-opacity-70 hover:w-full">{title}</p>
                    </Link>
          
    
                </div>
              
    </div>
  );
};

export default BrandCard;

BrandCard.propTypes = {
    brand: PropTypes.object
}