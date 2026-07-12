export const metadata = {
  title: "Thank You | Nyxra",
  description: "Thank you for sending your Nyxra business audit request."
};

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#020812] px-5 py-16 text-cyan-50 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center">
        <div className="rounded-3xl border border-cyan-200/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(34,211,238,0.055))] p-8 shadow-[0_24px_100px_rgba(0,0,0,0.24)] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/70">
            Request Received
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Thank you.
          </h1>
          <p className="mt-5 text-base leading-7 text-cyan-50/70">
            Your business audit request has been submitted. Nyxra will review the details before recommending a practical starting point.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-300 to-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Back to Home
            </a>
            <a
              href="mailto:supportnyxra@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-cyan-200/18 bg-white/[0.035] px-6 py-3 text-sm font-bold text-cyan-50 transition hover:border-cyan-200/35 hover:bg-cyan-200/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-200"
            >
              Email Nyxra
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
