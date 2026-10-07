import {
  Box,
  Headphones,
  MapPin,
  SearchCheck,
  Ship,
  ShieldCheck,
  Truck,
} from "lucide-react"

export const services = [
  {
    icon: Box,
    title: "Import Fulfilment",
    text: "One coordinated journey from product request and supplier liaison to final delivery.",
    benefit: "One accountable fulfilment partner",
  },
  {
    icon: Ship,
    title: "International Shipping",
    text: "Professional coordination of air and sea freight from global supplier locations.",
    benefit: "Clear shipping milestones",
  },
  {
    icon: ShieldCheck,
    title: "Customs Clearance",
    text: "Practical support and documentation coordination throughout customs processing in Ghana.",
    benefit: "Fewer avoidable clearance delays",
  },
  {
    icon: Truck,
    title: "Last-Mile Delivery",
    text: "Reliable movement from clearance to your specified home, office, or business destination.",
    benefit: "Doorstep delivery across Ghana",
  },
  {
    icon: SearchCheck,
    title: "Order Tracking",
    text: "A clear view of each major milestone throughout your fulfilment journey.",
    benefit: "Visibility without the guesswork",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    text: "Responsive communication from request review through delivery confirmation.",
    benefit: "Professional human support",
  },
]

export const process = [
  [
    "01",
    "Submit your request",
    "Tell us what you need, where it is coming from, and where it should be delivered.",
  ],
  [
    "02",
    "Request review",
    "Our team reviews product, supplier, value, and fulfilment requirements.",
  ],
  [
    "03",
    "Quote & confirmation",
    "You receive clear next steps and a quote before the journey begins.",
  ],
  [
    "04",
    "International shipping",
    "We coordinate movement from the supplier location to Ghana.",
  ],
  [
    "05",
    "Customs processing",
    "Documentation and customs activity are coordinated at arrival.",
  ],
  [
    "06",
    "Ghana arrival",
    "Your order is received and prepared for the final delivery stage.",
  ],
  [
    "07",
    "Last-mile delivery",
    "We coordinate delivery to your specified destination.",
  ],
  [
    "08",
    "Delivery confirmation",
    "The journey closes with delivery status and confirmation.",
  ],
]

export const trackingSteps = [
  { label: "Request submitted", date: "12 May, 09:20", state: "complete" },
  { label: "Request confirmed", date: "13 May, 14:10", state: "complete" },
  { label: "International shipping", date: "16 May, 08:40", state: "complete" },
  { label: "In transit", date: "22 May, 17:30", state: "complete" },
  { label: "Customs clearance", date: "29 May, 11:15", state: "current" },
  { label: "Out for delivery", date: "Pending", state: "pending" },
  { label: "Delivered", date: "Pending", state: "pending" },
]

export const orders = [
  {
    id: "GTH-2026-00124",
    product: "Commercial espresso machine",
    date: "12 May 2026",
    status: "Customs clearance",
    destination: "Accra",
    amount: "GH₵ 18,450",
  },
  {
    id: "GTH-2026-00118",
    product: "Solar inverter system",
    date: "28 Apr 2026",
    status: "In transit",
    destination: "Kumasi",
    amount: "GH₵ 12,800",
  },
  {
    id: "GTH-2026-00096",
    product: "Office furniture set",
    date: "02 Mar 2026",
    status: "Delivered",
    destination: "Tema",
    amount: "GH₵ 8,220",
  },
]

export const faqs = [
  [
    "What can I request?",
    "You can submit details for personal or business goods. Each request is reviewed for feasibility and fulfilment requirements.",
  ],
  [
    "How long does fulfilment take?",
    "Timelines vary by origin, shipping method, customs processing, and destination. Any timeline shared is an estimate, not a guarantee.",
  ],
  [
    "Can I track my order?",
    "Yes. During this frontend phase, the tracker demonstrates the planned experience using mock data.",
  ],
  [
    "Are customs fees included?",
    "Your quote or confirmation will clarify known charges and any costs that may depend on customs assessment.",
  ],
]
