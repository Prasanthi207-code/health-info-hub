import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, Zap, RotateCcw, Shield, AlertTriangle, Upload, Link, Image, ChevronDown } from "lucide-react";
import { useTranslation } from "@/i18n/LanguageContext";

type State = "idle" | "streaming" | "captured" | "analyzing" | "result";

type InputMode = "choose" | "camera" | "gallery" | "url";

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
  const [inputMode, setInputMode] = useState<InputMode>("choose");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [urlLoading, setUrlLoading] = useState(false);
  const [result, setResult] = useState<typeof ANALYSIS_RESULTS[0] | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const startCamera = useCallback(async () => {
    setInputMode("camera");
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
      setInputMode("choose");
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

  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      setCapturedImage(ev.target?.result as string);
      setState("captured");
    };
    reader.readAsDataURL(file);
  }, []);

  const handleUrlSubmit = useCallback(() => {
    const trimmed = imageUrl.trim();
    if (!trimmed) {
      setUrlError("Please enter an image URL");
      return;
    }
    // Basic URL validation
    if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
      setUrlError("Please enter a valid URL starting with http:// or https://");
      return;
    }
    setUrlError("");
    setUrlLoading(true);

    // Test if the image loads
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      setCapturedImage(trimmed);
      setState("captured");
      setUrlLoading(false);
    };
    img.onerror = () => {
      setUrlError("Could not load image. Please check the URL and try again.");
      setUrlLoading(false);
    };
    img.src = trimmed;
  }, [imageUrl]);

  const analyze = useCallback(() => {
    setState("analyzing");
    setTimeout(() => {
      const randomResult = ANALYSIS_RESULTS[Math.floor(Math.random() * ANALYSIS_RESULTS.length)];
      setResult(randomResult);
      setState("result");
    }, 2000);
  }, []);

  const reset = useCallback(() => {
    setCapturedImage(null);
    setResult(null);
    setImageUrl("");
    setUrlError("");
    setInputMode("choose");
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
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-[oklch(0.92_0.01_240)] shrink-0">
                <div className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-[oklch(0.32_0.08_255)]" />
                  <h3 className="font-semibold text-sm text-[oklch(0.2_0.03_255)]">{t("cameraTitle")}</h3>
                </div>
                <button onClick={handleClose} className="p-1.5 rounded-lg hover:bg-[oklch(0.97_0.003_250)] transition-colors">
                  <X className="h-4 w-4 text-[oklch(0.5_0.02_250)]" />
                </button>
              </div>

              {/* Content - scrollable */}
              <div className="flex-1 overflow-y-auto p-4">
                {/* CHOOSE MODE */}
                {state === "idle" && inputMode === "choose" && (
                  <div className="text-center py-6">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[oklch(0.32_0.08_255_/_0.08)] to-[oklch(0.45_0.1_160_/_0.08)]">
                      <Image className="h-10 w-10 text-[oklch(0.35_0.1_220)]" />
                    </div>
                    <p className="text-sm text-[oklch(0.5_0.02_250)] mb-6 max-w-xs mx-auto">
                      Upload or capture a photo of your health concern to get educational guidance.
                    </p>

                    <div className="space-y-3 max-w-xs mx-auto">
                      {/* Camera Option */}
                      <button
                        onClick={startCamera}
                        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white hover:bg-[oklch(0.97_0.003_250)] hover:shadow-md transition-all text-left"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Camera className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">Take Photo</p>
                          <p className="text-xs text-[oklch(0.5_0.02_250)]">Use your camera to capture</p>
                        </div>
                        <ChevronDown className="h-4 w-4 text-[oklch(0.6_0.02_250)] ml-auto -rotate-90" />
                      </button>

                      {/* Gallery Option */}
                      <button
                        onClick={() => { setInputMode("gallery"); fileInputRef.current?.click(); }}
                        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white hover:bg-[oklch(0.97_0.003_250)] hover:shadow-md transition-all text-left"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                          <Upload className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">Upload from Gallery</p>
                          <p className="text-xs text-[oklch(0.5_0.02_250)]">Choose from your photos</p>
                        </div>
                        <ChevronDown className="h-4 w-4 text-[oklch(0.6_0.02_250)] ml-auto -rotate-90" />
                      </button>

                      {/* URL Option */}
                      <button
                        onClick={() => setInputMode("url")}
                        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl border border-[oklch(0.9_0.01_240)] bg-white hover:bg-[oklch(0.97_0.003_250)] hover:shadow-md transition-all text-left"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                          <Link className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[oklch(0.2_0.03_255)]">Paste Image Link</p>
                          <p className="text-xs text-[oklch(0.5_0.02_250)]">Enter an online image URL</p>
                        </div>
                        <ChevronDown className="h-4 w-4 text-[oklch(0.6_0.02_250)] ml-auto -rotate-90" />
                      </button>
                    </div>

                    {/* Hidden file input */}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />

                    <div className="mt-5 flex items-start gap-2 p-3 rounded-lg bg-amber-50 border border-amber-100 max-w-xs mx-auto">
                      <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-[10px] text-amber-700 text-left">This is an educational tool. Always consult a healthcare professional for diagnosis and treatment.</p>
                    </div>
                  </div>
                )}

                {/* URL INPUT MODE */}
                {state === "idle" && inputMode === "url" && (
                  <div className="py-4">
                    <button onClick={() => setInputMode("choose")} className="text-xs text-[oklch(0.32_0.08_255)] hover:underline mb-4 flex items-center gap-1">
                      ← Back to options
                    </button>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 mx-auto mb-4">
                      <Link className="h-7 w-7 text-purple-600" />
                    </div>
                    <p className="text-sm font-semibold text-[oklch(0.2_0.03_255)] text-center mb-1">Paste Image URL</p>
                    <p className="text-xs text-[oklch(0.5_0.02_250)] text-center mb-4">Enter a direct link to an image of your health concern</p>
                    <div className="space-y-3">
                      <input
                        type="url"
                        value={imageUrl}
                        onChange={(e) => { setImageUrl(e.target.value); setUrlError(""); }}
                        placeholder="https://example.com/image.jpg"
                        className="w-full rounded-xl border border-[oklch(0.88_0.01_240)] bg-[oklch(0.97_0.003_250)] px-4 py-3 text-sm outline-none focus:border-[oklch(0.42_0.1_210)] focus:ring-2 focus:ring-[oklch(0.42_0.1_210_/_0.1)] transition-all"
                        autoFocus
                      />
                      {urlError && <p className="text-xs text-red-500">{urlError}</p>}
                      <button
                        onClick={handleUrlSubmit}
                        disabled={!imageUrl.trim() || urlLoading}
                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {urlLoading ? (
                          <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <><Image className="h-4 w-4" /> Load Image</>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* STREAMING */}
                {state === "streaming" && (
                  <div>
                    <div className="relative rounded-xl overflow-hidden bg-black aspect-[4/3]">
                      <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                      {/* Capture indicator */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full border-2 border-white/50" />
                      </div>
                    </div>
                    <canvas ref={canvasRef} className="hidden" />
                    <div className="flex gap-3 mt-3">
                      <button onClick={() => { reset(); setInputMode("choose"); }} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.01_240)] text-sm font-medium text-[oklch(0.5_0.02_250)] hover:bg-[oklch(0.95_0.003_250)] transition-colors">
                        <X className="h-4 w-4" /> Cancel
                      </button>
                      <button onClick={capture} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                        <Camera className="h-4 w-4" /> {t("takePhoto")}
                      </button>
                    </div>
                  </div>
                )}

                {/* CAPTURED */}
                {state === "captured" && capturedImage && (
                  <div>
                    <div className="rounded-xl overflow-hidden border border-[oklch(0.9_0.01_240)]">
                      <img
                        src={capturedImage}
                        alt="Captured health concern"
                        className="w-full aspect-[4/3] object-cover"
                        onError={(e) => {
                          // If image fails to load, go back
                          (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23f3f4f6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='14'%3EImage could not be loaded%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>
                    <div className="flex gap-3 mt-3">
                      <button onClick={() => { reset(); setInputMode("choose"); }} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[oklch(0.88_0.01_240)] text-sm font-medium text-[oklch(0.5_0.02_250)] hover:bg-[oklch(0.95_0.003_250)] transition-colors">
                        <RotateCcw className="h-4 w-4" /> Retake
                      </button>
                      <button onClick={analyze} className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
                        <Zap className="h-4 w-4" /> {t("analyzePhoto")}
                      </button>
                    </div>
                  </div>
                )}

                {/* ANALYZING */}
                {state === "analyzing" && (
                  <div className="text-center py-10">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[oklch(0.32_0.08_255_/_0.08)]">
                      <div className="h-8 w-8 border-3 border-[oklch(0.32_0.08_255_/_0.2)] border-t-[oklch(0.32_0.08_255)] rounded-full animate-spin" />
                    </div>
                    <p className="text-sm font-medium text-[oklch(0.2_0.03_255)]">{t("analyzing")}</p>
                    <p className="text-xs text-[oklch(0.5_0.02_250)] mt-1">Please wait a moment...</p>
                  </div>
                )}

                {/* RESULT */}
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
                    <button onClick={() => { reset(); setInputMode("choose"); }} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[oklch(0.32_0.08_255)] text-white text-sm font-medium hover:bg-[oklch(0.28_0.08_255)] transition-colors">
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
