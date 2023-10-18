

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
        <div className="w-full bg-cover h-[500px] bg-fixed lg:h-[900px] relative"
        style={{ backgroundImage: "url(https://i.ibb.co/mNTJKyV/car-banner.jpg)" }}>
            <div className="max-w-[1280px]">
        
              <div style={overlayStyle}></div>

              <div className="text-center m-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
           
                  <p className="text-white font-bold  text-3xl lg:text-7xl ">
                  Welcome to AutoHarbour <br />
            
                </p>
                <p data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom" className="text-white text-xl lg:text-2xl font-semibold mt-5">
                  Your Destination for Automotive Excellence!
                </p>
          
              </div> 
            </div>
        </div>
    );
};

export default Banner;
