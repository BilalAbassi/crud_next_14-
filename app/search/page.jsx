"use client";
import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { data } from "@/utils/data";
import { CiSearch } from "react-icons/ci";

import Link from "next/link";
import Top_Search from "@/components/Top_Search";

function page() {
  const [Search, setSearch] = useState("");
  const [role, setrole] = useState("");
  console.log(role);
  return (
    <div className=" mx-4 ">
      <div className="">
        {/* <Top_Search /> */}

        <div className="flex justify-between px-2 bg-white items-center py-10">
          <div className=" bg-gray-200 rounded-full">
            <div className="relative flex items-center ">
              <input
                type="text"
                id="Search"
                placeholder="Search by name"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
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

          <div className="relative flex items-center ">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search by role"
              placeholder="Search by role"
              onChange={(e) => {
                setrole(e.target.value);
              }}
              className="w-full rounded-full bg-gray-200 py-1  outline-none p-5 shadow-sm sm:text-sm"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700 "
              >
                <span className="sr-only">Search</span>
              </button>
            </span>
          </div>
          <Link className="mr-2" href="/dashboard/products/add">
            <button className="py-2 px-6 bg-green-600 text-white font-bold ">
              Add
            </button>
          </Link>
        </div>

        {/* Search */}
      </div>
      {/* table  */}
      <div>
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm ">
          <thead>
            <tr>
              <th className=" px-4 py-2  text-left  font-medium text-gray-900">
                First Name
              </th>
              <th className=" px-4 py-2 text-left  font-medium text-gray-900">
                Last name
              </th>
              <th className=" px-4 py-2 text-left  font-medium text-gray-900">
                Email
              </th>
              <th className=" px-4 py-2 text-left  font-medium text-gray-900">
                role
              </th>
              <th className=" px-4 py-2 text-left  font-medium text-gray-900">
                Phone
              </th>

              <th className=" px-4 py-2 text-left  font-medium text-gray-900">
                action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {data
              .filter((item) => {
                return (
                  (Search.toLowerCase() === "" ||
                    item.first_name.toLowerCase().includes(Search)) &&
                  (role.toLowerCase() === "" ||
                    item.role.toLowerCase().includes(role))
                );
              })
              .map((item) => (
                <tr key={item.id}>
                  <td className=" px-4 py-2 font-medium text-gray-900">
                    {/* <Image width={40} height={40} className="rounded-full"/> */}
                    <div className="flex items-center gap-2">
                      <IoPersonCircleOutline className="text-[25px]" />
                      <span>{item?.first_name}</span>
                    </div>
                  </td>
                  <td className=" px-4 py-2 text-gray-700">
                    <span>{item?.last_name}</span>
                  </td>
                  <td className=" px-4 py-2 text-gray-700">{item?.email}</td>
                  <td className=" px-4 py-2 text-gray-700">{item?.role}</td>
                  <td className=" px-4 py-2 text-gray-700">{item?.phone}</td>
                  <td className=" px-4 py-2 text-gray-700 flex gap-2 items-center">
                    <Link
                      href="/"
                      className="py-2 px-4 bg-green-600 text-white"
                    >
                      View
                    </Link>
                    <button className="py-2 px-4 bg-red-600 text-white">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default page;
