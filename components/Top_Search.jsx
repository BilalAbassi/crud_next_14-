"use client";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

function Top_Search({ placeholder }) {
  return (
    <div className="flex justify-between px-2 bg-white items-center py-10">
      <div className=" bg-gray-200 rounded-full">
        <div className="relative flex items-center ">
          <label htmlFor="Search" className="sr-only">
            Search
          </label>

          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-full bg-gray-200 py-1  outline-none p-5 shadow-sm sm:text-sm"
          />
          <CiSearch className="text-black mr-2" />
          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-700 "
            >
              <span className="sr-only">Search</span>
            </button>
          </span>
        </div>
      </div>
      <Link className="mr-2" href="/dashboard/products/add">
        <button className="py-2 px-6 bg-green-600 text-white font-bold ">
          Add
        </button>
      </Link>
    </div>
  );
}

export default Top_Search;
