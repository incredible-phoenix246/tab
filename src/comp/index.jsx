import { useState, useEffect } from "react";
import extension_data from "./extension_data.json";
import { More } from "iconsax-react";

/**
 * @typedef {Object} extension_data
 * @property {number} s_n
 * @property {string} nursery_operator_name
 * @property {string} date_generated
 * @property {string} farmers_name
 * @property {number} grafted_seedlings
 * @property {number} polyclonal_seedlings
 * @property {number} total_seedlings
 * @property {number} land_available
 * @property {string} state
 * @property {string} lga
 * @property {string} community
 */

const RowsSelection = () => {
  const [isMenu, setIsMenu] = useState(false);

  const [menuIndex, setMenuIndex] = useState(null);
  const handleToggleMenu = (index) => {
    setMenuIndex(menuIndex === index ? null : index);
  };

  return (
    <section className="w-full flex-col justify-center my-6 border text-black mt-10 2xl:mt-16">
      <div className="gap-4 my-4">
        <div className="flex flex-nowrap items-center   w-full h-[64px] border-b text-black">
          <span className="w-full px-1 max-w-[60px] flex items-center justify-between   text-black  h-full">
            <span className=" w-12 h-12 flex items-center justify-center rounded-full">
              <input type="checkbox" className="w-5 h-5" />
            </span>
          </span>

          <span className=" font-medium w-full min-w-[300px] max-w-[320px] flex items-center    text-black h-full pl-2">
            Name
          </span>
          <span className=" font-medium w-full max-w-[140px] lg:max-w-[149px] flex items-center    text-black   h-full text-center justify-center">
            No of feilds
          </span>
          <span className=" font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center   text-black   h-full">
            Proceeds
          </span>
          <span className=" font-medium w-full max-w-[100px] lg:max-w-[127px] flex items-center justify-center   text-black   h-full">
            Join Date
          </span>
          <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
            State
          </span>
          <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
            LGA
          </span>
          <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
            Phone Number
          </span>
          <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
            Nusery Operator
          </span>
        </div>
        <div className="flex w-full h-[420px] overflow-y-auto flex-col">
          {extension_data.map((data, index) => (
            <div
              key={data.s_n}
              className="flex flex-nowrap items-center w-full min-h-[64px] border-b text-black relative"
            >
              <span className="w-full max-w-[60px]  justify-center border-gray-200 text-black h-full flex items-center px-1 ">
                <input type="checkbox" className="w-5 h-5" />
              </span>
              <span className=" font-medium w-full min-w-[300px] max-w-[320px] flex items-center text-black h-full pl-2">
                {data.farmers_name}
              </span>
              <span className=" font-medium w-full max-w-[140px] lg:max-w-[149px] flex items-center    text-black   h-full text-center justify-center">
                {data.grafted_seedlings}
              </span>
              <span className=" font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center   text-black   h-full">
                Proceeds
              </span>
              <span className=" font-medium w-full max-w-[100px] lg:max-w-[127px] flex items-center justify-center   text-black   h-full">
                {data.date_generated}
              </span>
              <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
                {data.state}
              </span>
              <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
                {data.lga}
              </span>
              <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
                Phone Number
              </span>
              <span className="text-black   font-medium w-full max-w-[100px] lg:max-w-[149px] flex items-center justify-center  h-full">
                {data.nursery_operator_name}
              </span>
              <button
                type="button"
                className="rotate-90 h-6 w-6 flex items-end   justify-end mr-2"
                onClick={() => handleToggleMenu(index)}
              >
                <More />
              </button>
              {menuIndex === index && (
                <>
                  <div
                    className={`fixed min-h-screen w-full bg-black/0 top-0 left-0 z-[99] transition-all duration-300 $`}
                    onClick={() => handleToggleMenu(index)}
                  />
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="Menu"
                    className="flex right-0 flex-col absolute top-0 w-[190px] px-3 py-2 left-[1] rounded-lg justify-center gap-y-4 border border-gray-200 backdrop-blur-xl bg-black/80 transition-all duration-300 z-[999] shadow-lg"
                  >
                    {/* Menu content */}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 
      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="Menu"
        className={`flex w-[190px] h-[141px] flex-col px-3 py-2 absolute -right-2 min-[830px]:-right-8 lg:right-0 xl:-right-5 rounded-lg top-0 justify-center gap-y-4 border border-gray-200 backdrop-blur-xl bg-black/80 transition-all duration-300 z-[999] shadow-lg ${
          isMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div> */}
    </section>
  );
};

export { RowsSelection };

//  className =
//    "flex flex-col absolute top-0 left-auto w-[190px] px-3 py-2 right-0 min-[830px]:-right-8 lg:right-0 xl:-right-5 rounded-lg justify-center gap-y-4 border border-gray-200 backdrop-blur-xl bg-black/80 transition-all duration-300 z-[999] shadow-lg";
//             //
