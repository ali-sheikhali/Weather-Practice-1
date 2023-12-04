import React from "react";

function MainForm({ getWeather, name, description, city, country, humidity }) {
  return (
    <div className="w-8/12 mx-auto pt-16 shadow-md">
      <div className="flex">
        <div className="relative w-6/12">
          <img
            className="w-full h-[600px]"
            src={require("../img/bg.jpg")}
            alt=""
          />
          <div className="absolute w-9/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p className="font-bold text-3xl">Weather Finder</p>
            <p className="font-bold text-xl">
              Find out temperature, conditions and more...
            </p>
          </div>
        </div>
        <div className="bg-gray-600 w-6/12 flex flex-col  ">
          <form
            action=""
            onSubmit={getWeather}
            className="w-8/12 mx-auto mt-16"
          >
            <div className="flex flex-col space-y-3">
              <input
                className="p-2 rounded-md focus:outline-none"
                type="text"
                placeholder="city..."
                name="city"
              />
              <input
                className="p-2 rounded-md focus:outline-none"
                type="text"
                placeholder="country..."
                name="country"
              />
              <button
                className="bg-red-500 rounded-md w-6/12 text-white"
                type="submit"
              >
                Get Weather
              </button>
            </div>
          </form>

          <div className="flex flex-col px-5 w-10/12 justify-center items-center mt-10 space-y-10">
            <div className="border-b-2 space-x-2  w-7/12">
              <span className="font-bold text-yellow-300 text-xl"> name: </span>{" "}
              <span className="text-white">{name}</span>
            </div>
            <div className="border-b-2 space-x-2 w-7/12">
              <span className="font-bold text-yellow-300 text-xl">
                location:
              </span>
              <span className="text-white">
                  {city} , {country}
              </span>
            </div>
            <div className="border-b-2 space-x-2 w-7/12">
              <span className="font-bold text-yellow-300 text-xl">
                temperature:
              </span>
              <span className="text-white"> {description}</span>
            </div>
            <div className="border-b-2 space-x-2 w-7/12">
              <span className="font-bold text-yellow-300 text-xl">
                humidity:
              </span>
              <span className="text-white">{humidity}</span>
            </div>
            {/* <div className='border-b-2 w-7/12'>
           <span className='font-bold text-yellow-300'> location: </span> {city} , {country}
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainForm;
