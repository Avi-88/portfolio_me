import { useState } from "react";
interface NavbarProps {
  mode: boolean;
  toggle: () => void;
}

function Navbar({ mode, toggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMenuStyle =
    "absolute float-left p-4  right-0 flex-col justify-evenly items-center z-50 shadow-md mt-1 md:min-w-max   dark:bg-[#22262F] border border-gray-300 dark:border-transparent rounded-lg ";

  const handleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <div className="w-full text-gray-500  dark:text-[#e3e5e885] h-16 flex justify-between  items-center lg:px-32 md:px-20 sm:px-10 px-5 py-10">
      <div>
        <img src="/vite.svg" className="h-10" />
      </div>
      <div className="md:flex justify-evenly items-center hidden">
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
            onChange={() => toggle()}
            className=" bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute top-1/2 -translate-y-1/2 block w-4 h-4 rounded-full border-2 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block h-6 -ml-1  rounded-full bg-transparent border-gray-500 border dark:border-0 cursor-pointer"
          ></label>
        </div>
      </div>
      <div className="relative md:hidden">
        <button
          onClick={handleMenu}
          className="dark:bg-[#22262F] dark:hover:text-white border cursor-pointer border-gray-300 shadow-md dark:border-transparent  rounded-full py-1.5 px-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
        <div
          className={
            isOpen ? defaultMenuStyle + "flex" : defaultMenuStyle + "hidden"
          }
        >
          <div className="flex flex-col justify-evenly items-center ">
            <div className=" dark:hover:text-white  cursor-pointer hover:text-gray-800  rounded-full px-4 py-1">
              <a className="py-2 px-0.5 text-sm font-semibold">About</a>
            </div>
            <div className=" dark:hover:text-white  cursor-pointer hover:text-gray-800  rounded-full px-4 py-1">
              <a className="py-2 px-0.5 text-sm font-semibold">Skills</a>
            </div>
            <div className=" dark:hover:text-white  cursor-pointer hover:text-gray-800  rounded-full px-4 py-1">
              <a className="py-2 px-0.5 text-sm font-semibold">Projects</a>
            </div>
            <div className=" dark:hover:text-white  cursor-pointer hover:text-gray-800  rounded-full px-4 py-1">
              <a className="py-2 px-0.5 text-sm font-semibold">Contact</a>
            </div>
          </div>
          <div className="mt-2">
            <div className="relative inline-block w-10  align-middle select-none ml-1 transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                checked={mode}
                onChange={() => toggle()}
                className=" bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute top-1/2 -translate-y-1/2 block w-4 h-4 rounded-full border-2 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block h-6 -ml-1  rounded-full bg-transparent border-gray-500 border dark:border-0 cursor-pointer"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
