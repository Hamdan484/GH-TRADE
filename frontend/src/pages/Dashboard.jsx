import {
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronRight,
  ClipboardClock,
  LogOut,
  Menu,
  Package,
  UserRound,
} from "lucide-react"
import { NavLink, Outlet, useParams } from "react-router"
import TrackingTimeline from "../components/TrackingTimeline"
import { orders, trackingSteps } from "../data/content"
import { Button, Field } from "../components/ui"
import { Logo } from "../components/layout"

const links = [
  ["Overview", "/dashboard", BarChart3],
  ["My orders", "/dashboard/orders", Boxes],
  ["Profile", "/dashboard/profile", UserRound],
]

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-50 lg:grid lg:grid-cols-[260px_1fr]">
      <aside className="hidden bg-emerald-950 p-6 text-white lg:flex lg:flex-col">
        <Logo light />
        <nav className="mt-12 space-y-2">
          {links.map(([label, to, Icon]) => (
            <NavLink
              end={to === "/dashboard"}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-4 py-3 text-sm font-semibold ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-emerald-50/60 hover:bg-white/5 hover:text-white"
                }`
              }
              key={to}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <NavLink
          className="mt-auto flex items-center gap-3 px-4 py-3 text-sm text-emerald-50/60"
          to="/"
        >
          <LogOut size={18} />
          Exit demo
        </NavLink>
      </aside>
      <div>
        <header className="flex h-18 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8">
          <div className="lg:hidden">
            <Logo />
          </div>
          <p className="hidden text-sm text-slate-500 lg:block">
            Customer workspace
          </p>
          <div className="flex items-center gap-3">
            <span className="hidden text-right sm:block">
              <strong className="block text-sm">Ama Mensah</strong>
              <span className="text-xs text-slate-500">Customer</span>
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-amber-100 font-bold text-amber-800">
              AM
            </span>
            <Menu className="lg:hidden" />
          </div>
        </header>
        <main className="p-5 sm:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

function Heading({ title, body, action }) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div>
        <h1 className="font-display text-3xl font-semibold text-slate-950">
          {title}
        </h1>
        <p className="mt-2 text-sm text-slate-500">{body}</p>
      </div>
      {action}
    </div>
  )
}

export function DashboardOverview() {
  return (
    <div className="mx-auto max-w-6xl">
      <Heading
        title="Good morning, Ama"
        body="Here is the latest across your import journey."
        action={<Button to="/request">New import request</Button>}
      />
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          [Package, "Active orders", "2", "Across shipping and customs"],
          [CheckCircle2, "Completed orders", "8", "Delivered successfully"],
          [ClipboardClock, "Pending requests", "1", "Awaiting review"],
        ].map(([Icon, label, value, note]) => (
          <div className="border border-slate-200 bg-white p-6" key={label}>
            <div className="flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-md bg-emerald-50 text-emerald-800">
                <Icon size={20} />
              </span>
              <strong className="font-display text-3xl">{value}</strong>
            </div>
            <h2 className="mt-7 font-semibold">{label}</h2>
            <p className="mt-1 text-xs text-slate-500">{note}</p>
          </div>
        ))}
      </div>
      <section className="mt-8 border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <div>
            <h2 className="font-semibold">Recent orders</h2>
            <p className="mt-1 text-xs text-slate-500">
              Your latest fulfilment activity
            </p>
          </div>
          <NavLink
            className="text-sm font-semibold text-emerald-800"
            to="/dashboard/orders"
          >
            View all
          </NavLink>
        </div>
        <OrderList rows={orders} />
      </section>
    </div>
  )
}

function Status({ children }) {
  const delivered = children === "Delivered"
  return (
    <span
      className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ${
        delivered
          ? "bg-emerald-100 text-emerald-800"
          : "bg-amber-100 text-amber-800"
      }`}
    >
      {children}
    </span>
  )
}
function OrderList({ rows }) {
  return (
    <div className="divide-y divide-slate-100">
      {rows.map((order) => (
        <NavLink
          className="grid gap-3 p-5 transition hover:bg-slate-50 md:grid-cols-[1.3fr_.8fr_.8fr_.8fr_auto] md:items-center"
          to={`/dashboard/orders/${order.id}`}
          key={order.id}
        >
          <div>
            <strong className="block text-sm">{order.product}</strong>
            <span className="text-xs text-slate-500">
              #{order.id} · {order.date}
            </span>
          </div>
          <Status>{order.status}</Status>
          <span className="text-sm text-slate-600">{order.destination}</span>
          <strong className="text-sm">{order.amount}</strong>
          <ChevronRight className="text-slate-400" size={18} />
        </NavLink>
      ))}
    </div>
  )
}

export function Orders() {
  return (
    <div className="mx-auto max-w-6xl">
      <Heading
        title="My orders"
        body="Review active and completed fulfilment journeys."
        action={<Button to="/request">Request an import</Button>}
      />
      <div className="border border-slate-200 bg-white">
        <OrderList rows={orders} />
      </div>
    </div>
  )
}

export function OrderDetails() {
  const { id } = useParams()
  const order = orders.find((item) => item.id === id) || orders[0]
  return (
    <div className="mx-auto max-w-6xl">
      <Heading
        title={order.product}
        body={`Order #${order.id}`}
        action={<Status>{order.status}</Status>}
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <div className="space-y-6">
          <section className="border border-slate-200 bg-white p-6">
            <h2 className="font-semibold">Order information</h2>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                ["Product", order.product],
                ["Order date", order.date],
                ["Declared amount", order.amount],
                ["Destination", order.destination],
                ["Shipping method", "Consolidated air freight"],
                ["Supplier location", "Guangzhou, China"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-wider text-slate-400">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="border border-slate-200 bg-white p-6">
            <h2 className="font-semibold">Delivery information</h2>
            <p className="mt-4 text-sm text-slate-600">
              Ama Mensah · East Legon, Accra · +233 XX XXX XXXX
            </p>
          </section>
        </div>
        <section className="border border-slate-200 bg-white p-6">
          <h2 className="mb-6 font-semibold">Tracking timeline</h2>
          <TrackingTimeline steps={trackingSteps} />
        </section>
      </div>
    </div>
  )
}

export function Profile() {
  return (
    <div className="mx-auto max-w-4xl">
      <Heading
        title="Profile"
        body="Keep your contact and delivery details up to date."
      />
      <form
        className="border border-slate-200 bg-white p-6 sm:p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" defaultValue="Ama Mensah" />
          <Field
            label="Email address"
            name="email"
            type="email"
            defaultValue="ama@example.com"
          />
          <Field
            label="Phone number"
            name="phone"
            defaultValue="+233 XX XXX XXXX"
          />
          <Field label="Default city" name="city" defaultValue="Accra" />
          <div className="sm:col-span-2">
            <Field
              label="Default delivery address"
              name="address"
              as="textarea"
              defaultValue="East Legon, Accra"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button type="submit">Save changes</Button>
        </div>
      </form>
    </div>
  )
}
