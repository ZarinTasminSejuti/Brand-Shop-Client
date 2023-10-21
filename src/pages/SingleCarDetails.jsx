import swal from "sweetalert";
import { useLoaderData, useParams } from "react-router-dom";

const SingleCarDetails = () => {



  const carCollection = useLoaderData();
  // console.log(carCollection);
  const { _id } = useParams();
  // console.log(_id);
  const carCardDetails = carCollection.filter(
    (singleCar) => singleCar._id === _id
  );





  const productName = carCardDetails[0].productName;
  const brandName = carCardDetails[0].brandName;
  const type = carCardDetails[0].type;
  const price = carCardDetails[0].price;
  const rating = carCardDetails[0].rating;
  const description = carCardDetails[0].description;
  const image = carCardDetails[0].image;
  const userEmail = carCardDetails[0].userEmail;

  const newObjectCar = {productName,
    brandName,
    type,
    price,
    description,
    rating,
    image,
    userEmail }

    // fetch("https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/myCart",


  const handleAddToCart = () => {
    fetch("http://localhost:5000/myCart", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newObjectCar),
    })
      .then((response) => response.json())
      .then((data) => {
        console.dir(data);
        if (data.insertedId) {
          swal(
            "Product Added to My Cart!",
            "Product added Successfully!",
            "success"
          );
          
        }
      });
  };

  return (
    <div className=" p-5 w-full lg:w-[1280px] mt-20 mb-24 mx-auto">
      <div className="w-full">
        {carCardDetails.map((SingleCarElement) => (
          <div
            className="card bg-red-50 shadow-xl"
            key={SingleCarElement._id}
          >
        
              <img src={SingleCarElement.image} alt="" />
         
            <div className="card-body ">
              <div className="flex justify-between items-center mb-5">
              <h2 className="card-title text-2xl">{SingleCarElement.productName}</h2>
              <h2 className=" text-red-600 font-bold text-2xl">
                      $ {SingleCarElement.price}
                    </h2>
              </div>
              <h2>
                      <span className="text-red-700 font-medium">
                        Brand Name:
                      </span>{" "}
                      {SingleCarElement.brandName}
                    </h2>
              <h2>
                      <span className="text-red-700 font-medium">Type:</span>{" "}
                      {SingleCarElement.type}
                    </h2>
              
                    <p>
                      <span className="text-red-700  font-medium">Rating:</span>{" "}
                      {SingleCarElement.rating}
                    </p>

                    <p>
                      <span className="text-red-700 text-justify  font-medium">About:</span>{" "}
                      {SingleCarElement.description}
                    </p>

              <div className="card-actions mt-4 w-full justify-center">
                <button
                  onClick={handleAddToCart}
                  className="btn text-white bg-black border-none hover:text-white hover:bg-red-600 w-full"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCarDetails;
