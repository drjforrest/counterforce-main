export default function Problem() {
  return (
    <div className="bg-white text-[#22263c] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center">The Big Problem</h1>
        <p className="text-xl text-center mt-4">Truth is not keeping up</p>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-2xl font-bold">60%</p>
            <p className="mt-2">of people are exposed to crisis misinformation before facts emerge</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-2xl font-bold">43%</p>
            <p className="mt-2">of Canadians were found to be highly susceptible to health misinformation</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-2xl font-bold">60%</p>
            <p className="mt-2">of a false narrative's receptive audience will be reached within 8 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
