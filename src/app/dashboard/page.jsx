'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Form1 from "../../components/Form1";
import Cards from "../../components/Cards";
import Summary from "../../components/Summary";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect unauthenticated users
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h1 className="text-[#000000]">Welcome, {session?.user?.name}</h1>
        <p  className="text-[#000000]">Email: {session?.user?.email}</p>
      </div>
      <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">
        Dashboard Overview
      </h2>
      <Form1 />
      <Cards />
      <Summary />
    </>
  );
}
