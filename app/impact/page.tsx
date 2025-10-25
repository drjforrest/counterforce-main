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
            <div className="border border-[#22263c] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center">Evaluation Metrics</h2>
              <ul className="list-disc list-inside mt-4">
                <li>Real-World Outcome Metrics</li>
                <li>User/Customer Adoption Metrics</li>
                <li>Security & Compliance Metrics</li>
                <li>Business/Customer Value Metrics</li>
              </ul>
            </div>
            <div className="border border-[#22263c] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-center">Ethical Guardrails</h2>
              <ul className="list-disc list-inside mt-4">
                <li>Strong Data Governance</li>
                <li>Respect for Data Sovereignty</li>
                <li>Principles of Data Minimization</li>
                <li>Community Oversight & Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
