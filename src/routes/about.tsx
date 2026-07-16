import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/lib/site/PageShell";
import { Ornament } from "@/lib/site/Ornament";
import { useLanguage } from "@/lib/site/language";
import chairmanImage from "../assets/Chairman_ Hafez Maulana Lutfor Rahman.jpg";
import executiveMemberImage from "../assets/Executive Member_Misbahul Arifeen.jpeg";
import jointSecretaryImage from "../assets/Joint Secretary_MD Muhibbur Rahman Shujon.jpeg";
import organizingSecretaryImage from "../assets/Organizing Secretary_Maulana Emaduddin Al Madani .jpg";
import secretaryImage from "../assets/Secretary_Mustafiz Rahmani.jpeg";
import seniorViceChairmanImage from "../assets/Senior vice chairman_Mawlana Sadikur Rahman Azhari.jpg";
import treasurerImage from "../assets/Tresurer_Mawlana Mustafizur Rahman Shahin.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al Wahda Foundation" },
      {
        name: "description",
        content: "Our mission, vision, leadership, and the story of Al Wahda Foundation.",
      },
      { property: "og:title", content: "About — Al Wahda Foundation" },
      { property: "og:description", content: "Mission, vision, and leadership." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, lang } = useLanguage();

  const blocks = [
    { t: t("about.mission"), d: t("about.missionText") },
    { t: t("about.vision"), d: t("about.visionText") },
    { t: t("about.values"), d: t("about.valuesText") },
  ];

  const timeline = [
    { y: "2019", t: t("about.tl.2019") },
    { y: "2020", t: t("about.tl.2020") },
    { y: "2021", t: t("about.tl.2021") },
    { y: "2022", t: t("about.tl.2022") },
    { y: "2023", t: t("about.tl.2023") },
    { y: "2024", t: t("about.tl.2024") },
  ];

  const leaders = [
    {
      image: chairmanImage,
      nameEn: "Hafez Maulana Lutfor Rahman",
      nameBn: "হাফেজ মাওলানা লুৎফর রহমান",
      roleEn: "Chairman",
      roleBn: "চেয়ারম্যান",
    },
    {
      image: seniorViceChairmanImage,
      nameEn: "Maulana Sadikur Rahman Azhari",
      nameBn: "মাওলানা সাদিকুর রহমান আযহারী",
      roleEn: "Senior Vice Chairman",
      roleBn: "সিনিয়র ভাইস চেয়ারম্যান",
    },
    {
      image: executiveMemberImage,
      nameEn: "Misbahul Arifeen",
      nameBn: "মিসবাহুলআরেফীন",
      roleEn: "Executive Member",
      roleBn: "নির্বাহী সদস্য",
    },
    {
      image: organizingSecretaryImage,
      nameEn: "Maulana Emaduddin Al Madani",
      nameBn: "মাওলানা এমাদউদ্দিন আল মাদানি",
      roleEn: "Organizing Secretary",
      roleBn: "সংগঠক সম্পাদক",
    },
    {
      image: jointSecretaryImage,
      nameEn: "MD Muhibbur Rahman Shujon",
      nameBn: "এমডি মুহিব্বুর  রহমান সুজন",
      roleEn: "Joint Secretary",
      roleBn: "যুগ্ম সম্পাদক",
    },
    {
      image: secretaryImage,
      nameEn: "Mustafiz Rahmani",
      nameBn: "মোস্তাফিজ রহমানি",
      roleEn: "Secretary",
      roleBn: "সম্পাদক",
    },
    {
      image: treasurerImage,
      nameEn: "Maulana Mustafizur Rahman Shahin",
      nameBn: "মাওলানা মুজতাফিজুর রহমান শাহিন",
      roleEn: "Treasurer",
      roleBn: "কোষাধ্যক্ষ",
    },
  ];

  return (
    <PageShell>
      <PageHeader eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.lead")} />

      <section className="container-prose py-20">
        <h2 className="font-serif text-3xl text-primary mb-10">{t("about.leadership")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((p) => (
            <div key={p.nameEn} className="rounded-2xl border border-border bg-card p-4 shadow-soft overflow-hidden">
              <img
                src={p.image}
                alt={lang === "bn" ? p.nameBn : p.nameEn}
                className="h-72 w-full object-cover rounded-xl mb-4"
                loading="lazy"
              />
              <h3 className="font-serif text-xl text-primary">{lang === "bn" ? p.nameBn : p.nameEn}</h3>
              <p className="text-sm text-muted-foreground mt-1">{lang === "bn" ? p.roleBn : p.roleEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20 grid md:grid-cols-3 gap-12">
        {blocks.map((b) => (
          <div key={b.t}>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold mb-3">{b.t}</p>
            <h2 className="font-serif text-2xl text-primary mb-3">{b.t}</h2>
            <p className="text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </section>

      <section className="bg-card border-y border-border">
        <div className="container-prose py-20">
          <div className="text-center mb-14">
            <Ornament className="w-24 mx-auto mb-5 opacity-60" />
            <h2 className="font-serif text-4xl text-primary">{t("about.timeline")}</h2>
          </div>
          <div className="space-y-10 max-w-2xl mx-auto">
            {timeline.map((m) => (
              <div key={m.y} className="grid grid-cols-[80px_1fr] gap-6 items-start">
                <span className="font-serif text-2xl text-gold">{m.y}</span>
                <p className="text-foreground/80 leading-relaxed pt-1">{m.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
