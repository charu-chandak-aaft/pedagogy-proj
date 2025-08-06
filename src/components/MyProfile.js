import Image from 'next/image';
export default function Mypro() {
    
  return (
    <div className='m-8 mb-6 mt-0 rounded-[10] p-6 w-[90%] border border-[#707070]'>
        <h2 className='text-[#000000] text-[20px] font-[ClashDisplay-Bold] mb-4'>Personal Details</h2>
        <div className='border border-b[#000000] mb-3'></div>
        <div className='flex gap-x-5'>
          <div className='w-1/4 bg-[#F9F9F9] py-8'>
            <div className='relative'>
              <Image alt="aaft" src="/user-logo.png" width={40} height={40} className="w-[80px] h-[80px] m-auto " />
              <Image alt="aaft" src="/camera.png" width={5} height={5} className="w-[20px] h-[20px] m-auto absolute bottom-[10px] right-[120px]" />
            </div>
            <div className='text-center'>
              <p className='text-[#000000] text-[22px] text-bold'>Ajay Panickar</p>
              <p className='text-[#000000] text-[16px]'>IT Director</p>
            </div>
          </div>
          <div className='w-3/4 flex flex-wrap'>
            <div className='w-full flex gap-x-5'>
              <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" defaultValue="Ajay" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
              </div>
              <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" defaultValue="Panicker" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
              </div>
            </div>
            <div className='w-full flex gap-x-5'>
              <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" defaultValue="+91-9599640955" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
              </div>
              <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" defaultValue="ajay.p@aaft.com" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
              </div>
            </div>
            <div className='w-full flex gap-x-5'>
              <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Joining Date</label>
                <input type="text" defaultValue="02/Jan/2023" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
              </div>
              <div className='w-1/2'>
                <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                <input type="text" defaultValue="IT Director" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-[20px] pl-3 mt-10 ml-85'>
          <button className='p-2 rounded-[10px]  w-[100px] text-center text-[#000000] border border-[#000000]'>Edit</button>
          <button className='p-2 rounded-[10px] bg-[#000000] w-[100px] text-center text-white-700'>Save</button>
          {/* <div className="relative w-full max-w-sm">
            <input 
              type="file" 
              id="fileUpload" 
              className="hidden peer" 
            />
            <label 
              htmlFor="fileUpload" 
              className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-400 transition hover:border-blue-500 hover:text-blue-500 peer-invalid:text-red-500"
            >
              Choose Document (Drag & Drop) 📎 
            </label>
          </div> */}
        </div>

    </div>
  );
}