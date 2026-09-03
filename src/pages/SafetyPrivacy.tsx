import { Link } from "react-router";
import { AlertTriangle, BookOpen, LockKeyhole, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SECTIONS = [
  {
    icon: ShieldCheck,
    title: "Use this portal safely",
    body: "This portal provides general health education. It does not diagnose conditions, prescribe medicines, or replace a qualified healthcare professional. Use the Emergency Awareness page or contact local emergency services for urgent symptoms.",
  },
  {
    icon: LockKeyhole,
    title: "Your privacy",
    body: "Do not upload identifying information, medical records, or images containing your face unless you are comfortable sharing them with the configured service. Review your deployment and AI provider settings before using this feature with real patient information.",
  },
  {
    icon: BookOpen,
    title: "Check the information",
    body: "Use the portal as a starting point and confirm important decisions with trusted sources such as your local health department, WHO, CDC, or a licensed clinician. Check the publication or review date when available.",
  },
  {
    icon: AlertTriangle,
    title: "When to get help",
    body: "Seek urgent help for difficulty breathing, chest pain, confusion, fainting, signs of stroke, severe bleeding, a severe allergic reaction, or rapidly worsening symptoms. Do not delay emergency care to use the AI chat or image tool.",
  },
];

export default function SafetyPrivacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-[oklch(0.97_0.003_250)] border-b border-[oklch(0.9_0.01_240)] py-14 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-[oklch(0.42_0.1_210)] uppercase tracking-wider">Important information</p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[oklch(0.18_0.03_255)]">Safety & Privacy</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[oklch(0.45_0.02_250)]">
              Clear guidance for using Digital Health Awareness Portal responsibly.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {SECTIONS.map(({ icon: Icon, title, body }) => (
                <article key={title} className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 text-base font-semibold text-[oklch(0.2_0.03_255)]">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[oklch(0.48_0.02_250)]">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
              <h2 className="text-base font-semibold text-amber-900">Before using image or AI features</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-amber-800">
                <li>Remove names, addresses, identification numbers, and other personal details.</li>
                <li>Never use an AI response as confirmation that a serious symptom is safe.</li>
                <li>Keep a record of symptoms and share it with a clinician when needed.</li>
              </ul>
            </div>

            <p className="mt-8 text-sm leading-relaxed text-[oklch(0.48_0.02_250)]">
              Questions about the portal? Visit the <Link to="/contact" className="font-medium text-[oklch(0.32_0.08_255)] hover:underline">Contact page</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
