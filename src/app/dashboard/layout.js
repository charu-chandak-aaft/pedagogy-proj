'use client';

import '../globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const tabs = [
  { label: "Dashboard", image: "/4square.png", path: "/dashboard" },
  { label: "Access Control", image: "/key-i2.png", path: "/dashboard/access" },
  { label: "Notification or Requests", image: "/bell.png", path: "/dashboard/request" },
  { label: "Profile", image: "/profile.png", path: "/dashboard/profile" },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-[ClashDisplay-Regular]">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-100 h-screen bg-[#2B2B2B] text-white shadow-2xl fixed">
        <div className="p-6">
          <div className="text-2xl font-bold mb-15 flex">
            <Image alt="aaft" src="/pedagogy-fav.png" width={40} height={40} className='bg-[#848484] rounded rounded-[50%]' />
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
      <main className="flex-1 lg:ml-100 bg-[#ffffff] p-6">{children}</main>
    </div>
  );
}