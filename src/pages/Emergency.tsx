import { motion } from "framer-motion";
import { Link } from "react-router";
import { AlertTriangle, Phone, Heart, Droplet, Wind, Thermometer, Brain, Bone, Eye, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DISCLAIMER } from "@/data";

const EMERGENCY_SECTIONS = [
  {
    title: "When to Call Emergency Services",
    icon: Phone,
    color: "oklch(0.55 0.15 25)",
    description: "Call your local emergency number (911 in the US, 999 in the UK, 112 in the EU) immediately if you or someone else experiences:",
    signs: [
      "Difficulty breathing or stopped breathing",
      "Unresponsiveness or unconsciousness",
      "Chest pain or pressure lasting more than a few minutes",
      "Severe allergic reaction (anaphylaxis)",
      "Sudden severe headache or confusion",
      "Seizures",
      "Heavy uncontrolled bleeding",
      "Signs of stroke (FAST: Face drooping, Arm weakness, Speech difficulty, Time to call)",
      "Severe burns over a large area",
      "Head or neck injury",
      "Choking",
      "Severe abdominal pain",
    ],
  },
  {
    title: "Heart Attack Warning Signs",
    icon: Heart,
    color: "oklch(0.55 0.15 25)",
    signs: [
      "Chest discomfort — pressure, squeezing, or pain",
      "Pain radiating to the arm, jaw, neck, or back",
      "Shortness of breath",
      "Cold sweat, nausea, or lightheadedness",
      "Unusual fatigue",
      "Women may experience atypical symptoms including nausea and back pain",
    ],
  },
  {
    title: "Stroke Warning Signs (FAST)",
    icon: Brain,
    color: "oklch(0.5 0.1 200)",
    signs: [
      "Face drooping — one side of the face may droop or feel numb",
      "Arm weakness — one arm may drift downward when raised",
      "Speech difficulty — speech may be slurred or strange",
      "Time to call emergency services — note the time symptoms started",
    ],
  },
  {
    title: "Severe Breathing Problems",
    icon: Wind,
    color: "oklch(0.5 0.12 220)",
    signs: [
      "Severe difficulty breathing or shortness of breath",
      "Blue-tinged lips or fingernails (cyanosis)",
      "Rapid breathing that doesn't slow down",
      "Chest pain with breathing",
      "Coughing up blood",
      "Severe wheezing that doesn't improve with medication",
    ],
  },
  {
    title: "Severe Allergic Reactions",
    icon: AlertTriangle,
    color: "oklch(0.55 0.12 45)",
    signs: [
      "Swelling of the face, lips, tongue, or throat",
      "Difficulty breathing or swallowing",
      "Rapid heartbeat",
      "Dizziness or fainting",
      "Widespread hives or rash",
      "Nausea, vomiting, or abdominal pain",
      "Loss of consciousness",
    ],
  },
  {
    title: "Severe Dehydration",
    icon: Droplet,
    color: "oklch(0.5 0.12 180)",
    signs: [
      "Extreme thirst and dry mouth",
      "Very dark urine or no urination for 8+ hours",
      "Dizziness or lightheadedness when standing",
      "Rapid heartbeat and breathing",
      "Confusion or irritability",
      "Sunken eyes",
      "Skin that doesn't bounce back when pinched",
    ],
  },
  {
    title: "High Fever in Children",
    icon: Thermometer,
    color: "oklch(0.55 0.12 45)",
    signs: [
      "Fever over 104°F (40°C) in children",
      "Fever in infants under 3 months old (any temperature)",
      "Fever lasting more than 3 days",
      "Rash that doesn't fade with pressure",
      "Difficulty breathing",
      "Seizure associated with fever",
      "Severe headache or stiff neck",
    ],
  },
  {
    title: "Bone Fractures & Trauma",
    icon: Bone,
    color: "oklch(0.5 0.08 250)",
    signs: [
      "Visible deformity or unnatural position of a limb",
      "Severe pain at the injury site",
      "Inability to move or bear weight",
      "Swelling and bruising",
      "Bone protruding through the skin (open fracture)",
      "Numbness or tingling below the injury",
    ],
  },
];

const FIRST_AID = [
  {
    title: "CPR Basics",
    steps: [
      "Check if the person is responsive and breathing normally",
      "Call emergency services immediately",
      "Place the heel of your hand on the center of the chest",
      "Push hard and fast — at least 2 inches deep, at 100-120 compressions per minute",
      "If trained, give 30 compressions then 2 rescue breaths",
      "Continue until help arrives or the person recovers",
    ],
  },
  {
    title: "Choking Response",
    steps: [
      "Ask the person if they can speak or cough",
      "If they can't, stand behind them and wrap your arms around their waist",
      "Make a fist and place it just above the navel",
      "Grasp your fist with the other hand and thrust inward and upward",
      "Repeat until the object is expelled or the person becomes unconscious",
    ],
  },
  {
    title: "Controlling Bleeding",
    steps: [
      "Apply firm, direct pressure with a clean cloth or gauze",
      "Maintain pressure for at least 15 minutes",
      "If blood soaks through, add more material on top — don't remove the first layer",
      "Elevate the injured area above the heart if possible",
      "Apply a pressure bandage once bleeding slows",
      "Seek immediate medical attention for severe bleeding",
    ],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
};

export default function Emergency() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium text-white mb-4">
                <AlertTriangle className="h-3.5 w-3.5" />
                Emergency Awareness
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Emergency Awareness</h1>
              <p className="mt-3 text-white/80 max-w-2xl leading-relaxed">
                Learn to recognize medical emergencies and understand when to seek immediate professional help. Quick action can save lives.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-white/15 backdrop-blur-sm inline-block">
                <p className="text-sm font-semibold">
                  If this is a medical emergency, call your local emergency number immediately (911 / 999 / 112)
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Emergency Warning Signs */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                Recognizing Emergencies
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                Know the warning signs that require immediate medical attention.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {EMERGENCY_SECTIONS.map((section) => (
                <motion.div key={section.title} variants={fadeUp}>
                  <div className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `color-mix(in srgb, ${section.color} 12%, transparent)` }}
                      >
                        <section.icon className="h-4.5 w-4.5" style={{ color: section.color }} />
                      </div>
                      <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{section.title}</h3>
                    </div>
                    {section.description && (
                      <p className="text-xs text-[oklch(0.4_0.02_250)] mb-3 leading-relaxed">{section.description}</p>
                    )}
                    <ul className="space-y-1.5">
                      {section.signs.map((sign, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[oklch(0.3_0.02_250)] leading-relaxed">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* First Aid Basics */}
        <section className="py-12 lg:py-16 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">
                First Aid Basics
              </h2>
              <p className="mt-2 text-[oklch(0.5_0.02_250)] max-w-lg mx-auto">
                Essential first aid knowledge that everyone should know.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {FIRST_AID.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5"
                >
                  <h3 className="text-base font-semibold text-[oklch(0.2_0.03_255)] mb-3">{item.title}</h3>
                  <ol className="space-y-2">
                    {item.steps.map((step, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-[oklch(0.3_0.02_250)] leading-relaxed">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-bold text-red-600">
                          {j + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Topics */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-[oklch(0.18_0.03_255)]">
                Learn More About Health Conditions
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Heart Health", desc: "Cardiovascular warning signs and prevention.", href: "/topics/t1" },
                { title: "Diabetes", desc: "Recognizing diabetic emergencies.", href: "/topics/t2" },
                { title: "Respiratory Health", desc: "Breathing emergency awareness.", href: "/topics/t8" },
                { title: "Child Health", desc: "Emergency signs in children.", href: "/topics/t7" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="group rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1">{item.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.32_0.08_255)]">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
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
