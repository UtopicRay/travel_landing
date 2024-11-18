import Image from "next/image";
export default function GuideSection() {
  return (
    <section className="flexCenter flex-col max-container padding-container pb-20">
      <div className="flexBetween w-full gap-3 flex-wrap pb-24">
        <div className="flex-col fade-right">
          <Image
            src="/img/camp.svg"
            alt="camp_logo"
            width={50}
            height={50}
          ></Image>
          <p className="regular-20 text-gray-500">We are here for you</p>
          <h2 className="uppercase mt-4 bold-52 w-full lg:max-w-[390px]">
            Guide you to easy path
          </h2>
        </div>
        <p className="regular-16 lg:regular-20 fade-left text-gray-30 w-full xl:max-w-[520px]">
          Only with the hilink application you will no longer get lost and get
          lost again, because we already support offline maps when there is no
          internet connection in the field. Invite your friends, relatives and
          friends to have fun in the wilderness through the valley and reach the
          top of the mountain
        </p>
      </div>
      <div className="w-full flexCenter relative fade-up">
        <Image
          src="/img/boat.webp"
          alt="boat_img"
          width={1440}
          height={20}
          className="w-full object-cover object-center 2xl:rounded-5xl "
        ></Image>
        <div className="absolute flex gap-2 md:left-[5%] lg:top-20 bg-white py-8 px-7 border shadow-md rounded-3xl">
          <Image
            src="/img/meter.svg"
            alt="meter_img"
            width={16}
            height={158}
            className="h-full w-auto"
          ></Image>
          <div className="flexBetween flex-col">
            <div className="flex flex-col">
              <div className="flexBetween ">
                <p className="text-gry-30 regular-16">Destination</p>
                <p className="text-green-50 font-bold">48 min</p>
              </div>
              <p className="bold-20">Aguas Calientes</p>
            </div>
            <div className="flex justify-start items-start flex-col">
              <p className="text-gry-30 regular-16">Start Track</p>
              <p className="bold-20">La Habana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
