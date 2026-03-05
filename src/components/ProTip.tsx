interface ProTipProps {
  tips: { title: string; body: string }[];
}

export default function ProTip({ tips }: ProTipProps) {
  return (
    <section className="bg-zinc-900 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-600/20">
            <svg
              className="h-5 w-5 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
              />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white">Pro Tips From the Crew</h2>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-xl border border-zinc-800 bg-zinc-800/50 p-5"
            >
              <h3 className="text-sm font-bold text-green-400">{tip.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
