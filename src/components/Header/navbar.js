import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-between p-10 items-center bg-black gap-5 border-b-2 border-gray-400 sticky top-0 z-10">
      <div className=" flex items-center justify-between gap-[70px]">
        <img src="/images/burn.png" href="" alt="logo" className="w-[130px]" />
      </div>
      <div className="flex justify-between">
        <ul className="flex gap-8 text-white font-sans font-semibold text-xs">
          <li className="hover:text-orange-400  transition-transform duration-200 hover:scale-150    ">
            <a href="/">HOME</a>
          </li>
          <li className="hover:text-orange-400  transition-transform duration-200 hover:scale-150">
            GYMS
          </li>
          <li className="hover:text-orange-400  transition-transform duration-200 hover:scale-150">
            CLASSES
          </li>
          <li className="hover:text-orange-400 transition-transform duration-200 hover:scale-150">
            <a href="/join-online"> JOIN ONLINE</a>
          </li>
          <li className="hover:text-orange-400 hover:translate-x-1 transition-transform duration-200 hover:scale-150 cursor-pointer">
            CORPORATE
          </li>
          <li className="hover:text-orange-400 hover:translate-x-1 transition-transform duration-200 hover:scale-150 cursor-pointer">
            FRANCHISEE
          </li>
          <li className="hover:text-orange-400 hover:translate-x-1 transition-transform duration-200 hover:scale-150 cursor-pointer">
            <a href="/form"> CONTACT</a>
          </li>
        </ul>
      </div>
      <div>
        <p className="hover:text-orange-400 hover:translate-x-1 transition-transform duration-200 hover:scale-150 text-white cursor-pointer">
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
};

export default Navbar;
