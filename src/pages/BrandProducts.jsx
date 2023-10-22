import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';


const BrandProducts = () => {
  const carCollection = useLoaderData();
  const { userDetails } = useContext(AuthContext);
  const { title } = useParams();

  const carCard = carCollection.filter(
    (car) =>
      car.brandName.toLowerCase() === title.toLowerCase() &&
      userDetails?.email === car.userEmail
  );

  useEffect(() => {
    AOS.init();
  }, [])


  const [carousal, setCarousal] = useState([]);

  useEffect(() => {
    fetch("/carousal.json")
      .then((response) => response.json())
      .then((data) => setCarousal(data));
  }, []);

  const carCarousal = carousal.filter(
    (carousal) => carousal.title.toLowerCase() === title.toLowerCase()
  );

  return (
    <div>
      <div className="w-full">
        {carCarousal.map((ele) => (
          <div key={ele.id} className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={ele.image1}
                className="w-full"
                
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle bg-red-600 bg-opacity-90 border-none text-2xl text-white font-semibold" >
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle bg-red-600 bg-opacity-90 border-none text-2xl text-white font-semibold">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={ele.image2}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle  bg-red-600 bg-opacity-90 border-none text-2xl text-white font-semibold">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle bg-red-600 bg-opacity-90 border-none text-2xl text-white font-semibold">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={ele.image3}
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle bg-red-600 bg-opacity-90 border-none text-2xl text-white font-semibold">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle bg-red-600 bg-opacity-90 border-none text-2xl text-white font-semibold">
                  ❯
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-[1280px] my-20 mx-auto ">
        <h2 className="text-2xl text-red-600 text-center p-3 lg:p-0 font-semibold mb-10">
          ... Buy Your Next Car in AutoHarbor, Get Behind the Wheel with Ease
          ...
        </h2>
        <div className="space-y-4">
          {carCard.map((carElement) => (
            <div
              className=" bg-slate-100 rounded-lg shadow-md"
              key={carElement._id}
            >
              <div className="flex flex-col lg:flex-row items-center ">
                <div className="w-full lg:w-1/3">
                  <img
                    src={carElement.image}
                    alt=""
                    className="p-6 rounded-[32px]"
                    style={{ width: "420px", height: "270px" }}
                    data-aos="zoom-out-right"
                  />
                </div>

                <div data-aos="zoom-in" className="card-body lg:w-2/3 md:relative">
                  <h2 className="card-title text-2xl">
                    {carElement.productName}
                  </h2>

                  <div className="flex gap-3 lg:gap-7 my-3 items-center ml-1">
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

                  <div className="mb-6 ml-1 w-full lg:w-3/4">
                    <p className="text-justify">{carElement.description}</p>
                  </div>

                  <div className="md:absolute md:right-10 md:bottom-9 ">
                    <h2 className=" text-red-600 font-bold lg:mt-0 text-3xl my-5 md:my-0">
                      $ {carElement.price}
                    </h2>
                  </div>

                  <div className="card-actions w-full justify-between items-center">
                    <div className="grid grid-cols-2 gap-3 ml-1">
                      <Link to={`/SingleCarDetails/${carElement._id}`}>
                        <button className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                          View Details
                        </button>
                      </Link>

                      <Link to={`/updateProduct/${carElement._id}`}>
                        <button className="col-span-1 btn text-white bg-red-600 border-none hover:text-white hover:bg-black w-full">
                          Update Product
                        </button>
                      </Link>
                    </div>
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
