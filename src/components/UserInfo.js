import Image from 'next/image';

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AccessPage() {
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
    <div className="bg-[#2b2b2b] p-[20px] ml-[10px]">
      <h1 className="text-[#c29a9a]">Welcome, {session?.user?.name}</h1>
      <p  className="text-[#c29a9a]">Email: {session?.user?.email}</p>
    </div>
  );
}