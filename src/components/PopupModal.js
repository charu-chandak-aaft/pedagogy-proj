import { useState } from 'react';

export default function PopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='ml-8'>
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Delete
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#000000c7] flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target.id === 'modalBackdrop') closeModal();
          }}
          id="modalBackdrop"
        >
          <div className="bg-white rounded-lg shadow-lg w-1/6 pb-8">
            <p className="mb-8 bg-[#E41A22] text-white rounded-tl-lg rounded-tr-lg p-3 text-center">
              Are you sure you want to delete ?
            </p>
            <div className="flex justify-center gap-2">
                <button className="border border-[#000000] text-black px-6 py-1 rounded hover:bg-red-600">No</button>
                <button onClick={closeModal} className="bg-black text-white px-6 py-1 rounded hover:bg-red-600">Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}








