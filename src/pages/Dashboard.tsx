import { Link, useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "@/hooks/use-user";
import { Bookmark, LogOut, User, Stethoscope, Megaphone, BookOpen, ArrowRight, Heart, Shield, AlertTriangle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { user, isAuthenticated, logout } = useUser();
  const navigate = useNavigate();
  const [totalBookmarks, setTotalBookmarks] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/register");
      return;
    }
    try {
      const raw = localStorage.getItem("dhap-bookmarks");
      const bookmarks = raw ? JSON.parse(raw) : [];
      setTotalBookmarks(bookmarks.length);
    } catch {
      setTotalBookmarks(0);
    }
  }, [isAuthenticated, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Profile Header */}
        <section className="bg-gradient-to-br from-[oklch(0.22_0.06_255)] via-[oklch(0.28_0.08_230)] to-[oklch(0.35_0.07_200)] text-white py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-20 w-20 rounded-2xl border-3 border-white/20"
              />
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
                <p className="text-white/70 text-sm mt-0.5">{user.email || user.phone}</p>
                <p className="text-white/50 text-xs mt-1">
                  Member since {new Date(user.joinedAt).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </p>
              </div>
              <button
                type="button"
                onClick={() => { logout(); navigate("/"); }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Bookmark, label: "Bookmarks", value: totalBookmarks },
                { icon: Stethoscope, label: "Health Topics", value: "12+" },
                { icon: Megaphone, label: "Campaigns", value: "8" },
                { icon: BookOpen, label: "Articles", value: "10+" },
              ].map((stat) => (
                <Card key={stat.label} className="border-[oklch(0.9_0.01_240)]">
                  <CardContent className="p-4 text-center">
                    <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]">
                      <stat.icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="text-xl font-bold text-[oklch(0.2_0.03_255)]">{stat.value}</div>
                    <div className="text-xs text-[oklch(0.5_0.02_250)]">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="border-[oklch(0.9_0.01_240)] mb-6">
              <CardContent className="p-5">
                <h2 className="text-lg font-bold text-[oklch(0.18_0.03_255)] mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    { icon: Bookmark, label: "View Bookmarks", desc: "Access your saved items", href: "/bookmarks" },
                    { icon: Stethoscope, label: "Explore Topics", desc: "Browse health information", href: "/topics" },
                    { icon: Megaphone, label: "Browse Campaigns", desc: "Discover health campaigns", href: "/campaigns" },
                    { icon: BookOpen, label: "Read Articles", desc: "Latest health insights", href: "/articles" },
                    { icon: Heart, label: "Healthy Lifestyle", desc: "Tips for better living", href: "/lifestyle" },
                    { icon: AlertTriangle, label: "Symptoms Guide", desc: "Check warning signs", href: "/symptoms" },
                  ].map((action) => (
                    <Link
                      key={action.href}
                      to={action.href}
                      className="group flex items-center gap-3 rounded-lg border border-[oklch(0.9_0.01_240)] bg-white p-3 hover:shadow-md transition-all"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.35_0.1_220)]">
                        <action.icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm font-semibold text-[oklch(0.2_0.03_255)] group-hover:text-[oklch(0.32_0.08_255)] transition-colors">{action.label}</h3>
                        <p className="text-xs text-[oklch(0.5_0.02_250)]">{action.desc}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[oklch(0.7_0.01_250)] group-hover:text-[oklch(0.32_0.08_255)] shrink-0 transition-colors" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Health Tip Banner */}
            <Card className="border-[oklch(0.9_0.01_240)] bg-gradient-to-r from-[oklch(0.32_0.08_255)] to-[oklch(0.42_0.1_210)] text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Heart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Remember: Small Steps Lead to Big Changes</h3>
                    <p className="text-white/75 text-sm leading-relaxed">
                      Start with one healthy habit today — drink more water, take a short walk, or get to bed on time.
                      Consistency is key to building a healthier lifestyle.
                    </p>
                    <Link to="/lifestyle" className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white transition-colors">
                      View Lifestyle Tips <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
