'use client';
import React, { useState } from 'react';
import Accordion from './Accordion'; 

export default function AccordionGroup() {
   const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className='mx-auto w-[600] py-5'>
      <Accordion
        title="Section 1"
        isOpen={openIndex === 0}
        onToggle={() => handleToggle(0)}
      >
        <p className='font-bold'>Content for section 1.</p>
      </Accordion>
      <Accordion
        title="Section 2"
        isOpen={openIndex === 1}
        onToggle={() => handleToggle(1)}
      >
        <p className='font-bold'>Content for section 2.</p>
      </Accordion>
      <Accordion
        title="Section 3"
        isOpen={openIndex === 2}
        onToggle={() => handleToggle(2)}
      >
        <p className='font-bold'>Content for section 3.</p>
      </Accordion>
    </div>
  );
}