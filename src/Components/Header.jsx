import React from "react";
import img from '../assets/img1.png'

function Header() {
  return (
    <>
      <div className="flex justify-around bg-gradient-to-r from-blue-500 to-green-600">
        <img src={img} className="" alt="" />
        <div className=" w-fit flex items-center text-white">
          <h1 className="mx-2">Home /</h1>
          <h1 className="mx-2">My Booking /</h1>
          <h1 className="mx-2">Register /</h1>
          <h1 className="mx-2">Login /</h1>
          <h1 className="mx-2">Contact /</h1>
          <div className="dropdown mx-2">
            <div tabIndex={0} role="button" className=" m-1">
              KWD <i className="fa-solid fa-angle-down fa-xs"></i>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-black"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <h1 className="mx-2">العربية</h1>
        </div>
      </div>
    </>
  );
}

export default Header;
