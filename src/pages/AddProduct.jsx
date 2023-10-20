import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../providers/AuthProvider";
import Footer from "./Footer";

const AddProduct = () => {
  const navigate = useNavigate();
    const { userDetails } = useContext(AuthContext);

  console.log(userDetails);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");

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
    console.log(type);

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

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.dir(data);
        if (data.insertedId) {
          swal("Product Added!", "New Product added Successful!", "success");
          form.reset();
          // mySelect.selectedIndex = 0;
          navigate("/");
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
    <div className="bg-[#CCCCC] w-full " >
      <div className="py-36 w-full lg:w-[1280px] mx-auto">
        <h3 className="text-5xl text-center mb-12 font-semibold">
          <span className="text-3xl text-red-600 font-semibold">...</span> Add
          New Product{" "}
          <span className="text-3xl text-red-600 font-semibold">...</span>
        </h3>
        <form onSubmit={handleSubmit}>
          {/* row one */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter product name..."
                  name="productName"
                  className="input input-bordered rounded-md! w-full"
                  required
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label className="input-group">
                <select name="brandName" id="select" className="select input-bordered w-full">
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
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label className="input-group">
                <select name="type" className="select input-bordered w-full">
                  <option defaultValue="type" disabled >
                    Select a vehicle type...
                  </option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Truck">Truck</option>
                  <option value="CompactCar">Compact Car</option>
                </select>
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Enter price..."
                  name="price"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>

          {/* row one */}
          <div className="md:flex">
            <div className="form-control md:w-1/2 mr-5">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <label className="input-group">
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
                <span className="label-text">Product Rating</span>
              </label>
              <label className="input-group">
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
                <span className="label-text">Product Description</span>
              </label>
              <label className="input-group">
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

export default AddProduct;
