import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Page, Eyebrow } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Techions" },
      { name: "description", content: "Let's talk about your hard problem. We reply within one business day." },
      { property: "og:title", content: "Contact — Techions" },
      { property: "og:description", content: "Let's talk about your hard problem." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:Hello@techions.net?subject=${encodeURIComponent("Hard problem from " + form.name)}&body=${encodeURIComponent(body)}`;
  }

  const input = "w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-accent transition";

  return (
    <Page>
      <section className="max-w-3xl">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="text-5xl sm:text-6xl leading-[1.05]">Let's talk about your hard problem.</h1>
        <p className="mt-8 text-lg text-muted-foreground">Drop us a note. We'll reply within one business day.</p>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="mailto:ceo@techions.net" className="rounded-xl border border-border p-6 hover:border-accent transition">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">CEO</p>
              <p className="mt-2 font-medium">ceo@techions.net</p>
            </a>
            <a href="mailto:Hello@techions.net" className="rounded-xl border border-border p-6 hover:border-accent transition">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">General inquiries</p>
              <p className="mt-2 font-medium">Hello@techions.net</p>
            </a>
          </div>
          <div className="rounded-xl border border-border p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Web</p>
            <a className="mt-2 block font-medium hover:text-accent" href="https://techions.net/" target="_blank" rel="noreferrer">techions.net</a>
          </div>
          <div className="rounded-xl border border-border p-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Operating from</p>
            <p className="mt-2 font-medium">United States · India</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-border p-8 space-y-4">
          <div>
            <label className="text-sm">Name *</label>
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input + " mt-1"} />
          </div>
          <div>
            <label className="text-sm">Email *</label>
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input + " mt-1"} />
          </div>
          <div>
            <label className="text-sm">Company</label>
            <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={input + " mt-1"} />
          </div>
          <div>
            <label className="text-sm">Tell us about the problem</label>
            <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input + " mt-1 resize-none"} />
          </div>
          <button className="w-full rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm hover:opacity-90 transition">
            Send message
          </button>
          <p className="text-xs text-muted-foreground">By submitting, your default mail app will open with the message pre-filled to Hello@techions.net.</p>
        </form>
      </section>
    </Page>
  );
}
