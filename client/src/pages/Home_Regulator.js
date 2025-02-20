import React from "react";
import { Link } from 'react-router-dom'; // Make sure this import is here
import Footer from "../components/Footer";
import NavBar_Regulator from "../components/NavBar_Regulator"; // Import the Navbar

const maleIcon = require("../images/maleIcon.png");
const ellipse = require("../images/ellipse.png");


const Home_Regulator = () => {
    return (
        <div className="w-full h-full">
            {/* Navbar Component */}
            <NavBar_Regulator />

            {/* Content of your page */}
            <div className="flex flex-col lg:flex-row bg-[#016a70] h-[90vh] relative" style={{paddingLeft:"10%", paddingRight:"10%", paddingTop:"100px"}}>
                <div className="flex-initial flex flex-col w-full lg:w-1/2 pt-4 ssm:pt-0 mt-[100px]">
                    <h3 className="w-full lg:w-[656px] text-white text-[28px] font-semibold font-poppins">Hi!</h3>
                    <h2 className="w-full lg:w-[656px] text-[#ffffdd] text-5xl font-bold font-poppins mt-2">
                    Welcome, Regulator!
                    </h2>
                    <p className="w-full lg:w-[654px] h-auto text-white text-base font-normal font-poppins mt-4">
                        Empowering communities with efficient waste management solutions.
                    </p>
                </div>

                <div className="flex-initial flex justify-center items-center p-[130px]">
                    <img src={maleIcon} className="lg:ml-[200px]" alt="Icon" />
                </div>
            </div>

            <div className="h-auto w-full bg-white pt-20 pb-20">
                <div className="flex flex-wrap justify-center gap-10 px-10">
                    <div className="bg-white p-5 w-[300px] text-center">
                        <h3 className="text-4xl font-semibold" style={{ 
                                color: 'var(--Dark, #222831)', 
                                //fontFamily: 'Poppins', 
                                fontSize: '48px', 
                                fontWeight: '600', 
                                lineHeight: 'normal' 
                            }}>
                            314
                        </h3>
                        <p className="text-2xl font-semibold" style={{ 
                                color: 'var(--Dark, #222831)', 
                                //fontFamily: 'Poppins', 
                                fontSize: '28px', 
                                fontWeight: '600', 
                                lineHeight: 'normal' 
                            }}>
                            Waste Collectors
                        </p>
                    </div>

                    <div className="bg-white p-5 w-[300px] text-center">
                        <h3 className="text-4xl font-semibold" style={{ 
                                color: 'var(--Dark, #222831)', 
                                //fontFamily: 'Poppins', 
                                fontSize: '48px', 
                                fontWeight: '600', 
                                lineHeight: 'normal' 
                            }}>
                            100k
                        </h3>
                        <p className="text-2xl font-semibold" style={{ 
                                color: 'var(--Dark, #222831)', 
                                //fontFamily: 'Poppins', 
                                fontSize: '28px', 
                                fontWeight: '600', 
                                lineHeight: 'normal' 
                            }}>
                            Users
                        </p>
                    </div>
                </div>
                
                <div className="relative flex flex-col items-center mt-20"> {/* Centering the container */}
                    
                    
                    <div className="bg-white bg-opacity-0 p-5"> {/* Adjust opacity for transparency */}
                        <div className="flex flex-col items-start text-left mt-20"> {/* Align items to start */}
                            
                            <h2 
                                className="text-center mb-10" 
                                style={{ 
                                    color: 'var(--Dark, #222831)', 
                                    fontSize: '36px', 
                                    fontWeight: '600', 
                                    lineHeight: "0.1" 
                                }}
                            >
                                Manage and Monitor Waste Collection
                            </h2>

                            <p1 className="list-disc ml-5 mt-2"> {/* Bullet points for the list */}
                                Stay informed with the latest reports and ensure compliance across waste collection services.<br />
                                Access detailed company information to verify license authorizations.
                            </p1>
                        </div>
                    </div>
                    <img 
                        src={ellipse} // Replace with your actual icon source
                        alt="Background Icon"
                        className="absolute top-0 left-40 w-1/4" // Adjust size and opacity as needed
                    />
                    
                </div>


            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home_Regulator;
