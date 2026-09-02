import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 py-20"
        >
          <div className="text-7xl font-bold text-[oklch(0.32_0.08_255)] mb-4">404</div>
          <h1 className="text-2xl font-bold text-[oklch(0.18_0.03_255)] mb-2">Page Not Found</h1>
          <p className="text-[oklch(0.5_0.02_250)] max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link
              to="/topics"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[oklch(0.32_0.08_255_/_0.2)] text-[oklch(0.32_0.08_255)] text-sm font-medium hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Browse Topics
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
