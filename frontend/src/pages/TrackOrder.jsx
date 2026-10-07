import { useState } from "react"
import { PackageSearch, Search } from "lucide-react"
import TrackingTimeline from "../components/TrackingTimeline"
import { trackingSteps } from "../data/content"
import { Button, Container, PageHeader } from "../components/ui"

export default function TrackOrder() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState("GTH-2026-00124")
  const [error, setError] = useState("")
  function submit(e) {
    e.preventDefault()
    if (!value.trim()) return setError("Enter a tracking number.")
    if (value.trim().toUpperCase() !== "GTH-2026-00124") {
      setResult("")
      return setError("No mock order matches that number. Try GTH-2026-00124.")
    }
    setError("")
    setResult("GTH-2026-00124")
  }
  return (
    <>
      <PageHeader
        eyebrow="Order visibility"
        title="Track the journey, milestone by milestone."
        body="Enter your tracking number to view the latest available status. Current results use demonstration data only."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <form
            onSubmit={submit}
            className="mx-auto flex max-w-3xl flex-col gap-3 border border-slate-200 bg-white p-4 shadow-lg shadow-emerald-950/5 sm:flex-row"
          >
            <label htmlFor="tracking-number" className="sr-only">
              Tracking number
            </label>
            <div className="relative flex-1">
              <PackageSearch
                className="absolute left-4 top-3.5 text-slate-400"
                size={20}
              />
              <input
                id="tracking-number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="min-h-12 w-full pl-12 pr-4 outline-none focus:ring-2 focus:ring-emerald-700/15"
                placeholder="Tracking number (try GTH-2026-00124)"
              />
            </div>
            <Button type="submit">
              <Search size={17} /> Track Order
            </Button>
          </form>
          {error && (
            <p
              role="alert"
              className="mx-auto mt-3 max-w-3xl text-sm font-medium text-red-600"
            >
              {error}
            </p>
          )}
          {result && (
            <div className="mx-auto mt-10 grid max-w-5xl gap-8 border border-slate-200 bg-white p-6 sm:p-9 lg:grid-cols-[.75fr_1.25fr]">
              <div className="bg-emerald-950 p-7 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  Current status
                </p>
                <h2 className="mt-4 font-display text-3xl font-semibold">
                  Customs clearance
                </h2>
                <p className="mt-3 text-sm leading-6 text-emerald-50/65">
                  Your shipment is currently in customs processing in Ghana.
                </p>
                <dl className="mt-10 space-y-5 border-t border-white/15 pt-6 text-sm">
                  <div>
                    <dt className="text-emerald-100/50">Order number</dt>
                    <dd className="mt-1 font-semibold">#{result}</dd>
                  </div>
                  <div>
                    <dt className="text-emerald-100/50">Destination</dt>
                    <dd className="mt-1 font-semibold">Accra, Ghana</dd>
                  </div>
                  <div>
                    <dt className="text-emerald-100/50">Estimated delivery</dt>
                    <dd className="mt-1 font-semibold">3–6 June 2026</dd>
                  </div>
                </dl>
              </div>
              <div>
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Progress
                    </p>
                    <h2 className="mt-1 text-xl font-semibold text-slate-950">
                      Order journey
                    </h2>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                    IN PROGRESS
                  </span>
                </div>
                <TrackingTimeline steps={trackingSteps} />
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
