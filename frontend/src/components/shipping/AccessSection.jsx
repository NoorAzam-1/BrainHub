import Link from "next/link";

export default function AccessSection() {
  const steps = [
    {
      title: "Check your Library",
      desc: "Log in and navigate to 'Library'. All active purchases are listed here permanently.",
    },
    {
      title: "Select Format",
      desc: "Choose the file format compatible with your device. EPUB is recommended for most users.",
    },
    {
      title: "Transfer or Stream",
      desc: "Download directly or use 'Send to Kindle' for wireless transfer.",
    },
  ];

  return (
    <section className="mx-auto my-5 md:my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-white/60">

        {/* LEFT SIDE */}
        <div className="glass-card p-6 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-on-surface">
            Accessing Your Purchase
          </h3>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 group">
                
                {/* Step Number */}
                <div className="w-12 min-w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-r from-primary to-accent text-black font-bold text-lg shadow-md shadow-primary/20 group-hover:scale-105 transition">
                  {i + 1}
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-lg">
                    {step.title}
                  </p>
                  <p className="text-on-surface-variant mt-1 text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-linear-to-br from-primary/15 via-secondary/10 to-accent/10 flex items-center justify-center p-6 md:p-8">
          
          <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-xl w-full max-w-sm text-center border border-white/60">

            <h4 className="text-xl font-semibold mb-4 text-on-surface">
              Ready to start reading?
            </h4>

            <p className="text-sm text-on-surface mb-6">
              Access your books instantly and enjoy seamless reading across devices.
            </p>

            <Link href="/browse" className="btn btn-primary w-full py-3 px-4 rounded-2xl font-semibold hover:opacity-90 transition cursor-pointer">
              Start Reading
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}
