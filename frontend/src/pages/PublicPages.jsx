import { useState } from "react"
import { ArrowRight, Check, Clock3, Mail, MapPin, Phone } from "lucide-react"
import { faqs, process, services } from "../data/content"
import {
  Button,
  Container,
  Field,
  PageHeader,
  Reveal,
  SectionHeading,
} from "../components/ui"

export function HowItWorks() {
  return (
    <>
      <PageHeader
        eyebrow="The fulfilment journey"
        title="From request to delivery, every milestone has a purpose."
        body="Understand how we coordinate your import through one structured, transparent process."
      />
      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            {process.map(([num, title, text], i) => (
              <Reveal
                className="relative grid gap-5 border-l border-emerald-200 pb-12 pl-10 last:border-transparent sm:grid-cols-[100px_1fr]"
                delay={i * 0.04}
                key={num}
              >
                <span className="absolute -left-5 top-0 grid size-10 place-items-center rounded-full bg-emerald-950 text-xs font-bold text-amber-300">
                  {num}
                </span>
                <p className="hidden text-xs font-bold uppercase tracking-widest text-slate-400 sm:block">
                  Milestone
                </p>
                <div>
                  <h2 className="font-display text-2xl font-semibold text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mx-auto mt-5 flex max-w-4xl gap-4 border border-amber-300 bg-amber-50 p-5">
            <Clock3 className="shrink-0 text-amber-700" />
            <p className="text-sm leading-6 text-amber-950">
              <strong>About timelines:</strong> Delivery estimates may change
              due to supplier readiness, carrier schedules, customs processes,
              weather, and other factors outside GH Trade Hub's control.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}

export function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Specialist support at every stage of the import journey."
        body="Choose individual coordination support or let us manage the full journey as one connected service."
      />
      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          {services.map(({ icon: Icon, title, text, benefit }, i) => (
            <Reveal
              className="group border border-slate-200 bg-white p-7 transition hover:border-emerald-700 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-9"
              delay={(i % 2) * 0.07}
              key={title}
            >
              <div className="flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-md bg-emerald-50 text-emerald-800">
                  <Icon />
                </span>
                <span className="text-xs font-bold text-slate-300">
                  0{i + 1}
                </span>
              </div>
              <h2 className="mt-7 font-display text-2xl font-semibold text-slate-950">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-emerald-800">
                <Check size={16} />
                {benefit}
              </div>
              <Button to="/request" variant="ghost" className="mt-4 px-0">
                Request this service <ArrowRight size={16} />
              </Button>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  )
}

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About GH Trade Hub"
        title="Making international fulfilment feel clear, connected, and local."
        body="We exist to simplify how Ghanaian customers and businesses coordinate goods from international suppliers to final delivery."
      />
      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Our purpose"
              title="Complex logistics, made easier to navigate"
              body="Importing often means managing disconnected suppliers, carriers, customs activity, and delivery providers. GH Trade Hub is positioned to bring those stages together through professional coordination and clear customer communication."
            />
            <p className="mt-5 leading-7 text-slate-600">
              Our focus is the fulfilment experience: providing a dependable
              process, appropriate visibility, and local delivery coordination
              without making promises that depend on factors beyond our control.
            </p>
          </Reveal>
          <Reveal
            className="grid gap-px bg-slate-200 sm:grid-cols-2"
            delay={0.1}
          >
            {[
              ["Clarity", "Useful updates at meaningful milestones."],
              ["Accountability", "One coordinated customer journey."],
              ["Local focus", "Built around delivery in Ghana."],
              [
                "Professional care",
                "Support that respects your time and order.",
              ],
            ].map(([title, text]) => (
              <div className="bg-[#f4f7f5] p-7" key={title}>
                <h2 className="font-display text-xl font-semibold text-emerald-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>
      <section className="bg-emerald-950 py-16 text-center text-white">
        <Container>
          <h2 className="font-display text-3xl font-semibold">
            Your next import deserves a better-managed journey.
          </h2>
          <Button to="/request" variant="gold" className="mt-7">
            Request an Import
          </Button>
        </Container>
      </section>
    </>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to a fulfilment specialist."
        body="Have a question about a request, an active order, or how the process works? Send us a message."
      />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionHeading
              title="We are here to help"
              body="Use the form for general enquiries. If your enquiry relates to an existing request, include the order or tracking number."
            />
            <div className="mt-8 space-y-5">
              {[
                [Mail, "General and legal", "legal@ghtradehub.com"],
                [Mail, "Privacy enquiries", "privacy@ghtradehub.com"],
                [Phone, "Phone", "[Insert business phone number]"],
                [MapPin, "Address", "[Insert Full Company Address in Ghana]"],
              ].map(([Icon, label, value]) => (
                <div className="flex gap-4" key={label}>
                  <Icon className="mt-1 text-emerald-700" size={20} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm text-slate-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form
            className="border border-slate-200 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-9"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            {sent ? (
              <div className="py-16 text-center">
                <Check className="mx-auto text-emerald-700" size={36} />
                <h2 className="mt-4 text-xl font-semibold">Message received</h2>
                <p className="mt-2 text-sm text-slate-600">
                  This is a frontend demonstration. No message was sent to a
                  server.
                </p>
                <Button
                  className="mt-6"
                  variant="secondary"
                  onClick={() => setSent(false)}
                >
                  Send another
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
                <div className="mt-5">
                  <Field
                    label="Subject"
                    name="subject"
                    required
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mt-5">
                  <Field
                    label="Message"
                    name="message"
                    as="textarea"
                    required
                    placeholder="Share the details of your enquiry"
                  />
                </div>
                <Button type="submit" className="mt-6">
                  Send Message
                </Button>
              </>
            )}
          </form>
        </Container>
      </section>
      <section className="bg-[#edf3ef] py-20">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked questions"
            title="Useful answers before you begin"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map(([q, a]) => (
              <details
                className="group border border-slate-200 bg-white p-5 open:border-emerald-700"
                key={q}
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900">
                  {q}
                  <span className="float-right text-emerald-700">+</span>
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">{a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
