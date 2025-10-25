export default function Technology() {
  return (
    <div className="bg-white text-[#22263c] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Technology & IP</h1>
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
    </div>
  );
}
