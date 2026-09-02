import { motion } from "framer-motion";
import { Link } from "react-router";
import { ShieldCheck, Heart, Apple, Dumbbell, Brain, Droplet, Wind, Eye, Moon, Sparkles, ArrowRight, Stethoscope, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DISCLAIMER } from "@/data";

const PREVENTION_CATEGORIES = [
  {
    title: "Cardiovascular Health",
    icon: Heart,
    color: "oklch(0.55 0.15 25)",
    tips: [
      "Maintain a balanced diet low in saturated fats and sodium",
      "Exercise regularly — at least 150 minutes of moderate activity per week",
      "Monitor blood pressure and cholesterol levels",
      "Avoid tobacco use and limit alcohol consumption",
      "Manage stress through healthy coping strategies",
    ],
    link: "/topics/t1",
  },
  {
    title: "Diabetes Prevention",
    icon: Droplet,
    color: "oklch(0.55 0.12 180)",
    tips: [
      "Maintain a healthy body weight through balanced nutrition",
      "Engage in regular physical activity — at least 30 minutes daily",
      "Limit intake of sugary beverages and processed foods",
      "Get regular blood sugar screenings if at risk",
      "Learn about your family history and personal risk factors",
    ],
    link: "/topics/t2",
  },
  {
    title: "Cancer Prevention",
    icon: ShieldCheck,
    color: "oklch(0.5 0.15 300)",
    tips: [
      "Avoid all forms of tobacco use",
      "Protect skin from excessive UV radiation with sunscreen",
      "Maintain a healthy weight and stay physically active",
      "Get recommended cancer screenings at appropriate ages",
      "Limit alcohol consumption and eat a balanced diet",
    ],
    link: "/topics/t3",
  },
  {
    title: "Mental Health",
    icon: Brain,
    color: "oklch(0.5 0.1 200)",
    tips: [
      "Build and maintain supportive relationships",
      "Practice regular physical activity for mood benefits",
      "Develop healthy coping strategies for stress",
      "Seek professional help early when struggling",
      "Practice mindfulness and relaxation techniques",
    ],
    link: "/topics/t4",
  },
  {
    title: "Respiratory Health",
    icon: Wind,
    color: "oklch(0.5 0.12 220)",
    tips: [
      "Avoid smoking and secondhand smoke exposure",
      "Monitor and reduce exposure to air pollution",
      "Get recommended vaccinations (flu, pneumonia)",
      "Practice good hand hygiene to prevent infections",
      "Exercise to strengthen lung capacity",
    ],
    link: "/topics/t8",
  },
  {
    title: "Nutrition & Diet",
    icon: Apple,
    color: "oklch(0.55 0.12 150)",
    tips: [
      "Eat at least 5 servings of fruits and vegetables daily",
      "Choose whole grains over refined grains",
      "Include lean proteins and healthy fats in meals",
      "Stay adequately hydrated throughout the day",
      "Limit added sugars, salt, and ultra-processed foods",
    ],
    link: "/topics/t5",
  },
  {
    title: "Physical Activity",
    icon: Dumbbell,
    color: "oklch(0.5 0.12 100)",
    tips: [
      "Aim for at least 150 minutes of moderate aerobic activity per week",
      "Include strength training exercises twice a week",
      "Take walking breaks if you sit for long periods",
      "Find activities you enjoy to stay motivated",
      "Start slowly and gradually increase intensity",
    ],
    link: "/topics/t13",
  },
  {
    title: "Sleep Hygiene",
    icon: Moon,
    color: "oklch(0.45 0.08 280)",
    tips: [
      "Maintain a consistent sleep schedule, even on weekends",
      "Aim for 7-9 hours of sleep per night",
      "Create a cool, dark, and quiet sleep environment",
      "Limit screen time at least 30 minutes before bed",
      "Avoid caffeine and heavy meals close to bedtime",
    ],
    link: "/topics/t14",
  },
  {
    title: "Infection Prevention",
    icon: Sparkles,
    color: "oklch(0.5 0.12 170)",
    tips: [
      "Wash hands frequently with soap and water for 20+ seconds",
      "Stay up to date on recommended vaccinations",
      "Cover coughs and sneezes with your elbow",
      "Avoid close contact with sick individuals",
      "Keep living and working spaces clean and ventilated",
    ],
    link: "/topics/t12",
  },
  {
    title: "Oral Health",
    icon: Eye,
    color: "oklch(0.65 0.08 190)",
    tips: [
      "Brush teeth at least twice daily with fluoride toothpaste",
      "Floss daily to remove plaque between teeth",
      "Visit the dentist regularly for checkups and cleanings",
      "Limit sugary snacks and drinks",
      "Replace your toothbrush every 3 months",
    ],
    link: "/topics/t9",
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

export default function Prevention() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium text-white/80 mb-4">
                <ShieldCheck className="h-3.5 w-3.5" />
                Prevention & Protection
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">Health Prevention Guide</h1>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Prevention is the first line of defense for your health. Explore practical, evidence-based strategies to reduce your risk of disease and maintain lifelong well-being.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key message */}
        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-xl bg-gradient-to-r from-[oklch(0.32_0.08_255)] to-[oklch(0.42_0.1_210)] p-6 sm:p-8 text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1">Awareness → Understanding → Prevention → Healthy Action</h2>
                  <p className="text-white/75 text-sm leading-relaxed">
                    Small daily habits can significantly reduce your risk of chronic disease. The prevention strategies below are based on evidence-based public health guidelines.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Prevention Categories */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
              variants={stagger}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {PREVENTION_CATEGORIES.map((cat) => (
                <motion.div key={cat.title} variants={fadeUp}>
                  <div className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5 hover:shadow-[0_8px_30px_-8px_oklch(0.32_0.08_255_/_0.1)] transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `color-mix(in srgb, ${cat.color} 12%, transparent)` }}
                      >
                        <cat.icon className="h-5 w-5" style={{ color: cat.color }} />
                      </div>
                      <h3 className="text-base font-semibold text-[oklch(0.2_0.03_255)]">{cat.title}</h3>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {cat.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[oklch(0.3_0.02_250)] leading-relaxed">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={cat.link}
                      className="inline-flex items-center gap-1 text-xs font-medium text-[oklch(0.32_0.08_255)] hover:gap-1.5 transition-all"
                    >
                      Learn more about {cat.title} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Warning */}
            <motion.div
              className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-red-800 mb-1">When to Seek Professional Help</h3>
                  <p className="text-sm text-red-700 leading-relaxed">
                    If you experience any warning signs or persistent symptoms, consult a qualified healthcare professional immediately. Prevention is important, but so is timely medical attention.
                  </p>
                  <Link
                    to="/emergency"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-red-700 hover:text-red-800"
                  >
                    View Emergency Information <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
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
