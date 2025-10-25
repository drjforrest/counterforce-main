import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="bg-[#22263c] text-white flex flex-col items-center justify-center text-center px-4 py-10">
        <div className="max-w-4xl flex flex-col items-center">
          <div className="relative w-64 h-64 -mt-10">
            <Image
              src="/counterforce_logo5_dark_bg_no_text.png" 
              alt="Counterforce Logo" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h1 className="text-6xl font-bold">Real-time Defence for the Information Era</h1>
          <p className="mt-4 text-xl">
            Counterforce empowers governments, companies, and organizations to detect, map, and neutralize misinformation before it can cause harm.
          </p>
          <p className="mt-2 text-lg italic">Trust Defense as a Service.</p>
          <Link href="/product" className="mt-8 inline-block bg-[#e86530] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#bb3e03]">
            About the Platform
          </Link>
        </div>
      </main>

      <section className="bg-white text-[#22263c] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Truth Isn&#39;t Keeping Up</h2>
          <p className="text-xl text-center mt-4">Misinformation now moves faster than facts. Within hours, false narratives can disrupt elections, undermine emergency response efforts, or destabilize markets.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-bold">60%</p>
              <p className="mt-2">of people encounter misinformation before verified facts emerge</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-bold">43%</p>
              <p className="mt-2">of Canadians are highly susceptible to health misinformation</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-2xl font-bold">8 Hours</p>
              <p className="mt-2">Most of a false narrative&#39;s audience is reached within this timeframe</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#22263c] text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Our Solution: SEE · MAP · ACT</h2>
          <p className="text-xl text-center mt-4">From detection to decisive action—the first end-to-end technologyplatform to move from observation to operational control.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 text-[#22263c] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-[#22263e]">SEE</h3>
              <p className="mt-2">Detect emerging narratives, deepfakes, and influence campaigns across open and social data sources in real time.</p>
            </div>
            <div className="bg-gray-100 text-[#22263c] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-[#e86530]">MAP</h3>
              <p className="mt-2">Visualize how misinformation spreads, revealing key influencers, amplification networks, and coordinated activity.</p>
            </div>
            <div className="bg-gray-100 text-[#22263c] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold text-[#4e989e]">ACT</h3>
              <p className="mt-2">Deploy targeted countermeasures—automated alerts, message amplification, and AI-driven recommendations—to contain threats before they cause harm.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center">A $15 Billion Market Growing to $60 Billion by 2030</h2>
          <p className="text-xl text-center mt-4">Defense, public health, and critical infrastructure are converging around one challenge—trust.</p>
          <div className="grid md:grid-cols-2 gap-20 mt-16"> {/* Increased gap between columns */}
            <div className="flex flex-col items-start">
              <h3 className="text-2xl font-bold mb-8">Market Opportunities</h3>
              <div className="flex flex-col gap-6 w-full max-w-md mx-auto"> {/* Increased gap and max width */}
                <span className="bg-[#e86530] text-white px-8 py-3 rounded-full text-center text-lg">Defense and Security</span>
                <span className="bg-[#4e989e] text-white px-8 py-3 rounded-full text-center text-lg">Public Health</span>
                <span className="bg-[#94d2bd] text-white px-8 py-3 rounded-full text-center text-lg">Critical Infrastructure</span>
              </div>
            </div>
            <div className="relative w-full h-96 flex items-center"> {/* Added flex for vertical centering */}
              {/* Y-axis labels with better spacing */}
              <div className="absolute -left-12 h-full flex flex-col justify-between">
                <span className="text-sm">60</span>
                <span className="text-sm">0</span>
              </div>
              <span className="absolute -left-36 top-1/2 -translate-y-1/2 -rotate-90 text-sm whitespace-nowrap text-gray-400">$ Billions US</span>
              
              {/* Graph content */}
              <div className="absolute inset-0 ml-12"> {/* Increased margin for y-axis labels */}
                <div className="absolute bottom-0 left-[15%] w-[30%] h-1/2 bg-[#e86530] rounded-t-lg"></div>
                <div className="absolute bottom-0 right-[15%] w-[30%] h-full bg-[#4e989e] rounded-t-lg"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
                
                {/* Year labels with better alignment */}
                <div className="absolute bottom-0 w-full flex justify-between">
                  <div className="absolute -bottom-8 w-full flex justify-between">
                    <span className="text-sm text-gray-400">2024</span>
                    <span className="text-sm text-gray-400">2030</span>
                  </div>
                </div>
                
                {/* CAGR label */}
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-[#e86530] text-white text-sm rounded-full font-bold shadow-xl transform hover:scale-105 transition-transform duration-300">25% CAGR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Why Now is the Right Time</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#e86530]">AI Acceleration</h3>
                <p className="text-gray-300">AI and machine learning have reached the capability to detect and analyze misinformation in real-time.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#4e989e]">Regulatory Momentum</h3>
                <p className="text-gray-300">A number of recent policy changes in the regulatory environment are favourable towards organizations taking control of their online narratives.</p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-[#474a52]">Reach and Impact of the Crisis</h3>
                <p className="text-gray-300">Nearly every organization is now affected, so more treat information integrity as a core resilience requirement.</p>
              </div>
            </div>
            <div className="relative w-full max-w-xl mx-auto">
              <Image 
                src="/venn_diagram_why_now.png" 
                alt="Global Shifts Venn Diagram" 
                width={600} 
                height={450} 
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#22263c] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#22263c] px-12 py-6 rounded-2xl mb-8">
            <h2 className="text-5xl font-bold text-white">The Vision</h2>
          </div>
          <p className="text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
            Empowering societies to <span className="font-bold text-[#e86530]">safeguard trust</span> and act with confidence—so truth can <span className="font-bold text-[#4e989e]">overcome manipulation</span>.
          </p>
          <Link href="/contact" className="inline-block bg-[#e86530] text-white py-4 px-8 rounded-full text-xl font-semibold transform transition-all hover:scale-105 hover:shadow-xl hover:bg-[#bb3e03]">
            Join the Mission to Defend Truth
          </Link>
        </div>
      </section>

      <footer className="bg-[#22263c] text-white py-8 px-4 text-center">
        <p>CONTACT</p>
        <p>Dr. Meaghan Thumath, DPhil, MPH, RN</p>
        <p>Chief Executive Officer, Counterforce</p>
        <p>Assistant Professor, University of British Columbia</p>
        <p>meaghan.thumath@ubc.ca</p>
      </footer>
    </div>
  );
}
