import Image from "next/image";

export default function Market() {
  return (
    <>
      <section className="bg-white text-[#22263c] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Why Now?</h1>
          <p className="text-xl text-center mt-4">A Synergy of 3 Important Events Make Now Opportune</p>
          <div className="flex items-center justify-center mt-12">
            <div className="relative">
              <div className="w-48 h-48 bg-[#4e989e] rounded-full flex items-center justify-center text-center p-4">
                <p>Regulatory Momentum</p>
              </div>
              <div className="w-48 h-48 bg-[#e86530] rounded-full flex items-center justify-center text-center p-4 absolute top-0 left-32">
                <p>AI Acceleration</p>
              </div>
              <div className="w-48 h-48 bg-[#94d2bd] rounded-full flex items-center justify-center text-center p-4 absolute top-32 left-16">
                <p>Ubiquity of the Crisis</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">The Market Opportunity</h1>
          <p className="text-xl text-center mt-4">$15 Billion Climbing to $60 Billion by 2030</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12 items-center">
            <div>
              <h2 className="text-2xl font-bold">Primary Target Markets:</h2>
              <ul className="list-disc list-inside mt-4">
                <li>NATO/EU Defense: Annual information defense budgets exceeding €1.5B.</li>
                <li>Canadian National Security: Annual budgets over $800M for cyber and information integrity.</li>
                <li>Global Health Security: An additional $2-3B global opportunity in public health misinformation.</li>
              </ul>
            </div>
            <div className="relative h-64">
              <div className="absolute bottom-0 left-1/4 w-1/4 h-1/2 bg-[#e86530] rounded-t-lg"></div>
              <div className="absolute bottom-0 left-2/4 w-1/4 h-full bg-[#4e989e] rounded-t-lg"></div>
              <div className="absolute bottom-full left-1/4 w-px h-full bg-gray-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gray-300"></div>
              <span className="absolute bottom-0 -left-8">0</span>
              <span className="absolute top-0 -left-8">60</span>
              <span className="absolute bottom-full left-1/4 -translate-x-1/2">2024</span>
              <span className="absolute bottom-full left-3/4 -translate-x-1/2">2030</span>
              <span className="absolute top-1/2 -left-16">$ Billions US</span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-[#22263c] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Go-to-Market</h1>
          <p className="text-xl text-center mt-4">A 3 Phase Strategy</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="border border-[#22263c] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center">Phase 1: Co-Development & Pilots</h2>
              <ul className="list-disc list-inside mt-4">
                <li>Target: Existing consulting clients (WHO, Health Canada, DND partners).</li>
                <li>Action: Convert high-value consulting relationships into paid pilot deployments of the TDaaS platform.</li>
                <li>Goal: Secure 2-3 flagship contracts with key defense, public health, and emergency management agencies.</li>
              </ul>
            </div>
            <div className="border border-[#22263c] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center">Phase 2: Direct Sales & Channel Partners</h2>
              <ul className="list-disc list-inside mt-4">
                <li>Target: Expand across NATO/Five Eyes defense agencies and provincial/state health authorities.</li>
                <li>Action: Build a small, specialized direct sales team. Establish partnerships with major defense contractors and systems integrators.</li>
                <li>Goal: Achieve scalable, repeatable sales process.</li>
              </ul>
            </div>
            <div className="border border-[#22263c] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center">Phase 3: Industry Expansion</h2>
              <ul className="list-disc list-inside mt-4">
                <li>Target: Critical infrastructure (pharma, energy, finance), insurance.</li>
                <li>Action: Develop industry-specific modules for corporate reputation and threat defense.</li>
                <li>Goal: Become the dominant platform for trust intelligence across public and private sectors.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Competitive Analysis</h1>
          <p className="text-xl text-center mt-4">Market Positioning by Breadth and Depth</p>
          <div className="relative h-96 mt-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-white"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48">
              <Image src="/counterforce_logo3_transparent_bg_no_text.png" alt="Counterforce Logo" layout="fill" objectFit="contain" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8">Single Use</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8">Dual Use</div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-16">Monitor</div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-16">Control</div>
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-bold">Dataminr</p>
              <p className="font-bold">Meltwater</p>
              <p>Single Use, Monitoring Only</p>
            </div>
            <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-bold">Graphika</p>
              <p className="font-bold">Recorded Future</p>
              <p>Single Use, Control</p>
            </div>
            <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-bold">Primer AI</p>
              <p>Dual Use, Monitoring Only</p>
            </div>
            <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="font-bold">Jigsaw (Google)</p>
              <p className="font-bold">Trusted AI</p>
              <p>(IBM/Thomson Reuters)</p>
              <p>Dual Use, Control</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
