import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { Search, Menu, X, Shield, Bookmark, LogOut, User, Globe } from "lucide-react";
import { useUser } from "@/hooks/use-user";
import { useTranslation } from "@/i18n/LanguageContext";

function useNavItems() {
  const { t } = useTranslation();
  return [
    { label: t("home"), href: "/" },
    { label: t("campaigns"), href: "/campaigns" },
    { label: t("healthTopics"), href: "/topics" },
    { label: t("symptoms"), href: "/symptoms" },
    { label: t("prevention"), href: "/prevention" },
    { label: t("lifestyle"), href: "/lifestyle" },
    { label: t("calendar"), href: "/calendar" },
    { label: t("articles"), href: "/articles" },
    { label: t("emergency"), href: "/emergency" },
  ];
}

export default function Header() {
  const NAV_ITEMS = useNavItems();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useUser();
  const { t, language, setLanguage, languages } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setUserMenuOpen(false);
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
          <div className="flex items-center gap-1">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="p-2 rounded-md text-[oklch(0.45_0.03_250)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] hover:text-[oklch(0.32_0.08_255)] transition-colors text-xs font-medium"
                title="Language"
              >
                <Globe className="h-5 w-5" />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white shadow-lg py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                        language === lang.code
                          ? "bg-[oklch(0.32_0.08_255_/_0.06)] text-[oklch(0.32_0.08_255)] font-medium"
                          : "text-[oklch(0.4_0.02_250)] hover:bg-[oklch(0.97_0.003_250)]"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-md text-[oklch(0.45_0.03_250)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] hover:text-[oklch(0.32_0.08_255)] transition-colors"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5" />
            </button>

            {isAuthenticated && user ? (
              <>
                <Link
                  to="/bookmarks"
                  className="hidden sm:inline-flex p-2 rounded-md text-[oklch(0.4_0.02_250)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] hover:text-[oklch(0.32_0.08_255)] transition-colors"
                  title="Bookmarks"
                >
                  <Bookmark className="h-5 w-5" />
                </Link>

                {/* User Menu */}
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-[oklch(0.32_0.08_255_/_0.06)] transition-colors"
                  >
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full border-2 border-[oklch(0.32_0.08_255_/_0.2)]"
                    />
                    <span className="hidden md:block text-sm font-medium text-[oklch(0.2_0.03_255)] max-w-[100px] truncate">
                      {user.name}
                    </span>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white shadow-lg py-2 z-50">
                      <div className="px-4 py-3 border-b border-[oklch(0.92_0.01_240)]">
                        <p className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">{user.name}</p>
                        <p className="text-xs text-[oklch(0.5_0.02_250)] truncate">{user.email || user.phone}</p>
                      </div>
                      <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm text-[oklch(0.35_0.02_250)] hover:bg-[oklch(0.97_0.003_250)] transition-colors">
                        <User className="h-4 w-4" /> My Profile
                      </Link>
                      <Link to="/bookmarks" className="flex items-center gap-2 px-4 py-2 text-sm text-[oklch(0.35_0.02_250)] hover:bg-[oklch(0.97_0.003_250)] transition-colors">
                        <Bookmark className="h-4 w-4" /> Bookmarks
                      </Link>
                      <div className="border-t border-[oklch(0.92_0.01_240)] mt-1 pt-1">
                        <button
                          onClick={() => { logout(); setUserMenuOpen(false); navigate("/"); }}
                          className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="h-4 w-4" /> Sign out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-md text-sm font-medium text-[oklch(0.32_0.08_255)] hover:bg-[oklch(0.32_0.08_255_/_0.06)] transition-colors"
                >
                  {t("signIn")}
                </Link>
                <Link
                  to="/register"
                  className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors"
                >
                  {t("register")}
                </Link>
              </>
            )}

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
            <div className="border-t border-[oklch(0.92_0.01_240)] mt-2 pt-2">
              {isAuthenticated && user ? (
                <div className="space-y-1">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <img src={user.avatar} alt={user.name} className="h-8 w-8 rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-[oklch(0.2_0.03_255)]">{user.name}</p>
                      <p className="text-xs text-[oklch(0.5_0.02_250)]">{user.email || user.phone}</p>
                    </div>
                  </div>
                  <Link to="/dashboard" className="block px-3 py-2.5 rounded-md text-sm font-medium text-[oklch(0.4_0.02_250)] hover:bg-[oklch(0.32_0.08_255_/_0.04)]">My Profile</Link>
                  <Link to="/bookmarks" className="block px-3 py-2.5 rounded-md text-sm font-medium text-[oklch(0.4_0.02_250)] hover:bg-[oklch(0.32_0.08_255_/_0.04)]">Bookmarks</Link>                        <button onClick={() => { logout(); navigate("/"); }} className="block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-red-600 hover:bg-red-50">{t("signOut")}</button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link to="/login" className="flex-1 text-center py-2.5 rounded-lg border border-[oklch(0.32_0.08_255_/_0.2)] text-[oklch(0.32_0.08_255)] text-sm font-medium">{t("signIn")}</Link>
                  <Link to="/register" className="flex-1 text-center py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium">{t("register")}</Link>
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
