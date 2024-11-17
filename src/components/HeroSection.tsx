import Image from "next/image";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      {/*Left*/}
      <div className="flex flex-col flex-1 gap-5 w-full xl:w-1/2 relative z-20">
        <Image
          src="/img/camp.svg"
          alt="camp_logo"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[0px]"
        ></Image>
        <h1 className="bold-52 lg:bold-88 mt-12">Lorem ipsum dolor sit amet</h1>
        <p className="regular-16 text-gray-50 max-w-full xl:max-w-[520px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem ex
          dolorum voluptatibus earum, soluta deserunt cumque fugit iste eveniet
          blanditiis ipsa autem. Exercitationem aliquam, perferendis quia modi
          quibusdam iste, alias debitis voluptates totam voluptatem nihil
          similique, et tenetur optio cum.
        </p>
        <div className="flex flex-wrap gap-5 my-11">
          <div className="flex items-center">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/img/star.svg"
                  alt="img_star"
                  width={26}
                  height={26}
                  key={index}
                ></Image>
              ))}
            <p className="text-blue-70">
              192k <span className="font-semibold">Excelents reviews</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            label="Download App"
            type="button"
            variant="btn_green"
          ></Button>
          <Button
            label="How we works?"
            type="button"
            icon="/img/play.svg"
            variant="bg-white"
          ></Button>
        </div>
      </div>

      {/*Rigth*/}
      <div className="relative flex flex-1 items-start ">
        <div
          className="
        bg-gray-90 rounded-lg p-6 flex  relative flex-col gap-2 z-30 w-[280px]"
        >
          <div className="flexBetween">
            <p className="text-gray-30 regular-16">Location</p>
            <Image
              src="/img/close.svg"
              alt="close_icon"
              width={26}
              height={26}
            ></Image>
          </div>
          <p className="text-gray-10 bold-20">La Habana</p>
          <div className="flexBetween">
            <div>
              <p className="text-gray-30 regular-16">Distance</p>
              <p className="text-gray-10 bold-20">172.26 km</p>
            </div>
            <div>
              <p className="text-gray-30 regular-16">elevation</p>
              <p className="text-gray-10 bold-20">200 m</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
