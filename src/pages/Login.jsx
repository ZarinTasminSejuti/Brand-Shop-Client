import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import swal from "sweetalert";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";







const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    // console.log(email, password);

    signIn(email, password)
      .then(() => {
        swal("You're logged in!", "Login Successful!", "success");
        e.target.reset();
        navigate("/");
      })
      .catch(() => {
        swal(
          "Login Failed!",
          "Wrong credentials! Please login again.",
          "error"
        );
      });
  };

  const handleGoogle = () => {
    signInGoogle()
      .then(() => {
        swal("You're logged in!", "Login Successful!", "success");
        navigate("/");
      })
      .catch(() => {
        swal(
          "Login Failed!",
          "Wrong credentials! Please login again.",
          "error"
        );
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-fuchsia-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Please log in to access your account and explore our services.
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  {/* email  */}
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>

                {/* password  */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

                  <input
                    type="password"
                    placeholder="Enter your password..."
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>

                {/* login button */}
                <div className="form-control mt-6">
                  <button className="btn text-white bg-blue-600 hover:text-white hover:bg-blue-800">
                    Login
                  </button>
                </div>
              </form>

              <p className="mt-4 text-center text-gray-500">or login with</p>

              {/* google button */}
              <p className="text-center my-2">
                {" "}
                <button
                  onClick={handleGoogle}
                  className="btn w-1/2 text-white border-none bg-red-500 hover:bg-red-700"
                >
                  <FaGoogle></FaGoogle>Google
                </button>
              </p>

              <p className="text-center">
                Do not have an account?{" "}
                <Link to="/register" className="text-blue-600 font-semibold">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
