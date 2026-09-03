import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Shield, User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, CheckCircle, Heart, Stethoscope, Activity } from "lucide-react";
import { useUser } from "@/hooks/use-user";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { register } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [step, setStep] = useState<1 | 2>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (step === 1) {
      if (!formData.name.trim()) { setError("Please enter your name"); return; }
      if (!formData.email.trim() && !formData.phone.trim()) { setError("Please provide email or phone"); return; }
      setStep(2);
      return;
    }

    if (!formData.password || formData.password.length < 6) { setError("Password must be at least 6 characters"); return; }
    if (formData.password !== formData.confirmPassword) { setError("Passwords do not match"); return; }

    register(formData);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left: Visual Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] items-center justify-center p-12">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        <motion.div
          className="relative max-w-md text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <Shield className="h-7 w-7" />
              </div>
              <div>
                <span className="text-lg font-bold block">Digital Health</span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">Awareness Portal</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 leading-tight">
              Join Thousands Who<br />Prioritize Their Health
            </h2>
            <p className="text-white/70 leading-relaxed">
              Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Stethoscope, text: "Access 12+ health topics with detailed information" },
              { icon: Heart, text: "Save your favorite articles and campaigns" },
              { icon: Activity, text: "Track your wellness journey with daily tips" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <item.icon className="h-4 w-4" />
                </div>
                <span className="text-sm text-white/80">{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Health Image */}
          <div className="mt-10 rounded-2xl overflow-hidden border border-white/10">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
              alt="Healthcare professionals"
              className="w-full h-48 object-cover opacity-80"
            />
          </div>
        </motion.div>
      </div>

      {/* Right: Form Panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2 mb-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255)] text-white">
              <Shield className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-sm font-bold text-[oklch(0.22_0.04_255)] block">Digital Health</span>
              <span className="text-[10px] font-medium text-[oklch(0.45_0.04_255)] uppercase">Awareness Portal</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[oklch(0.18_0.03_255)] mb-1">Create your account</h1>
          <p className="text-sm text-[oklch(0.5_0.02_250)] mb-6">Start your health awareness journey today</p>

          {/* Progress */}
          <div className="flex items-center gap-2 mb-6">
            <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 1 ? "bg-[oklch(0.32_0.08_255)] text-white" : "bg-[oklch(0.92_0.01_240)] text-[oklch(0.5_0.02_250)]"}`}>1</div>
            <div className={`h-0.5 flex-1 rounded ${step >= 2 ? "bg-[oklch(0.32_0.08_255)]" : "bg-[oklch(0.92_0.01_240)]"}`} />
            <div className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 2 ? "bg-[oklch(0.32_0.08_255)] text-white" : "bg-[oklch(0.92_0.01_240)] text-[oklch(0.5_0.02_250)]"}`}>2</div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {step === 1 ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-4 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-4 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-4 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">Create Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="At least 6 characters"
                      className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-10 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[oklch(0.5_0.02_250)] hover:text-[oklch(0.3_0.02_250)]">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Re-enter your password"
                      className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-10 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[oklch(0.5_0.02_250)] hover:text-[oklch(0.3_0.02_250)]">
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-green-50 border border-green-100">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-xs text-green-700">Your account is stored locally on this device. No email verification needed.</p>
                </div>
              </>
            )}

            {error && <p className="text-sm text-red-500">{error}</p>}

            <div className="flex gap-3">
              {step === 2 && (
                <button type="button" onClick={() => setStep(1)} className="px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.01_240)] text-sm font-medium text-[oklch(0.5_0.02_250)] hover:bg-[oklch(0.95_0.003_250)] transition-colors">
                  Back
                </button>
              )}
              <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                {step === 1 ? "Continue" : "Create Account"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-[oklch(0.5_0.02_250)]">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-[oklch(0.32_0.08_255)] hover:underline">Sign in</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
