export default function Product() {
  return (
    <>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Trust Defence as a Service</h1>
          <p className="text-xl text-center mt-4">Command-level Control of the Information Domain</p>
          <div className="flex justify-center gap-16 mt-12 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#4e989e]">SEE</h3>
              <p className="mt-2 text-sm">Early Detection</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#e86530]">MAP</h3>
              <p className="mt-2 text-sm">Network Analysis</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#94d2bd]">ACT</h3>
              <p className="mt-2 text-sm">Strategic Response</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
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
            <div className="bg-[#e9d8a6] p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold">Automated Mitigation</h2>
              <p className="mt-2">Recommends actionable responses, from coordinated content amplification to flagging synthetic media.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-[#22263c] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center">Technology & IP</h2>
          <p className="text-xl text-center mt-4">Proprietary Stack of Models & Tools</p>
          <div className="mt-12 space-y-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-[#22263c]">Advanced AI Technology Stack</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#4e989e]">Natural Language Understanding</h4>
                  <p className="mt-2 text-sm text-gray-600">Advanced language models for multilingual narrative analysis and detection</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#e86530]">Network Intelligence</h4>
                  <p className="mt-2 text-sm text-gray-600">Sophisticated graph analysis for mapping information flow and identifying key actors</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#94d2bd]">Predictive Modeling</h4>
                  <p className="mt-2 text-sm text-gray-600">Agent-based simulations for strategic response planning and outcome forecasting</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-[#e9d8a6]">Trust & Fairness</h4>
                  <p className="mt-2 text-sm text-gray-600">Built-in equity considerations and community-focused trust metrics</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">Proprietary technology developed with leading research partners</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
