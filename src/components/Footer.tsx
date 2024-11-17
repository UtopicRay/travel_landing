import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <footer className="padding-container max-container">
      <div className="flex flex-col lg:flex-row gap-y-7 justify-between items-start w-full">
        <Image
          src="/img/hilink-logo.svg"
          alt="hilink_logo"
          width={80}
          height={80}
        />
        {FOOTER_LINKS.map((footer_link) => (
          <FooterList
            direction="flex-col"
            links={footer_link.links}
            title={footer_link.title}
            key={footer_link.title}
            type={"list"}
          ></FooterList>
        ))}
        <FooterList
          type="contact"
          direction="flex-col"
          links={FOOTER_CONTACT_INFO.links}
          title={FOOTER_CONTACT_INFO.title}
        ></FooterList>
        <FooterList
          direction="flex-wrap"
          links={SOCIALS.links}
          title={SOCIALS.title}
          type="social"
        ></FooterList>
      </div>
      <div className="border-t-2 border-gray-5 my-3 flexCenter">
        <p className="mt-4">Creado con fines educativos</p>
      </div>
    </footer>
  );
}
