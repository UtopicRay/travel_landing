import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

type CampProps = {
  title: string;
  backgroundImage: string;
  subtitle: string;
  peopleJoined: number;
};
export default function Camp({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) {
  return (
    <div
      className={`relative w-full bg-cover bg-no-repeat min-w-[1100px] h-full lg:rounded-5xl ${backgroundImage}`}
    >
      <div className="flex h-full justify-between items-start flex-col p-6 lg:px-20 lg:py-10">
        <div className="flexStart gap-6">
          <div className="p-3 bg-green-50 rounded-full">
            <Image
              src="/img/folded-map.svg"
              alt="map_icon"
              width={26}
              height={26}
            ></Image>
          </div>
          <div>
            <p className="bold-20 text-gray-10">{title}</p>
            <p className="bold-16 text-gray-10">{subtitle}</p>
          </div>
        </div>
        <div className="flex justify-start items-end gap-3 ">
          <span className="flex -space-x-2 overflow-hidden">
            {PEOPLE_URL.map((people, index) => (
              <Image
                src={people}
                alt="map_icon"
                width={40}
                height={40}
                key={index}
                className="inline-block h-10 w-10"
              ></Image>
            ))}
          </span>
          <p className="bold-20 text-gray-10">{peopleJoined}+ Joined</p>
        </div>
      </div>
    </div>
  );
}
