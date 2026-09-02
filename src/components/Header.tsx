import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Search, Menu, X, Heart, Shield } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Health Topics", href: "/topics" },
  { label: "Symptoms", href: "/symptoms" },
  { label: "Prevention", href: "/prevention" },
  { label: "Lifestyle", href: "/lifestyle" },
  { label: "Calendar", href: "/calendar" },
  { label: "Articles", href: "/articles" },
  { label: "Emergency", href: "/emergency" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_oklch(0.32_0.08_255_/_0.08)]"
          : "bg-white"
      }`}
    >
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[oklch(0.32_0.08_255)] via-[oklch(0.38_0.1_210)] to-[oklch(0.45_0.1_160)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[oklch(0.32_0.08_255)] text-white">
              <Shield className="h-5 w-5" strokeWidth={2.5} />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold tracking-tight text-[oklch(0.22_0.04_255)] leading-tight block">
                Digital Health
              </span>
              <span className="text-[10px] font-medium tracking-wide text-[oklch(0.45_0.04_255)] uppercase leading-tight block">
                Awareness Portal
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)]"
                    : "text-[oklch(0.4_0.02_250)] hover:text-[oklch(0.25_0.04_255)] hover:bg-[oklch(0.32_0.08_255_/_0.04)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-[oklch(0.45_0.03_250)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] hover:text-[oklch(0.32_0.08_255)] transition-colors"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>

            <Link
              to="/auth"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-md text-sm font-medium text-[oklch(0.32_0.08_255)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/auth?mode=register"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors"
            >
              Register
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md text-[oklch(0.4_0.02_250)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search bar dropdown */}
      {searchOpen && (
        <div className="border-t border-[oklch(0.92_0.01_240)] bg-white px-4 py-3">
          <form onSubmit={handleSearch} className="mx-auto max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[oklch(0.5_0.02_250)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search health information, campaigns, topics..."
                className="w-full rounded-lg border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] py-2.5 pl-10 pr-4 text-sm text-[oklch(0.2_0.02_250)] placeholder:text-[oklch(0.55_0.02_250)] focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.15)] outline-none transition-all"
                autoFocus
              />
            </div>
          </form>
        </div>
      )}

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[oklch(0.92_0.01_240)] bg-white">
          <nav className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? "bg-[oklch(0.32_0.08_255_/_0.08)] text-[oklch(0.32_0.08_255)]"
                    : "text-[oklch(0.4_0.02_250)] hover:bg-[oklch(0.32_0.08_255_/_0.04)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-[oklch(0.92_0.01_240)] mt-2">
              <Link
                to="/auth"
                className="flex-1 text-center py-2.5 rounded-lg border border-[oklch(0.32_0.08_255_/_0.2)] text-[oklch(0.32_0.08_255)] text-sm font-medium"
              >
                Log in
              </Link>
              <Link
                to="/auth?mode=register"
                className="flex-1 text-center py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium"
              >
                Register
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
