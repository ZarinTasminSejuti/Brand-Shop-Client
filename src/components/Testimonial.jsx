


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
        <div className="w-full mt-36 bg-cover h-[600px] bg-fixed  relative"
        style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}>
            <div >

            <div style={overlayStyle}></div>

            <div className="text-center absolute p-24 z-10">
        
            <h3 className="text-red-600 text-6xl font-semibold"><span className="text-3xl text-red-600 font-semibold">...</span>{" "}Testimonial{" "}<span className="text-3xl text-red-600 font-semibold">...</span></h3>
               
            <div className="text-center">
      
                 <p className="leading-5  text-white text-sm my-5">At AutoHarbour, we are more than just an automotive destination; we are your trusted partner on the road to automotive excellence. With a rich history and a passion for all things automotive, our mission is to provide you with a personalized and unparalleled experience. </p>
                 
            </div>
        
            </div> 
            </div>
        </div>
    );
};

export default Testimonial;

