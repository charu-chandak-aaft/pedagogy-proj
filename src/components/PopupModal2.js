import { useState } from 'react';
import Image from 'next/image';
export default function PopupModal2() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='ml-8'>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Open
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#000000c7] flex items-center justify-center z-50"
          onClick={(e) => {
            // if (e.target.id === 'modalBackdrop') closeModal();
          }}
          id="modalBackdrop"
        >
          <div className="bg-white rounded-lg shadow-lg w-1/5 p-6">
            <Image alt="aaft" src="/tick-icon.webp" width={40} height={40} className="w-[70px] h-[70px] mx-auto mt-6 mb-3" />
            {/* <p className='text-center text-[60px] mt-4'>✅</p> */}
            <p className='text-center text-[25px] text-[#000000] font-[ClashDisplay-Bold] mb-2'>Success!</p>
            <p className='text-center text-[15px] text-[#000000]'>Your request has been submitted successfully!</p>
            <p onClick={closeModal} className='cursor-pointer text-center text-[15px] text-[#ffffff] bg-[#FD0000] w-full mx-auto mt-6 p-2 rounded-[5px] mb-8'>Go Back</p>
          </div>
        </div>
      )}
    </div>
  );
}








