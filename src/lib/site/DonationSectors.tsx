import { Link } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Droplets, GraduationCap, HeartHandshake, Home, BookOpen, Utensils, Stethoscope, Sprout } from "lucide-react";
import waterImg from "@/assets/program-water.jpg";
import eduImg from "@/assets/program-education.jpg";
import reliefImg from "@/assets/program-relief.jpg";
import { useLanguage } from "./language";

const sectors = [
  { icon: Droplets, tKey: "ds.s1.t", dKey: "ds.s1.d", img: waterImg, raised: 38400, goal: 60000 },
  { icon: GraduationCap, tKey: "ds.s2.t", dKey: "ds.s2.d", img: eduImg, raised: 52100, goal: 80000 },
  { icon: HeartHandshake, tKey: "ds.s3.t", dKey: "ds.s3.d", img: reliefImg, raised: 71000, goal: 100000 },
  { icon: Utensils, tKey: "ds.s4.t", dKey: "ds.s4.d", img: reliefImg, raised: 22500, goal: 40000 },
  { icon: Stethoscope, tKey: "ds.s5.t", dKey: "ds.s5.d", img: waterImg, raised: 16800, goal: 50000 },
  { icon: Home, tKey: "ds.s6.t", dKey: "ds.s6.d", img: eduImg, raised: 44900, goal: 70000 },
  { icon: Sprout, tKey: "ds.s7.t", dKey: "ds.s7.d", img: waterImg, raised: 29300, goal: 55000 },
  { icon: BookOpen, tKey: "ds.s8.t", dKey: "ds.s8.d", img: eduImg, raised: 18200, goal: 45000 },
] as const;

export function DonationSectors() {
  const { t } = useLanguage();

  return (
    <section className="bg-card border-y border-border">
      <div className="container-prose py-24">
        <div className="text-center mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3">
            {t("ds.eyebrow")}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-primary">
            {t("ds.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            {t("ds.lead")}
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 2800, stopOnInteraction: false, stopOnMouseEnter: true })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {sectors.map((s) => {
              const pct = Math.min(100, Math.round((s.raised / s.goal) * 100));
              const title = t(s.tKey as never);
              return (
                <CarouselItem key={s.tKey} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <article className="group h-full rounded-2xl border border-border bg-background overflow-hidden shadow-soft hover:shadow-card transition-shadow flex flex-col">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={s.img}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1.5">
                        <s.icon className="size-4 text-gold" />
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                          {t("ds.fund")}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-serif text-xl text-primary">{title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {t(s.dKey as never)}
                      </p>

                      <div className="mt-5">
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div className="h-full bg-gold" style={{ width: `${pct}%` }} />
                        </div>
                        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                          <span>
                            <span className="font-semibold text-primary text-sm leading-none">
                              <span className="text-base font-semibold">৳</span>{s.raised.toLocaleString()}
                            </span>{" "}
                            {t("ds.raised")}
                          </span>
                          <span>{t("ds.goal")} <span className="text-base font-semibold leading-none">৳</span>{s.goal.toLocaleString()}</span>
                        </div>
                      </div>

                      <Link
                        to="/donate"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                      >
                        {t("ds.donateTo")} {title}
                      </Link>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4" />
          <CarouselNext className="hidden md:flex -right-4" />
        </Carousel>

        <div className="mt-10 text-center">
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-primary hover:bg-accent transition-colors"
          >
            {t("ds.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}
