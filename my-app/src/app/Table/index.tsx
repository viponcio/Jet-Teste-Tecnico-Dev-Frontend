import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div>
      <table className="w-full shadow-lg bg-white border-collapse ">
        <thead className="bg-gray-200">
          <tr>
            <th className=" text-left px-8 py-4 ">Car</th>
            <th className=" text-left px-8 py-4 ">Next Reservation</th>
            <th className=" text-left px-8 py-4 ">Status</th>
            <th className=" text-left px-8 py-4 ">Rating</th>
            <th className=" text-left px-8 py-4 ">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="flex gap-1 justify-left px-0 py-2">
              <img src="../miniCooper.jpeg" className="h-10" />
              Mini Cooper 2020
            </td>
            <td className="px-8 py-4">11/07</td>
            <td className="px-8 py-4">
              <span className="bg-green-100 rounded-md text-green-800 p-2">
                Available
              </span>
            </td>
            <td className="flex row gap-3 px-8 py-4">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FontAwesomeIcon icon={faStar} className="h-4" />;
              })}
            </td>
            <td className="border px-8 py-4">Row 1, Column 5</td>
          </tr>
          <tr>
            <td className="flex gap-1 justify-left border-y px-0 py-2">
              <img src="../miniCooper.jpeg" className="h-10" />
              Mini Cooper 2020
            </td>
            <td className="border-y px-8 py-4">11/07</td>
            <td className="border-y px-8 py-4">
              <span className="bg-green-100 rounded-md text-green-800 p-2">
                Available
              </span>
            </td>
            <td className="flex row gap-3 border-y px-8 py-4">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FontAwesomeIcon icon={faStar} className="h-4" />;
              })}
            </td>
            <td className="border px-8 py-4">Row 2, Column 5</td>
          </tr>
          <tr>
            <td className="flex gap-1 justify-left px-0 py-2">
              <img src="../miniCooper.jpeg" className="h-10" />
              Mini Cooper 2020
            </td>
            <td className="px-8 py-4">11/07</td>
            <td className="px-8 py-4">
              <span className="bg-green-100 rounded-md text-green-800 p-2">
                Available
              </span>
            </td>
            <td className="flex row gap-3 px-8 py-4">
              {Array.from({ length: 5 }).map((_, index) => {
                return <FontAwesomeIcon icon={faStar} className="h-4" />;
              })}
            </td>
            <td className="border-y px-8 py-4">Row 3, Column 5</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
