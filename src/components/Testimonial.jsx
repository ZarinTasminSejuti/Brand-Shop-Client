const Testimonial = () => {
  const overlayStyle = {
      position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  return (
    <div className="w-full pt-36 text-center">
      <h3 className="text-black text-6xl font-semibold">
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
         

          
              <div className="w-[1280px] mx-auto relative z-50">
              <div className="flex justify-between mx-auto py-24 ">
                <div className="w-full bg-slate-200 p-6 md:w-96 md:p-12 rounded-lg">
                  <div className="">
                    <p className="text-2xl font-serif text-slate-800 after:content-['\201D'] after:text-3xl after:text-gray-400 before:content-['\201C'] before:text-gray-400 before::text-3xl">
                      {" "}
                      This is a comment card appearing above a dotted
                      background, and that's really cool!{" "}
                    </p>
                  </div>
                  <div className="flex flex-row pt-6 mt-3 items-center">
                    <div className=" w-11 h-11 ">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars.githubusercontent.com/u/20525486?v=4"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 text-left">
                      <span className="font-semibold text-lg text-black">
                        Naruto Uzumaki
                      </span>
                      <span
                        className=" font-medium
                     text-sm text-slate-500"
                      >
                        Seventh Hokage
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-slate-200 p-6 md:w-96 md:p-12 rounded-lg">
                  <div className="">
                    <p className="text-2xl font-serif text-slate-800 after:content-['\201D'] after:text-3xl after:text-gray-400 before:content-['\201C'] before:text-gray-400 before::text-3xl">
                      {" "}
                      This is a comment card appearing above a dotted
                      background, and that's really cool!{" "}
                    </p>
                  </div>
                  <div className="flex flex-row pt-6 mt-3 items-center">
                    <div className=" w-11 h-11 ">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars.githubusercontent.com/u/20525486?v=4"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 text-left">
                      <span className="font-semibold text-lg text-black">
                        Naruto Uzumaki
                      </span>
                      <span
                        className=" font-medium
                     text-sm text-slate-500"
                      >
                        Seventh Hokage
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full bg-slate-200 p-6 md:w-96 md:p-12 rounded-lg">
                  <div className="">
                    <p className="text-2xl font-serif text-slate-800 after:content-['\201D'] after:text-3xl after:text-gray-400 before:content-['\201C'] before:text-gray-400 before::text-3xl">
                      {" "}
                      This is a comment card appearing above a dotted
                      background, and that's really cool!{" "}
                    </p>
                  </div>
                  <div className="flex flex-row pt-6 mt-3 items-center">
                    <div className=" w-11 h-11 ">
                      <img
                        className="w-full h-full rounded-full"
                        src="https://avatars.githubusercontent.com/u/20525486?v=4"
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col ml-4 text-left">
                      <span className="font-semibold text-lg text-black">
                        Naruto Uzumaki
                      </span>
                      <span
                        className=" font-medium
                     text-sm text-slate-500"
                      >
                        Seventh Hokage
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
