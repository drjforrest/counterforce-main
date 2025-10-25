export default function Product() {
  return (
    <>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Trust Defence as a Service</h1>
          <p className="text-xl text-center mt-4">Command-level Control of the Information Domain</p>
          
          {/* SEE/MAP/ACT Strategy Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12 mb-16">
            <div className="bg-[#4e989e]/20 p-8 rounded-lg shadow-lg border border-[#4e989e]/30 text-center">
              <h3 className="text-2xl font-bold text-[#4e989e]">SEE</h3>
              <p className="mt-4">Early detection of emerging narratives, bots, and deepfakes before they go viral.</p>
            </div>
            <div className="bg-[#e86530]/20 p-8 rounded-lg shadow-lg border border-[#e86530]/30 text-center">
              <h3 className="text-2xl font-bold text-[#e86530]">MAP</h3>
              <p className="mt-4">Network analysis and mapping of information flow, identifying amplification patterns.</p>
            </div>
            <div className="bg-[#94d2bd]/20 p-8 rounded-lg shadow-lg border border-[#94d2bd]/30 text-center">
              <h3 className="text-2xl font-bold text-[#94d2bd]">ACT</h3>
              <p className="mt-4">Strategic response with actionable recommendations for content management.</p>
            </div>
          </div>
          
          {/* Key Analytics Areas */}
          <h2 className="text-3xl font-bold text-center mt-16 mb-8">Key Analytical Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#4e989e] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold">Real-time Monitoring</h2>
              <p className="mt-2">Scans open-source and social data to detect emerging narratives, bots, and deepfakes before they go viral.</p>
            </div>
            <div className="bg-[#e86530] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold">Predictive Simulation</h2>
              <p className="mt-2">Models how a narrative will evolve and tests the potential impact of different counter-messaging strategies.</p>
            </div>
            <div className="bg-[#94d2bd] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold">Network Analysis</h2>
              <p className="mt-2">Maps how information spreads, identifying key influencers, amplification networks, and coordinated campaigns.</p>
            </div>
            <div className="bg-[#cc9900] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold">Automated Mitigation</h2>
              <p className="mt-2">Recommends actionable responses, from coordinated content amplification to flagging synthetic media.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
          </div>
        </div>
      </section>
    </>
  );
}
