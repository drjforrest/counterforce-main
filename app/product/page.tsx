export default function Product() {
  return (
    <>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center">The Product</h1>
          <p className="text-xl text-center mt-4">A Command Centre for Information Operations</p>
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
          <div className="mt-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">Technology</th>
                  <th className="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b border-gray-200">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-200">NLP Modules</td>
                  <td className="py-4 px-6 border-b border-gray-200">Fine-tuned transformers identify manipulative language and sentiment across multilingual datasets.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-200">Graph Neural Networks</td>
                  <td className="py-4 px-6 border-b border-gray-200">Detect coordinated inauthentic behaviour and botnets that simpler tools miss.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-200">Agent-based Simulation</td>
                  <td className="py-4 px-6 border-b border-gray-200">Forecasts narrative spread and models intervention outcomes, enabling strategic response planning.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-4 px-6 border-b border-gray-200">Equity-driven Metrics</td>
                  <td className="py-4 px-6 border-b border-gray-200">Integrates social trust and fairness indicators to ensure accuracy in diverse communities.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
