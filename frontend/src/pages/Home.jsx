import { useState } from "react"
import {
  ArrowRight,
  Check,
  ChevronRight,
  Globe2,
  MapPin,
  Plane,
  Ship,
  Truck,
} from "lucide-react"
import { services } from "../data/content"
import { Button, Container, Reveal, SectionHeading } from "../components/ui"

const heroImage =
  "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=85"

export default function Home() {
  const [tracking, setTracking] = useState("")
  return (
    <>
      <section className="relative overflow-hidden bg-[#f4f7f5]">
        <div className="absolute inset-y-0 right-0 hidden w-[43%] bg-emerald-950 lg:block" />
        <Container className="relative grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 border-l-2 border-amber-400 pl-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-800">
              Ghana's import fulfilment partner
            </div>
            <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              From customer request to doorstep —{" "}
              <span className="text-emerald-800">managed with precision.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              GH Trade Hub coordinates the complete journey for imported goods
              into Ghana, bringing shipping, customs support, and last-mile
              delivery into one clear process.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/request">
                Request an Import <ArrowRight size={17} />
              </Button>
              <Button to="/track" variant="secondary">
                Track an Order
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-300 pt-6 text-sm text-slate-600">
              {[
                "Clear milestones",
                "Professional support",
                "Ghana-wide delivery",
              ].map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <Check className="text-emerald-700" size={16} />
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative lg:pl-10" delay={0.12}>
            <div className="relative h-[450px] overflow-hidden sm:h-[520px]">
              <img
                src={heroImage}
                alt="Aerial view of a global shipping container terminal"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 border border-white/20 bg-emerald-950/90 p-5 text-white backdrop-blur sm:left-[-2rem] sm:right-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Live journey overview
                </p>
                <div className="mt-4 grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-2">
                  {[
                    ["Shanghai", Globe2],
                    ["Tema", Ship],
                    ["Accra", MapPin],
                  ].map(([label, Icon], i) => (
                    <div className="contents" key={label}>
                      <div className="text-center">
                        <Icon className="mx-auto text-amber-300" size={19} />
                        <span className="mt-1 block text-xs">{label}</span>
                      </div>
                      {i < 2 && (
                        <div className="h-px bg-white/25">
                          <div className="h-px w-2/3 bg-amber-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <Container className="grid grid-cols-2 divide-x divide-y divide-slate-200 md:grid-cols-4 md:divide-y-0">
          {[
            ["End-to-End", "Fulfilment"],
            ["International", "Shipping"],
            ["Customs", "Coordination"],
            ["Doorstep", "Delivery"],
          ].map(([a, b]) => (
            <div className="px-5 py-7 text-center" key={a}>
              <strong className="block text-sm text-emerald-950">{a}</strong>
              <span className="text-xs text-slate-500">{b}</span>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How it works"
            title="One clear journey, expertly coordinated"
            body="A single, accountable process replaces the uncertainty of managing multiple logistics providers."
          />
          <div className="mt-14 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-4">
            {[
              [
                "01",
                "Submit Request",
                "Share your product, supplier, and delivery details.",
                Globe2,
              ],
              [
                "02",
                "We Coordinate",
                "We review and prepare the right fulfilment plan.",
                Plane,
              ],
              [
                "03",
                "Shipping & Customs",
                "Your order moves internationally and through arrival.",
                Ship,
              ],
              [
                "04",
                "Doorstep Delivery",
                "We coordinate the final journey to your destination.",
                Truck,
              ],
            ].map(([num, title, text, Icon], i) => (
              <Reveal
                className="group bg-white p-7 transition hover:bg-emerald-950 hover:text-white"
                delay={i * 0.07}
                key={num}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-amber-500">
                    {num}
                  </span>
                  <Icon className="text-emerald-700 group-hover:text-amber-300" />
                </div>
                <h3 className="mt-12 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 group-hover:text-emerald-50/70">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-emerald-950 py-20 text-white sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="What we manage"
              title="Fulfilment built around your complete journey"
              body="Specialist coordination at every critical point, delivered as one joined-up service."
            />
            <Button to="/services" variant="gold">
              Explore all services <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map(({ icon: Icon, title, text }, i) => (
              <Reveal
                className="border border-white/15 p-6 transition hover:-translate-y-1 hover:border-amber-300/60"
                delay={i * 0.06}
                key={title}
              >
                <Icon className="text-amber-300" />
                <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-emerald-50/65">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Why GH Trade Hub"
              title="More clarity. Fewer handoffs. Better control."
              body="Import fulfilment is complex. Your experience should not be. We bring the moving parts together with professional communication and Ghana-focused delivery."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "One coordinated process",
                "Transparent communication",
                "Reliable fulfilment",
                "Ghana-focused delivery",
                "Order visibility",
                "Professional support",
              ].map((item) => (
                <div
                  className="flex items-center gap-3 border-b border-slate-200 pb-4 text-sm font-semibold text-slate-800"
                  key={item}
                >
                  <span className="grid size-6 place-items-center rounded-full bg-emerald-100 text-emerald-800">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal className="bg-[#edf3ef] p-7 sm:p-10" delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-emerald-700">
              Designed for visibility
            </p>
            <div className="mt-8 space-y-6">
              {[
                ["01", "Your request", "Received and reviewed"],
                ["02", "Your shipment", "Coordinated and visible"],
                ["03", "Your delivery", "Managed to destination"],
              ].map(([num, title, text]) => (
                <div
                  className="flex items-start gap-5 border-b border-emerald-950/10 pb-6 last:border-0 last:pb-0"
                  key={num}
                >
                  <span className="font-display text-2xl text-amber-600">
                    {num}
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-950">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                  <ChevronRight
                    className="ml-auto text-emerald-700"
                    size={18}
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-[#edf3ef] py-20">
        <Container className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Order tracking"
            title="Where is your order?"
            body="Enter your GH Trade Hub tracking number to view the latest mock milestone for this frontend demonstration."
          />
          <form
            className="flex flex-col gap-3 border border-slate-200 bg-white p-4 shadow-lg shadow-emerald-950/5 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `/track${
                tracking ? `?id=${tracking}` : ""
              }`
            }}
          >
            <label className="sr-only" htmlFor="home-tracking">
              Tracking number
            </label>
            <input
              id="home-tracking"
              value={tracking}
              onChange={(e) => setTracking(e.target.value)}
              className="min-h-12 flex-1 px-4 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-700/20"
              placeholder="e.g. GTH-2026-00124"
            />
            <Button type="submit">
              Track Order <ArrowRight size={16} />
            </Button>
          </form>
        </Container>
      </section>

      <section className="bg-amber-400 py-16 text-emerald-950">
        <Container className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to bring your next order home?
            </h2>
            <p className="mt-3 text-emerald-950/70">
              Let GH Trade Hub manage the journey from request to doorstep.
            </p>
          </div>
          <Button to="/request">
            Start an Import Request <ArrowRight size={16} />
          </Button>
        </Container>
      </section>
    </>
  )
}
