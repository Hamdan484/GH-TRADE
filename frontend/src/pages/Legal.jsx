import { Container, PageHeader } from "../components/ui"

const documents = {
  terms: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    sections: [
      [
        "1. Document status",
        "The complete GH Trade Hub Terms and Conditions were referenced but not included in the supplied brief. The legal text must be inserted here without changing its legal meaning before launch.",
      ],
      [
        "2. Contact information",
        "Email: legal@ghtradehub.com\nAddress: [Insert Full Company Address in Ghana]",
      ],
      [
        "3. Required review",
        "This page is a presentation-ready legal layout only. It does not create or replace legal terms and should not be treated as final legal advice.",
      ],
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    sections: [
      [
        "1. Document status",
        "The complete GH Trade Hub Privacy Policy was referenced but not included in the supplied brief. The approved policy must be inserted here without materially altering its legal meaning before launch.",
      ],
      [
        "2. Privacy contact",
        "Email: privacy@ghtradehub.com\nAddress: [Full Company Address in Ghana]\nData Protection Officer: [Data Protection Officer contact]",
      ],
      [
        "3. Required review",
        "This page is a presentation-ready policy layout only. It does not invent collection, retention, sharing, or data-subject-rights terms that have not been supplied.",
      ],
    ],
  },
}

export function LegalPage({ type }) {
  const doc = documents[type]
  return (
    <>
      <PageHeader
        eyebrow={doc.eyebrow}
        title={doc.title}
        body="Clear, accessible legal information for GH Trade Hub customers."
      />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[240px_1fr]">
          <aside>
            <div className="sticky top-28 border-l-2 border-emerald-800 pl-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                On this page
              </p>
              <nav className="mt-4 space-y-3">
                {doc.sections.map(([title], i) => (
                  <a
                    className="block text-sm text-slate-600 hover:text-emerald-800"
                    href={`#section-${i + 1}`}
                    key={title}
                  >
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
          <article className="max-w-3xl">
            <div className="mb-10 border-b border-slate-200 pb-6 text-sm text-slate-500">
              <p>
                <strong className="text-slate-800">Effective date:</strong>{" "}
                [Insert Effective Date]
              </p>
              <p className="mt-2">
                <strong className="text-slate-800">Last updated:</strong>{" "}
                [Insert Last Updated Date]
              </p>
            </div>
            {doc.sections.map(([title, body], i) => (
              <section
                className="mb-10 scroll-mt-28"
                id={`section-${i + 1}`}
                key={title}
              >
                <h2 className="font-display text-2xl font-semibold text-slate-950">
                  {title}
                </h2>
                {body.split("\n").map((line) => (
                  <p className="mt-4 leading-7 text-slate-600" key={line}>
                    {line}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  )
}
