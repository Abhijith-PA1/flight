import React from "react";

function Cards({ flight }) {
  return (
    <>
      <div className="bg-white mx-5 mt-5 rounded-2xl flex">
        <div className="p-5 w-[80%]">
          <div>
            <h1 className="text-blue-700 font-bold">
              Departure <span className="font-light">On {new Date(flight.departureTime).toDateString()}</span>
            </h1>
            <div className="flex">
              <img
                src={flight.airlineLogo}
                className="w-30 h-20"
                alt=""
              />
              <div className="text-sm m-3">
                <p>{flight.airlineName}</p>
                <p>AI1234</p>
                <p>Echonomy</p>
              </div>
              <div className="m-3 flex">
                <div className="m-2">
                  <h3 className="font-bold"> {new Date(flight.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h3>
                  <p className="font-light">{flight.fromLocation}</p>
                </div>
                <div className="m-3 text-blue-800">
                  <p className="font-light text-xs text-center text-black">
                    {flight.fromLocation} {flight.toLocation}
                  </p>
                  <i className="fa-solid fa-location-dot fa-xs"></i>
                  ...................................................
                  <i className="fa-regular fa-rectangle-xmark fa-sm"></i>{" "}
                  <i className="fa-regular fa-rectangle-xmark fa-sm"></i>{" "}
                  ...................................................
                  <i className="fa-solid fa-plane fa-sm"></i>
                  <p className="font-light text-xs text-center text-black">
                    Total Time : {flight.duration}
                  </p>
                </div>
                <div className="m-2">
                  <h3 className="font-bold">{ new Date(flight.arrivalTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h3>
                  <p className="font-light">{flight.toLocation}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-blue-700 font-bold">
              RETURN <span className="font-light">On  {new Date(flight.departureTime).toDateString()}</span>
            </h1>
            <div className="flex">
              <img
                src={flight.airlineLogo}
                className="w-30 h-20"
                alt=""
              />
              <div className="text-sm m-3">
                <p>{flight.airlineName}</p>
                <p>AI1234</p>
                <p>Echonomy</p>
              </div>
              <div className="m-3 flex">
                <div className="m-2">
                  <h3 className="font-bold">{new Date(flight.departureTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h3>
                  <p className="font-light">{flight.fromLocation}</p>
                </div>
                <div className="m-3 text-blue-800">
                  <p className="font-light text-xs text-center text-black">
                    {flight.fromLocation} {flight.toLocation}
                  </p>
                  <i className="fa-solid fa-location-dot fa-xs"></i>
                  ...................................................
                  <i className="fa-regular fa-rectangle-xmark fa-sm"></i>{" "}
                  <i className="fa-regular fa-rectangle-xmark fa-sm"></i>{" "}
                  ...................................................
                  <i className="fa-solid fa-plane fa-sm"></i>
                  <p className="font-light text-xs text-center text-black">
                    Total Time :  {flight.duration}
                  </p>
                </div>
                <div className="m-2">
                  <h3 className="font-bold">{ new Date(flight.arrivalTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h3>
                  <p className="font-light">{flight.toLocation}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-e-2xl w-[20%]">
          <div className="flex justify-center items-center w-full h-[90%] border-s-2 border-gray-400">
            <div>
              <h2 className="line-through text-center">KWD 00.000</h2>
              <h1 className="font-bold text-center">{flight.price}</h1>
              <p className="text-violet-600 text-xs text-center">Refundable</p>
              <button className="text-white font-bold btn bg-violet-700 rounded-full my-3">
                SELECT &#43;
              </button>
            </div>
          </div>
          <div className="bg-blue-700 rounded-ee-2xl h-[10%] flex justify-center items-center">
            <p className="text-white">Flight Details</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center">
        <p className="w-fit rounded-b-2xl p-1 bg-blue-600 text-white ">+10 more of same price <i className="fa-solid fa-angles-down fa-sm"></i></p>
      </div>
    </>
  );
}

export default Cards;
