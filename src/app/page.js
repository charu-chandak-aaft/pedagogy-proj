import './globals.css';
import Image from 'next/image';

export default function Login() {
  return (
    <section className="">
      <div className="mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[65%]">
              <Image src="/welcome.webp" alt="aaft" width={800} height={600} className="w-full h-auto relative" />
              <div className='absolute top-[20%] left-[12%]'>
                <p className='leading-[55px] font-bold text-[50px] font-[ClashDisplay-Bold]'>Welcome to <br />Gogy.</p>
                <p className='font-[ClashDisplay-Regular] mt-3 text-[20px]'>Where academic blends with dynamic <br />industry landscape.</p>
              </div>
            </div>
            <div className="w-full lg:w-[35%] p-15 ">
              <div className="rounded-[20] bg-[#ffffff] w-full h-auto text-center py-20" >
                <Image alt="aaft" src="/pedagogy-logo.webp" width={100} height={100} className='rounded rounded-[50%] w-35 mx-auto h-auto py-4'/>
                <p className='text-[#000000] text-[30px] font-[ClashDisplay-Bold] font-bold'>Login in to your account</p>
                  <p className='text-[#000000] pb-20'>One tool for all your needs.</p>
                  <button className='bg-[#FD0000] flex mx-auto p-3 rounded-[10] w-[80%] justify-center text-center'><Image alt="aaft" src="/key-icon.png" width={20} height={20} className='h-auto'/> &nbsp; Single Sign-On (SSO)</button>
              </div>              
            </div>
          </div>
        </div>
    </section>
  )
}