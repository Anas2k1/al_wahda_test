import { Link, useRouterState } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useLanguage } from "./language";

export function FloatingDonate() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t } = useLanguage();
  if (pathname.startsWith("/donate")) return null;

  return (
    <Link
      to="/donate"
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2 rounded-full bg-gold text-gold-foreground px-5 py-3 text-sm font-medium shadow-card hover:scale-105 transition-transform"
    >
      <Heart className="size-4" />
      {t("cta.Donate")}
    </Link>
  );
}
