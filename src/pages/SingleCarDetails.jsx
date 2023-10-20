import swal from "sweetalert";
import {  useLoaderData, useParams } from "react-router-dom";

const SingleCarDetails = () => {



  const carCollection = useLoaderData();
// console.log(carCollection);
  const { _id } = useParams();
// console.log(_id);
  const carCardDetails = carCollection.filter(
    (singleCar) => singleCar._id === _id
  );

    
 

    console.log(carCardDetails[0]);
  

    
    
    
const handleAddToCart = () => {
  
  


    fetch("http://localhost:5000/myCart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(carCardDetails[0]),
    })
      .then((response) => response.json())
      .then((data) => {
        console.dir(data);
        if (data.insertedId) {
          swal("Product Added to My Cart!", "Product added Successfully!", "success");

        }
      });
  };

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

  return (
    <div className=" bg-black p-5 w-[1280px] my-24 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        {carCardDetails.map((SingleCarElement) => (
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
       
                    <button onClick={handleAddToCart} className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                   Add to Cart
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

export default SingleCarDetails;
