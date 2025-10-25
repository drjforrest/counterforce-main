
import Image from "next/image";

export default function Impact() {
  return (
    <>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">The Financial & Human Costs</h1>
          <div className="grid md:grid-cols-4 gap-8 mt-12">
            <div className="bg-[#e86530] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold">$76 Billion US</p>
              <p className="mt-2">Half of all businesses were victims of deepfake attacks in 2024.</p>
            </div>
            <div className="bg-[#4e989e] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold">$13 Billion US</p>
              <p className="mt-2">Market volatility, corporate reputation damage, fraud.</p>
            </div>
            <div className="bg-[#94d2bd] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold">$9.5 Billion US</p>
              <p className="mt-2">A single false tweet briefly erased $136B from the S&P 500 on April 23, 2013.</p>
            </div>
            <div className="bg-[#e9d8a6] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <p className="text-3xl font-bold">$8 Billion US</p>
              <p className="mt-2">COVID vaccine misinformation cost the US $50M-$300M per day in 2021.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-[#22263c] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Impact Monitoring & Risk Mitigation</h1>
          <p className="text-xl text-center mt-4">Measuring Performance While Safeguarding Trust</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Evaluation Metrics</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#4e989e] mb-2">Real-World Outcomes</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Reduction in Misinformation Reach</li>
                    <li>• Time to Containment</li>
                    <li>• Trust Restoration Indicators</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#e86530] mb-2">Platform Performance</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Detection Accuracy Rates</li>
                    <li>• Response Time Metrics</li>
                    <li>• System Reliability Stats</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-center mb-6">Ethical Guardrails</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#94d2bd] mb-2">Data Protection</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Enterprise-grade Security Controls</li>
                    <li>• Data Sovereignty Compliance</li>
                    <li>• Privacy-first Architecture</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-bold text-[#e9d8a6] mb-2">Community Trust</h3>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Transparent Reporting Systems</li>
                    <li>• Community Advisory Panels</li>
                    <li>• Cultural Safety Framework</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Competitive Analysis</h1>
          <p className="text-xl text-center mt-4">Market Positioning by Breadth and Depth</p>
          <div className="relative h-96 mt-12">
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/50"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/10 rounded-full flex items-center justify-center">
              <div className="relative w-36 h-36">
                <Image 
                  src="/counterforce_logo3_transparent_bg_no_text.png" 
                  alt="Counterforce Logo" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 144px"
                  className="object-contain" 
                />
              </div>
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 font-bold text-[#4e989e]">Single Use</div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -mb-8 font-bold text-[#e86530]">Dual Use</div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-16 font-bold text-[#94d2bd]">Monitor</div>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 -mr-16 font-bold text-[#e9d8a6]">Control</div>
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-[#4e989e]">Dataminr</p>
              <p className="font-bold text-[#4e989e]">Meltwater</p>
              <p className="text-sm mt-2 text-white/80">Single Use, Monitoring Only</p>
            </div>
            <div className="absolute top-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-[#e86530]">Graphika</p>
              <p className="font-bold text-[#e86530]">Recorded Future</p>
              <p className="text-sm mt-2 text-white/80">Single Use, Control</p>
            </div>
            <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-[#94d2bd]">Primer AI</p>
              <p className="text-sm mt-2 text-white/80">Dual Use, Monitoring Only</p>
            </div>
            <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 text-center bg-white/5 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-bold text-[#e9d8a6]">Jigsaw</p>
              <p className="font-bold text-[#e9d8a6]">Trusted AI</p>
              <p className="text-xs text-white/60">(IBM/Thomson Reuters)</p>
              <p className="text-sm mt-2 text-white/80">Dual Use, Control</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
