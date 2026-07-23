import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-gradient-to-b from-[#0D1117] to-[#0a1628]">
      <div className="section-container">
        <div className="glass-card max-w-2xl mx-auto p-8 md:p-12 text-center border-[#00E676]/20">
          <h2 className="section-title">
            See it work,{" "}
            <span className="green-gradient-text">free for 7 days</span>
          </h2>
          <p className="text-[#8B949E] mt-4">
            No access to your accounts needed. No card required.
          </p>
          <Link href="/#get-started" className="btn-primary mt-8 inline-block">
            Start your free trial →
          </Link>
        </div>
      </div>
    </section>
  );
}
