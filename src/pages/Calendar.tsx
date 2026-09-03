import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Filter } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AWARENESS_EVENTS, DISCLAIMER } from "@/data";
import { useTranslation } from "@/i18n/LanguageContext";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MONTH_COLORS = [
  "oklch(0.55 0.12 220)",
  "oklch(0.55 0.15 300)",
  "oklch(0.55 0.12 180)",
  "oklch(0.5 0.12 150)",
  "oklch(0.5 0.1 200)",
  "oklch(0.55 0.15 25)",
  "oklch(0.5 0.12 180)",
  "oklch(0.5 0.12 210)",
  "oklch(0.5 0.1 170)",
  "oklch(0.5 0.1 200)",
  "oklch(0.55 0.12 180)",
  "oklch(0.55 0.15 25)",
];

export default function HealthCalendar() {
  const { t } = useTranslation();
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const events = useMemo(() => {
    if (selectedMonth !== null) {
      return AWARENESS_EVENTS.filter((e) => e.month === selectedMonth);
    }
    return AWARENESS_EVENTS;
  }, [selectedMonth]);

  const eventsByMonth = useMemo(() => {
    const grouped: Record<number, typeof AWARENESS_EVENTS> = {};
    MONTHS.forEach((_, i) => {
      grouped[i + 1] = AWARENESS_EVENTS.filter((e) => e.month === i + 1);
    });
    return grouped;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-20">
          <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1400&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                  <CalendarIcon className="h-3.5 w-3.5" />
                  Health Calendar
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold">{t("calendarTitle")}</h1>
                <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                  {t("calendarDesc")}
                </p>
              </motion.div>
              <motion.div className="hidden lg:flex justify-end" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=360&fit=crop" alt="Health calendar events" className="rounded-2xl shadow-2xl border-2 border-white/10 w-full max-w-md object-cover h-[280px]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Month Filter */}
        <section className="border-b border-[oklch(0.92_0.01_240)] bg-white sticky top-16 z-30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              <button
                onClick={() => setSelectedMonth(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                  selectedMonth === null
                    ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                    : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                }`}
              >
                {t("allMonths")}
              </button>
              {MONTHS.map((month, i) => (
                <button
                  key={month}
                  onClick={() => setSelectedMonth(i + 1)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
                    selectedMonth === i + 1
                      ? "bg-[oklch(0.32_0.08_255)] text-white border-[oklch(0.32_0.08_255)]"
                      : "bg-white text-[oklch(0.5_0.02_250)] border-[oklch(0.88_0.01_240)] hover:border-[oklch(0.32_0.08_255_/_0.3)]"
                  }`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {selectedMonth !== null ? (
              <>
                <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-6">{MONTHS[selectedMonth - 1]}</h2>
                {events.length === 0 ? (
                  <div className="text-center py-20">
                    <Filter className="h-10 w-10 text-[oklch(0.75_0.01_250)] mx-auto mb-3" />
                    <p className="text-[oklch(0.4_0.02_250)] font-medium">No events this month</p>
                    <p className="text-sm text-[oklch(0.55_0.02_250)] mt-1">Try selecting a different month.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {events.map((event, i) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl text-white text-center"
                            style={{ backgroundColor: event.color }}
                          >
                            <span className="text-[10px] font-medium leading-none uppercase">
                              {MONTHS[event.month - 1].slice(0, 3)}
                            </span>
                            <span className="text-xl font-bold leading-tight">{event.day}</span>
                          </div>
                          <div>
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)] mb-1">
                              {event.category}
                            </span>
                            <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{event.title}</h3>
                            <p className="mt-1 text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">{event.description}</p>
                            <span className="mt-2 block text-[10px] text-[oklch(0.45_0.04_210)] font-medium">{event.date}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[oklch(0.18_0.03_255)] mb-6">{t("calendarTitle")}</h2>
                <div className="space-y-8">
                  {MONTHS.map((month, monthIndex) => {
                    const monthEvents = eventsByMonth[monthIndex + 1];
                    if (!monthEvents || monthEvents.length === 0) return null;
                    return (
                      <motion.div
                        key={month}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-lg font-semibold text-[oklch(0.2_0.03_255)] mb-4 flex items-center gap-2">
                          <div
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: MONTH_COLORS[monthIndex] }}
                          />
                          {month}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {monthEvents.map((event, i) => (
                            <div
                              key={event.id}
                              className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow"
                            >
                              <div className="flex items-start gap-3">
                                <div
                                  className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg text-white text-center"
                                  style={{ backgroundColor: event.color }}
                                >
                                  <span className="text-[10px] font-medium leading-none uppercase">
                                    {MONTHS[event.month - 1].slice(0, 3)}
                                  </span>
                                  <span className="text-lg font-bold leading-tight">{event.day}</span>
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{event.title}</h4>
                                  <p className="text-xs text-[oklch(0.5_0.02_250)] mt-0.5 line-clamp-2">{event.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </section>

        <section className="py-6 border-t border-[oklch(0.92_0.01_240)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs text-[oklch(0.5_0.02_250)] text-center leading-relaxed max-w-4xl mx-auto">
              <strong className="text-[oklch(0.4_0.02_250)]">Disclaimer:</strong> {DISCLAIMER}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
