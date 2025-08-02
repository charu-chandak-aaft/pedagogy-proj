import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

export default function UserTables() {
  const [expandedRow, setExpandedRow] = useState(null);

  const users = [
    { id: 'School of Cinema', name: ' ', email: ' ', role: ' ', status: '', created: ' ', 
      details: {
      programName: 'MSc. in Cinema',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },
    { id: 'School of Fashion', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'BSc. in Fashion',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },
 { id: 'School of Music', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'Diploma in Music',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },
 { id: 'School of Hospitality', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'PG Diploma in Hospitality',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },
 { id: 'School of Animation', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'MSc. in Animation',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },{ id: 'School of Data Science', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'MSc. in Data Science',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },{ id: 'School of Photography', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'MSc. in Photography',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },{ id: 'School of Fine Arts', name: ' ', email: ' ', role: ' ', status: ' ', created: ' ', 
      details: {
      programName: 'MSc. in Fine Arts',
      view1: 'View',
      history: 'History',
      view2: 'View',
      view3: 'View',
      view4: 'View',
      view5: 'View'
    }

 },
  ];

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">School</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Program Structure</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Contextual</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Curriculum</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Syllabus</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Session Plan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user, index) => (
            <React.Fragment key={user.id}>
              <tr
                key={user.id}
                className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
              >
                <td className="px-4 py-2 text-sm text-gray-900">{user.id}</td>
                <td className="px-4 py-2 text-sm text-gray-900">{user.name}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.email}</td>
                <td className="px-4 py-2 text-sm text-gray-500">{user.role}</td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : user.status === 'Inactive'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">
                    <button className="border border-[#000000] hover:bg-black hover:text-white px-3 py-1 rounded cursor-pointer" onClick={() => toggleRow(index)}>View</button>
                </td>
              </tr>
              {expandedRow === index && (
                <tr className="bg-gray-50">
                  <td colSpan="6" className="px-4 py-4 text-sm text-gray-700">
                    <table className="w-full text-sm text-left border border-gray-200">
                      <tbody>                       
                        <tr className="flex justify-between">
                          <td className="px-4 py-2 w-[14%]">{user.details.programName}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view1} &nbsp; &nbsp; &nbsp;<Image alt="aaft" src="/history-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp; {user.details.history}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view2}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view3}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view4}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view5}</td>
                        </tr>
                        <tr className="flex justify-between">
                          <td className="px-4 py-2 w-[14%]">{user.details.programName}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view1} &nbsp; &nbsp; &nbsp;<Image alt="aaft" src="/history-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp; {user.details.history}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view2}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view3}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view4}</td>
                          <td className="px-4 py-2 flex items-center"><Image alt="aaft" src="/view-icon.png" width={40} height={40} className="w-[10px] h-[10px]" />&nbsp;{user.details.view5}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              )}

            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}