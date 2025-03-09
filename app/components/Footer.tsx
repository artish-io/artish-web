import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/images/logo.png';

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
	return (
    <footer className="bg-[#FCFBFC] pt-10">
      <div className="container flex justify-between flex-col md:flex-row">
        <div className="mb-12 md:mb-0">
          <div className="shrink-0">
            <Link href="/">
              <Image src={logo} alt="Artish logo" height={70} width={70} />
            </Link>
          </div>
          <p className="mt-5">
            <span className="font-semibold">123 Main St.</span>
            <br />
            Level 1, 123 Sample St., Lagos, Nigeria
          </p>
          <p className="mt-5">
            <span className="font-semibold">Phone:</span> <br />
            <Link href="tel:+234812344282" className="underline">
              +234812344282
            </Link>
            <br />
            <Link href="mailto:contact@artish.world" className="underline">
              contact@artish.world
            </Link>
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebook className="text-lg cursor-pointer" />
            <FaInstagram className="text-lg cursor-pointer" />
            <RiTwitterXFill className="text-lg cursor-pointer" />
            <FaLinkedin className="text-lg cursor-pointer" />
            <FaYoutube className="text-lg cursor-pointer" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link
                  href="https://www.app.artish.world/about-us"
                  className="hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2 font-semibold">
              <li>
                <Link
                  href="https://www.app.artish.world/blog"
                  target="_blank"
                  className="hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.app.artish.world/privacy-policy"
                  target="_blank"
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-12 pb-10">
        <div className="flex flex-wrap justify-center md:justify-between text-sm border-t pt-4 border-black">
          <p>© 2023 ARTISH LLC. All rights reserved.</p>
          <div className="flex gap-3 underline mt-2 md:mt-0">
            <Link
              href="https://www.app.artish.world/privacy-policy"
              target="_blank"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms and Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
