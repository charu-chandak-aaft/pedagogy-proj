'use client';
import Form1 from "../../components/Form1";
import Cards from "../../components/Cards";
import Summary from "../../components/Summary";
import { useSession } from "next-auth/react";

export default function Dashboard() {
   const { data: session } = useSession();

  if (!session) return <p>Please login first</p>;
  return (
    <>
     <div>
      <h1>Welcome, {session.user.name}</h1>
      <p>Email: {session.user.email}</p>
    </div>
      <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">Dashboard Overview</h2>
      <Form1 />
      <Cards />
      <Summary />
    </>
  );
}