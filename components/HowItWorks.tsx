const steps = [
  { icon: "📝", title: "Create Your Profile", desc: "Sign up and fill in your story — your interests, your values, what makes you Arkansas." },
  { icon: "✅", title: "Get Verified", desc: "Complete our $9.99 Verified Profile process to stand out and build trust with matches." },
  { icon: "💬", title: "Start Connecting", desc: "Browse verified profiles and start real conversations with people who share your values." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">How PorchSwing Works</h2>
        <p className="mt-4 text-gray-400">Three simple steps to finding your person.</p>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
