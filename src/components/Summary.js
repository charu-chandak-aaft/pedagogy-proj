'use client';
import Image from 'next/image';
import { useState } from 'react';
import UserTables from "./UserTables";

export default function Summary() {

  const [selectedOption, setSelectedOption] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`You selected: ${selectedOption}`);
    };
  
  return (
    <div className='m-8 mb-6 mt-0 rounded-[5] p-6 w-[90%] border border-[#707070]'>
      <div className='flex justify-between mb-5'>
        <h2 className='text-[#000000] text-[20px] font-[ClashDisplay-Bold] mb-4'>Document Upload Summary</h2>
        <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="appearance-none bg-no-repeat bg-[url('/dArrow.png')] bg-position-[93%_50%] mb-2 lg:mb-0 w-full lg:w-1/6 px-3 border border-gray-700 rounded text-[#000000] bg-[#e2e2e2]"
            required
          >
            <option value="">Select Entity</option>
            <option value="report">Monthly Report</option>
            <option value="summary">Executive Summary</option>
            <option value="data">Raw Data</option>
        </select>
      </div>
      <UserTables />
    </div>
  );
}