import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const BrandProducts = () => {
  const carCollection = useLoaderData();
  const { userDetails } = useContext(AuthContext);
  const { title } = useParams();

  const carCard = carCollection.filter(
    (car) => car.brandName.toLowerCase() === title.toLowerCase() && (car.userEmail === userDetails.email)
  );

  console.log(carCard);

  return (
    <div className=" bg-black p-5 w-[1280px] my-24 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        {carCard.map((carElement) => (
          <div className="card bg-base-100 shadow-xl" key={carElement._id}>
            <figure>
              <img src={carElement.image} alt="" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{carElement.productName}</h2>
              <h2>{carElement.brandName}</h2>
              <h2>{carElement.type}</h2>
              <h2>{carElement.price}</h2>
              <p>{carElement.rating}</p>

              <p className="break-all">{carElement.description}</p>

              <div className="card-actions mt-4 w-full justify-center">
                <div className="grid grid-cols-2 gap-2">
                <Link to={`/SingleCarDetails/${carElement._id}`}>
                    <button className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                      View Details
                    </button>
                  </Link>
                  <button className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                    Update Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
