import React, { useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import flightData from "../FlightData/flightData "

function Flightdetails() {
  const [ sortedData, setSortedData ] = useState(flightData);
  console.log(sortedData);
  
  
  return (
    <>
      <div className="flex w-full bg-base-200">
        <div className="w-6 h-screen sticky top-0 bg-gradient-to-b from-green-600 via-green-600 to-blue-600 flex items-center">
          <span className="bg-green-600 text-center text-white p-2 rounded-e-full">
            <i className="fa-solid fa-filter"></i>
            <p className="text-xs">FILTER</p>
          </span>
        </div>
        <div className="w-full">
          <Header />
          <div className="bg-base-200 m-7">
            <div className="flex justify-around  p-3">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn bg-violet-700 rounded-full text-white">
                  Sort: Price  <i className="fa-solid fa-angle-down fa-xs"></i>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
              <div>
                <button className="btn bg-violet-700 text-white rounded-s-full"><i className="fa-solid fa-plane-up fa-lg"></i> Cheapest: 130.000</button>
                <button className="btn bg-violet-700 text-white"><i className="fa-solid fa-plane-up fa-lg"></i> Fastest: 200.000</button>
                <button className="btn bg-violet-700 text-white rounded-e-full"><i class="fa-solid fa-thumbs-up fa-lg"></i> Best Value: 135.000</button>
              </div>
            </div>
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Flightdetails;
