import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import swal from "sweetalert";

const UpdateProduct = () => {

  const car = useLoaderData();

  const {productName,
    brandName,
    type,
    price,
    description,
    rating,
    image,
    userEmail,
    _id
  } = car;
//  console.log(_id);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.productName.value);

    const form = event.target;
  
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.productDescription.value;
    const rating = form.productRating.value;
    const image = form.imageUrl.value;

    const newProduct = {
      productName,
      brandName,
      type,
      price,
      description,
      rating,
      image,
      userEmail
    };
console.log(newProduct);

// fetch(`https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/updateProduct/${_id}`,
    
fetch(`http://localhost:5000/updateProduct/${_id}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newProduct),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.modifiedCount > 0) {
      swal("Product Updated!", "Product updated Successfully!", "success");
      
      
    }  
  });
};




    return (
      <div className="bg-[#CCCCC] w-full">
        <div className="py-20 w-full lg:w-[1280px] mx-auto">
          <h3 className="text-5xl text-center mb-24 font-semibold">
            <span className="text-3xl text-red-600 font-semibold">...</span> Update Your Product{" "}<span className="text-red-600">{car.productName}</span>{" "}
            <span className="text-3xl text-red-600 font-semibold">...</span>
          </h3>
          <form onSubmit={handleSubmit}>
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
                    defaultValue={productName}
                  />
                </label>
              </div>
  
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-black font-bold">Brand Name</span>
                </label>
                <label >
                  <select name="brandName" className="select input-bordered w-full">
                    <option defaultValue={brandName} disabled>
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
                  <select name="type" className="select input-bordered w-full" >
                    <option defaultValue={type}  disabled >
                      Select a vehicle type...
                    </option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="hatchback">Hatchback</option>
                    <option value="truck">Truck</option>
                    <option value="CompactCar">Compact Car</option>
                  <option value="Sports">Sports Car</option>
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
                    defaultValue={price}
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
                    defaultValue={image}
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
                    defaultValue={rating}
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
                    defaultValue={description}
                  ></textarea>
                </label>
              </div>
            </div>
  
            {/* product button  */}
            <div className="my-10 text-center">
              <input
                type="submit"
                value="Update"
              
                className="btn w-1/5 text-white bg-red-600 border-none hover:text-white hover:bg-black"
              />
            </div>
          </form>
        </div>
        <Footer></Footer>
      </div>
    );
  
};

export default UpdateProduct;