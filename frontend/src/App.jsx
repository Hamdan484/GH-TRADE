import { RouterProvider, createBrowserRouter } from "react-router"
import { RootLayout } from "./components/layout"
import Home from "./pages/Home"
import { About, Contact, HowItWorks, Services } from "./pages/PublicPages"
import { AuthPage, RequestImport } from "./pages/Forms"
import {
  DashboardLayout,
  DashboardOverview,
  OrderDetails,
  Orders,
  Profile,
} from "./pages/Dashboard"
import { LegalPage } from "./pages/Legal"
import TrackOrder from "./pages/TrackOrder"
import NotFound from "./pages/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "how-it-works", Component: HowItWorks },
      { path: "services", Component: Services },
      { path: "track", Component: TrackOrder },
      { path: "request", Component: RequestImport },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
      { path: "login", element: <AuthPage type="login" /> },
      { path: "register", element: <AuthPage type="register" /> },
      { path: "forgot-password", element: <AuthPage type="forgot" /> },
      { path: "reset-password", element: <AuthPage type="reset" /> },
      { path: "terms", element: <LegalPage type="terms" /> },
      { path: "privacy", element: <LegalPage type="privacy" /> },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          { index: true, Component: DashboardOverview },
          { path: "orders", Component: Orders },
          { path: "orders/:id", Component: OrderDetails },
          { path: "profile", Component: Profile },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
