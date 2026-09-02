import { motion } from "framer-motion";
import { Shield, Heart, Users, Target, Globe, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DISCLAIMER } from "@/data";

const VALUES = [
  {
    icon: Target,
    title: "Evidence-Based",
    description: "All information on our platform is grounded in peer-reviewed research and established public health guidelines.",
  },
  {
    icon: Heart,
    title: "Accessible",
    description: "We make complex health information easy to understand and accessible to people of all backgrounds.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Our content addresses health challenges from a worldwide perspective, relevant to diverse communities.",
  },
  {
    icon: Users,
    title: "Community-Focused",
    description: "We empower communities to take charge of their health through education and awareness.",
  },
  {
    icon: BookOpen,
    title: "Educational",
    description: "Our mission is to inform and educate, never to diagnose or replace professional medical advice.",
  },
  {
    icon: Shield,
    title: "Trustworthy",
    description: "We maintain the highest standards of accuracy and transparency in all our health content.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-3xl sm:text-4xl font-bold">About Us</h1>
              <p className="mt-3 text-white/70 max-w-2xl leading-relaxed">
                Empowering communities with reliable health awareness information, prevention guidance, and healthy lifestyle resources.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold text-[oklch(0.18_0.03_255)] mb-4">Our Mission</h2>
              <p className="text-[oklch(0.3_0.02_250)] leading-relaxed mb-4">
                The Digital Health Awareness Portal was created with a clear mission: to make reliable, evidence-based health information easy to discover and understand for everyone, everywhere.
              </p>
              <p className="text-[oklch(0.3_0.02_250)] leading-relaxed mb-4">
                We believe that knowledge is the first step toward better health. By providing accessible information about health conditions, prevention strategies, healthy lifestyle practices, and emergency awareness, we aim to empower individuals and communities to make informed decisions about their well-being.
              </p>
              <p className="text-[oklch(0.3_0.02_250)] leading-relaxed">
                Our platform focuses on the journey from <strong className="text-[oklch(0.2_0.03_255)]">Awareness</strong> to{" "}
                <strong className="text-[oklch(0.2_0.03_255)]">Understanding</strong> to{" "}
                <strong className="text-[oklch(0.2_0.03_255)]">Prevention</strong> to{" "}
                <strong className="text-[oklch(0.2_0.03_255)]">Healthy Action</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 lg:py-16 bg-[oklch(0.97_0.003_250)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[oklch(0.18_0.03_255)]">Our Values</h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-[oklch(0.9_0.01_240)] bg-white p-5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)] mb-3">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] mb-1">{value.title}</h3>
                  <p className="text-xs text-[oklch(0.5_0.02_250)] leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Note */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-xl border border-amber-200 bg-amber-50 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-base font-semibold text-amber-800 mb-2">Important Notice</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                The Digital Health Awareness Portal is an educational awareness platform. Our content is designed to inform and educate the public about health topics. It is <strong>not</strong> a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for personal health concerns.
              </p>
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
