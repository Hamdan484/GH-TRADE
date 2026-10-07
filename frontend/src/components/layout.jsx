import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { NavLink, Outlet, useLocation } from "react-router"
import { Globe2, Menu, X } from "lucide-react"
import { Button, Container } from "./ui"

const nav = [
  ["Home", "/"],
  ["How It Works", "/how-it-works"],
  ["Services", "/services"],
  ["Track Order", "/track"],
  ["About Us", "/about"],
  ["Contact", "/contact"],
]

export function Logo({ light = false }) {
  return (
    <NavLink
      to="/"
      className={`flex items-center gap-3 font-bold tracking-tight ${
        light ? "text-white" : "text-emerald-950"
      }`}
      aria-label="GH Trade Hub home"
    >
      <span
        className={`grid size-10 place-items-center rounded-md ${
          light
            ? "bg-amber-400 text-emerald-950"
            : "bg-emerald-950 text-amber-300"
        }`}
      >
        <Globe2 size={22} />
      </span>
      <span className="leading-none">
        GH TRADE <span className="font-normal">HUB</span>
      </span>
    </NavLink>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-18 items-center justify-between">
        <Logo />
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {nav.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-emerald-700 ${
                  isActive ? "text-emerald-800" : "text-slate-600"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button to="/login" variant="ghost">
            Login
          </Button>
          <Button to="/request">Get Started</Button>
        </div>
        <button
          className="grid size-11 place-items-center rounded-md text-emerald-950 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <Container className="flex flex-col py-5">
              {nav.map(([label, to]) => (
                <NavLink
                  key={to}
                  to={to}
                  className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700"
                >
                  {label}
                </NavLink>
              ))}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Button to="/login" variant="secondary">
                  Login
                </Button>
                <Button to="/request">Get Started</Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export function Footer() {
  const groups = [
    [
      "Company",
      [
        ["About", "/about"],
        ["How It Works", "/how-it-works"],
        ["Services", "/services"],
        ["Contact", "/contact"],
      ],
    ],
    [
      "Customer",
      [
        ["Request an Import", "/request"],
        ["Track Order", "/track"],
        ["Login", "/login"],
        ["Create Account", "/register"],
      ],
    ],
    [
      "Legal",
      [
        ["Terms & Conditions", "/terms"],
        ["Privacy Policy", "/privacy"],
      ],
    ],
  ]
  return (
    <footer className="bg-emerald-950 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-5">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-6 text-emerald-100/65">
            From customer request to doorstep — managed with precision.
          </p>
        </div>
        {groups.map(([title, links]) => (
          <div key={title}>
            <h2 className="text-sm font-semibold">{title}</h2>
            <ul className="mt-4 space-y-3">
              {links.map(([label, to]) => (
                <li key={to}>
                  <NavLink
                    className="text-sm text-emerald-100/60 hover:text-amber-300"
                    to={to}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-emerald-100/50 sm:flex-row sm:justify-between">
        <p>© 2026 GH Trade Hub. All rights reserved.</p>
        <p>legal@ghtradehub.com · privacy@ghtradehub.com</p>
      </Container>
    </footer>
  )
}

export function RootLayout() {
  const location = useLocation()
  const dashboard = location.pathname.startsWith("/dashboard")
  return (
    <>
      {!dashboard && <Navbar />}
      <motion.main
        id="main-content"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <Outlet />
      </motion.main>
      {!dashboard && <Footer />}
    </>
  )
}
