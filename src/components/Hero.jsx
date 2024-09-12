import React from "react";
function Hero() {
    return (
        <div className="py-5">
            <div className=" flex flex-col py-10 gap-7 mx-auto px-5">
                <h1 className="text-center text-5xl md:text-6xl lg:text-7xl font-playfair mx-auto  ">One stop solution for legal <span className="text-btnbg italic">needs!</span></h1>
                <p className="text-xs md:text-lg text-center ">Simplify legal research, automate document analysis, and predict case outcomes with cutting-edge AI tailored for commercial cases.</p>
                <div className="flex  justify-center items-center gap-7  ">
                    <input placeholder="Search" className="py-3 px-5  rounded-full shadow  w-full max-w-sm md:max-w-md lg:max-w-2xl" />
                    <box-icon name='search' color='#edb970' class="-ml-16 mt-0.5" ></box-icon>
                </div>
            </div>
        </div>
    );

}
export default Hero;