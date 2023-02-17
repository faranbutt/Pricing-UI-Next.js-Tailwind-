import React from "react";
import Price from "./Price";
import Tags from "./Tags";
export default function Head() {
  return (
    <div className="flex flex-col">
      <div className="flex bg-purple-700 w-full flex-start md:justify-center lg:justify-center">
        <div className="pt-20 text-white pb-48 lg:text-center space-y-5 lg:space-y-4 ml-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl" style={{fontFamily:"Inter",fontWeight:'bold'}}>Simple Pricing for your buisness</h1>
            <p className="text-lg md:text-2xl lg:text-2xl" style={{fontFamily:"Inter",fontWeight:'medium'}}>Plans that are carefully crafted to suit your business.</p>
        </div>
      </div>
      <div className="-mt-36 lg:-mt-32 ml-10">
        <Price />
      </div>
      <div className="mx-auto">
        <Tags />
      </div>
    </div>
  );
}
