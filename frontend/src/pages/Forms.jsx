import { useState } from "react"
import {
  Check,
  ChevronLeft,
  ChevronRight,
  FileText,
  LockKeyhole,
} from "lucide-react"
import { Link } from "react-router"
import {
  Button,
  Container,
  Field,
  PageHeader,
  StatePanel,
} from "../components/ui"

const requestSteps = [
  {
    title: "Customer",
    fields: [
      ["fullName", "Full name"],
      ["email", "Email address"],
      ["phone", "Phone number"],
    ],
  },
  {
    title: "Product",
    fields: [
      ["productName", "Product name"],
      ["description", "Product description"],
      ["productUrl", "Product URL"],
      ["quantity", "Quantity"],
      ["value", "Estimated product value"],
      ["supplier", "Preferred supplier / location"],
    ],
  },
  {
    title: "Delivery",
    fields: [
      ["recipient", "Recipient name"],
      ["address", "Ghana delivery address"],
      ["city", "City"],
      ["region", "Region"],
      ["recipientPhone", "Recipient phone"],
      ["instructions", "Delivery instructions"],
    ],
  },
  { title: "Review", fields: [] },
]

export function RequestImport() {
  const [step, setStep] = useState(0)
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const current = requestSteps[step]
  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }
  function next() {
    const nextErrors = {}
    current.fields.slice(0, step === 1 ? 5 : 5).forEach(([name, label]) => {
      if (!data[name]?.trim()) nextErrors[name] = `${label} is required.`
    })
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      nextErrors.email = "Enter a valid email address."
    if (Object.keys(nextErrors).length) return setErrors(nextErrors)
    setStep((value) => Math.min(3, value + 1))
  }
  if (submitted)
    return (
      <>
        <PageHeader
          eyebrow="Request received"
          title="Your import request is ready for review."
          body="This frontend demonstration has not sent data to a server."
        />
        <Container className="py-20">
          <StatePanel
            type="success"
            title="Request captured locally"
            body="A confirmation and reference number will be created when backend integration is added."
          />
          <div className="mt-6 text-center">
            <Button to="/dashboard">View Customer Dashboard</Button>
          </div>
        </Container>
      </>
    )
  return (
    <>
      <PageHeader
        eyebrow="Request an import"
        title="Tell us what you need. We will map the journey."
        body="Complete the four short stages below. You can review everything before submitting."
      />
      <section className="py-14 sm:py-20">
        <Container className="max-w-5xl">
          <ol className="grid grid-cols-4 border-b border-slate-200">
            {requestSteps.map((item, i) => (
              <li
                className={`relative pb-4 text-center text-xs font-bold uppercase tracking-wider ${
                  i <= step ? "text-emerald-800" : "text-slate-400"
                }`}
                key={item.title}
              >
                <span className="hidden sm:inline">0{i + 1} </span>
                {item.title}
                {i === step && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 bg-amber-500" />
                )}
              </li>
            ))}
          </ol>
          <div className="mt-9 border border-slate-200 bg-white p-6 shadow-xl shadow-emerald-950/5 sm:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Step {step + 1} of 4
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
                {step === 3
                  ? "Review your request"
                  : `${current.title} information`}
              </h2>
            </div>
            {step === 0 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Full name"
                  name="fullName"
                  value={data.fullName || ""}
                  onChange={change}
                  error={errors.fullName}
                />
                <Field
                  label="Email address"
                  name="email"
                  type="email"
                  value={data.email || ""}
                  onChange={change}
                  error={errors.email}
                />
                <Field
                  label="Phone number"
                  name="phone"
                  value={data.phone || ""}
                  onChange={change}
                  error={errors.phone}
                />
              </div>
            )}
            {step === 1 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Product name"
                  name="productName"
                  value={data.productName || ""}
                  onChange={change}
                  error={errors.productName}
                />
                <Field
                  label="Quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  value={data.quantity || ""}
                  onChange={change}
                  error={errors.quantity}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Product description"
                    name="description"
                    as="textarea"
                    value={data.description || ""}
                    onChange={change}
                    error={errors.description}
                  />
                </div>
                <Field
                  label="Product URL"
                  name="productUrl"
                  type="url"
                  placeholder="https://"
                  value={data.productUrl || ""}
                  onChange={change}
                  error={errors.productUrl}
                />
                <Field
                  label="Estimated product value"
                  name="value"
                  placeholder="e.g. USD 1,200"
                  value={data.value || ""}
                  onChange={change}
                  error={errors.value}
                />
                <Field
                  label="Preferred supplier / location"
                  name="supplier"
                  value={data.supplier || ""}
                  onChange={change}
                />
                <label className="block text-sm font-semibold text-slate-800">
                  Supporting document{" "}
                  <span className="font-normal text-slate-400">
                    (placeholder)
                  </span>
                  <span className="mt-2 flex min-h-12 items-center gap-2 rounded-md border border-dashed border-slate-300 px-4 text-sm font-normal text-slate-500">
                    <FileText size={17} /> File upload will be available later
                  </span>
                </label>
              </div>
            )}
            {step === 2 && (
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Recipient name"
                  name="recipient"
                  value={data.recipient || ""}
                  onChange={change}
                  error={errors.recipient}
                />
                <Field
                  label="Recipient phone number"
                  name="recipientPhone"
                  value={data.recipientPhone || ""}
                  onChange={change}
                  error={errors.recipientPhone}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Ghana delivery address"
                    name="address"
                    value={data.address || ""}
                    onChange={change}
                    error={errors.address}
                  />
                </div>
                <Field
                  label="City"
                  name="city"
                  value={data.city || ""}
                  onChange={change}
                  error={errors.city}
                />
                <Field
                  label="Region"
                  name="region"
                  as="select"
                  options={[
                    "Greater Accra",
                    "Ashanti",
                    "Central",
                    "Eastern",
                    "Western",
                    "Volta",
                    "Northern",
                    "Other",
                  ]}
                  value={data.region || ""}
                  onChange={change}
                  error={errors.region}
                />
                <div className="sm:col-span-2">
                  <Field
                    label="Delivery instructions"
                    name="instructions"
                    as="textarea"
                    value={data.instructions || ""}
                    onChange={change}
                  />
                </div>
              </div>
            )}
            {step === 3 && <Review data={data} />}
            {step === 3 && (
              <div className="mt-6">
                <Field
                  label="Additional notes"
                  name="notes"
                  as="textarea"
                  value={data.notes || ""}
                  onChange={change}
                  placeholder="Anything else we should know?"
                />
              </div>
            )}
            <div className="mt-10 flex justify-between border-t border-slate-100 pt-6">
              <Button
                variant="secondary"
                onClick={() => setStep((value) => Math.max(0, value - 1))}
                disabled={step === 0}
              >
                <ChevronLeft size={16} />
                Back
              </Button>
              {step < 3 ? (
                <Button onClick={next}>
                  Continue <ChevronRight size={16} />
                </Button>
              ) : (
                <Button onClick={() => setSubmitted(true)}>
                  Submit Request <Check size={16} />
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function Review({ data }) {
  const groups = [
    ["Customer", ["fullName", "email", "phone"]],
    [
      "Product",
      [
        "productName",
        "description",
        "productUrl",
        "quantity",
        "value",
        "supplier",
      ],
    ],
    [
      "Delivery",
      [
        "recipient",
        "recipientPhone",
        "address",
        "city",
        "region",
        "instructions",
      ],
    ],
  ]
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {groups.map(([title, keys]) => (
        <section className="border border-slate-200 p-5" key={title}>
          <h3 className="font-semibold text-emerald-950">{title}</h3>
          <dl className="mt-4 space-y-3">
            {keys
              .filter((key) => data[key])
              .map((key) => (
                <div key={key}>
                  <dt className="text-xs capitalize text-slate-400">
                    {key.replace(/([A-Z])/g, " $1")}
                  </dt>
                  <dd className="mt-0.5 break-words text-sm text-slate-800">
                    {data[key]}
                  </dd>
                </div>
              ))}
          </dl>
        </section>
      ))}
    </div>
  )
}

const authContent = {
  login: [
    "Welcome back",
    "Sign in to manage requests and follow active orders.",
  ],
  register: [
    "Create your account",
    "Save your details and manage every import in one place.",
  ],
  forgot: [
    "Reset your password",
    "Enter your email and we will prepare a recovery link.",
  ],
  reset: [
    "Choose a new password",
    "Create a secure password for your GH Trade Hub account.",
  ],
}

export function AuthPage({ type }) {
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [title, body] = authContent[type]
  const register = type === "register"
  const password = type === "login" || type === "reset" || register
  function submit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const next = {}
    if (!form.get("email")) next.email = "Email is required."
    if (
      form.get("email") &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.get("email"))
    )
      next.email = "Enter a valid email."
    if (password && (form.get("password") || "").length < 8)
      next.password = "Use at least 8 characters."
    if (register && form.get("password") !== form.get("confirm"))
      next.confirm = "Passwords do not match."
    if (register && !form.get("terms"))
      next.terms = "Accept the legal terms to continue."
    setErrors(next)
    if (!Object.keys(next).length) setDone(true)
  }
  return (
    <section className="bg-[#f4f7f5] py-16 sm:py-24">
      <Container className="grid max-w-5xl overflow-hidden border border-slate-200 bg-white p-0 shadow-xl shadow-emerald-950/5 lg:grid-cols-[.8fr_1.2fr]">
        <div className="hidden bg-emerald-950 p-10 text-white lg:block">
          <LockKeyhole className="text-amber-300" />
          <p className="mt-24 text-xs font-bold uppercase tracking-[.2em] text-amber-300">
            Secure customer area
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold">
            Every request.
            <br />
            One clear view.
          </h2>
          <p className="mt-5 text-sm leading-6 text-emerald-50/65">
            The dashboard experience currently uses mock authentication and
            demonstration data.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            GH Trade Hub account
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold">{title}</h1>
          <p className="mt-3 text-sm text-slate-600">{body}</p>
          {done ? (
            <div className="mt-10">
              <StatePanel
                type="success"
                title="Frontend validation complete"
                body="No account data was sent. Backend authentication will be connected later."
              />
              <Button
                to={type === "login" ? "/dashboard" : "/login"}
                className="mt-5 w-full"
              >
                {type === "login" ? "Open demo dashboard" : "Return to login"}
              </Button>
            </div>
          ) : (
            <form className="mt-8 space-y-5" onSubmit={submit}>
              {register && (
                <>
                  <Field label="Full name" name="name" />
                  <Field label="Phone number" name="phone" />
                </>
              )}
              <Field
                label="Email address"
                name="email"
                type="email"
                error={errors.email}
              />
              {password && (
                <Field
                  label="Password"
                  name="password"
                  type="password"
                  error={errors.password}
                />
              )}
              {(register || type === "reset") && (
                <Field
                  label="Confirm password"
                  name="confirm"
                  type="password"
                  error={errors.confirm}
                />
              )}
              {type === "login" && (
                <div className="flex justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" name="remember" /> Remember me
                  </label>
                  <Link
                    className="font-semibold text-emerald-800"
                    to="/forgot-password"
                  >
                    Forgot password?
                  </Link>
                </div>
              )}
              {register && (
                <div>
                  <label className="flex items-start gap-2 text-sm text-slate-600">
                    <input className="mt-1" type="checkbox" name="terms" />I
                    accept the{" "}
                    <Link
                      className="font-semibold text-emerald-800"
                      to="/terms"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="font-semibold text-emerald-800"
                      to="/privacy"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                  {errors.terms && (
                    <p className="mt-1 text-xs text-red-600">{errors.terms}</p>
                  )}
                </div>
              )}
              <Button type="submit" className="w-full">
                {type === "login"
                  ? "Sign in"
                  : type === "register"
                    ? "Create account"
                    : "Continue"}
              </Button>
              <p className="text-center text-sm text-slate-500">
                {type === "login" ? (
                  <>
                    New to GH Trade Hub?{" "}
                    <Link
                      className="font-semibold text-emerald-800"
                      to="/register"
                    >
                      Create account
                    </Link>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <Link
                      className="font-semibold text-emerald-800"
                      to="/login"
                    >
                      Sign in
                    </Link>
                  </>
                )}
              </p>
            </form>
          )}
        </div>
      </Container>
    </section>
  )
}
