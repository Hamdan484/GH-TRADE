import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router"
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  PackageOpen,
} from "lucide-react"

export function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 ${className}`}
    >
      {children}
    </div>
  )
}

export function Button({
  children,
  to,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled,
}) {
  const styles = {
    primary: "bg-emerald-950 text-white hover:bg-emerald-800 shadow-sm",
    gold: "bg-amber-400 text-emerald-950 hover:bg-amber-300",
    secondary:
      "border border-emerald-950/20 bg-white text-emerald-950 hover:border-emerald-700 hover:bg-emerald-50",
    ghost: "text-emerald-950 hover:bg-emerald-50",
  }
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 disabled:opacity-50 ${styles[variant]} ${className}`
  if (to)
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    )
  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export function SectionHeading({ eyebrow, title, body, align = "left" }) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {body && <p className="mt-4 leading-7 text-slate-600">{body}</p>}
    </div>
  )
}

export function Reveal({ children, className = "", delay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function PageHeader({ eyebrow, title, body }) {
  return (
    <section className="border-b border-emerald-950/10 bg-emerald-950 py-16 text-white sm:py-20">
      <Container>
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-amber-300">
            {eyebrow}
          </p>
          <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {body && (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50/75">
              {body}
            </p>
          )}
        </Reveal>
      </Container>
    </section>
  )
}

export function Field({ label, error, as = "input", options = [], ...props }) {
  const id = props.id || props.name
  const base =
    "mt-2 w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
  return (
    <label className="block text-sm font-semibold text-slate-800" htmlFor={id}>
      {label}
      {as === "textarea" ? (
        <textarea {...props} id={id} className={`${base} min-h-28 resize-y`} />
      ) : as === "select" ? (
        <select {...props} id={id} className={base}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input {...props} id={id} className={base} />
      )}
      {error && (
        <span className="mt-1.5 flex items-center gap-1 text-xs font-medium text-red-600">
          <CircleAlert size={13} />
          {error}
        </span>
      )}
    </label>
  )
}

export function StatePanel({ type = "empty", title, body }) {
  const Icon =
    type === "loading"
      ? LoaderCircle
      : type === "success"
        ? CheckCircle2
        : PackageOpen
  return (
    <div className="border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
      <Icon
        className={`mx-auto text-emerald-700 ${
          type === "loading" ? "animate-spin" : ""
        }`}
      />
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  )
}

export function InlineLink({ to, children }) {
  return (
    <Link
      className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-600"
      to={to}
    >
      {children}
      <ArrowRight size={15} />
    </Link>
  )
}
