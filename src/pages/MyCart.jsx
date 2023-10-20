import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";


const MyCart = () => {
  const myCartCollection = useLoaderData();
  const navigate = useNavigate();

  const { userDetails } = useContext(AuthContext);

  const carCard = myCartCollection.filter(
    (car) => car.userEmail === userDetails.email
  );


  // Function to handle item deletion
  const handleDelete = (itemId) => {
   

    fetch(`http://localhost:5000/myCart/${itemId}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0){
                swal("Deleted!", "Your car has been deleted.", "success");
                navigate("/myCart");
              }
            });
          // window.location.reload();
        };

  

  return (
    <div>
      <div className=" bg-black p-5 w-[1280px] my-24 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
          {carCard.map((SingleCarElement) => (
            <div
              className="card bg-base-100 shadow-xl"
              key={SingleCarElement._id}
            >
              <figure>
                <img src={SingleCarElement.image} alt="" />
              </figure>
              <div className="card-body flex flex-col">
                {" "}
                {/* Use flex layout */}
                <div className="text-right mb-2">
                  {" "}
                  {/* Add text-right class to align to the right */}
                  <span className="text-xs text-white bg-green-600 py-1 px-2 rounded-full">
                    In your cart
                  </span>
                </div>
                <h2 className="card-title">{SingleCarElement.productName}</h2>
                <h2>{SingleCarElement.brandName}</h2>
                <h2>{SingleCarElement.type}</h2>
                <h2>{SingleCarElement.price}</h2>
                <p>{SingleCarElement.rating}</p>
                <p className="break-all">{SingleCarElement.description}</p>
                <div className="card-actions mt-4 w-full justify-center">
                  <div className="w-full">
                    <button
                      onClick={() => handleDelete(SingleCarElement._id)}
                      className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full"
                    >
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
