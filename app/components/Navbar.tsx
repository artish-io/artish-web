'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/logo.png';

import { MdOutlineMenu, MdClose } from 'react-icons/md';

const links = [
  {
    path: "#",
    label: "Post A Gig",
  },
  {
    path: "https://www.app.artish.world/blog",
    label: "Blog",
  },
  {
    path: "https://www.app.artish.world/about-us",
    label: "About Us",
  },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const Icon = isOpen ? MdClose : MdOutlineMenu;

	return (
    <nav className="bg-white py-5 border-b border-black">
      <div className="container flex items-center justify-between ">
        <div className="shrink-0">
          <Link href="/">
            <Image src={logo} alt="Artish logo" height={150} width={150} />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                target="_blank"
                className="font-semibold"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex gap-5">
            <Link
              href="#"
              className="font-semibold rounded-md border border-black py-2 px-4"
            >
              Get Started
            </Link>
            <Link
              href="#"
              className="font-semibold rounded-md border border-black py-2 px-4 bg-black text-white"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <Icon
            onClick={() => setIsOpen(!isOpen)}
            className="text-4xl cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden py-10 px-5 absolute bg-white top-20 w-full z-40">
          <div className="flex flex-col gap-6">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                target="_blank"
                className="font-semibold"
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-5">
              <Link
                href="#"
                className="font-semibold rounded-md border border-black py-2 px-4"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="font-semibold rounded-md border border-black py-2 px-4 bg-black text-white"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
