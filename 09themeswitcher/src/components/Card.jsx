import React from "react";
// optional: agar router use kar rahe ho to
// import { Link } from "react-router-dom";
export default function Card() {
  return (
    <div className="w-[340px] rounded-xl bg-white shadow-md dark:bg-gray-800">
      
      {/* Image */}
      <div className="h-56 overflow-hidden rounded-t-xl">
        <img
          className="h-full w-full object-cover"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg"
          alt="product"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-yellow-400">★★★★★</span>
          <span className="ml-2 rounded bg-blue-100 px-2 py-0.5 text-sm text-blue-700">
            4.0
          </span>
        </div>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
