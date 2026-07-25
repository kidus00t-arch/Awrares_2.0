import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  Zap,
  ShieldCheck,
  Layers,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Car,
  Coffee,
  Users,
  Wifi,
  Check,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import heroImg from "@/assets/hero-exterior.jpg";
import officeImg from "@/assets/space-office.jpg";
import retailImg from "@/assets/space-retail.jpg";
import meetingImg from "@/assets/space-meeting.jpg";
import lobbyImg from "@/assets/amenities-lobby.jpg";
import { ThemeToggle } from "@/components/theme-toggle";


export const Route = createFileRoute("/")({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <ValueProp />
      <Spaces />
      <Amenities />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

/* ------------------------------ Nav ------------------------------ */
function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-page flex items-center justify-between py-6">
        <a href="#top" className="flex items-center gap-2 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-gold-foreground font-bold">
            A
          </div>
          <span className="text-base font-semibold tracking-tight">Awerares</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
          <a href="#spaces" className="hover:text-white transition-colors">Spaces</a>
          <a href="#amenities" className="hover:text-white transition-colors">Amenities</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Tenants</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-gold inline-flex h-10 items-center rounded-md px-5 text-sm font-semibold"
          >
            Book a Tour
          </a>
        </div>

      </div>
    </header>
  );
}

/* ------------------------------ Hero ----------------------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] w-full overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Awerares Business Center exterior at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-page relative z-10 flex min-h-[92vh] flex-col justify-end pb-20 pt-40 text-white">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Awerares Business Center · Addis Ababa</p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your Business at Addis Ababa's Premier Corporate Hub.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Modern, fully-equipped office spaces, retail outlets, and business infrastructure
            designed to scale your enterprise at Awerares Business Center.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-gold inline-flex h-12 items-center gap-2 rounded-md px-7 text-sm font-semibold"
            >
              Book a Tour <ArrowRight className="size-4" />
            </a>
            <a
              href="#spaces"
              className="inline-flex h-12 items-center rounded-md border border-white/30 bg-white/5 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              View Available Spaces
            </a>
          </div>
          <div className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/15 pt-6 text-white/90">
            <Stat value="50K+" label="sq. ft. of space" />
            <Stat value="24/7" label="secure access" />
            <Stat value="100%" label="power backup" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-gold md:text-3xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/70">{label}</div>
    </div>
  );
}

/* --------------------------- Value Prop -------------------------- */
function ValueProp() {
  const features = [
    {
      icon: MapPin,
      title: "Premium Location",
      desc: "Strategically situated for easy access, client meetings, and high visibility across Addis Ababa.",
    },
    {
      icon: Zap,
      title: "Uninterrupted Power & Tech",
      desc: "High-speed fiber internet with redundancy and robust generator backup keep you online.",
    },
    {
      icon: Layers,
      title: "Flexible Spaces",
      desc: "From private executive suites to expansive retail storefronts — configured to fit your team.",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Security & Management",
      desc: "On-site facility management and round-the-clock secure access, monitored end-to-end.",
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Value Proposition</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Where convenience meets modern infrastructure.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Finding reliable, modern, well-connected commercial space in Addis Ababa is hard.
            Awerares eliminates operational headaches with a turn-key environment — so you can
            focus entirely on growing your business.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border bg-card p-7 shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Spaces ---------------------------- */
function Spaces() {
  const cards = [
    {
      img: officeImg,
      tag: "Corporate & Private Offices",
      desc: "Private, secure layouts optimized for productivity, team collaboration, and corporate privacy.",
      features: ["Furnished suites", "From 20–300 sqm", "Dedicated fiber"],
    },
    {
      img: retailImg,
      tag: "Premium Retail Units",
      desc: "High-visibility ground floor and upper-level storefronts designed to attract foot traffic and showcase your brand.",
      features: ["Ground-floor frontage", "Custom fit-out", "High foot traffic"],
    },
    {
      img: meetingImg,
      tag: "Meeting & Conference Rooms",
      desc: "Modern meeting environments equipped with presentation tools — perfect for board meetings, workshops, or client pitches.",
      features: ["4K displays", "Hybrid-ready A/V", "Hourly bookings"],
    },
  ];
  return (
    <section id="spaces" className="bg-secondary py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow">Offerings</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              Tailored spaces for every stage of growth.
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold"
          >
            Request availability <ArrowRight className="size-4" />
          </a>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.tag}
              className="group overflow-hidden rounded-xl bg-card shadow-card-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.tag}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="text-xl font-semibold">{c.tag}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                <ul className="mt-5 space-y-2">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="size-4 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-gold"
                >
                  Learn more <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Amenities --------------------------- */
function Amenities() {
  const items = [
    { icon: Car, title: "Secure Parking", desc: "Dedicated underground and surface parking with 24/7 monitoring." },
    { icon: Building2, title: "Grand Reception", desc: "Professionally designed lobby and reception to welcome your clients." },
    { icon: Coffee, title: "On-site Café", desc: "Cafés and break areas for networking and downtime between meetings." },
    { icon: Users, title: "Accessible Facilities", desc: "Dedicated elevators, universal accessibility, and family rooms." },
    { icon: Wifi, title: "Enterprise Connectivity", desc: "Redundant fiber lines and business-grade Wi-Fi throughout." },
    { icon: ShieldCheck, title: "On-site Facility Team", desc: "Full-time management, maintenance, and concierge support." },
  ];
  return (
    <section id="amenities" className="py-24 md:py-32">
      <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <img
            src={lobbyImg}
            alt="Awerares Business Center lobby"
            loading="lazy"
            width={1400}
            height={1000}
            className="rounded-xl shadow-elegant"
          />
          <div className="absolute -bottom-6 -right-6 hidden rounded-xl bg-navy p-6 text-white shadow-elegant sm:block">
            <div className="text-3xl font-bold text-gold">A+</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-white/70">
              Class rating
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Amenities</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Built for seamless operations.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Every detail — from arrival to end-of-day — is engineered to remove friction from
            your workday and elevate the way clients experience your business.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {items.map((i) => (
              <div key={i.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground">
                  <i.icon className="size-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{i.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{i.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Testimonials ------------------------- */
function Testimonials() {
  const quotes = [
    {
      quote:
        "Moving our headquarters to Awerares was the best operational decision we made this year. The infrastructure is flawless.",
      name: "Selamawit Bekele",
      role: "COO, Habesha Tech Group",
    },
    {
      quote:
        "Our clients notice the difference the moment they walk into the lobby. It's a serious upgrade to how we do business.",
      name: "Daniel Alemu",
      role: "Managing Partner, Alemu & Co.",
    },
    {
      quote:
        "Reliable power, great connectivity, and a management team that actually responds. Everything a growing company needs.",
      name: "Rahel Girma",
      role: "Founder, Nile Retail",
    },
  ];
  return (
    <section id="testimonials" className="bg-navy py-24 text-white md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Trusted by</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Trusted by thriving enterprises.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="text-4xl leading-none text-gold">"</div>
              <blockquote className="mt-2 text-sm leading-relaxed text-white/90">
                {q.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold">{q.name}</div>
                <div className="text-xs text-white/60">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- Contact ---------------------------- */
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Visit Us</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
            Find us in the heart of the city.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Book a tour or send us your space requirements — we'll follow up within one business day.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-card-soft">
            <iframe
              title="Awerares Business Center location"
              src="https://www.google.com/maps?q=Addis+Ababa+Ethiopia&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-xl border border-border bg-card p-8 shadow-card-soft"
          >
            {submitted ? (
              <div className="flex h-full min-h-[380px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-gold-foreground">
                  <Check className="size-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">Thank you</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                  We've received your inquiry. Our leasing team will reach out within one business day.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                <Field label="Full name" name="name" placeholder="Your name" required />
                <Field label="Business email" name="email" type="email" placeholder="you@company.com" required />
                <Field label="Phone number" name="phone" type="tel" placeholder="+251 …" />
                <div className="grid gap-2">
                  <label htmlFor="type" className="text-sm font-medium">
                    Space requirements
                  </label>
                  <select
                    id="type"
                    name="type"
                    required
                    defaultValue=""
                    className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>Select a space type</option>
                    <option value="office">Corporate / Private Office</option>
                    <option value="retail">Retail Unit</option>
                    <option value="meeting">Meeting / Conference Room</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="notes" className="text-sm font-medium">
                    Notes <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    placeholder="Team size, preferred move-in date, etc."
                    className="rounded-md border border-input bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold"
                >
                  Request a Tour <ArrowRight className="size-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

/* ----------------------------- Footer ---------------------------- */
function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-gold-foreground font-bold">
              A
            </div>
            <span className="text-base font-semibold">Awerares Business Center</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            Addis Ababa's premier corporate hub. Premium offices, retail units, and meeting rooms —
            built for growing enterprises.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white">Explore</h5>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#top" className="hover:text-gold">Home</a></li>
            <li><a href="#spaces" className="hover:text-gold">Available Spaces</a></li>
            <li><a href="#amenities" className="hover:text-gold">Amenities</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-white">Contact</h5>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 text-gold" /> Bole, Addis Ababa, Ethiopia
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 text-gold" /> +251 11 000 0000
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 text-gold" /> leasing@awerares.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col justify-between gap-2 py-6 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} Awerares Business Center. All rights reserved.</p>
          <p>Addis Ababa · Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}
