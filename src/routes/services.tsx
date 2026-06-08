import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, Eyebrow } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Techions" },
      { name: "description", content: "Applied AI, custom software, data & analytics, applied research, talent retainership, and end-to-end product delivery." },
      { property: "og:title", content: "Services — Techions" },
      { property: "og:description", content: "Built for problems that don't have playbooks." },
    ],
  }),
  component: Services,
});

const services = [
  ["Applied AI & Generative Systems", "LLM applications, multi-agent systems, RAG, fine-tuning, computer vision and forecasting. From PoC to production."],
  ["Custom Software Engineering", "Web, mobile, backend, and platform engineering. Modern stacks, clean architecture, turn-key delivery."],
  ["Data & Analytics", "Pipelines, warehouses, dashboards, experimentation, and decision systems that move the business."],
  ["Applied Research & IP", "Novel problems that need first-principles thinking. We produce defensible, sometimes patentable, approaches."],
  ["Talent Retainership", "Senior engineers and researchers on retainer — embedded with your team for speed and continuity."],
  ["End-to-End Product Delivery", "Discovery → research → design → build → operate. One accountable partner across the lifecycle."],
];

const models = [
  ["Project", "Fixed scope, fixed outcome."],
  ["Problem-based", "We own the problem statement, not just the tasks."],
  ["Continuous Solutioning", "Ongoing iteration with your team."],
  ["Research", "Deep dives that become IP."],
  ["Turn-key End-to-End", "Full delivery, hand-over ready."],
  ["Talent Retainership", "Senior talent, on tap."],
];

function Services() {
  return (
    <Page>
      <section className="max-w-3xl">
        <Eyebrow>Services</Eyebrow>
        <h1 className="text-5xl sm:text-6xl leading-[1.05]">Built for problems that don't have playbooks.</h1>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
          We deliver across the full software and analytics stack — with an AI-native bias, applied research depth, and senior talent that ships.
        </p>
      </section>

      <section className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-xl overflow-hidden">
        {services.map(([t, d]) => (
          <div key={t} className="bg-background p-7">
            <h3 className="text-xl mb-2">{t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
          </div>
        ))}
      </section>

      <section className="mt-28">
        <h2 className="text-3xl sm:text-4xl">Engagement models</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Shape the engagement around the problem. We operate across these formats with clients globally.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {models.map(([t, d]) => (
            <div key={t} className="rounded-xl border border-border p-6">
              <p className="font-medium">{t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 rounded-2xl border border-border p-10 sm:p-14">
        <h2 className="text-3xl sm:text-4xl">Not sure which model fits?</h2>
        <p className="mt-3 text-muted-foreground">Tell us the problem. We'll propose the shape.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:opacity-90 transition">
          Contact us
        </Link>
      </section>
    </Page>
  );
}
