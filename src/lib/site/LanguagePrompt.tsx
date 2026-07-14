import { useLanguage } from "./language";

export function LanguagePrompt() {
  const { hasChosen, confirm, t } = useLanguage();

  if (hasChosen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 animate-fade-in">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="lang-prompt-title"
        className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-card text-center"
      >
        <h2
          id="lang-prompt-title"
          className="font-serif text-2xl text-primary"
        >
          {t("lang.prompt.title")}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {t("lang.prompt.body")}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button
            onClick={() => confirm("en")}
            className="rounded-full border border-border bg-background px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
          >
            English
          </button>
          <button
            onClick={() => confirm("bn")}
            className="rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
          >
            বাংলা
          </button>
        </div>
      </div>
    </div>
  );
}
