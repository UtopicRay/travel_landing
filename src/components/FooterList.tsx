import Image from "next/image";
import Link from "next/link";

type ContactType = {
  label: string;
  value: string;
};

type FooterListProps = {
  title: string;
  direction: "flex-col" | "flex-wrap";
  links: string[] | ContactType[];
  type: "social" | "list" | "contact";
};

export default function FooterList({
  title,
  direction,
  links,
  type,
}: FooterListProps) {
  return (
    <div className={`flex justify-start items-start flex-col `}>
      <p className="font-bold mb-3">{title}</p>
      <ul className={`flex justify-start items-start  gap-6 ${direction}`}>
        {type === "list" ? (
          <>
            {links.map((link) =>
              typeof link === "string" ? <Link href="/">{link}</Link> : ""
            )}
          </>
        ) : (
          ""
        )}
        {type === "contact" ? (
          <>
            {links.map((link) =>
              typeof link !== "string" ? (
                <p className="font-semibold">
                  {link.label}: <span className="font-normal">{link.value}</span>
                </p>
              ) : (
                ""
              )
            )}
          </>
        ) : (
          ""
        )}
        {type === "social" ? (
          <>
            {links.map((link) =>
              typeof link === "string" ? (
                <Image
                  src={link}
                  alt="social_link"
                  width={26}
                  height={26}
                ></Image>
              ) : (
                ""
              )
            )}
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
