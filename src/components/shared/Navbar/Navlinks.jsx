'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = () => {
  const pathname = usePathname();
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "All Books", path: "/books" },
    { id: 3, name: "My Profile", path: "/profile" },
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link className={pathname === link.path ? "border-b-2 border-neutral" : "font-normal"} href={link.path}>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Navlinks;
