'use client';
import { useState } from "react";
import Image from 'next/image';
import Form1 from "./Form1";
import Cards from "./Cards";
import Summary from "./Summary";
import AccessControl from "./AccessControl";
import RequestNotification from "./RequestNotification";
import MyProfile from "./MyProfile";
import NotificationReq from "./NotificationReq";


export default function Pedagogy() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "dashboard", label: "Dashboard", image: "/4square.png" },
    { id: "access", label: "Access Control", image: "/keyI2.png" },
    { id: "request", label: "Notification/ Requests", image: "/bell.png" },
    { id: "profile", label: "Profile", image: "/profile.png" },
  ];

  const tabContent = {
    dashboard: (
      <div className="py-6">
        <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">Dashboard Overview</h2>
        <Form1 />
        <Cards />
        <Summary />       
        
      </div>
    ),
    access: (
      <div className="py-6">
        <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">Access Control</h2>
        <AccessControl />
      </div>
    ),
    request: (
      <div className="py-6">
        <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">Notification/ Requests</h2>
        <RequestNotification />
        <NotificationReq />
      </div>
    ),
    profile: (
      <div className="py-6">
        <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">Profile</h2>
        <MyProfile />
      </div>
    ),
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen font-[ClashDisplay-Regular]">
      {/* Mobile Header */}
      <header className="lg:hidden flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
        <div className="text-xl font-bold">MySite</div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
          ☰
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-gray-900 text-white p-4 space-y-4 bg-[#FD0000]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMenuOpen(false);
              }}
              className={`block w-full text-left text-lg ${
                activeTab === tab.id ? "text-yellow-400" : ""
              }`}
            >
              <i className={`${tab.icon} pr-2`}></i>
              {tab.label}
            </button>
          ))}
        </nav>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col justify-between w-100 h-screen bg-[#2B2B2B] text-white shadow-2xl fixed">
        <div className="p-6">
          <div className="text-2xl font-bold mb-15 flex"><Image alt="aaft" src="/aaftIcon.png" width={40} height={40} className="w-[40px] h-[40px]" />&nbsp; <span style={{ paddingTop: '5px' }}>AAFT Pedagogy</span></div>
          <ul className="space-y-6 text-lg">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`block w-full text-left p-1 text-[#8A8A8F] font-[ClashDisplay-Regular] ${
                    activeTab === tab.id ? "text-white-700 bg-[#FD0000] text-[#ffffff]" : ""
                  }`}
                >
                  <Image
                  src={tab.image}
                  alt={tab.label}
                  width={40}
                  height={40}
                  className={`inline-block mr-2 transition-opacity duration-300 ${
                    activeTab === tab.id ? "opacity-100" : "opacity-40"
                  }`}
                />

                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="text-xl mt-100 flex bg-[#F9F9F9] text-[#000000]"><Image alt="aaft" src="/logout.png" width={40} height={40} className="w-[40px] h-[40px]" />&nbsp; <span style={{ paddingTop: '5px', cursor: "pointer" }}>Logout</span></div>
        </div>
        <div className="p-6 text-2xl flex space-x-4">
          <a href="#" className="fab fa-github hover:-translate-y-1 transition-transform"></a>
          <a href="#" className="fab fa-linkedin hover:-translate-y-1 transition-transform"></a>
          <a href="#" className="fab fa-behance-square hover:-translate-y-1 transition-transform"></a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-100 bg-[#ffffff]">
        {/* Render only the active tab's content in its own div */}
        {Object.entries(tabContent).map(
          ([key, content]) =>
            activeTab === key && (
              <div key={key} className="animate-fade-in">
                {content}
              </div>
            )
        )}
      </main>
    </div>
  );
}