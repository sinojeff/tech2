import { createFileRoute } from "@tanstack/react-router";
import { Page, Eyebrow } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Techions" },
      { name: "description", content: "We exist to crack the hardest problems. Senior, multi-disciplinary engineers and researchers operating from the US and India." },
      { property: "og:title", content: "About — Techions" },
      { property: "og:description", content: "We exist to crack the hardest problems." },
    ],
  }),
  component: About,
});

const principles = [
  ["Global by design", "Operating primarily from the US and India — speed, scale, and follow-the-sun delivery."],
  ["Senior-only talent", "Engineers and researchers with depth. Not cheap, but worth it when the answer matters."],
  ["IP-grade outcomes", "Sometimes we solve problems so deeply they become defensible IP for our clients."],
];

const companies = ["Microsoft","Google","Amazon","Meta","Apple","NVIDIA","Intel","IBM","Oracle","Cisco","Qualcomm","Adobe","Salesforce","Goldman Sachs","McKinsey","Accenture"];

const team = [
  { i: "KA", name: "Konda Ankireddyapalli", role: "Founder & CEO", bio: "30+ years in Technology, Research, & Consulting.", email: "konda@techions.net" },
  { i: "FS", name: "Firoz Shaik Mohammed", role: "Technology", bio: "20+ years in Technology Delivery.", email: "firoz@techions.net" },
  { i: "GP", name: "Giri Prathivadi", role: "R&D", bio: "30+ years in Technology, Research & Development.", email: "giri@techions.net" },
];

const clients = [
  ["Luma Health", "Digital Health Automation startup — California", "DevOps, AI/ML/LLMs, Re-Architecture, QA for AWS-based stack."],
  ["WellSky", "Digital Health Automation company — Kansas", "DevOps / SRE, Re-Architecture."],
  ["EGM", "Electric Power Monitoring startup — Israel / US", "Custom Software Development and QA."],
  ["Applied Materials", "Semiconductor (publicly traded) — SF Bay Area", "Custom Software Development, Computer Vision, AI/ML."],
];

function About() {
  return (
    <Page>
      <section className="max-w-3xl">
        <Eyebrow>Our story</Eyebrow>
        <h1 className="text-5xl sm:text-6xl leading-[1.05]">We exist to crack the hardest problems.</h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          Techions was built around a single conviction: most of the value in technology lives in the problems average teams can't solve. We assemble senior, multi-disciplinary engineers and researchers who get energised by that complexity.
        </p>
      </section>

      <section className="mt-20 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl">Our vision</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            "Solving the unsolved / unsolvables." We exist for the problems other teams set aside — the ones that need original thinking, deep engineering, and the patience to research before building.
          </p>
        </div>
        <div>
          <h2 className="text-2xl">How we work</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Project, problem-based, continuous solutioning, research, turn-key end-to-end, talent retainership, and embedded development — we shape the engagement around the problem, not the org chart.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-3 gap-4">
        {principles.map(([t, d]) => (
          <div key={t} className="rounded-xl border border-border p-6">
            <h3 className="text-lg mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>

      <section className="mt-28">
        <Eyebrow>The best minds in the industry</Eyebrow>
        <h2 className="text-3xl sm:text-4xl max-w-3xl">Talent drawn from the world's most demanding tech environments</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Our talent comes at a premium because we bring premium minds to your table. We blend 30+ years of combined domain expertise with a resource network forged at the companies that define modern computing.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {companies.map((c) => (
            <span key={c} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{c}</span>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Plus alumni of leading research labs, semiconductor majors, and global consulting firms.</p>
      </section>

      <section className="mt-28">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">Meet the team</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A small core of senior operators and researchers — surrounded by a vetted bench of elite engineers we deploy onto each problem.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-xl border border-border p-7">
              <div className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">{m.i}</div>
              <h3 className="mt-5 text-xl">{m.name}</h3>
              <p className="text-sm text-accent">{m.role}</p>
              <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
              <a href={`mailto:${m.email}`} className="mt-4 inline-block text-sm hover:text-accent">{m.email}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28">
        <Eyebrow>Some of our customers</Eyebrow>
        <h2 className="text-3xl sm:text-4xl">A few of our clients we can proudly share</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Selected engagements across digital health, energy, and semiconductors — spanning startups to publicly traded leaders.
        </p>
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
          {clients.map(([n, s, d]) => (
            <div key={n} className="bg-background p-7">
              <h3 className="text-xl">{n}</h3>
              <p className="text-sm text-accent mt-1">{s}</p>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 rounded-2xl border border-border p-10 sm:p-14">
        <h2 className="text-3xl sm:text-4xl">An honest note on pricing</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">
          We're not the lowest-priced option — our talent comes at a certain cost. What you get in return is the team that can actually solve it, the first time.
        </p>
      </section>
    </Page>
  );
}
