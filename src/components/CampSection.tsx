import React from "react";
import Camp from "./Camp";

export default function CampSection() {
  return (
    <section className="2xl:max-container 2xl:padding-container py-10 flex flex-col ">
      <div className="w-full flex flex-row gap-8  overflow-x-auto  h-[320px] lg:h-[400px] xl:h-[640px]">
        <Camp
          backgroundImage="bg-bg-img-1"
          title="La Habana"
          subtitle="la habana"
          peopleJoined={50}
        ></Camp>
        <Camp
          backgroundImage="bg-bg-img-2"
          title="La Habana"
          subtitle="la habana"
          peopleJoined={50}
        ></Camp>
      </div>
      <div className="flexEnd px-6">
        <div className="w-full mt-12 bg-green-50 lg:max-w-[200px] 2xl:max-w-[768px] p-6 rounded-3xl xl:rounded-5xl lg:mt-[-200px] z-30">
          <h2 className="text-white regular-24 md:regular-32 xl:regular-64">
            <strong>Lorem ipsum dolor sit amet</strong> consectetur adipisicing
            elit. La?
          </h2>
          <p className="regular-16 text-white lg:regular-16 mt-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            maiores, ea quisquam debitis aliquam sequi molestias blanditiis
            molestiae quam assumenda illo consectetur! Numquam, voluptatum sed.
            Ratione, facilis necessitatibus aperiam velit, numquam deleniti
            tenetur voluptas perspiciatis facere, fuga odio amet praesentium?
          </p>
        </div>
      </div>
    </section>
  );
}
