import {
  BarChart3,
  Boxes,
  Code2,
  Database,
  Layers3,
  LayoutDashboard,
  Rocket,
  Sparkles,
  Workflow
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];

export const skills = [
  {
    name: "React",
    description: "Composable interfaces, polished states, and modern frontend architecture.",
    icon: Code2
  },
  {
    name: "Next.js",
    description: "SEO-ready product pages, static exports, and fast production builds.",
    icon: Layers3
  },
  {
    name: "Laravel",
    description: "Clean backend flows, APIs, dashboards, and business logic.",
    icon: Workflow
  },
  {
    name: "PostgreSQL",
    description: "Reliable data models, analytics tables, and structured persistence.",
    icon: Database
  }
];

export const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "Dashboard modern untuk manajemen produk, transaksi, analytics, dan customer.",
    stack: ["Next.js", "PostgreSQL", "Analytics"],
    icon: LayoutDashboard,
    accent: "from-blue-500/24 to-cyan-300/10"
  },
  {
    title: "AI SaaS Landing Page",
    description:
      "Landing page modern untuk startup AI dengan animasi dan conversion-focused UI.",
    stack: ["React", "Framer Motion", "SEO"],
    icon: Sparkles,
    accent: "from-violet-500/24 to-blue-300/10"
  },
  {
    title: "Inventory App",
    description:
      "Sistem inventory management dengan dashboard realtime dan database management.",
    stack: ["Laravel", "PostgreSQL", "Realtime"],
    icon: Boxes,
    accent: "from-zinc-400/18 to-blue-400/10"
  }
];

export const journey = [
  {
    year: "01",
    title: "Interface Foundation",
    description:
      "Membangun fondasi UI yang clean, responsive, dan mudah dikembangkan."
  },
  {
    year: "02",
    title: "Product Systems",
    description:
      "Mengubah halaman biasa menjadi flow produk yang jelas, cepat, dan conversion-aware."
  },
  {
    year: "03",
    title: "Fullstack Execution",
    description:
      "Menghubungkan frontend premium dengan backend, database, dan workflow operasional."
  }
];

export const highlights = [
  {
    label: "Performance-first",
    value: "Fast"
  },
  {
    label: "Design approach",
    value: "Clean"
  },
  {
    label: "Build mindset",
    value: "Scalable"
  }
];

export const principles = [
  {
    title: "Clean by default",
    description: "Setiap layar harus terasa jelas, ringan, dan punya hierarchy yang mudah dibaca.",
    icon: Rocket
  },
  {
    title: "UI with intent",
    description: "Motion, spacing, dan component states dipakai untuk membantu flow, bukan dekorasi kosong.",
    icon: BarChart3
  },
  {
    title: "Built to scale",
    description: "Struktur kode dipisah rapi agar portfolio, landing page, atau dashboard mudah berkembang.",
    icon: Layers3
  }
];
