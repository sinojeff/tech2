import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ThemeToggle } from "./ThemeToggle";
import techionsLogo from "@/assets/techions-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 surface">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Techions home">
          <img src={techionsLogo.url} alt="Techions" className="h-8 w-auto" />
        </Link>
        <nav className="hidden sm:flex items-center gap-7 text-sm">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={active ? "text-foreground" : "text-muted-foreground hover:text-foreground transition"}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row gap-4 justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Techions. Solving the unsolved.</p>
        <p>United States · India · <a className="hover:text-foreground" href="mailto:Hello@techions.net">Hello@techions.net</a></p>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">{children}</main>
      <SiteFooter />
    </>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{children}</p>;
}

export default function SiteLayout() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
