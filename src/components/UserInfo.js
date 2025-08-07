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
    <div className="bg-[#000000] ml-[30px] p-[10px] flex justify-between">
      <h1 className="text-[#ffffff]">Welcome, {session?.user?.name}</h1>
      <p  className="text-[#ffffff]">Email: {session?.user?.email}</p>
    </div>
  );
}