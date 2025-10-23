import React, { useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import flightData from "../FlightData/flightData ";

function Flightdetails() {
  const [sortedData, setSortedData] = useState(flightData);
  console.log(sortedData);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [sortOrder, setSortOrder] = useState("asc");
  const [isRefundable, setIsRefundable] = useState(null);

  // Function to handle sorting of the data
  const handleSort = (order) => {
    setSortOrder(order);

    const sortedFlights = [...flightData].sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      if (order === "asc") {
        return priceA - priceB; // Ascending
      } else {
        return priceB - priceA; // Descending
      }
    });

    setSortedData(sortedFlights);
  };

  // Function to handle filtering by price range
  const handleFilter = () => {
    const filteredFlights = flightData.filter((flight) => {
      const price = parseFloat(flight.price.replace("$", ""));
      return price >= minPrice && price <= maxPrice;
    });
    setSortedData(filteredFlights);
  };

  // Function to handle filter by refundable or not refundable
  const handlefunts = (refundStatus) => {
    setIsRefundable(refundStatus);

    const filteredFlights = flightData.filter((flight) => {
      if (refundStatus === "notRefundable") {
        return flight.cancelationpolicy === "not refuntable";
      } else if (refundStatus === "refundable") {
        return flight.cancelationpolicy === " refuntable with charge";
      }
      return true; // No filter applied
    });

    setSortedData(filteredFlights);
  };

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
                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-violet-700 rounded-full text-white"
                >
                  Sort:{" "}
                  {sortOrder === "asc"
                    ? "Price (Low to High)"
                    : "Price (High to Low)"}{" "}
                  <i className="fa-solid fa-angle-down fa-xs"></i>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button onClick={() => handleSort("asc")}>
                      Low to High
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleSort("desc")}>
                      High to Low
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <button className="btn bg-violet-700 text-white rounded-s-full">
                  <i className="fa-solid fa-plane-up fa-lg"></i> Cheapest:
                  130.000
                </button>
                <button className="btn bg-violet-700 text-white">
                  <i className="fa-solid fa-plane-up fa-lg"></i> Fastest:
                  200.000
                </button>
                <button className="btn bg-violet-700 text-white rounded-e-full">
                  <i class="fa-solid fa-thumbs-up fa-lg"></i> Best Value:
                  135.000
                </button>
              </div>
            </div>
            {/* Price Filter */}
            <div className="flex mx-7 justify-center">
              <input
                type="number"
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="input input-bordered"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="input input-bordered mx-5 "
              />
              <button
                onClick={handleFilter}
                className="btn bg-violet-700 text-white"
              >
                Apply Filter
              </button>
            </div>
            <div>
              <input
                type="radio"
                name="refundPolicy"
                className="radio m-2"
                onClick={() => handlefunts("notRefundable")}
                checked={isRefundable === "notRefundable"}
              />{" "}
              Not Refundable
              <input
                type="radio"
                name="refundPolicy"
                className="radio m-2"
                onClick={() => handlefunts("refundable")}
                checked={isRefundable === "refundable"}
              />{" "}
              Refundable with Charge
            </div>
            {/* Display the filtered and sorted cards */}
            {sortedData.map((flight, index) => (
              <Cards key={index} flight={flight} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Flightdetails;
