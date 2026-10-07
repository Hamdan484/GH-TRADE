import { Check, Circle } from "lucide-react"

export default function TrackingTimeline({ steps }) {
  return (
    <ol className="relative">
      {steps.map((step, index) => (
        <li key={step.label} className="relative flex gap-4 pb-7 last:pb-0">
          {index < steps.length - 1 && (
            <span
              className={`absolute left-3 top-7 h-[calc(100%-1rem)] w-px ${
                step.state === "complete" ? "bg-emerald-600" : "bg-slate-200"
              }`}
            />
          )}
          <span
            className={`relative z-10 mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border-2 ${
              step.state === "complete"
                ? "border-emerald-700 bg-emerald-700 text-white"
                : step.state === "current"
                  ? "border-amber-500 bg-amber-400 text-emerald-950"
                  : "border-slate-300 bg-white text-slate-300"
            }`}
          >
            {step.state === "complete" ? (
              <Check size={13} strokeWidth={3} />
            ) : (
              <Circle size={8} fill="currentColor" />
            )}
          </span>
          <div className="flex flex-1 justify-between gap-4">
            <p
              className={`text-sm font-semibold ${
                step.state === "pending" ? "text-slate-400" : "text-slate-900"
              }`}
            >
              {step.label}
            </p>
            <time className="text-xs text-slate-500">{step.date}</time>
          </div>
        </li>
      ))}
    </ol>
  )
}
