'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Form1() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You selected: ${selectedOption}`);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="bg-[#F6F6F6] p-8 py-6 w-full">
        <select
          id="options1"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="appearance-none bg-no-repeat bg-[url('/d-arrow.png')] bg-position-[93%_50%] mb-2 lg:mb-0 w-full lg:w-1/7 p-2 mr-3 border border-gray-700 rounded text-[#000000]"
          required
        >
          <option value="">Select Entity</option>
          <option value="report">Monthly Report</option>
          <option value="summary">Executive Summary</option>
          <option value="data">Raw Data</option>
        </select>
        <select
          id="options2"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="appearance-none bg-no-repeat bg-[url('/d-arrow.png')] bg-position-[93%_50%] mb-2 lg:mb-0 w-full lg:w-1/7 p-2 mr-3  border border-gray-700 rounded text-[#000000]"
          required
        >
          <option value="">School Name</option>
          <option value="report">Monthly Report</option>
          <option value="summary">Executive Summary</option>
          <option value="data">Raw Data</option>
        </select>
        <select
          id="options3"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="appearance-none bg-no-repeat bg-[url('/d-arrow.png')] bg-position-[93%_50%] mb-2 lg:mb-0 w-full lg:w-1/7 p-2 mr-3  border border-gray-700 rounded  text-[#000000]"
          required
        >
          <option value="">Program Name</option>
          <option value="report">Monthly Report</option>
          <option value="summary">Executive Summary</option>
          <option value="data">Raw Data</option>
        </select>
        <select
          id="options4"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="appearance-none bg-no-repeat bg-[url('/d-arrow.png')] bg-position-[93%_50%] mb-2 lg:mb-0 w-full lg:w-1/7 p-2 mr-3  border border-gray-700 rounded  text-[#000000]"
          required
        >
          <option value="">Document Type</option>
          <option value="report">Monthly Report</option>
          <option value="summary">Executive Summary</option>
          <option value="data">Raw Data</option>
        </select>

        <input className="mb-2 lg:mb-0 w-full lg:w-1/5 text-sm text-gray-500 border border-gray-700 rounded bg-[#D4D4D4]
           file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
           cursor-pointer"
             type="file" />

        
        <button className='mb-2 lg:mb-0 w-full lg:w-1/8 p-1.5 lg:ml-3 border bg-[#000000] border-gray-700 rounded text-[#ffffff]' type="submit">Upload</button>



      </form>
    </div>
  );
}