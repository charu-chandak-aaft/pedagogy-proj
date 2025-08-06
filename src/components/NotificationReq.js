import { useState } from 'react';

export default function NotificationReq(){
     const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted message:', message);
    // You can send this data to an API or handle it as needed
  };

    return(
        <div className='m-8 mb-6 mt-0 rounded-[10] p-6 w-[90%] border border-[#707070]'>
            <h2 className='text-[#000000] text-[20px] font-[ClashDisplay-Bold] mb-4 h-[35px]'>Raise a request</h2> 
            <div className='border border-b[#000000] mb-3'></div>
            <form className="ml-2 w-full grid grid-cols-5 gap-5">
                
                <div className=''>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Entity</label>
                    <select
                    className="bg-[#F6F6F6] h-[35px] w-full rounded text-[#000000]"
                    required
                    >
                    <option value="">AAFT Noida</option>
                    <option value="report">Monthly Report</option>
                    <option value="summary">Executive Summary</option>
                    <option value="data">Raw Data</option>
                    </select>
                </div>
                <div className=''>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Select School</label>
                    <select
                    className="h-[35px] w-full bg-[#F6F6F6] rounded text-[#000000]"
                    required
                    >
                    <option value="">Select School</option>
                    <option value="report">Monthly Report</option>
                    <option value="summary">Executive Summary</option>
                    <option value="data">Raw Data</option>
                    </select>
                </div>
                <div className=''>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Select Program</label>
                    <select
                    className="h-[35px] w-full bg-[#F6F6F6] rounded text-[#000000]"
                    required
                    >
                    <option value="">Select Program</option>
                    <option value="report">Monthly Report</option>
                    <option value="summary">Executive Summary</option>
                    <option value="data">Raw Data</option>
                    </select>
                </div>
                <div className=''>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" placeholder="Name" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
                </div>
                <div className=''>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                    <input type="email" placeholder="Email ID" className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]" />
                </div>
                <div className=''>
                    <label  className="block text-sm font-medium text-gray-700 mb-1">Select Document (Need to Update)</label>
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
                <div className='col-span-2'>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="1"
                        cols="40"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Write.."
                        className="bg-[#F6F6F6] w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200 text-[#000000]"
                    />
                    
                </div>   
                            

            </form>
            <button className='mt-8 ml-2 p-2 rounded-[5px] bg-[#000000] w-[100px] text-center text-white-700'>Submit</button>
        </div>
    )
}