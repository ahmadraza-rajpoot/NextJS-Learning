"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathName = usePathname()

  const navItems = [{name:"Home", pathName:"/"}, {name:"Destinations", pathName:"/destination"}, {name:"Contact Us", pathName:"/contactus"}]

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
            <Image
              src="/vercel.svg"
              alt="Travel World Logo"
              width={24}
              height={24}
            />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Travel <span className="text-amber-500">World</span>
          </span>
        </Link>
        
        {/* Navigation */}
        <div className="flex items-center gap-8">

          {
            navItems.map((item, idx)=>(
              <Link
                key = {idx}
                href={item.pathName}
                className={` ${pathName===item.pathName?"text-amber-500":"text-gray-700 "} font-medium transition hover:text-amber-500`}
              >
                {item.name}
              </Link>
            ))
          }       

          <Link
            href="/explore"
            className="rounded-full bg-amber-500 px-5 py-2.5 font-semibold text-white transition hover:bg-amber-600 hover:shadow-md"
          >
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
