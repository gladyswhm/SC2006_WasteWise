import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar_Collector from "../components/NavBar_Collector";

const CollectorProfilePage = () => {
    const [collector, setCollector] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCollectors = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/collectors`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
        
                if (response.ok) {
                    const data = await response.json();
                    const filteredCollector = data.filter(col => col.id === Number(localStorage.getItem('collector_id')))
                    console.log("filteredCollector", filteredCollector)
                    setCollector(filteredCollector)
                } else {
                    const errorData = await response.json();
                    setError(errorData.error); // Display error message if retrieval fails
                    console.error('Retrieval error:', errorData);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }

        fetchCollectors();

    }, []);

    console.log("cc", collector)

    return (
        <div className="relative h-[35vh] flex flex-col lg:flex-row bg-[#016a70]" style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "50px" }}>
            <Navbar_Collector />
        <div className="absolute mt-[430px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg p-10 rounded-lg w-[950px] h-[600px] border border-gray-300 font-poppins text-left">
        {collector.map((c, index) => (
            <div className="flex flex-col justify-start">
                <div>
                    <h1 className="text-4xl font-bold text-[#016A70]">Profile</h1>
                    <div className="text-base font-semibold mt-9 flex justify-between gap-4 w-full">Collector Name</div>
                    <div className="flex justify-between gap-4 text-sm border-2 rounded-md w-full p-1.5 mt-1 pl-3">{c.name}</div>
                    <h5 className="text-base font-semibold mt-4">Address</h5>
                    <div className="text-sm border-2 rounded-md w-full p-1.5 mt-1 pl-3">{c.address}</div>
                    <h5 className="text-base font-semibold mt-4">Contact Number</h5>
                    <div className="text-sm border-2 rounded-md w-full p-1.5 mt-1 pl-3">{c.phone != "" ? c.phone: c.fax}</div>
                    <h5 className="text-base font-semibold mt-4">License Grade</h5>
                    <div className="text-sm border-2 rounded-md w-[550px] p-1.5 mt-1">
                        <div className="flex justify-between gap-4">
                            <div className={`w-full text-center border-2 rounded-md p-2 ${c.licences.includes('A') ? "bg-[#016a70] text-white" : "bg-white"}`}> A</div>
                            <div className={`w-full text-center border-2 rounded-md p-2 ${c.licences.includes('B') ? "bg-[#016a70] text-white" : "bg-white"}`}> B</div>
                            <div className={`w-full text-center border-2 rounded-md p-2 ${c.licences.includes('C') ? "bg-[#016a70] text-white" : "bg-white"}`}> C</div>
                        </div>
                    </div>
                
                    <div className="flex justify-end gap-8 mt-20">
                        <Link to="/UpdateCollectorProfile" className="bg-[#016A70] hover:bg-teal-800 text-white py-2 px-9 rounded text-base font-semibold">Update Profile</Link>
                    </div>
                </div>
                
            </div>
            ))}
        </div>

        {/* <div>
            <Footer />
        </div> */}
    </div>

    )
}

export default CollectorProfilePage;