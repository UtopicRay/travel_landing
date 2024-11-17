import Image from "next/image";

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
  variant: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
  variant,
}: FeatureProps) {
  return (
    <li className="flex flex-col gap-4 w-full">
      <div className={`p-4 rounded-full bg-green-50 w-20`}>
        <Image src={icon} alt="feature_icon" width={50} height={80}></Image>
      </div>
      <h3 className="bold-32">{title}</h3>
      <p className="text-gray-30 regular-16 lg:regular-20">{description}</p>
    </li>
  );
}
