import Image from 'next/image';
import ToggleButton from './ToggleButton';
import AddMember from './AddMember';
import PopupModal from './PopupModal';
import PopupModal2 from './PopupModal2';
export default function AccessControl() {
   
  return (
    <div>
        <div className='m-8 mb-6 mt-0 rounded-[10] p-6 w-[90%] border border-[#707070]'>
            <h2 className='text-[#000000] text-[20px] font-[ClashDisplay-Bold] mb-4'>Team</h2>
            <p className='bg-[#EFEFF4] p-3 text-[#A859FC] w-full rounded-[5]'>Add Member ⊕</p>
            <table className="w-full text-sm text-left text-[#000000]">
                <tbody>                                           
                    <tr className="grid grid-cols-8">
                        <th className="px-4 py-2">S.No</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">View</th>
                        <th className="px-4 py-2">Edit</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Action</th>                        
                    </tr>
                    <tr className="grid grid-cols-8">
                        <td className="px-4 py-2">1.</td>
                        <td className="px-4 py-2">Campus Director </td>
                        <td className="px-4 py-2">Vijender Singh</td>
                        <td className="px-4 py-2">vijender.s@gmail.com</td>
                        <td className="px-4 py-2"><div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-600">✔</div></td>
                        <td className="px-4 py-2"><div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center text-red-600">✖</div></td>
                        <td className="px-4 py-2"><ToggleButton /></td>
                        <td className="px-4 py-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14" /></svg> | 🖋️</td>
                    </tr>
                    <tr className="grid grid-cols-8">
                        <td className="px-4 py-2">2.</td>
                        <td className="px-4 py-2">Campus Director </td>
                        <td className="px-4 py-2">Vijender Singh</td>
                        <td className="px-4 py-2">vijender.s@gmail.com</td>
                        <td className="px-4 py-2"><div className="w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-600">✔</div></td>
                        <td className="px-4 py-2"><div className="w-6 h-6 rounded-full border border-red-500 flex items-center justify-center text-red-600">✖</div></td>
                        <td className="px-4 py-2"><ToggleButton /></td>
                        <td className="px-4 py-2 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3m-4 0h14" /></svg> | 🖋️</td>
                    </tr>
                </tbody>
            </table>   
        </div>
        <AddMember />
        <PopupModal /> <br/>
        <PopupModal2 />
    </div>
    );
}