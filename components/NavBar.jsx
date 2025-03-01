"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/components/assets/img/logo.png";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { TbHomeSearch } from "react-icons/tb";
import { CiBoxList } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  // Close sidebar when navigating to a new page
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]); // Trigger when `pathname` changes

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-indigo-700 border-b border-indigo-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={"/"}>
            <div className="flex items-center">
              <Image src={logo} alt="React jobs" height={40} width={40} />
              <div className="text-white ml-2 text-2xl font-bold">React Jobs</div>
            </div>
          </Link>

          <button className="md:hidden flex items-center text-white" onClick={toggleSidebar}>
            <div className="text-2xl font-bold">MENU</div>
            <IoMdArrowDropleft size={35} />
          </button>

          <div
            ref={sidebarRef}
            className={`md:flex md:items-center md:space-x-6 ${
              isSidebarOpen ? "block" : "hidden"
            } text-white fixed md:static top-0 right-0 h-full md:border-none md:h-auto w-[150px] md:w-auto bg-indigo-700 md:bg-transparent p-5 md:p-0 transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } md:transform-none transition-transform duration-300 ease-in-out`}
          >
            <div className="flex items-center justify-center">
              <button className="text-white text-2xl md:hidden" onClick={toggleSidebar}>
                <IoMdArrowDropright size={35} />
              </button>
            </div>

            <Link href="/" className={`block tracking-wider mt-4 md:mt-0 ${pathname === "/" ? "font-bold" : ""}`}>
              <div className="flex items-start justify-start">
                <TbHomeSearch size={25} className="mr-2" />
                Home
              </div>
            </Link>

            <Link
              href="/jobs-page"
              className={`block tracking-wider mt-4 md:mt-0 ${pathname === "/jobs-page" ? "font-bold" : ""}`}
            >
              <div className="flex items-start justify-start">
                <CiBoxList size={25} className="mr-2" />
                Jobs
              </div>
            </Link>

            <Link
              href="/add-job"
              className={`block tracking-wider mt-4 md:mt-0 ${pathname === "/add-job" ? "font-bold" : ""}`}
            >
              <div className="flex items-start justify-start">
                <IoIosAdd size={25} className="mr-2" />
                Add Job
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
