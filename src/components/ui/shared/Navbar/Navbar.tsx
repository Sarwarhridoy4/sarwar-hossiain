// components/DockNavbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Dock, DockIcon } from "@/components/magicui/dock";
import {
  FaHome,
  FaMoon,
  FaSun,
  FaProjectDiagram,
  FaUser,
} from "react-icons/fa";

const DockNavbar = () => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const [mounted, setMounted] = useState(false);

  // Ensuring the component is mounted to avoid hydration issues
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Prevent mismatch between server and client

  return (
    <Dock className='bg-slate-50 dark:bg-slate-950 navbar-dock mx-auto w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] p-2 flex items-center justify-center'>
      {/* Home Icon */}
      <DockIcon className='flex items-center justify-center'>
        <Link href='/' aria-label='Home'>
          <FaHome className='text-gray-800 dark:text-white' size={24} />
        </Link>
      </DockIcon>

      {/* Project Icon */}
      <DockIcon className='flex items-center justify-center'>
        <Link href='/projects' aria-label='Projects'>
          <FaProjectDiagram
            className='text-gray-800 dark:text-white'
            size={24}
          />
        </Link>
      </DockIcon>

      {/* About Icon */}
      <DockIcon className='flex items-center justify-center'>
        <Link href='/about' aria-label='About'>
          <FaUser className='text-gray-800 dark:text-white' size={24} />
        </Link>
      </DockIcon>

      {/* Dark/Light Mode Toggle Icon */}
      <DockIcon
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          console.count("clicked");
        }}
      >
        {theme === "light" ? <FaMoon size={24} /> : <FaSun size={24} />}
      </DockIcon>
    </Dock>
  );
};

export default DockNavbar;
