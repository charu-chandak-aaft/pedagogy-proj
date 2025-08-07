'use client';

import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import UserInfo from "../../components/UserInfo";
import { useState } from 'react';

const tabs = [
  { label: "Dashboard", image: "/4square.png", path: "/dashboard" },
  { label: "Access Control", image: "/keyI2.png", path: "/dashboard/access" },
  { label: "Notification or Requests", image: "/bell.png", path: "/dashboard/request" },
  { label: "Profile", image: "/profile.png", path: "/dashboard/profile" },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-[ClashDisplay-Regular] overscroll-x-hidden">
  
      {/* Mobile Navbar */}
      <div className="lg:hidden bg-[#2B2B2B] text-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center text-xl font-bold">
          <Image alt="aaft" src="/pedagogyFav.png" width={30} height={30} className="bg-[#848484] rounded-full" />
          <span className="ml-2">AAFT Pedagogy</span>
        </div>
        <button onClick={() => setMobileNavOpen(!isMobileNavOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMobileNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileNavOpen && (
        <div className="lg:hidden bg-[#2B2B2B] text-white p-4 space-y-4">
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;
            return (
              <Link key={tab.path} href={tab.path} onClick={() => setMobileNavOpen(false)}>
                <div
                  className={`flex items-center p-2 rounded ${isActive ? 'bg-[#FD0000]' : 'hover:bg-[#FD000075]'}`}
                >
                  <Image src={tab.image} alt={tab.label} width={30} height={30} className="mr-2" />
                  <span>{tab.label}</span>
                </div>
              </Link>
            );
          })}
          <div className="flex items-center text-white cursor-pointer">
            <Image alt="logout" src="/logout.png" width={30} height={30} className="mr-2" />
            <span>Logout</span>
          </div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex flex-col w-90 h-screen bg-[#2B2B2B] text-white shadow-2xl fixed">
        <div className="p-6">
          <div className="text-2xl font-bold mb-15 flex">
            <Image alt="aaft" src="/pedagogyFav.png" width={40} height={40} className='bg-[#848484] rounded rounded-[50%]' />
            &nbsp; <span style={{ paddingTop: '5px' }}>AAFT Pedagogy</span>
          </div>
          <ul className="space-y-6 text-lg">
            {tabs.map((tab) => {
              const isActive = pathname === tab.path;
              return (
                <li key={tab.path}>
                  <Link href={tab.path}>
                    <div
                      className={`block w-full text-left p-1 rounded transition-all duration-200 ${
                        isActive
                          ? 'bg-[#FD0000] text-white'
                          : 'text-[#8A8A8F] hover:bg-[#FD000075] hover:text-white'
                      }`}
                    >
                      <Image
                        src={tab.image}
                        alt={tab.label}
                        width={40}
                        height={40}
                        className={`inline-block mr-2 transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-40 hover:opacity-100'
                        }`}
                      />
                      {tab.label}
                    </div>
                  </Link>
                </li>
              );
            })}
            <div className="text-xl mt-100 flex bg-[#F9F9F9] text-[#000000]"><Image alt="aaft" src="/logout.png" width={40} height={40} className="w-[40px] h-[40px]" />&nbsp; <span style={{ paddingTop: '5px', cursor: "pointer" }}>Logout</span></div>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-90 bg-[#ffffff] p-6">
        <UserInfo />
        {children}
      </main>
    </div>
  );
}