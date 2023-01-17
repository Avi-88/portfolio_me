import React from "react";
interface NavbarProps {
  mode: boolean;
  toggle: () => void
}

function Navbar({mode , toggle}:NavbarProps) {
  return (
    <div className="w-full text-gray-500  dark:text-[#e3e5e885] h-16 flex justify-between  items-center lg:px-32 md:px-20 px-10 py-10">
      <div>
        <img src="/vite.svg" className="h-10" />
      </div>
      <div className="flex justify-evenly items-center">
        <div className="flex justify-evenly items-center  ">
          <div className="dark:hover:bg-[#22262F] dark:hover:text-white border-white border cursor-pointer hover:border-gray-500 dark:border-transparent  rounded-full px-4 py-1">
            <a className="py-2 px-0.5 text-xs sm:text-sm ">About</a>
          </div>
          <div className="dark:hover:bg-[#22262F] dark:hover:text-white border-white border cursor-pointer hover:border-gray-500 dark:border-transparent rounded-full px-4 py-1">
            <a className="py-2 px-0.5 text-xs sm:text-sm ">Skills</a>
          </div>
          <div className="dark:hover:bg-[#22262F] dark:hover:text-white border-white border cursor-pointer hover:border-gray-500 dark:border-transparent rounded-full px-4 py-1">
            <a className="py-2 px-0.5 text-xs sm:text-sm ">Projects</a>
          </div>
          <div className="dark:hover:bg-[#22262F] dark:hover:text-white border-white border cursor-pointer hover:border-gray-500 dark:border-transparent  rounded-full px-4 py-1">
            <a className="py-2 px-0.5 text-xs sm:text-sm ">Contact</a>
          </div>

        </div>
        <div className="relative inline-block w-10 ml-10  mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={mode}
            onClick={() => toggle()}
            className="bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute top-1/2 -translate-y-1/2 block w-4 h-4 rounded-full border-2 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block h-6 -ml-1  rounded-full bg-transparent border-gray-500 border dark:border-0 cursor-pointer"
          ></label>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
