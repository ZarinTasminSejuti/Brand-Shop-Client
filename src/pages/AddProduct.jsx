import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "./Footer";

const AddProduct = () => {
  const navigate = useNavigate();
    const { userDetails } = useContext(AuthContext);


  
  
  const handleSubmit = (event) => {
    event.preventDefault();


    const form = event.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.productDescription.value;
    const rating = form.productRating.value;
    const image = form.imageUrl.value;
    // const mySelect = form.select.value

    const userEmail = userDetails.email;
 

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

    // fetch("https://brand-shop-server-3ttowepeu-zarin-tasmin-sejutis-projects.vercel.app/addProduct", {
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.insertedId) {
          swal("Product Added!", "New Product added Successful!", "success");
          form.reset();
          // mySelect.selectedIndex = 0;
          navigate("/addProduct");
        }
        
      })
      .catch(() => {
        swal(
          "Failed!",
          "Wrong credentials! Please Add again.",
          "error"
        );
      })
    
  };

  return (
    <div className="bg-white w-full " >
      <div className="py-20 w-full lg:w-[1280px] mx-auto">
        <h3 className="text-3xl lg:text-5xl text-center mb-12 lg:mb-24 font-semibold">
          <span className="text-3xl text-red-600 font-semibold">...</span> Add
          New Product{" "}
          <span className="text-3xl text-red-600 font-semibold">...</span>
        </h3>
        <form onSubmit={handleSubmit} className="p-4 lg:p-0">
          {/* row one */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">Product Name</span>
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Enter product name..."
                  name="productName"
                  className="input input-bordered bg-white w-full rounded-md"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-black font-bold">Brand Name</span>
              </label>
              <label >
                <select name="brandName" id="select" className="select bg-white input-bordered rounded-md w-full">
                  <option disabled>
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
            <div className="form-control md:w-1/2 lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">Type</span>
              </label>
              <label>
                <select name="type" className="select rounded-md bg-white input-bordered w-full">
                  <option defaultValue="type" disabled >
                    Select a vehicle type...
                  </option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Truck">Truck</option>
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
                  className="input rounded-md input-bordered w-full bg-white"
                  required
                />
              </label>
            </div>
          </div>

          {/* row one */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">Image Url</span>
              </label>
              <label >
                <input
                  type="text"
                  placeholder="Enter image url...."
                  name="imageUrl"
                  className="input rounded-md  input-bordered bg-white w-full"
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
                  className="input rounded-md bg-white input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex">
            <div className="form-control md:w-full lg:mr-5">
              <label className="label">
                <span className="label-text text-black font-bold">Product Description</span>
              </label>
              <label >
                <textarea
                  type="text"
                  placeholder="Enter product description..."
                  name="productDescription"
                  className="input rounded-md bg-white  input-bordered resize-y h-28 w-1/2"
                ></textarea>
              </label>
            </div>
          </div>

          {/* add product button  */}
          <div className="my-10">
            <input
              type="submit"
              value="Create New Product"
              className="btn text-white bg-red-600 border-none hover:text-white hover:bg-red-700"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AddProduct;
