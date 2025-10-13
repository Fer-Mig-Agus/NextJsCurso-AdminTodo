'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { JSX } from "react";


interface Props{
    path:string;
    icon: React.ReactNode;
    title:string;

}

export default function SidebarItemPage({title,icon,path}:Props) {

    const pathname = usePathname()

  return (
    <>
      <li>
        <Link
          href={path}
          className={`px-4 py-3 relative flex items-center space-x-4 rounded-xl hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white ${pathname==path && 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'} `}
        >
          {icon}
          <span className="-mr-1 font-medium">{title}</span>
        </Link>
      </li>
    </>
  );
}
