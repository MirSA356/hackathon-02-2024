import { CiFaceMeh } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import Link from "next/link";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./NavigationMenu";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
// import { IoIoSearch } from "react-icons/io"
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <header className="w-full border-b bg-white h-[60px] md:h-[80px] flex justify-between pr-2 items-center max-w-screen-2xl mx-auto">
      {/* Left */}
      <div className="flex justify-center items-center">
        <SheetSide />
        <h1 className="text-2xl md:text-4xl font-extrabold pl-2">SHOP.CO</h1>
      </div>
      {/* Navbar */}
      <ul className="hidden sm:block">
        <li className="flex space-x-4 ml-4 mt-2 items-center">
          <Link href={``}>
            <NavigationMenuDemo />
          </Link>
          <Link href={`/product`}>On Sale</Link>
          <Link href={"/product"}>New Arrivals</Link>
          <Link href={"/product"}>Brands</Link>
        </li>
      </ul>
      {/* Search input Bar */}
      {/* <div className="hidden md:block">
        <div className="flex justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#f0f0f0]">
            <FaSearchPlus className="text-xl ml-2"/>
            <input placeholder="Search items..." className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#f0f0f0]"></input>
            </div>
        </div>
        {/* Cart */}
      {/* <div className="flex items-center mr-7 space-x-5">
        <FaSearchPlus className="text-xl ml-2 md:hidden"/>
        <FaCartArrowDown className="text-2xl"/>
        <MdOutlineAccountCircle className="text-2xl"/>
        </div> */}
      {/* Right  */}
      <div className="ml-14 flex justify-center items-center">
        <div className="flex justify-start items-center lg:bg-[#F0F0F0] lg:w-[500px] h-[40px] pl-2 ml-12 md:ml-0 hover:border-none rounded-full">
          {" "}
          <CiSearch className="text-xl hidden lg:block" />{" "}
          <input
            placeholder={`Search Your Products...`}
            className="bg-[#F0F0F0] outline-none w-full h-full rounded-full ml-2 hidden lg:block"
          />
        </div>
      </div>
      <div className="flex space-x-2 sm:space-x-4">
        {" "}
        <CiSearch className="text-xl lg:hidden" />{" "}
        <Link href={"/cart"}>
          <IoCartOutline className="text-2xl" />
        </Link>
        <MdOutlineAccountCircle className="text-2xl" />
      </div>
    </header>
  );
}
