import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Zap, RotateCcw, Shield, AlertTriangle } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

type State = "idle" | "streaming" | "captured" | "analyzing" | "result";

const ANALYSIS_RESULTS = [
  {
    category: "Skin Condition",
    severity: "low",
    suggestion: "This appears to be a minor skin irritation. Keep the area clean and moisturized. If it persists for more than 2 weeks, consult a dermatologist.",
    tip: "Avoid scratching, use fragrance-free moisturizer, and protect from sun exposure.",
  },
  {
    category: "Skin Condition",
    severity: "moderate",
    suggestion: "This may indicate a common skin condition like eczema or dermatitis. Consider consulting a healthcare provider for proper diagnosis and treatment.",
    tip: "Keep a symptom diary noting triggers, take photos for tracking, and avoid known irritants.",
  },
  {
    category: "General Health",
    severity: "info",
    suggestion: "For accurate diagnosis of any health concern, please consult a qualified healthcare professional. This tool provides general educational guidance only.",
    tip: "Document symptoms with photos and notes to share with your doctor during consultation.",
  },
];

export default function HealthCamera() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [result, setResult] = useState<typeof ANALYSIS_RESULTS[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useTranslation();

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: 640, height: 480 },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      setState("streaming");
    } catch {
      alert("Camera access denied. Please enable camera permissions in your browser settings.");
    }
  }, []);

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  }, []);

  const capture = useCallback(() => {
    if (!videoRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
      setCapturedImage(dataUrl);
      stopCamera();
      setState("captured");
    }
  }, [stopCamera]);

  const analyze = useCallback(() => {
    setState("analyzing");
    // Simulate AI analysis
    setTimeout(() => {
      const randomResult = ANALYSIS_RESULTS[Math.floor(Math.random() * ANALYSIS_RESULTS.length)];
      setResult(randomResult);
      setState("result");
    }, 2000);
  }, []);

  const reset = useCallback(() => {
    setCapturedImage(null);
    setResult(null);
    setState("idle");
  }, []);

  const handleClose = useCallback(() => {
    stopCamera();
    reset();
    setOpen(false);
  }, [stopCamera, reset]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-[oklch(0.32_0.08_255_/_0.3)] text-[oklch(0.32_0.08_255)] text-sm font-medium hover:bg-[oklch(0.32_0.08_255_/_0.04)] transition-colors w-full justify-center"
      >
        <Camera className="h-4 w-4" />
        {t("cameraTitle")}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[oklch(0.92_0.01_240)]">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-[oklch(0.32_0.08_255)]" />
                  <h3 className="font-semibold text-sm text-[oklch(0.2_0.03_255)]">{t("cameraTitle")}</h3>
                </div>
                <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-[oklch(0.97_0.003_250)] transition-colors">
                  <X className="h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-4">
                {state === "idle" && (
                  <div className="text-center py-8">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-[oklch(0.32_0.08_255_/_0.08)]">
                      <Camera className="h-10 w-10 text-[oklch(0.35_0.1_220)]" />
                    </div>
                    <p className="text-sm text-[oklch(0.5_0.02_250)] mb-4 max-w-xs mx-auto">{t("cameraDesc")}</p>
                    <button
                      onClick={startCamera}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors"
                    >
                      <Camera className="h-4 w-4" />
                      {t("cameraAccess")}
                    </button>
                    <div className="mt-4 flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-100 max-w-xs mx-auto">
                      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-amber-700 text-left">This is an educational tool. Always consult a healthcare professional for diagnosis and treatment.</p>
                    </div>
                  </div>
                )}

                {state === "streaming" && (
                  <div>
                    <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3]">
                      <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                    </div>
                    <canvas ref={canvasRef} className="hidden" />
                    <div className="flex gap-3 mt-3">
                      <button onClick={reset} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.01_240)] text-sm font-medium text-[oklch(0.5_0.02_250)] hover:bg-[oklch(0.95_0.003_250)] transition-colors">
                        <X className="h-4 w-4" /> Cancel
                      </button>
                      <button onClick={capture} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                        <Camera className="h-4 w-4" /> {t("takePhoto")}
                      </button>
                    </div>
                  </div>
                )}

                {state === "captured" && capturedImage && (
                  <div>
                    <div className="rounded-xl overflow-hidden">
                      <img src={capturedImage} alt="Captured" className="w-full aspect-[4/3] object-cover" />
                    </div>
                    <div className="flex gap-3 mt-3">
                      <button onClick={reset} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.01_240)] text-sm font-medium text-[oklch(0.5_0.02_250)] hover:bg-[oklch(0.95_0.003_250)] transition-colors">
                        <RotateCcw className="h-4 w-4" /> Retake
                      </button>
                      <button onClick={analyze} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                        <Zap className="h-4 w-4" /> {t("analyzePhoto")}
                      </button>
                    </div>
                  </div>
                )}

                {state === "analyzing" && (
                  <div className="text-center py-10">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[oklch(0.32_0.08_255_/_0.08)]">
                      <div className="h-8 w-8 border-3 border-[oklch(0.32_0.08_255_/_0.2)] border-t-[oklch(0.32_0.08_255)] rounded-full animate-spin" />
                    </div>
                    <p className="text-sm font-medium text-[oklch(0.2_0.03_255)]">{t("analyzing")}</p>
                    <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1">Please wait a moment...</p>
                  </div>
                )}

                {state === "result" && result && (
                  <div>
                    <div className={`rounded-xl p-4 mb-3 ${
                      result.severity === "low" ? "bg-green-50 border border-green-200" :
                      result.severity === "moderate" ? "bg-amber-50 border border-amber-200" :
                      "bg-blue-50 border border-blue-200"
                    }`}>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className={`h-4 w-4 ${
                          result.severity === "low" ? "text-green-600" :
                          result.severity === "moderate" ? "text-amber-600" : "text-blue-600"
                        }`} />
                        <span className={`text-xs font-semibold uppercase ${
                          result.severity === "low" ? "text-green-700" :
                          result.severity === "moderate" ? "text-amber-700" : "text-blue-700"
                        }`}>
                          {t("analysisResult")} — {result.category}
                        </span>
                      </div>
                      <p className="text-sm text-[oklch(0.3_0.02_250)] leading-relaxed">{result.suggestion}</p>
                    </div>
                    <div className="rounded-lg bg-[oklch(0.97_0.003_250)] p-3 mb-3">
                      <p className="text-xs text-[oklch(0.5_0.02_250)]"><strong>Tip:</strong> {result.tip}</p>
                    </div>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-100 mb-3">
                      <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-red-700 text-left">This is AI-generated educational guidance only. Always consult a qualified healthcare professional for diagnosis and treatment.</p>
                    </div>
                    <button onClick={reset} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                      <Camera className="h-4 w-4" /> Check Another
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
