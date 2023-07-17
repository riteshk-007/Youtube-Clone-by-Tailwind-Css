import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytlogo from "/logo.png";
import logo from "/youtube.png";

import { FiMenu, FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/ContextApi";
import Loader from "../shared/loader";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 border md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#585858]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-black dark:text-white text-2xl" />
            ) : (
              <FiMenu className="text-black dark:text-white text-2xl" />
            )}
          </div>
        )}
        <Link to={"/"} className="flex h-5 items-center">
          <img src={ytlogo} alt="youtube" className="h-8 hidden md:block" />
          <img src={logo} alt="youtube" className="h-6  md:hidden" />
        </Link>
      </div>
      <div className="group flex  items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#585858] rounded-l-3xl  group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
          <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-black dark:text-white text-2xl" />
          </div>
          <input
            type="text"
            className="bg-transparent outline-none text-black dark:text-white text-2xl pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[550px]"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#585858] rounded-r-3xl bg-white/[0.1]">
          <IoIosSearch className="text-black dark:text-white text-2xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div className="flex items-center  justify-center h-10 w-10  rounded-full  hover:bg-[#585858]/[0.6">
            <RiVideoAddLine className="text-black dark:text-white text-2xl cursor-pointer" />
          </div>
          <div className="flex items-center  justify-center h-10 w-10 ml-2 rounded-full  hover:bg-[#585858]/[0.6]">
            <FiBell className="text-black dark:text-white text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4 object-cover">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
