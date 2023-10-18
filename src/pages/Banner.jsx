

const Banner = () => {


    const overlayStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    };
    

    return (
        <div>
             <div
        className="bg-cover h-[500px] bg-fixed lg:h-[900px] relative"
        style={{ backgroundImage: "url(https://i.ibb.co/mNTJKyV/car-banner.jpg)" }}
      >
        
        <div style={overlayStyle}></div>

        {/* <div className="p-10 text-center relative z-10">
          <p className="text-white font-bold mt-56 lg:mt-64 text-3xl lg:text-7xl ">
            Elevate Your Events with <br />
            <span className="text-[#ff6600]">EventifyEDU</span>{" "}
          </p>
          <p data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="text-white text-xl lg:text-2xl font-semibold mt-5">
            Discover Seamless Planning and Dynamic Engagement Today!
          </p>
        </div> */}
      </div>
        </div>
    );
};

export default Banner;