import Image from "next/image";

type ButtonProps = {
  type: "button"|"submit";
  label: string;
  icon?: string;
  variant: string;
};

export default function Button({ label, icon, variant,type }: ButtonProps) {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full ${variant}`}>
      {icon ? <Image src={icon} alt="icon" width={26} height={26}></Image> : ""}
      <label className="bold-16">{label}</label>
    </button>
  );
}
