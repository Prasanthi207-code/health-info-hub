import { Link } from "react-router";
import { Heart, Shield } from "lucide-react";
import { DISCLAIMER } from "@/data";

const FOOTER_LINKS = {
  explore: [
    { label: "Health Topics", href: "/topics" },
    { label: "Campaigns", href: "/campaigns" },
    { label: "Articles", href: "/articles" },
    { label: "Health Calendar", href: "/calendar" },
  ],
  health: [
    { label: "Prevention", href: "/prevention" },
    { label: "Healthy Lifestyle", href: "/lifestyle" },
    { label: "Symptoms Guide", href: "/topics" },
    { label: "Emergency Awareness", href: "/emergency" },
  ],
  portal: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/about" },
    { label: "Terms of Use", href: "/about" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.16_0.03_255)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[oklch(0.85_0.06_210)]">
                <Shield className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-sm font-bold text-white leading-tight block">
                  Digital Health
                </span>
                <span className="text-[10px] font-medium text-white/60 uppercase leading-tight block">
                  Awareness Portal
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Empowering communities with reliable health awareness information, prevention guidance, and healthy lifestyle resources.
            </p>
            <div className="flex gap-3 mt-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((name) => (
                <div
                  key={name}
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-medium text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
                  title={name}
                >
                  {name[0]}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/55 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
            <strong className="text-white/50">Health Disclaimer:</strong> {DISCLAIMER}
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">
            © 2026 Digital Health Awareness Portal. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-400" fill="currentColor" /> for global health awareness
          </p>
        </div>
      </div>
    </footer>
  );
}
