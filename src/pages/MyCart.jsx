import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const MyCart = () => {

    const myCartCollection = useLoaderData();

    const { userDetails } = useContext(AuthContext);

    const carCard = myCartCollection.filter(
        (car) => car.userEmail === userDetails.email
      );

    return (
        <div>
              <div className=" bg-black p-5 w-[1280px] my-24 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        {carCard.map((SingleCarElement) => (
          <div className="card bg-base-100 shadow-xl" key={SingleCarElement._id}>
            <figure>
              <img src={SingleCarElement.image} alt="" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{SingleCarElement.productName}</h2>
              <h2>{SingleCarElement.brandName}</h2>
              <h2>{SingleCarElement.type}</h2>
              <h2>{SingleCarElement.price}</h2>
              <p>{SingleCarElement.rating}</p>

              <p className="break-all">{SingleCarElement.description}</p>

              <div className="card-actions mt-4 w-full justify-center">
                <div className="grid grid-cols-2 gap-2">
       
                    <button className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                   Delete
                    </button>
                 
                 
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
    );
};

export default MyCart;