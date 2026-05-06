export default function Hero() {
  return (
    <section className="relative py-28 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-black opacity-80 pointer-events-none" />
      <div className="relative max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-900/40 border border-green-700/50 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          🌿 Rooted in Arkansas Values
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Find Your <span className="text-green-400">Real Match</span> on PorchSwing
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto">
          Natural State Dating — where authentic connections happen. No swiping games. Real people, real conversations, real Arkansas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#verified" className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors">
            Get Verified Today
          </a>
          <a href="#how-it-works" className="px-8 py-3 border border-green-700 text-green-300 hover:bg-green-900/30 font-semibold rounded-lg transition-colors">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
