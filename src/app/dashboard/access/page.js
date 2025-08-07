'use client';

import AccessControl from "../../../components/AccessControl";

export default function AccessPage() {
   
  return (
    <div className="py-6">
      <h2 className="text-3xl font-bold mb-4 pl-8 text-[#000000] font-[ClashDisplay-Regular]">
        Access Control
      </h2>
      <AccessControl />
    </div>
  );
}