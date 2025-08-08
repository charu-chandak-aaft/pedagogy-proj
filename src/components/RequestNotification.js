import Image from 'next/image';
export default function Notification() {
  
  return (
    <div className='lg:m-8 m-0 mb-6 mt-0 rounded-[10] lg:p-6  p-1 lg:w-[90%] w-[100%] border border-[#707070]'>
        <div className="lg:flex justify-between mb-3">
            <h2 className='text-[#000000] text-[20px] font-[ClashDisplay-Bold] mb-4'>All Notification/ Requests</h2> 
            <div className="bg-[#A859FC1A] ml-3 p-1 pt-0 h-[35px] text-[#A859FC] w-[170px] text-center border border-[#A859FC] flex items-center rounded-[5px] mr-3"><Image alt="aaft" src="/query-icon.png" width={40} height={40} className="w-[20px] h-[20px] mx-2 justify-center" /> Raise Request</div>
        </div>
        <div className='p-3'>
          <div className='border border-b[#000000] mb-3'></div>
            <div  className='bg-[#f8f8f8] p-1 px-4'>
                <div className='text-[#000000] flex items-center'><span className="text-[#A859FC] text-[25px] mr-3">●</span>Requested for role change | From Manoj Aggarwal | Campus Director</div>
                <p className="text-[#c8c8c8] ml-7">New</p>            
            </div>
            <div className="px-4">
                <div className='text-[#000000] flex items-center'><span className="text-[#A859FC] text-[25px] mr-3">●</span>Requested for role change | From Manoj Aggarwal | Campus Director</div>
                <p className="text-[#c8c8c8] ml-7">1 hr ago</p>            
            </div>
            <div  className='bg-[#f8f8f8] p-1 px-4'>
                <div className='text-[#000000] flex items-center'><span className="text-[#A859FC] text-[25px] mr-3">●</span>Requested for role change | From Manoj Aggarwal | Campus Director</div>
                <p className="text-[#c8c8c8] ml-7">4 hr ago</p>            
            </div>
            <div className="px-4">
                <div className='text-[#000000] flex items-center'><span className="text-[#A859FC] text-[25px] mr-3">●</span>Requested for role change | From Manoj Aggarwal | Campus Director</div>
                <p className="text-[#c8c8c8] ml-7">1 day ago</p>            
            </div>
            <div  className='bg-[#f8f8f8] p-1 px-4'>
                <div className='text-[#000000] flex items-center'><span className="text-[#A859FC] text-[25px] mr-3">●</span>Requested for role change | From Manoj Aggarwal | Campus Director</div>
                <p className="text-[#c8c8c8] ml-7">2 days ago</p>            
            </div>
            <div className="px-4">
                <div className='text-[#000000] flex items-center'><span className="text-[#A859FC] text-[25px] mr-3">●</span>Requested for role change | From Manoj Aggarwal | Campus Director</div>
                <p className="text-[#c8c8c8] ml-7">4 days ago</p>            
            </div>
            <div className="bg-[#A859FC1A] ml-3 p-1 text-[#A859FC] mt-10 w-[100px] text-center">View all</div>

        </div>

        
        
    </div>
  );
}