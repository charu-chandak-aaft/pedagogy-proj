'use client';
import { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tab-buttons mx-auto w-[600]">
        <button onClick={() => setActiveTab(0)}>Tab 1</button>
        <button onClick={() => setActiveTab(1)}>Tab 2</button>
      </div>
      <div className="tab-content tab-buttons mx-auto w-[600]">
        {activeTab === 0 && <div>AAAAAAAAAA</div>}
        {activeTab === 1 && <div>BBBBBBBBBB</div>}
      </div>
    </div>
  );
}