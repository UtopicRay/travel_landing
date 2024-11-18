"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {
  const [nav, setNav] = useState<boolean>(false);
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
      <button onClick={() => setNav(!nav)}>
        {nav ? (
          <Image
            className="flex lg:hidden"
            src="/img/close.svg"
            alt="menu_icon"
            width={36}
            height={36}
          ></Image>
        ) : (
          <Image
            className="flex text-black lg:hidden"
            src="/img/menu.svg"
            alt="close_icon"
            width={36}
            height={36}
          ></Image>
        )}
      </button>
      <ul
        className={
          nav
            ? ` text-gray-10 md:hidden text-left text-xl z-50 fixed left-0 top-0 w-[60%] [&&>li]:my-8 bg-black h-[100vh] border-r border-r-gray-900 ease-in-out duration-500  backdrop-blur-lg bg-opacity-25`
            : " text-left fixed left-[-100%] ease-in-out duration-500 top-0 h-full w-[60%]"
        }
      >
        {NAV_LINKS.map((section, index) => (
          <li key={index}>
            <a
              href={"/"}
              className="list-item p-5 mt-10"
              onClick={() => setNav(false)}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
