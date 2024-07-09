"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Tabs,
  Tab,
} from "@nextui-org/react";
import { Menu, Search, ShoppingCart } from "lucide-react";
import logo from "../../public/images/LOGO.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const pathname = usePathname();

  return (
    <Navbar className="bg-[#FBFBFB] shadow-header">
      <NavbarContent justify="start">
        <Image src={logo} alt="logo" />
        <div className="flex space-x-4 overflow-x-hidden">
          <Tabs variant="underlined" aria-label="Tabs variants">
            <Tab key="perfume" title="Perfume" />
            <Tab key="cosmetics" title="Cosmetics" />
            <Tab key="collection" title="Collections" />
          </Tabs>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-[#800020]">
              <Search size={24} />
            </button>
            <div className="relative">
              <button aria-label="Cart" className="text-[#800020]">
                <ShoppingCart size={24} />
              </button>
              <span className="absolute -top-2 -right-2 bg-[#6B5A00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
