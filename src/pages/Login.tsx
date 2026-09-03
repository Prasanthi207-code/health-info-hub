import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, Stethoscope, Heart, ShieldCheck } from "lucide-react";
import { useUser } from "@/hooks/use-user";
import { useTranslation } from "@/i18n/LanguageContext";

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useUser();
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!emailOrPhone.trim()) { setError(t("enterEmailOrPhone")); return; }
    if (!password) { setError(t("enterPassword")); return; }

    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      login(emailOrPhone, password);
      setLoading(false);
      navigate("/dashboard");
    }, 500);
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
              Welcome Back to<br />Your Health Hub
            </h2>
            <p className="text-white/70 leading-relaxed">
              Continue exploring health topics, campaigns, and personalized wellness resources.
            </p>
          </div>

          {/* Health Images Grid */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=300&h=200&fit=crop" alt="Healthcare" className="w-full h-28 object-cover opacity-80" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop" alt="Medical research" className="w-full h-28 object-cover opacity-80" />
            </div>
            <div className="rounded-xl overflow-hidden border border-white/10 col-span-2">
              <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=200&fit=crop" alt="Heart health" className="w-full h-28 object-cover opacity-80" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-6">
            {[
              { icon: Stethoscope, text: "12+ Topics" },
              { icon: Heart, text: "Daily Tips" },
              { icon: ShieldCheck, text: "Free Access" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-1.5 text-xs text-white/60">
                <item.icon className="h-3.5 w-3.5" />
                {item.text}
              </div>
            ))}
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

          <h1 className="text-2xl font-bold text-[oklch(0.18_0.03_255)] mb-1">{t("welcomeBack")}</h1>
          <p className="text-sm text-[oklch(0.5_0.02_250)] mb-6">{t("accessDashboard")}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">{t("loginEmailOrPhone")}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                <input
                  type="text"
                  required
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  placeholder="you@example.com or +1 555 000 0000"
                  className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-4 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[oklch(0.2_0.03_255)] mb-1.5">{t("loginPasswordLabel")}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] pl-10 pr-10 py-2.5 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] outline-none transition-all"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-[oklch(0.5_0.02_250)] hover:text-[oklch(0.3_0.02_250)]">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors disabled:opacity-60"
            >
              {loading ? (
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  {t("signIn")}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[oklch(0.5_0.02_250)]">
            {t("dontHaveAccount")}{" "}
            <Link to="/register" className="font-medium text-[oklch(0.32_0.08_255)] hover:underline">{t("loginCreateOne")}</Link>
          </p>

          <div className="mt-8 p-3 rounded-lg bg-[oklch(0.97_0.003_250)] border border-[oklch(0.9_0.01_240)]">
            <p className="text-xs text-[oklch(0.5_0.02_250)] text-center">
              {t("loginNewUser")} <strong>{t("noOTPRequired")}</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
