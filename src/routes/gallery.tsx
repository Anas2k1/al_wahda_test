import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import waterImg from "@/assets/program-water.jpg";
import eduImg from "@/assets/program-education.jpg";
import reliefImg from "@/assets/program-relief.jpg";
import heroImg from "@/assets/hero.jpg";
import { useLanguage } from "@/lib/site/language";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Al Wahda Foundation" },
      { name: "description", content: "Photographs from our field operations and community programs." },
      { property: "og:title", content: "Gallery — Al Wahda Foundation" },
    ],
  }),
  component: GalleryPage,
});

const imgs = [eduImg, waterImg, reliefImg, heroImg, eduImg, waterImg, reliefImg, heroImg, eduImg];

function GalleryPage() {
  const { t } = useLanguage();
  return (
    <PageShell>
      <PageHeader eyebrow={t("gallery.eyebrow")} title={t("gallery.title")} />
      <section className="container-prose py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        {imgs.map((src, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border bg-card">
            <img src={src} alt="" loading="lazy" width={800} height={800} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        ))}
      </section>
    </PageShell>
  );
}
