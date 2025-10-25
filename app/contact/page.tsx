export default function Contact() {
  return (
    <>
      <section className="bg-white text-[#22263c] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">Our Ask</h1>
          <p className="text-xl text-center mt-4">We are seeking $1,500,000 in seed capital to accelerate the development and deployment of Counterforce AI—empowering societies to defend trust in a rapidly evolving information battlespace.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Product Development</h2>
              <p className="text-lg font-bold">50% of Funds</p>
              <p className="mt-2">Complete working prototype (Q1 2026), build enterprise-grade features</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Go-to-Market & Pilots</h2>
              <p className="text-lg font-bold">30% of Funds</p>
              <p className="mt-2">Secure 3-5 paid pilot contracts; $500K ARR target</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold">Governance & Operations</h2>
              <p className="text-lg font-bold">20% of Funds</p>
              <p className="mt-2">Achieve Controlled Goods registration, legal/compliance, staff training</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#22263c] text-white py-8 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4">CONTACT</h1>
        <p>Dr. Meaghan Thumath, DPhil, MPH, RN</p>
        <p>Chief Executive Officer, Counterforce</p>
        <p>Assistant Professor, University of British Columbia, Faculty of Applied Science</p>
        <p>meaghan.thumath@ubc.ca</p>
      </footer>
    </>
  );
}
