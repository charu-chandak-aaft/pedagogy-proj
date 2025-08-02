export default function Home() {
  return (
 <section className="m-12">
      <div className="container mx-auto px-5">
          <div className="text-center p-5 bg-red-600 w-300 mx-auto">
              <h2 className="text-4xl font-bold">Fee structure and Payment Schedule 2025-26</h2>
              <p className="mb-3">Visa Charges | Meals | Air-fare | Accomodation | Workshop Cost</p>
              <div className=" bg-black rounded-[20] h-40"> 
                <div className="grid lg:grid-cols-2 h-20 items-center">
                  <div className="l-txt">AAFT School of Animation</div> 
                  <div className="r-txt">Fee- 2,40,000</div>     
                </div>  
                <div className="bg-[#ffffff] grid lg:grid-cols-2 h-20 rounded-bl-[20] rounded-br-[20] text-[#000000] items-center">
                  <div className="l-txt">AAFT School of Music</div> 
                  <div className="r-txt">Fee- 2,40,000</div>     
                </div>      
              </div>
              <div className="grid lg:grid-cols-1 bg-[#0000007a] w-200 mx-auto rounded-[20] mt-10 p-2 h-20 items-center">
                <div className="l-txt">AAFT School of Fashion Design</div> 
                <div className="r-txt">Fee- 2,40,000</div>     
              </div> 
          </div>
      </div> 
      
    </section>
     );
}