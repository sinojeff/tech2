import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Eyebrow } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Techions — Solving the unsolved" },
      { name: "description", content: "Techions is a tech problem-solving partner for challenges average teams cannot crack. AI, software, analytics." },
      { property: "og:title", content: "Techions — Solving the unsolved" },
      { property: "og:description", content: "AI, software, and analytics for problems that don't have playbooks." },
    ],
  }),
  component: Index,
});

const facts = [
  ["Engagements", "Project → Retainership"],
  ["Geographies", "US & India"],
  ["Focus", "AI / Software / Analytics"],
  ["Outcomes", "Product, IP & insight"],
];

const services = [
  ["Applied AI & ML", "LLM systems, agents, retrieval, computer vision, and forecasting — engineered to ship, not just demo."],
  ["Software Engineering", "From architecture to turn-key delivery. Web, mobile, backend, data platforms — built right the first time."],
  ["Analytics & Insight", "Decision-grade analytics, experimentation, and data products that drive measurable business outcomes."],
  ["Continuous Solutioning", "Embedded teams that iterate with you — research, prototype, productionize, repeat."],
  ["Talent Retainership", "Senior, vetted talent on retainer. Speed of a startup with the depth of a research lab."],
  ["IP-grade Research", "When the problem is novel, we go deep — producing patentable approaches and durable competitive moats."],
];

const sectors = [
  ["Health & HealthTech", "Scalable, secure data platforms for large healthcare providers — clinical systems, patient data, and compliance at scale."],
  ["Power & Energy / GovTech", "Addressing grid leakages, energy management, and critical infrastructure for utilities and government agencies."],
  ["Semiconductors & Infra-Tech", "Hardware solutioning and core engineering for complex scale-up environments and chip-adjacent systems."],
  ["IoT & Retail", "Supply chain optimization linking physical environments to digital analytics — from sensors to shelf."],
  ["Energy Cyber Security", "Hardening defenses for critical physical infrastructure where downtime is not an option."],
  ["Infrastructure & Deep Tech", "Re-engineering hardware foundations for massive scale-up across complex infra-tech companies."],
];

function Index() {
  return (
    <Page>
      <section className="relative max-w-3xl">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 size-[480px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent), transparent 60%)", animation: "pulseGlow 6s ease-in-out infinite" }}
        />
        <Eyebrow>AI · Software · Analytics</Eyebrow>
        <h1 className="text-5xl sm:text-7xl text-balance gradient-text">Solving the unsolved.</h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed text-balance">
          Techions is a tech problem-solving partner for the challenges average teams cannot crack. We thrive on complexity — and turn it into shipped product, durable IP, and measurable outcomes.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:opacity-90 transition glow-ring">
            Bring us a hard problem
          </Link>
          <Link to="/services" className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm hover:bg-muted transition">
            Explore services
          </Link>
        </div>
      </section>

      <section className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
        {facts.map(([k, v]) => (
          <div key={k} className="bg-background p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
            <p className="mt-2 text-sm font-medium">{v}</p>
          </div>
        ))}
      </section>

      <section className="mt-28">
        <h2 className="text-3xl sm:text-4xl">What we excel at</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We deliver solutions for any problem that touches software and analytics — from greenfield product builds to deep research that becomes intellectual property.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {services.map(([t, d]) => (
            <div key={t} className="bg-background p-7">
              <h3 className="text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <Eyebrow>Cross-domain mastery</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Core sectors we serve</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We don't filter by size — we filter by complexity. These are the industries where our deep-tech engineering creates the most leverage.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {sectors.map(([t, d]) => (
            <div key={t} className="bg-background p-7">
              <h3 className="text-xl mb-2">{t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 rounded-2xl bg-primary text-primary-foreground p-10 sm:p-14">
        <h2 className="text-3xl sm:text-4xl max-w-2xl">Have a problem no one else can solve?</h2>
        <p className="mt-4 opacity-80 max-w-xl">We're not the cheapest. We're the team you call when the answer matters.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-background text-foreground px-5 py-2.5 text-sm hover:opacity-90 transition">
          Start the conversation
        </Link>
      </section>
    </Page>
  );
}
