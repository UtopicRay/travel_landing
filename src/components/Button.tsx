import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  label: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

export default function Button({
  label,
  icon,
  variant,
  type,
  full,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full ${variant} ${full && "w-full"}`}
    >
      {icon ? <Image src={icon} alt="icon" width={26} height={26}></Image> : ""}
      <label className="bold-16">{label}</label>
    </button>
  );
}
