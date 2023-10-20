import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";


const UpdateProduct = () => {

    const car = useLoaderData();

    return (
        <div className="bg-[#CCCCC] w-full">
        <div className="py-20 w-full lg:w-[1280px] mx-auto">
          <h3 className="text-5xl text-center mb-24 font-semibold">
            <span className="text-3xl text-red-600 font-semibold">...</span> Update Your Product{" "}<span className="text-red-600">{car.productName}</span>{" "}
            <span className="text-3xl text-red-600 font-semibold">...</span>
          </h3>
          <form>
            {/* row one */}
            <div className="md:flex">
              <div className="form-control md:w-1/2 mr-5">
                <label className="label">
                  <span className="label-text text-black font-bold">Product Name</span>
                </label>
                <label >
                  <input
                    type="text"
                    placeholder="Enter product name..."
                    name="productName"
                    className="input input-bordered rounded-md! w-full"
                  />
                </label>
              </div>
  
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-black font-bold">Brand Name</span>
                </label>
                <label >
                  <select name="brandName" className="select input-bordered w-full">
                    <option defaultValue="brandName" disabled>
                      Select a vehicle type...
                    </option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Audi">Audi</option>
                    <option value="Bmw">BMW</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                  </select>
                </label>
              </div>
            </div>
  
            {/* row one */}
            <div className="md:flex ">
              <div className="form-control md:w-1/2 mr-5">
                <label className="label">
                  <span className="label-text text-black font-bold">Type</span>
                </label>
                <label >
                  <select name="type" className="select input-bordered w-full">
                    <option defaultValue="type" disabled >
                      Select a vehicle type...
                    </option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="truck">Truck</option>
                  </select>
                </label>
              </div>
  
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-black font-bold">Price</span>
                </label>
                <label >
                  <input
                    type="text"
                    placeholder="Enter price..."
                    name="price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
  
            {/* row one */}
            <div className="md:flex">
              <div className="form-control md:w-1/2 mr-5">
                <label className="label">
                  <span className="label-text text-black font-bold">Image Url</span>
                </label>
                <label >
                  <input
                    type="text"
                    placeholder="Enter image url...."
                    name="imageUrl"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
  
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-black font-bold">Product Rating</span>
                </label>
                <label >
                  <input
                    type="text"
                    placeholder="Enter rating...."
                    name="productRating"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>
  
            <div className="md:flex">
              <div className="form-control md:w-full mr-5">
                <label className="label">
                  <span className="label-text text-black font-bold">Product Description</span>
                </label>
                <label >
                  <textarea
                    type="text"
                    placeholder="Enter product description..."
                    name="productDescription"
                    className="input input-bordered resize-y h-28 w-1/2"
                  ></textarea>
                </label>
              </div>
            </div>
  
            {/* add product button  */}
            <div className="my-10">
              <input
                type="submit"
                value="Create New Product"
                className="btn text-white bg-red-600 border-none hover:text-white hover:bg-black"
              />
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default UpdateProduct;