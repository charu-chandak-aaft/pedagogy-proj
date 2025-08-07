'use client';

import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  // const [session] = useState(false);

  return (
    <section>
      <div className="mx-auto px-4 bg-[#000000]">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-[65%] relative">
            <Image src="/welcome.webp" alt="aaft" width={800} height={600} className="w-full h-[100vh]" />
            <div className='absolute top-[20%] left-[12%]'>
              <p className='leading-[55px] font-bold text-[50px] text-[#ffffff]'>Welcome to <br />Gogy.</p>
              <p className='mt-3 text-[20px] text-[#ffffff]'>Where academic blends with dynamic <br />industry landscape.</p>
            </div>
          </div>

          <div className="w-full lg:w-[35%] p-15 bg-[#000000]">
            <div className="rounded-[20px] bg-[#ffffff] w-full h-auto text-center py-20">
              <Image alt="aaft" src="/manIcon.png" width={100} height={100} className='w-35 mx-auto h-auto py-4' />
              
              <p className='text-[#000000] pb-2'>One tool for all your needs.</p>
              
              {session ? (
                <>
                  <p className="mb-4 text-[#000000]">Welcome, {session?.user?.name}</p>
                  <button onClick={() => signOut()} className='mt-5 bg-gray-700 text-white p-3 rounded-[10px] w-[80%] mx-auto'>
                    Logout
                  </button>
                </>
              ) : (
                <>
                <p className='text-[#000000] text-[30px] font-bold'>Login to your account</p>
                <button
                  className='bg-[#FD0000] flex mx-auto p-3 rounded-[10px] w-[80%] justify-center items-center text-white'
                  onClick={() => signIn("google")}
                >
                  <Image alt="key" src="/key-icon.png" width={20} height={20} className='h-auto' />
                  &nbsp; Single Sign-On (SSO)
                </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}