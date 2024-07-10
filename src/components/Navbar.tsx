"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarItem,
  Tabs,
  Tab,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { Search, ShoppingCart } from "lucide-react";
import logo from "../../public/images/LOGO.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar: React.FC = () => {
  const [cartCount, setCartCount] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <Navbar className="bg-white shadow-md p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <Image src={logo} alt="logo" width={50} height={50} />
          <div className="hidden sm:flex space-x-8">
            <Tabs
              variant="underlined"
              aria-label="Navigation tabs"
              className="text-gray-800"
            >
              <Tab key="perfume" title="PERFUME" />
              <Tab key="cosmetics" title="COSMETICS" />
              <Tab key="collection" title="COLLECTIONS" />
            </Tabs>
          </div>
        </div>
        <div className="flex items-center space-x-6 sm:ml-auto">
          <NavbarItem>
            <button aria-label="Search" className="text-[#800020]">
              <Search size={24} />
            </button>
          </NavbarItem>
          <NavbarItem>
            <div className="relative">
              <button aria-label="Cart" className="text-[#800020]">
                <ShoppingCart size={24} />
              </button>
              <span className="absolute -top-2 -right-2 bg-[#6B5A00] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
          </NavbarItem>
        </div>
      </div>
      {isMenuOpen && (
        <NavbarMenu className="sm:hidden mt-4 bg-white border-t">
          <div className="flex flex-col space-y-2 p-2">
            <a href="#" className="text-gray-800 border-b">
              PERFUME
            </a>
            <a href="#" className="text-gray-800 border-b">
              COSMETICS
            </a>
            <a href="#" className="text-gray-800 border-b">
              COLLECTIONS
            </a>
          </div>
        </NavbarMenu>
      )}
    </Navbar>
  );
};

export default NavBar;
