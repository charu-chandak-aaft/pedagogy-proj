import Image from 'next/image';

export default function Cards() {

  return (
    <div className='p-8 py-6 flex flex-wrap gap-[20px]'>
      <div className='w-full lg:w-[22.5%] bg-[#000000] p-6 py-10 flex item-center rounded-[10]'>
        <div className='p-1 rounded-[50%] bg-[#ffffff] w-[60] h-[60] flex items-center justify-center'>
          <Image alt="aaft" src="/twoIcon.png" width={40} height={40} className="w-[40px] h-[40px]" />
          {/* <Image
            src="/two-icon.png"
            alt="aaft"
            width={40}
            height={40}
            unoptimized
            className="w-[40px] h-[40px]"
          /> */}
        </div>
        <div className='font-[ClashDisplay-Bold] text-[30px] leading-[30px] ml-5'>02 <br /> <span className='font-[ClashDisplay-Regular] text-[15px]'>Total Entity</span></div>
      </div>

      <div className='w-full lg:w-[22.5%] bg-[#F9597C17] p-6 py-10 flex item-center rounded-[10] border border-[#F9597C]'>
        <div className='p-1 rounded-[50%] bg-[#FE487140] border border-[#F9597C] w-[60] h-[60] flex items-center justify-center'><Image alt="aaft" src="/school.png" width={40} height={40} className="w-[40px] h-[40px]" /></div>
        <div className='font-[ClashDisplay-Bold] text-[30px] text-[#000000] leading-[30px] ml-5'>14 <br /> <span className='font-[ClashDisplay-Regular] text-[15px]'>Total School</span></div>
      </div>

      <div className='w-full lg:w-[22.5%] bg-[#F9597C17] p-6 py-10 flex item-center rounded-[10] border border-[#F9597C]'>
        <div className='p-1 rounded-[50%] bg-[#FE487140] border border-[#F9597C] w-[60] h-[60] flex items-center justify-center'><Image alt="aaft" src="/ledger.png" width={40} height={40} className="w-[40px] h-[40px]" /></div>
        <div className='font-[ClashDisplay-Bold] text-[30px] text-[#000000] leading-[30px] ml-5'>86 <br /> <span className='font-[ClashDisplay-Regular] text-[15px]'>Total Program</span></div>
      </div>

      <div className='w-full lg:w-[22.5%] bg-[#BE83FF17] p-6 py-10 flex item-center rounded-[10] border border-[#BE83FF]'>
        <div className='p-1 rounded-[50%] bg-[#BE83FF17] border border-[#BE83FF] w-[60] h-[60] flex items-center justify-center'><Image alt="aaft" src="/man-office.png" width={40} height={40} className="w-[40px] h-[40px]" /></div>
        <div className='font-[ClashDisplay-Bold] text-[30px] text-[#000000] leading-[30px] ml-5'>32 <br /> <span className='font-[ClashDisplay-Regular] text-[15px]'>Total Faculty</span></div>
      </div>

    </div>
  );
}