'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Form1 from "../../components/Form1";
import Cards from "../../components/Cards";
import Summary from "../../components/Summary";

export default function Dashboard() {
  
  return (
    <>
      
      <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">
        Dashboard Overview
      </h2>
      <Form1 />
      <Cards />
      <Summary />
    </>
  );
}
