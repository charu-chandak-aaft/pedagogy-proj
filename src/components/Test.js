// components/WebinarSection.jsx
import Image from 'next/image';

export default function Test() {
  return (
    <section className="py-16 font-clash">
      <div className="container mx-auto px-4">
        {/* Top Banner */}
        <div
          className="text-white text-center text-[22px] md:text-[34px] p-8 md:p-12 rounded-[30px] md:rounded-[15px] flex justify-center items-center bg-cover bg-no-repeat"
          style={{ backgroundImage: 'url(/webinar-bg.png)' }}
        >
          AAFT keeps organizing fun-filled activities and educational webinars for students
        </div>

        {/* Registration Form */}
        <div className="mt-16 rounded-[20px] shadow-[0_0_18px_rgba(0,0,0,0.16)]">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2">
              <Image src="/prahalad-k.png" alt="aaft" width={800} height={600} className="rounded-t-[20px] lg:rounded-none lg:rounded-l-[20px]" />
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:pr-12">
              <h2 className="font-clashBold text-2xl mb-5 text-center lg:text-left">Register Now!</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Name..." className="form-control h-[50px] w-full px-4 rounded" />
                <input type="text" placeholder="Email..." className="form-control h-[50px] w-full px-4 rounded" />
                <input type="text" placeholder="Contact Number..." className="form-control h-[50px] w-full px-4 rounded" />
                <div className="mt-4 mb-5 text-sm">
                  <input type="checkbox" className="mr-2" />
                  I acknowledge and agree to the Terms and Conditions of AAFT.
                </div>
                <input
                  type="submit"
                  value="SIGN UP"
                  className="w-full h-[60px] bg-black text-white rounded-[10px] border border-white shadow-[0_0_6px_rgba(255,255,255,0.39)] hover:bg-[#EC2027] transition"
                />
              </form>
            </div>
          </div>
        </div>

        {/* Perks Section */}
        <div className="mt-16 bg-[#EC2027] text-white rounded-[20px] p-8 md:p-16">
          <h2 className="text-center font-clashBold text-2xl md:text-3xl mb-8">Perks of Attending</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {[
              { img: 'teacher.png', text: 'Learn from Industry Experts Online' },
              { img: 'career.png', text: 'Career Clarity for Creative Minds' },
              { img: 'medal.png', text: 'No Travel, No Cost – Just Value' },
              { img: 'techno.png', text: 'Interactive Learning from Anywhere' },
              { img: 'cert.png', text: 'Certificate of Participation' },
            ].map(({ img, text }, i) => (
              <div key={i} className="border border-black rounded-[10px] flex flex-col items-center">
                <div className="p-5">
                  <Image src={`/${img}`} alt="aaft" width={80} height={80} className="rounded-full shadow-md" />
                </div>
                <div className="bg-[#EFEFEF] text-black text-center font-clashBold w-full py-4 px-2 border-t border-black rounded-b-[10px]">
                  <p className="mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speaker Section */}
        <div className="mt-16 rounded-[20px]">
          <div className="flex flex-col lg:flex-row items-center px-4">
            <div className="w-full lg:w-1/2 bg-[#ec20272e] text-black rounded-b-[20px] lg:rounded-[20px_0_0_20px] p-10">
              <p className="bg-[#EC2027] text-white px-3 py-1 w-fit mb-4">About the Speaker</p>
              <h2 className="font-clashBold text-[32px] md:text-[55px] leading-tight mb-4">Mr. PRAHLAD KAKAR</h2>
              <p className="mb-0">
                Prahlad Kakkar, renowned Indian ad filmmaker and Industry Dean at AAFT’s School of Advertising, PR & Events, is best known for iconic ads like Pepsi’s <strong>“Yehi Hai Right Choice Baby!”</strong> and <strong>Maggi’s “2 minutes!”</strong> Founder of Genesis Films, he received the <strong>IAAFA Lifetime Achievement Award, AAAI Campaign of the Year</strong>, and Cannes Lions nominations for campaigns with brands like <strong>Limca, Britannia, and Maggi.</strong>
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-first lg:order-last">
              <Image src="/p-kakkar.png" alt="aaft" width={800} height={600} className="rounded-t-[20px] lg:rounded-none lg:rounded-r-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}