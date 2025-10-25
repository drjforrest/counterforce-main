import Image from "next/image";

export default function Team() {
  return (
    <div className="bg-white text-[#22263c] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center">Team</h1>
        <p className="text-xl text-center mt-4">Combined 40+ Years of Frontline & Respected Thought Leadership</p>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="text-center">
            <Image
              src="/meaghan-thumath-ceo.png"
              alt="Meaghan Thumath"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Dr Meaghan Thumath, DPhil, MPH, RN</h2>
            <p className="font-bold">Chief Executive Officer</p>
            <p className="mt-2">Assistant Professor, School of Nursing, Faculty of Applied Science, University of British Columbia</p>
          </div>
          <div className="text-center">
            <Image
              src="/jamie-forrest-cto.png"
              alt="Jamie Forrest"
              width={150}
              height={150}
              className="rounded-full mx-auto"
            />
            <h2 className="text-2xl font-bold mt-4">Dr Jamie Forrest, PhD, MPH</h2>
            <p className="font-bold">Chief Information & Technology Officer</p>
            <p className="mt-2">Scientific Director, Health Equity & Resilience Observatory, University of British Columbia</p>
          </div>
        </div>
      </div>
      <section className="bg-[#22263c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">THE VISION</h2>
          <p className="text-2xl mt-4">Empowering societies to safeguard trust and act with confidence—enabling truth to overcome the harms of manipulation.</p>
        </div>
      </section>
    </div>
  );
}
