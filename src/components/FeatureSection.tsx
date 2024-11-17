import { FEATURES } from "@/constants";
import Image from "next/image";
import FeatureItem from "./FeatureItem";

export default function FeatureSection() {
  return (
    <section className="flexCenter flex-col bg-feature-bg bg-center bg-no-repeat overflow-hidden py-24">
      <div className="max-container padding-container relative flex justify-end w-full">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/img/phone.png"
            alt="photo_image"
            width={440}
            height={1000}
            className="feature-phone"
          ></Image>
        </div>
        <div className="w-full lg:w-[60%] z-20 flexCenter flex-col">
          <div className="relative">
            <Image
              src="/img/camp.svg"
              alt="camp_logo"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px]"
            ></Image>
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                description={feature.description}
                icon={feature.icon}
                title={feature.title}
                variant={feature.variant}
                key={index}
              ></FeatureItem>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
