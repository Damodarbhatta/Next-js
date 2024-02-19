"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-2 md:px-[5rem] py-10 h-[5rem] flex  justify-between items-center bg-card itesm-center relative">
      <div className="text-[2rem] overline">
        <Link href={"/"}>ACME</Link>
      </div>
      <div className="hidden md:flex gap-4 text-[13.33px] items-center">
        <Link href={"/"} className="">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href={"#"}>PORTFOLIO</Link>
        <Link href="/contact">CONTACT</Link>
        <Link href={"/services"}>SERVICES</Link>
      </div>
     <div className="md:hidden">
     {open ? (
        <div role="button" onClick={() => setOpen(false)}>
          <X />
        </div>
      ) : (
        <div role="button" onClick={() => setOpen(true)}>
          <AlignJustify />
        </div>
      )}
     </div>
      {open && (
        <div className="flex flex-col gap-3 absolute bg-primary left-0 py-10 justify-center top-20 w-[20rem] px-7 text-white">
          <Link href={"#"}>HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href={"#"}>PORTFOLIO</Link>
          <Link href="/contact">CONTACT</Link>
          <Link href={"/services"}>SERVICES</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;



// no sleep without routing 
