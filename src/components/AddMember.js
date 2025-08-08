'use client';
import Image from 'next/image';
import AddMember from './AddMember.js';

export default function Members() {
  
  return (
    <div className='m-8 mb-6 mt-0 rounded-[10] p-6 w-[90%] max-w-[1350px] border border-[#707070]'>
        <h2 className='text-[#000000] text-[20px] font-[ClashDisplay-Bold] mb-4'>Add Member (As Campus Director)</h2>
        <div className="overflow-x-auto">
        <div className="min-w-[1400px]">
        <form className="ml-2 w-full grid grid-cols-5 gap-5">
          <div className=''>
            <label  className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" placeholder="Name" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
          </div>
          <div className=''>
            <label  className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
            <input type="email" placeholder="Email ID" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
          </div>
          <div className=''>
            <label className="block text-sm font-medium text-gray-700 mb-1">Select Entity</label>
            <select
              className="bg-[#F6F6F6] h-[35px] w-full rounded text-[#000000]"
              required
            >
              <option value="">Select Entity</option>
              <option value="report">Monthly Report</option>
              <option value="summary">Executive Summary</option>
              <option value="data">Raw Data</option>
            </select>
          </div>
          <div className=''>
            <label  className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
            <select
              className="h-[35px] w-full bg-[#F6F6F6] rounded text-[#000000]"
              required
            >
              <option value="">Select Role</option>
              <option value="report">Monthly Report</option>
              <option value="summary">Executive Summary</option>
              <option value="data">Raw Data</option>
            </select>
          </div>
          <div className=''>
            <label  className="block text-sm font-medium text-gray-700 mb-1">Control Access</label>
            <select
              className="h-[35px] w-full bg-[#F6F6F6] rounded text-[#000000]"
              required
            >
              <option value="">Control Access</option>
              <option value="report">Monthly Report</option>
              <option value="summary">Executive Summary</option>
              <option value="data">Raw Data</option>
            </select>
          </div>
        </form>
        <div className='p-3'>
          <div className="block text-m text-gray-700 mt-5 mb-1 font-bold">Select Schools Sec 16</div>
          <div className='border border-b[#000000] mb-3'></div>
          <div className='grid grid-cols-4 gap-y-5'>
            <div className='text-[#000000] flex items-center'><div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center text-purple-600 text-[10px]">✔</div>&nbsp; School of Animation</div>
            <div className='text-[#000000]'>School of Cinema</div>
            <div className='text-[#000000]'>School of Photography</div>
            <div className='text-[#000000]'>School of Digital Marketing</div>
            <div className='text-[#000000]'>School of Music</div>
            <div className='text-[#000000] flex items-center'><div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center text-purple-600 text-[10px]">✔</div>&nbsp; School of Fashion Design</div>
            <div className='text-[#000000]'>School of Interior Design</div>
            <div className='text-[#000000]'>School of Data Science</div>
            <div className='text-[#000000]'>School of Hospitality & Tourism</div>
            <div className='text-[#000000] flex items-center'><div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center text-purple-600 text-[10px]">✔</div>&nbsp; School of Fine Arts</div>
            <div className='text-[#000000]'>School of Health & Wellness</div>
            <div className='text-[#000000] flex items-center'><div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center text-purple-600 text-[10px]">✔</div>&nbsp; School of Drama & Acting</div>
            <div className='text-[#000000]'>School of Journalism & Mass Communication</div>
            <div className='text-[#000000]'>School of Advertising, PR & Events</div>            
          </div>
        </div>

        <div className='p-3'>
          <div className="block text-m text-gray-700 mt-5 mb-1 font-bold">Select Schools Sec 5</div>
          <div className='border border-b[#000000] mb-3'></div>
          <div className='grid grid-cols-4 gap-y-5'>
            <div className='text-[#000000] flex items-center'><div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center text-purple-600 text-[10px]">✔</div>&nbsp; School of Animation</div>
            <div className='text-[#000000]'>School of Cinema</div>
            <div className='text-[#000000]'>School of Photography</div>
            <div className='text-[#000000]'>School of Digital Marketing</div>
            <div className='text-[#000000]'>School of Music</div>
            <div className='text-[#000000] flex items-center'><div className="w-4 h-4 rounded-full border border-purple-500 flex items-center justify-center text-purple-600 text-[10px]">✔</div>&nbsp; School of Fashion Design</div>
            <div className='text-[#000000]'>School of Interior Design</div>
            <div className='text-[#000000]'>School of Data Science</div>           
          </div>
        </div>
        <div className='flex gap-[20px] pl-3 mt-10 mb-5'>
          <button className='p-2 rounded-[10px]  w-[100px] text-center text-[#000000] border border-[#000000]'>Cancel</button>
          <button className='p-2 rounded-[10px] bg-[#000000] w-[100px] text-center text-white-700'>Save</button>
        </div>
       </div> 
    </div>
    </div>
  );
}