import React from "react";
import { Link } from "react-router-dom";

const Results = () => {
  return (
    <div>
      <div className="lg:w-2/4 md:w-[100%] px-10 mx-auto mt-20">
        <div className=" rounded-lg shadow-lg">
          <div className="w-full  ">
            <h1 className="text-3xl font-bold text-center pt-16 mb-6">
              Input Data
            </h1>
          </div>
          <div className="lg:px-20 md:px-14 px-6 pb-10">
            <div className="font-bold text-gray-500">
              <p className="my-4 ">Name:</p>
              <p className="my-4 ">Sectors:</p>
              <p className="my-4 ">Agree:</p>
            </div>
            <div className="flex justify-end text-gray-700 mb-8">
              <Link
                to={"/"}
                className="underline font-bold hover:text-blue-500"
              >
                Click here to go to the form page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
