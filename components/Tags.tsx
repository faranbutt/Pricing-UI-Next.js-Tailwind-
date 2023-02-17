import React from "react";
import Money from "@/app/icons/Money";
import Setup from "@/app/icons/Setup";
import Subscibe from "@/app/icons/Subscibe";
export default function Tags() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-y-11 lg:gap-x-32 mt-14 text-lg"  style={{fontFamily:"Inter",fontWeight:"bold"}}>
      <div className="flex flex-row gap-x-9 lg:gap-x-8">
        <div className=""><Money /></div>
        <div className="">30 days money back Guarantee</div>
      </div>
      <div className="flex flex-row gap-x-6">
        <div className=""><Setup /></div>
        <div>No setup fees 100% hassle-free</div>
      </div>
      <div className="flex flex-row gap-x-6">
        <div><Subscibe /></div>
        <div>30 days money back Guarantee</div>
      </div>
    </div>
  );
}
