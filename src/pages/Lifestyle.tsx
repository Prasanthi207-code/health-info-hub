import { motion } from "framer-motion";
import { Apple, Dumbbell, Moon, GlassWater, Brain, Sparkles, Heart, Smile, Footprints, Salad, Droplet, Sun } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HEALTH_TIPS, DISCLAIMER } from "@/data";

const LIFESTYLE_PILLARS = [
  {
    title: "Balanced Nutrition",
    icon: Apple,
    color: "oklch(0.55 0.12 150)",
    gradient: "from-green-500/10 to-emerald-500/10",
    description: "A well-balanced diet provides essential nutrients for growth, tissue repair, and daily functioning.",
    habits: [
      "Eat at least 5 servings of fruits and vegetables daily",
      "Choose whole grains over refined grains",
      "Include lean proteins and healthy fats in every meal",
      "Limit added sugars to less than 25g per day",
      "Read and understand nutrition labels",
      "Practice mindful eating and portion awareness",
    ],
  },
  {
    title: "Regular Physical Activity",
    icon: Dumbbell,
    color: "oklch(0.5 0.12 100)",
    gradient: "from-orange-500/10 to-amber-500/10",
    description: "Physical activity strengthens your body, improves mental health, and reduces the risk of chronic diseases.",
    habits: [
      "Aim for 150 minutes of moderate aerobic activity per week",
      "Include strength training exercises twice a week",
      "Take walking breaks every hour if you sit for long periods",
      "Choose activities you enjoy to stay motivated",
      "Start slowly and gradually increase intensity",
      "Use stairs instead of elevators when possible",
    ],
  },
  {
    title: "Quality Sleep",
    icon: Moon,
    color: "oklch(0.45 0.08 280)",
    gradient: "from-indigo-500/10 to-purple-500/10",
    description: "Quality sleep is essential for physical recovery, cognitive function, and emotional well-being.",
    habits: [
      "Aim for 7-9 hours of sleep per night",
      "Maintain a consistent sleep schedule, even on weekends",
      "Create a cool, dark, and quiet sleep environment",
      "Limit screen time at least 30 minutes before bed",
      "Avoid caffeine and heavy meals close to bedtime",
      "Develop a relaxing pre-sleep routine",
    ],
  },
  {
    title: "Stress Management",
    icon: Brain,
    color: "oklch(0.5 0.1 200)",
    gradient: "from-blue-500/10 to-sky-500/10",
    description: "Chronic stress affects both physical and mental health. Managing stress is vital for overall well-being.",
    habits: [
      "Practice mindfulness and meditation regularly",
      "Take deep breathing breaks throughout the day",
      "Spend time in nature and green spaces",
      "Maintain strong social connections",
      "Set healthy boundaries at work and home",
      "Practice gratitude daily",
    ],
  },
  {
    title: "Hydration",
    icon: GlassWater,
    color: "oklch(0.5 0.12 210)",
    gradient: "from-cyan-500/10 to-teal-500/10",
    description: "Proper hydration supports every system in your body, from digestion to brain function.",
    habits: [
      "Drink at least 8 glasses of water daily",
      "Start your day with a glass of water",
      "Carry a reusable water bottle throughout the day",
      "Replace sugary drinks with water or herbal tea",
      "Monitor urine color as a hydration indicator",
      "Eat water-rich foods like fruits and vegetables",
    ],
  },
  {
    title: "Personal Hygiene",
    icon: Sparkles,
    color: "oklch(0.55 0.1 170)",
    gradient: "from-emerald-500/10 to-green-500/10",
    description: "Good personal hygiene prevents the spread of infections and supports overall health.",
    habits: [
      "Wash hands with soap and water for at least 20 seconds",
      "Brush teeth twice daily and floss regularly",
      "Shower regularly and keep clean clothes",
      "Cover coughs and sneezes with your elbow",
      "Keep living spaces clean and ventilated",
      "Replace toothbrush every 3 months",
    ],
  },
];

const DAILY_ROUTINE = [
  { time: "Morning", icon: Sun, items: ["Drink a glass of water", "Eat a nutritious breakfast", "Take morning vitamins", "Brief morning stretching"] },
  { time: "Afternoon", icon: Footprints, items: ["Stay hydrated", "Healthy lunch", "Short walking break", "Mindful eating"] },
  { time: "Evening", icon: Moon, items: ["Balanced dinner", "Light exercise or walk", "Limit screen time", "Relaxation routine"] },
  { time: "Night", icon: Smile, items: ["Prepare for sleep", "Gratitude reflection", "Consistent bedtime", "Cool, dark bedroom"] },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export default function Lifestyle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                <Heart className="h-3.5 w-3.5" />
                Healthy Living
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Healthy Lifestyle</h1>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Small daily habits lead to lasting health improvements. Discover the six pillars of a healthy lifestyle and practical tips to incorporate them into your daily routine.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Six Pillars */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                Six Pillars of Healthy Living
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                These foundational habits work together to support your overall health.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {LIFESTYLE_PILLARS.map((pillar) => (
                <motion.div key={pillar.title} variants={fadeUp}>
                  <div className={`rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300 h-full bg-gradient-to-br ${pillar.gradient}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white"
                        style={{ color: pillar.color }}
                      >
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold text-[oklch(0.2_0.03_255)]">{pillar.title}</h3>
                    </div>
                    <p className="text-sm text-[oklch(0.4_0.02_250)] leading-relaxed mb-3">{pillar.description}</p>
                    <ul className="space-y-1.5">
                      {pillar.habits.map((habit, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[oklch(0.35_0.02_250)] leading-relaxed">
                          <span className="mt-1 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: pillar.color }} />
                          {habit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Daily Routine */}
        <section className="py-12 lg:py-16 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                Your Healthy Daily Routine
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                Structure your day with healthy habits at every stage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DAILY_ROUTINE.map((slot, i) => (
                <motion.div
                  key={slot.time}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <slot.icon className="h-5 w-5 text-[oklch(0.35_0.1_220)]" />
                    <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{slot.time}</h3>
                  </div>
                  <ul className="space-y-2">
                    {slot.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-xs text-[oklch(0.35_0.02_250)]">
                        <span className="h-1 w-1 rounded-full bg-[oklch(0.32_0.08_255)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Tips */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                Daily Health Tips
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                Quick, actionable tips to improve your health every day.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {HEALTH_TIPS.slice(0, 9).map((tip, i) => (
                <motion.div
                  key={tip.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4"
                >
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)] mb-2">
                    {tip.category}
                  </span>
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] mb-1">{tip.title}</h3>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>
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
