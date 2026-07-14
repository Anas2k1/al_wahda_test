import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingDonate } from "./FloatingDonate";
import { LanguagePrompt } from "./LanguagePrompt";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <FloatingDonate />
      <LanguagePrompt />
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <section className="border-b border-border">
      <div className="container-prose py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-4">{eyebrow}</p>
        )}
        <h1 className="font-serif text-4xl md:text-6xl text-primary text-balance leading-[1.05]">{title}</h1>
        {lead && <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">{lead}</p>}
      </div>
    </section>
  );
}
