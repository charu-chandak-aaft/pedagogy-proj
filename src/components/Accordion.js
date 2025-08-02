'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function Accordion({ title, children, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 text-gray-700">
      <button
        onClick={onToggle}
        className={`w-full text-left px-4 py-3 flex justify-between items-center transition-colors duration-300 ${
          isOpen ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
      >
        <span className="font-medium">{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight,
          overflow: 'hidden',
          transition: 'max-height 0.4s ease',
        }}
        className="bg-white px-4 text-gray-700"
      >
        <div className="py-2">
          {children}
        </div>
      </div>
    </div>
  );
}