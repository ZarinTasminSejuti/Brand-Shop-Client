import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";





const Testimonial = () => {
  const overlayStyle = {
      position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="w-full pt-36 text-center">
      <h3 data-aos="zoom-in" className="text-red-600 text-6xl font-semibold">
        <span className="text-3xl text-red-600 font-semibold">...</span>{" "}
        Testimonial{" "}
        <span className="text-3xl text-red-600 font-semibold">...</span>
      </h3>

      <div
        className="w-full mt-24 bg-cover bg-fixed  relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
     <div style={overlayStyle}></div>
         

          
              <div className="w-full lg:w-[1280px] mx-auto relative z-50">
              <div className="flex flex-col lg:flex-row lg:justify-between justify-center mx-auto py-24 px-3 lg:px-0 ">
                <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="w-full bg-white p-6 md:w-96  mx-auto md:p-12 rounded-lg">
                  <div className="">
                    <p className="text-2xl font-serif text-slate-800 after:content-['\201D'] after:text-3xl after:text-gray-400 before:content-['\201C'] before:text-gray-400 before::text-3xl">
                      {" "}
                      I highly recommend this website to anyone looking for a reliable and convenient way to buy a car.{" "}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-6 mt-3 items-center">
                    <div className=" w-11 h-11 ">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars.githubusercontent.com/u/20525486?v=4"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 text-center lg:text-left">
                      <span className="font-semibold text-lg text-black">
                      Abir Ahmed Raj
                      </span>
                      <span
                        className=" font-medium
                     text-sm text-slate-500"
                      >
                        Premium User
                      </span>
                    </div>
                  </div>
                </div>

                <div  className="w-full bg-white p-6 md:w-96 mx-auto md:p-12 my-4 lg:my-0 rounded-lg">
                  <div className="">
                    <p className="text-2xl font-serif text-slate-800 after:content-['\201D'] after:text-3xl after:text-gray-400 before:content-['\201C'] before:text-gray-400 before::text-3xl">
                      {" "}
                      I am thrilled with my new car from this website and the search filters helped me narrow down my options quickly.{" "}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-6 mt-3 items-center">
                    <div className=" w-11 h-11 ">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://i.ibb.co/r6k6R03/author2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 text-center lg:text-left">
                      <span className="font-semibold text-lg text-black">
                        Zarin Tasmin Sejuti
                      </span>
                      <span
                        className=" font-medium
                     text-sm text-slate-500"
                      >
                        Active User
                      </span>
                    </div>
                  </div>
                </div>

                <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="w-full bg-white p-6 md:w-96 mx-auto md:p-12 rounded-lg">
                  <div className="">
                    <p className="text-2xl font-serif text-slate-800 after:content-['\201D'] after:text-3xl after:text-gray-400 before:content-['\201C'] before:text-gray-400 before::text-3xl">
                      {" "}
                      The selection of cars is impressive, and the detailed information made it easy for me to make the right choice.{" "}
                    </p>
                  </div>
                  <div className="flex flex-col lg:flex-row pt-6 mt-3 items-center">
                    <div className=" w-11 h-11 ">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://i.ibb.co/JHmhkDJ/author1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 text-center lg:text-left">
                      <span className="font-semibold text-lg text-black">
                        Anna Marigold
                      </span>
                      <span
                        className=" font-medium
                     text-sm text-slate-500"
                      >
                        Pro User
                      </span>
                    </div>
                  </div>
            
           
            </div>
          </div>
        </div>
           
          </div>
       
    </div>
  );
};

export default Testimonial;
