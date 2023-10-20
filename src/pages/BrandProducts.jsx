import { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import swal from "sweetalert";

const BrandProducts = () => {
  const carCollection = useLoaderData();
  const { userDetails } = useContext(AuthContext);
  const { title } = useParams();

  const carCard = carCollection.filter(
    // (car) => car.brandName.toLowerCase() === title.toLowerCase() && (car.userEmail === userDetails.email)
    (car) =>
      car.brandName.toLowerCase() === title.toLowerCase() &&
      userDetails?.email === car.userEmail
  );

  console.log(carCard);

  const handleUpdate = (carElement) => {
    console.log(carElement);
    // fetch(`http://localhost:5000/updateProduct/${carElement._id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(carElement[0]),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.dir(data);
    //     if (data.updatedCount > 0) {
    //       swal("Product Updated!", "Product updated Successfully!", "success");
    //       // form.reset();
    //     }
    //   });
  };

  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/0fw9q3W/Toyota-Banner1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="
            https://i.ibb.co/3sbtQcy/Toyota-Banner2.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/prLcCDJ/Toyota-Banner.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       
      </div>

      <div className=" w-[1280px] my-20 mx-auto ">
        <h2 className="text-2xl text-red-600 text-center font-semibold mb-10">... Buy Your Next Car in AutoHarbor, Get Behind the Wheel with Ease ...</h2>
        <div className="space-y-4">
          {carCard.map((carElement) => (
            <div
              className=" bg-slate-100 rounded-lg shadow-md"
              key={carElement._id}
            >
              <div className="flex items-center ">
                <img
                  src={carElement.image}
                  alt=""
                  className="p-6 w-[450px] h-[300px] rounded-[32px]"
                />

                <div className="card-body ">
                  <h2 className="card-title text-2xl">
                    {carElement.productName}
                  </h2>

                  <div className="flex gap-7 my-3 items-center ml-1">
                    <h2>
                      <span className="text-red-700 font-medium">
                        Brand Name:
                      </span>{" "}
                      {carElement.brandName}
                    </h2>
                    <h2>
                      <span className="text-red-700 font-medium">Type:</span>{" "}
                      {carElement.type}
                    </h2>
                    <p>
                      <span className="text-red-700  font-medium">Rating:</span>{" "}
                      {carElement.rating}
                    </p>
                  </div>

                  <div className="mb-6 ml-1 w-3/4">
                    <p className="text-justify">{carElement.description}</p>
                  </div>

                  <div className="card-actions w-full justify-between items-center">
                    <div className="grid grid-cols-2 gap-3 ml-1">
                      <Link to={`/SingleCarDetails/${carElement._id}`}>
                        <button className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                          View Details
                        </button>
                      </Link>

                      <Link to={`/updateProduct/${carElement._id}`}>
                        <button
                          onClick={() => handleUpdate(carElement)}
                          className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full"
                        >
                          Update Product
                        </button>
                      </Link>
                    </div>

                    <h2 className=" text-red-600 font-bold text-3xl">
                      $ {carElement.price}
                    </h2>
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

export default BrandProducts;
