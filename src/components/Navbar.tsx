import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="padding-container max-container flexBetween py-5 relative z-30">
      <Link href="/">
        <Image src="/img/hilink-logo.svg" alt="hilink" width={80} height={80} />
      </Link>
      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 font-semibold transition-all hover:font-bold hover:duration-150"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="hidden lg:flexCenter">
        <Button
          label="login"
          type="button"
          variant="btn_dark_green"
          icon="/img/user.svg"
        ></Button>
      </div>
      <Image
        className="flex lg:hidden"
        src="/img/menu.svg"
        alt="menu_icon"
        width={36}
        height={36}
      ></Image>
    </nav>
  );
}
