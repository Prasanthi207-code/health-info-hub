export type Language = "en" | "hi" | "te" | "es" | "fr" | "ar";

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
];

type TranslationKeys = {
  // Nav
  home: string;
  campaigns: string;
  healthTopics: string;
  symptoms: string;
  prevention: string;
  lifestyle: string;
  calendar: string;
  articles: string;
  emergency: string;
  signIn: string;
  register: string;
  signOut: string;

  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroSearch: string;
  exploreTopics: string;
  exploreCampaigns: string;

  // Home
  quickAccess: string;
  quickAccessDesc: string;
  featuredCampaigns: string;
  featuredCampaignsDesc: string;
  viewAll: string;
  healthTopicsTitle: string;
  healthTopicsDesc: string;
  preventionLifestyle: string;
  preventionLifestyleDesc: string;
  latestArticles: string;
  latestArticlesDesc: string;
  healthCalendar: string;
  healthCalendarDesc: string;
  healthTip: string;
  takeFirstStep: string;
  takeFirstStepDesc: string;
  disclaimer: string;

  // Quick Access
  learnAbout: string;
  discoverWays: string;
  learnTips: string;
  understandSymptoms: string;
  exploreAwareness: string;
  emergencyInfo: string;

  // Auth
  createAccount: string;
  startJourney: string;
  welcomeBack: string;
  accessDashboard: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  createPassword: string;
  reEnterPassword: string;
  alreadyHaveAccount: string;
  dontHaveAccount: string;
  createOneFree: string;
  signInInstead: string;
  noOTPRequired: string;
  continue_: string;
  createAcc: string;
  back: string;
  continueWith: string;
  joinBenefits: string;
  benefit1: string;
  benefit2: string;
  benefit3: string;
  passwordMin6: string;
  passwordsMatch: string;
  enterEmailOrPhone: string;
  enterPassword: string;
  accountStoredLocal: string;
  newToPortal: string;

  // Dashboard
  welcome: string;
  memberSince: string;
  quickActions: string;
  viewBookmarks: string;
  browseCampaigns: string;
  readArticles: string;
  healthyLifestyle: string;
  symptomsGuide: string;
  smallSteps: string;
  smallStepsDesc: string;

  // Prevention
  preventionTitle: string;
  preventionDesc: string;
  preventionMessage: string;
  preventionMessageDesc: string;
  whenToSeekHelp: string;
  seekHelpDesc: string;

  // Lifestyle
  lifestyleTitle: string;
  lifestyleDesc: string;
  sixPillars: string;
  sixPillarsDesc: string;
  dailyRoutine: string;
  dailyRoutineDesc: string;
  dailyTips: string;
  dailyTipsDesc: string;
  morning: string;
  afternoon: string;
  evening: string;
  night: string;

  // Calendar
  calendarTitle: string;
  calendarDesc: string;
  allMonths: string;

  // Emergency
  emergencyTitle: string;
  emergencyDesc: string;
  emergencyCallNow: string;
  emergencyCallDesc: string;
  recognizeEmergencies: string;
  recognizeDesc: string;
  firstAidBasics: string;
  firstAidDesc: string;
  learnMoreConditions: string;

  // Symptoms
  symptomsTitle: string;
  symptomsDesc: string;
  urgencyLevels: string;
  seekImmediateHelp: string;
  seeDoctorSoon: string;
  monitorAndDiscuss: string;
  allSystems: string;
  whenInDoubt: string;
  whenInDoubtDesc: string;

  // Search
  searchTitle: string;
  searchDesc: string;
  searchPlaceholder: string;
  enterSearchTerm: string;
  enterSearchDesc: string;
  noResults: string;
  tryDifferent: string;
  resultsFor: string;

  // About
  aboutTitle: string;
  mission: string;
  missionDesc1: string;
  missionDesc2: string;
  missionDesc3: string;
  ourValues: string;
  evidenceBased: string;
  evidenceBasedDesc: string;
  accessible: string;
  accessibleDesc: string;
  globalPerspective: string;
  globalPerspectiveDesc: string;
  communityFocused: string;
  communityFocusedDesc: string;
  educational: string;
  educationalDesc: string;
  trustworthy: string;
  trustworthyDesc: string;
  importantNotice: string;
  importantNoticeDesc: string;

  // Contact
  contactTitle: string;
  contactDesc: string;
  getInTouch: string;
  name: string;
  subject: string;
  message: string;
  selectTopic: string;
  generalInquiry: string;
  contentFeedback: string;
  collaboration: string;
  reportError: string;
  other: string;
  howCanWeHelp: string;
  sendMessage: string;
  messageSent: string;
  messageSentDesc: string;
  sendAnother: string;
  responseTime: string;

  // Bookmarks
  bookmarksTitle: string;
  bookmarksDesc: string;
  savedItems: string;
  allSaved: string;
  noBookmarksYet: string;
  noBookmarksDesc: string;
  saveItems: string;
  browseTopics: string;

  // AI Chatbot
  aiChatTitle: string;
  aiChatDesc: string;
  aiPlaceholder: string;
  aiWelcome: string;
  aiWelcomeDesc: string;

  // Camera
  cameraTitle: string;
  cameraDesc: string;
  cameraAccess: string;
  takePhoto: string;
  analyzePhoto: string;
  analyzing: string;
  analysisResult: string;

  // Emergency doctors
  findDoctors: string;
  findDoctorsDesc: string;
  nearestDoctors: string;
  kmAway: string;

  // Common
  learnMore: string;
  disclaimerText: string;
  language: string;
  chooseLanguage: string;
  chooseLanguageDesc: string;
  getStarted: string;

  // Home page body content
  trustedHealthPlatform: string;
  topicsCount: string;
  topicsCountDesc: string;
  aiAssistantLabel: string;
  aiAssistantDesc: string;
  homeLearnAbout: string;
  homeDiscoverWays: string;
  homeLearnTips: string;
  homeUnderstandSymptoms: string;
  homeExploreAwareness: string;
  homeEmergencyInfo: string;
  homeCardTopicsDesc: string;
  homeCardPreventionDesc: string;
  homeCardLifestyleDesc: string;
  homeCardSymptomsDesc: string;
  homeCardCampaignsDesc: string;
  homeCardEmergencyDesc: string;
  homeTipDesc: string;
  homeStartYourJourney: string;
  homeStartDesc: string;
  homeJoinNow: string;
  homeReadArticles: string;
  homeReadArticlesDesc: string;
  homeViewAllEvents: string;
  homeViewAllEventsDesc: string;
  
  // About page
  aboutSubtitle: string;
  missionTitle: string;
  missionDesc: string;
  valuesTitle: string;
  valueEvidence: string;
  valueEvidenceDesc: string;
  valueAccessible: string;
  valueAccessibleDesc: string;
  valueCommunity: string;
  valueCommunityDesc: string;
  educationalDisclaimer: string;
  
  // Contact page
  contactSubtitle: string;
  contactInfo: string;
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactSend: string;
  contactSent: string;
  contactSentDesc: string;
  contactPhoneLabel: string;
  contactEmailLabel: string;
  contactHoursLabel: string;
  contactResponseTime: string;
  contactResponseDesc: string;
  
  // Bookmarks page
  noBookmarks: string;
  allItems: string;
  remove: string;
  
  // Search page
  searchResults: string;
  noResultsDesc: string;
  searchingFor: string;
  
  // Dashboard body
  dashWelcome: string;
  dashWelcomeDesc: string;
  dashStats: string;
  dashSaved: string;
  dashTopicsExplored: string;
  dashArticlesRead: string;
  dashQuickActions: string;
  dashBrowseTopics: string;
  dashBrowseTopicsDesc: string;
  dashViewBookmarks: string;
  dashViewBookmarksDesc: string;
  dashBrowseArticles: string;
  dashBrowseArticlesDesc: string;
  dashDailyTip: string;
  dashLearnPrevention: string;
  dashLearnPreventionDesc: string;
  dashLifestyle: string;
  dashLifestyleDesc: string;
  dashCheckSymptoms: string;
  dashCheckSymptomsDesc: string;
  
  // Prevention page body
  preventionEatWell: string;
  preventionEatWellDesc: string;
  preventionExercise: string;
  preventionExerciseDesc: string;
  preventionSleep: string;
  preventionSleepDesc: string;
  preventionHygiene: string;
  preventionHygieneDesc: string;
  preventionVaccines: string;
  preventionVaccinesDesc: string;
  preventionMentalHealth: string;
  preventionMentalHealthDesc: string;
  preventionScreenings: string;
  preventionScreeningsDesc: string;
  preventionHydration: string;
  preventionHydrationDesc: string;
  preventionSunProtection: string;
  preventionSunProtectionDesc: string;
  preventionAvoidTobacco: string;
  preventionAvoidTobaccoDesc: string;
  
  // Lifestyle page body
  lifestyleEatBetter: string;
  lifestyleEatBetterDesc: string;
  lifestyleMoveMore: string;
  lifestyleMoveMoreDesc: string;
  lifestyleSleepWell: string;
  lifestyleSleepWellDesc: string;
  lifestyleStayHydrated: string;
  lifestyleStayHydratedDesc: string;
  lifestyleManageStress: string;
  lifestyleManageStressDesc: string;
  lifestyleMaintainHygiene: string;
  lifestyleMaintainHygieneDesc: string;
  
  // Calendar page body
  calendarEventDetails: string;
  calendarIn: string;
  calendarDays: string;
  calendarPast: string;
  calendarNoEvents: string;
  
  // Emergency page body
  emergencyCallEmergency: string;
  emergencyCallEmergencyDesc: string;
  emergencyWhenToCall: string;
  emergencyWhenToCallDesc: string;
  emergencyCPRTitle: string;
  emergencyCPRDesc: string;
  emergencyChokingTitle: string;
  emergencyChokingDesc: string;
  emergencyBleedingTitle: string;
  emergencyBleedingDesc: string;
  emergencyStrokeTitle: string;
  emergencyStrokeDesc: string;
  emergencyBurnTitle: string;
  emergencyBurnDesc: string;
  
  // Symptoms page body
  symptomsChestPain: string;
  symptomsShortBreath: string;
  symptomsSevereHeadache: string;
  symptomsHighFever: string;
  symptomsAbdominalPain: string;
  symptomsVisionChanges: string;
  symptomsFatigue: string;
  symptomsJointPain: string;
  symptomsRash: string;
  symptomsNausea: string;
  symptomsDizziness: string;
  symptomsBackPain: string;
  symptomsSwelling: string;
  symptomsCough: string;
  symptomsInsomnia: string;
  symptomsWeightChange: string;
  symptomsAnxiety: string;
  symptomsAllergies: string;
  
  // Footer body
  footerAbout: string;
  footerAboutDesc: string;
  footerResources: string;
  footerSupport: string;
  footerContactUs: string;
  footerPrivacy: string;
  footerTerms: string;
  footerSitemap: string;
  footerRights: string;
  
  // Registration login extra
  regStep1Title: string;
  regStep1Desc: string;
  regProvideEmailOrPhone: string;
  regAccountInfo: string;
  regCreateSecure: string;
  regSecureNote: string;
  regJoinDescription: string;
  loginEmailOrPhone: string;
  loginPasswordLabel: string;
  loginNewUser: string;
  loginCreateOne: string;
  loginDemoNote: string;
  
  // AI Chat body
  aiDisclaimer: string;
  
  // Language selector body
  langTitle: string;
  langDesc: string;
};

const en: TranslationKeys = {
  home: "Home",
  campaigns: "Campaigns",
  healthTopics: "Health Topics",
  symptoms: "Symptoms",
  prevention: "Prevention",
  lifestyle: "Lifestyle",
  calendar: "Calendar",
  articles: "Articles",
  emergency: "Emergency",
  signIn: "Sign in",
  register: "Register",
  signOut: "Sign out",

  heroTitle: "Better Health Starts With Better Information.",
  heroSubtitle: "Discover health awareness campaigns, trusted health information, prevention guidance and healthy lifestyle resources — all in one place.",
  heroSearch: "Search health information...",
  exploreTopics: "Explore Health Topics",
  exploreCampaigns: "Explore Campaigns",

  quickAccess: "Quick Access",
  quickAccessDesc: "Find the health information you need, organized by topic.",
  featuredCampaigns: "Featured Health Campaigns",
  featuredCampaignsDesc: "Discover campaigns making a difference in public health.",
  viewAll: "View All",
  healthTopicsTitle: "Explore Health Topics",
  healthTopicsDesc: "Evidence-based information on common health conditions and wellness.",
  preventionLifestyle: "Prevention & Healthy Living",
  preventionLifestyleDesc: "Small daily habits lead to lasting health improvements.",
  latestArticles: "Latest Health Articles",
  latestArticlesDesc: "Stay informed with evidence-based health insights.",
  healthCalendar: "Health Awareness Calendar",
  healthCalendarDesc: "Important health days and awareness events throughout the year.",
  healthTip: "Today's Health Tip",
  takeFirstStep: "Take the First Step Towards Better Health.",
  takeFirstStepDesc: "Explore our comprehensive health resources and start making informed decisions about your well-being today.",
  disclaimer: "The information provided by the Digital Health Awareness Portal is for general educational and awareness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. If you have personal health concerns, consult a qualified healthcare professional.",

  learnAbout: "Learn about common health conditions and health concerns.",
  discoverWays: "Discover practical ways to reduce health risks.",
  learnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  understandSymptoms: "Understand common symptoms and warning signs.",
  exploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  emergencyInfo: "Learn when urgent professional medical attention may be needed.",

  createAccount: "Create your account",
  startJourney: "Start your health awareness journey today",
  welcomeBack: "Welcome back",
  accessDashboard: "Sign in to access your health dashboard",
  fullName: "Full Name",
  email: "Email Address",
  phone: "Phone Number",
  password: "Password",
  confirmPassword: "Confirm Password",
  createPassword: "Create Password",
  reEnterPassword: "Re-enter your password",
  alreadyHaveAccount: "Already have an account?",
  dontHaveAccount: "Don't have an account?",
  createOneFree: "Create one free",
  signInInstead: "Sign in",
  noOTPRequired: "No OTP verification required.",
  continue_: "Continue",
  createAcc: "Create Account",
  back: "Back",
  continueWith: "Continue",
  joinBenefits: "Join Thousands Who Prioritize Their Health",
  benefit1: "Access 12+ health topics with detailed information",
  benefit2: "Save your favorite articles and campaigns",
  benefit3: "Track your wellness journey with daily tips",
  passwordMin6: "Password must be at least 6 characters",
  passwordsMatch: "Passwords do not match",
  enterEmailOrPhone: "Please enter your email or phone number",
  enterPassword: "Please enter your password",
  accountStoredLocal: "Your account is stored locally on this device. No email verification needed.",
  newToPortal: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",

  welcome: "Welcome",
  memberSince: "Member since",
  quickActions: "Quick Actions",
  viewBookmarks: "View Bookmarks",
  browseCampaigns: "Browse Campaigns",
  readArticles: "Read Articles",
  healthyLifestyle: "Healthy Lifestyle",
  symptomsGuide: "Symptoms Guide",
  smallSteps: "Remember: Small Steps Lead to Big Changes",
  smallStepsDesc: "Start with one healthy habit today — drink more water, take a short walk, or get to bed on time. Consistency is key to building a healthier lifestyle.",

  preventionTitle: "Health Prevention Guide",
  preventionDesc: "Prevention is the first line of defense for your health. Explore practical, evidence-based strategies to reduce your risk of disease and maintain lifelong well-being.",
  preventionMessage: "Awareness → Understanding → Prevention → Healthy Action",
  preventionMessageDesc: "Small daily habits can significantly reduce your risk of chronic disease.",
  whenToSeekHelp: "When to Seek Professional Help",
  seekHelpDesc: "If you experience any warning signs or persistent symptoms, consult a qualified healthcare professional immediately.",

  lifestyleTitle: "Healthy Lifestyle",
  lifestyleDesc: "Small daily habits lead to lasting health improvements. Discover the six pillars of a healthy lifestyle and practical tips to incorporate them into your daily routine.",
  sixPillars: "Six Pillars of Healthy Living",
  sixPillarsDesc: "These foundational habits work together to support your overall health.",
  dailyRoutine: "Your Healthy Daily Routine",
  dailyRoutineDesc: "Structure your day with healthy habits at every stage.",
  dailyTips: "Daily Health Tips",
  dailyTipsDesc: "Quick, actionable tips to improve your health every day.",
  morning: "Morning",
  afternoon: "Afternoon",
  evening: "Evening",
  night: "Night",

  calendarTitle: "Health Awareness Calendar",
  calendarDesc: "Important health days, awareness events and observances throughout the year.",
  allMonths: "All Months",

  emergencyTitle: "Emergency Awareness",
  emergencyDesc: "Learn to recognize medical emergencies and understand when to seek immediate professional help.",
  emergencyCallNow: "If this is a medical emergency, call your local emergency number immediately (911 / 999 / 112)",
  emergencyCallDesc: "Call your local emergency number immediately if you or someone else experiences:",
  recognizeEmergencies: "Recognizing Emergencies",
  recognizeDesc: "Know the warning signs that require immediate medical attention.",
  firstAidBasics: "First Aid Basics",
  firstAidDesc: "Essential first aid knowledge that everyone should know.",
  learnMoreConditions: "Learn More About Health Conditions",

  symptomsTitle: "Symptoms & Warning Signs",
  symptomsDesc: "Learn to recognize common symptoms and understand when they may require medical attention.",
  urgencyLevels: "Urgency levels:",
  seekImmediateHelp: "Seek immediate help",
  seeDoctorSoon: "See a doctor soon",
  monitorAndDiscuss: "Monitor and discuss",
  allSystems: "All Systems",
  whenInDoubt: "When in Doubt, Seek Help",
  whenInDoubtDesc: "If you experience severe symptoms, sudden changes, or warning signs of a medical emergency, don't wait — contact a healthcare professional or call your local emergency number immediately.",

  searchTitle: "Search Health Information",
  searchDesc: "Find health topics, campaigns, and articles across our entire platform.",
  searchPlaceholder: "Search health topics, campaigns, articles...",
  enterSearchTerm: "Enter a search term",
  enterSearchDesc: "Search across health topics, campaigns, and articles",
  noResults: "No results found",
  tryDifferent: "Try different keywords or browse our categories.",
  resultsFor: "results for",

  aboutTitle: "About Us",
  mission: "Our Mission",
  missionDesc1: "The Digital Health Awareness Portal was created with a clear mission: to make reliable, evidence-based health information easy to discover and understand for everyone, everywhere.",
  missionDesc2: "We believe that knowledge is the first step toward better health. By providing accessible information about health conditions, prevention strategies, healthy lifestyle practices, and emergency awareness, we aim to empower individuals and communities to make informed decisions about their well-being.",
  missionDesc3: "Our platform focuses on the journey from Awareness to Understanding to Prevention to Healthy Action.",
  ourValues: "Our Values",
  evidenceBased: "Evidence-Based",
  evidenceBasedDesc: "All information on our platform is grounded in peer-reviewed research and established public health guidelines.",
  accessible: "Accessible",
  accessibleDesc: "We make complex health information easy to understand and accessible to people of all backgrounds.",
  globalPerspective: "Global Perspective",
  globalPerspectiveDesc: "Our content addresses health challenges from a worldwide perspective, relevant to diverse communities.",
  communityFocused: "Community-Focused",
  communityFocusedDesc: "We empower communities to take charge of their health through education and awareness.",
  educational: "Educational",
  educationalDesc: "Our mission is to inform and educate, never to diagnose or replace professional medical advice.",
  trustworthy: "Trustworthy",
  trustworthyDesc: "We maintain the highest standards of accuracy and transparency in all our health content.",
  importantNotice: "Important Notice",
  importantNoticeDesc: "The Digital Health Awareness Portal is an educational awareness platform. Our content is designed to inform and educate the public about health topics. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for personal health concerns.",

  contactTitle: "Contact Us",
  contactDesc: "Have questions, suggestions, or want to collaborate? We'd love to hear from you.",
  getInTouch: "Get in Touch",
  name: "Name",
  subject: "Subject",
  message: "Message",
  selectTopic: "Select a topic",
  generalInquiry: "General Inquiry",
  contentFeedback: "Content Feedback",
  collaboration: "Partnership / Collaboration",
  reportError: "Report an Error",
  other: "Other",
  howCanWeHelp: "How can we help you?",
  sendMessage: "Send Message",
  messageSent: "Message Sent!",
  messageSentDesc: "Thank you for reaching out. We'll get back to you within 2-3 business days.",
  sendAnother: "Send Another Message",
  responseTime: "We typically respond within 2-3 business days.",

  bookmarksTitle: "Your Bookmarks",
  bookmarksDesc: "Access your saved health topics, campaigns, and articles for quick reference.",
  savedItems: "Saved Items",
  allSaved: "saved",
  noBookmarksYet: "No bookmarks yet",
  noBookmarksDesc: "Save health topics, campaigns, and articles for quick access.",
  saveItems: "Save",
  browseTopics: "Browse Topics",

  aiChatTitle: "Health Assistant",
  aiChatDesc: "Ask me anything about health topics",
  aiPlaceholder: "Type your health question...",
  aiWelcome: "Hello! I'm your Health Assistant.",
  aiWelcomeDesc: "Ask me about symptoms, prevention, healthy living, or any health topic. I'm here to help!",

  cameraTitle: "Health Photo Check",
  cameraDesc: "Take a photo of a skin condition or health issue and get general guidance",
  cameraAccess: "Enable Camera",
  takePhoto: "Take Photo",
  analyzePhoto: "Analyze Photo",
  analyzing: "Analyzing your photo...",
  analysisResult: "Analysis Result",

  findDoctors: "Find Nearest Doctors",
  findDoctorsDesc: "Locate healthcare facilities near you for your health concern",
  nearestDoctors: "Nearest Healthcare Facilities",
  kmAway: "km away",

  learnMore: "Learn more",
  disclaimerText: "The information provided by the Digital Health Awareness Portal is for general educational and awareness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. If you have personal health concerns, consult a qualified healthcare professional.",
  language: "Language",
  chooseLanguage: "Choose Your Language",
  chooseLanguageDesc: "Select your preferred language for the best experience",
  getStarted: "Get Started",

  // Home page body content
  trustedHealthPlatform: "Trusted Health Information Platform",
  topicsCount: "12+ Topics",
  topicsCountDesc: "Trusted Info",
  aiAssistantLabel: "AI Assistant",
  aiAssistantDesc: "24/7 Help",
  homeLearnAbout: "Learn about common health conditions and health concerns.",
  homeDiscoverWays: "Discover practical ways to reduce health risks.",
  homeLearnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeUnderstandSymptoms: "Understand common symptoms and warning signs.",
  homeExploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  homeEmergencyInfo: "Learn when urgent professional medical attention may be needed.",
  homeCardTopicsDesc: "Learn about common health conditions and health concerns.",
  homeCardPreventionDesc: "Discover practical ways to reduce health risks.",
  homeCardLifestyleDesc: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeCardSymptomsDesc: "Understand common symptoms and warning signs.",
  homeCardCampaignsDesc: "Explore awareness campaigns and public-health initiatives.",
  homeCardEmergencyDesc: "Learn when urgent professional medical attention may be needed.",
  homeTipDesc: "A quick wellness tip to brighten your day.",
  homeStartYourJourney: "Start Your Health Journey Today",
  homeStartDesc: "Join thousands of people who are making better health choices every day. Create your free account to get personalized tips, save your favorite articles, and track your wellness progress.",
  homeJoinNow: "Join Now — It's Free",
  homeReadArticles: "Read the latest health articles and research-backed insights.",
  homeReadArticlesDesc: "Stay informed with the latest health news and expert advice.",
  homeViewAllEvents: "View all upcoming health awareness events and campaigns.",
  homeViewAllEventsDesc: "Never miss an important health awareness day.",
  
  // About page
  aboutSubtitle: "Our mission is to make reliable health information accessible to everyone, everywhere.",
  missionTitle: "Our Mission",
  missionDesc: "We believe that everyone deserves access to trustworthy health information. Our portal is designed to bridge the gap between complex medical knowledge and everyday understanding, empowering individuals to make informed decisions about their health and wellbeing.",
  valuesTitle: "Our Values",
  valueEvidence: "Evidence-Based",
  valueEvidenceDesc: "All our content is reviewed by healthcare professionals and based on the latest medical research and guidelines.",
  valueAccessible: "Accessible to All",
  valueAccessibleDesc: "We present health information in simple, easy-to-understand language that anyone can follow, regardless of their background.",
  valueCommunity: "Community Focused",
  valueCommunityDesc: "We are committed to building a healthier community by spreading awareness and promoting preventive health practices.",
  educationalDisclaimer: "This platform is for educational and awareness purposes only. It does not provide medical diagnosis, treatment, or professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
  
  // Contact page
  contactSubtitle: "Have questions or feedback? We would love to hear from you. Our team is here to help.",
  contactInfo: "Contact Information",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactSubject: "Subject",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message Sent!",
  contactSentDesc: "Thank you for reaching out. We will get back to you within 24 hours.",
  contactPhoneLabel: "Phone",
  contactEmailLabel: "Email",
  contactHoursLabel: "Hours",
  contactResponseTime: "Response Time",
  contactResponseDesc: "We typically respond within 24 hours on business days.",
  
  // Bookmarks page
  noBookmarks: "No bookmarks yet",
  allItems: "All Items",
  remove: "Remove",
  
  // Search page
  searchResults: "Search Results",
  noResultsDesc: "Try different keywords or browse our categories to find what you are looking for.",
  searchingFor: "Searching for",
  
  // Dashboard body
  dashWelcome: "Welcome back",
  dashWelcomeDesc: "Here is your health dashboard. Track your progress and explore new content.",
  dashStats: "Your Stats",
  dashSaved: "Saved Items",
  dashTopicsExplored: "Topics",
  dashArticlesRead: "Articles",
  dashQuickActions: "Quick Actions",
  dashBrowseTopics: "Browse Topics",
  dashBrowseTopicsDesc: "Explore 12+ health topics",
  dashViewBookmarks: "View Bookmarks",
  dashViewBookmarksDesc: "Access your saved content",
  dashBrowseArticles: "Read Articles",
  dashBrowseArticlesDesc: "Latest health insights",
  dashDailyTip: "Today's Wellness Tip",
  dashLearnPrevention: "Prevention Guide",
  dashLearnPreventionDesc: "Practical health tips",
  dashLifestyle: "Healthy Lifestyle",
  dashLifestyleDesc: "Daily wellness habits",
  dashCheckSymptoms: "Check Symptoms",
  dashCheckSymptomsDesc: "Understand warning signs",
  
  // Prevention page body
  preventionEatWell: "Eat Well",
  preventionEatWellDesc: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is one of the most powerful tools for disease prevention. Limit processed foods, sugar, and excessive sodium.",
  preventionExercise: "Exercise Regularly",
  preventionExerciseDesc: "Aim for at least 150 minutes of moderate physical activity per week. Walking, cycling, swimming, or any activity you enjoy can significantly reduce your risk of chronic diseases.",
  preventionSleep: "Prioritize Sleep",
  preventionSleepDesc: "Adults need 7-9 hours of quality sleep each night. Good sleep strengthens your immune system, improves memory, and reduces the risk of heart disease and diabetes.",
  preventionHygiene: "Practice Good Hygiene",
  preventionHygieneDesc: "Wash your hands frequently with soap and water, especially before eating and after using the bathroom. Cover your mouth when coughing or sneezing to prevent the spread of germs.",
  preventionVaccines: "Stay Up to Date on Vaccines",
  preventionVaccinesDesc: "Vaccines are one of the safest and most effective ways to prevent serious diseases. Follow your local health authority's recommended immunization schedule.",
  preventionMentalHealth: "Protect Your Mental Health",
  preventionMentalHealthDesc: "Manage stress through meditation, deep breathing, or talking to someone you trust. Mental health is just as important as physical health for overall wellbeing.",
  preventionScreenings: "Get Regular Screenings",
  preventionScreeningsDesc: "Regular health screenings can detect conditions early when they are most treatable. Talk to your doctor about which screenings are appropriate for your age and risk factors.",
  preventionHydration: "Stay Hydrated",
  preventionHydrationDesc: "Drink at least 8 glasses of water daily. Proper hydration supports kidney function, helps maintain healthy skin, and keeps your body's systems running smoothly.",
  preventionSunProtection: "Protect Your Skin from Sun",
  preventionSunProtectionDesc: "Use sunscreen with SPF 30 or higher, wear protective clothing, and avoid peak sun hours (10 AM to 4 PM) to reduce your risk of skin cancer and premature aging.",
  preventionAvoidTobacco: "Avoid Tobacco and Limit Alcohol",
  preventionAvoidTobaccoDesc: "Smoking is the leading cause of preventable death. If you smoke, seek help to quit. Also, limit alcohol consumption to reduce your risk of liver disease, cancer, and other conditions.",
  
  // Lifestyle page body
  lifestyleEatBetter: "Eat Better",
  lifestyleEatBetterDesc: "Fuel your body with nutritious foods. Fill half your plate with fruits and vegetables, choose whole grains, and include lean proteins. Cooking at home gives you control over ingredients and portions.",
  lifestyleMoveMore: "Move More",
  lifestyleMoveMoreDesc: "Find activities you enjoy and make them part of your routine. Even 20 minutes of walking, dancing, or stretching can boost your mood, strengthen your heart, and improve your energy levels throughout the day.",
  lifestyleSleepWell: "Sleep Well",
  lifestyleSleepWellDesc: "Create a relaxing bedtime routine. Keep your room cool and dark, avoid screens before bed, and try to go to bed and wake up at the same time every day. Quality sleep is the foundation of good health.",
  lifestyleStayHydrated: "Stay Hydrated",
  lifestyleStayHydratedDesc: "Water is essential for every function in your body. Carry a water bottle, drink a glass of water first thing in the morning, and eat water-rich foods like cucumbers, watermelon, and oranges.",
  lifestyleManageStress: "Manage Stress",
  lifestyleManageStressDesc: "Chronic stress can harm your body and mind. Practice deep breathing, spend time in nature, journal your thoughts, or talk to a friend. Taking breaks throughout the day helps reset your focus.",
  lifestyleMaintainHygiene: "Maintain Good Hygiene",
  lifestyleMaintainHygieneDesc: "Simple daily habits like washing your hands, brushing your teeth twice a day, and keeping your living space clean can prevent infections and keep you feeling your best.",
  
  // Calendar page body
  calendarEventDetails: "Event Details",
  calendarIn: "In",
  calendarDays: "days",
  calendarPast: "Past",
  calendarNoEvents: "No events for this month",
  
  // Emergency page body
  emergencyCallEmergency: "Call Emergency Services",
  emergencyCallEmergencyDesc: "If you or someone nearby is experiencing a medical emergency, call your local emergency number (911 in the US, 112 in Europe, 108 in India) immediately.",
  emergencyWhenToCall: "When to Call Emergency Services",
  emergencyWhenToCallDesc: "Call immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, choking, or any life-threatening situation.",
  emergencyCPRTitle: "CPR Basics",
  emergencyCPRDesc: "If someone collapses and is not breathing normally: Call emergency services, place your hands in the center of their chest, push hard and fast at least 2 inches deep, at a rate of 100-120 compressions per minute.",
  emergencyChokingTitle: "Choking First Aid",
  emergencyChokingDesc: "For a conscious choking adult: Stand behind them, place your fist just above their navel, and give quick upward thrusts. For infants, use back blows and chest thrusts.",
  emergencyBleedingTitle: "Control Severe Bleeding",
  emergencyBleedingDesc: "Apply firm, direct pressure with a clean cloth or gauze. Do not remove the cloth if it soaks through — add more on top. Elevate the injured area above the heart if possible.",
  emergencyStrokeTitle: "FAST Stroke Recognition",
  emergencyStrokeDesc: "F — Face: Is one side drooping? A — Arms: Can they raise both arms? S — Speech: Is their speech slurred? T — Time: If any of these, call emergency services immediately.",
  emergencyBurnTitle: "Burn First Aid",
  emergencyBurnDesc: "Cool the burn under running cold water for at least 20 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean, non-fluffy dressing. Seek medical help for burns larger than your palm.",
  
  // Symptoms page body
  symptomsChestPain: "Chest pain or discomfort",
  symptomsShortBreath: "Shortness of breath",
  symptomsSevereHeadache: "Severe or sudden headache",
  symptomsHighFever: "High fever (above 103F/39.4C)",
  symptomsAbdominalPain: "Persistent abdominal pain",
  symptomsVisionChanges: "Sudden vision changes",
  symptomsFatigue: "Unexplained fatigue or weakness",
  symptomsJointPain: "Joint pain or swelling",
  symptomsRash: "Unexplained rash or skin changes",
  symptomsNausea: "Persistent nausea or vomiting",
  symptomsDizziness: "Dizziness or fainting",
  symptomsBackPain: "Severe back pain",
  symptomsSwelling: "Unexplained swelling",
  symptomsCough: "Persistent cough",
  symptomsInsomnia: "Difficulty sleeping",
  symptomsWeightChange: "Unexplained weight change",
  symptomsAnxiety: "Anxiety or panic attacks",
  symptomsAllergies: "Allergic reactions",
  
  // Footer body
  footerAbout: "About",
  footerAboutDesc: "Digital Health Awareness Portal provides reliable, evidence-based health information to help you make informed decisions about your wellbeing.",
  footerResources: "Resources",
  footerSupport: "Support",
  footerContactUs: "Contact Us",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerSitemap: "Sitemap",
  footerRights: "All rights reserved. For educational and awareness purposes only.",
  
  // Registration login extra
  regStep1Title: "Personal Information",
  regStep1Desc: "Tell us a bit about yourself",
  regProvideEmailOrPhone: "Please provide email or phone number",
  regAccountInfo: "Account Information",
  regCreateSecure: "Create a secure password for your account",
  regSecureNote: "Your account is stored locally on this device. No email verification needed.",
  regJoinDescription: "Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.",
  loginEmailOrPhone: "Email or Phone",
  loginPasswordLabel: "Password",
  loginNewUser: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",
  loginCreateOne: "Create one free",
  
  // AI Chat body
  aiDisclaimer: "Educational info only. Not medical advice.",
  
  // Language selector body
  langTitle: "Choose Your Language",
  langDesc: "Select your preferred language to continue. You can change it anytime.",

  loginDemoNote: "No OTP verification required. Sign in with just your credentials.",
};

const hi: TranslationKeys = {
  home: "होम",
  campaigns: "अभियान",
  healthTopics: "स्वास्थ्य विषय",
  symptoms: "लक्षण",
  prevention: "रोकथाम",
  lifestyle: "जीवनशैली",
  calendar: "कैलेंडर",
  articles: "लेख",
  emergency: "आपातकाल",
  signIn: "साइन इन",
  register: "रजिस्टर",
  signOut: "साइन आउट",

  heroTitle: "बेहतर स्वास्थ्य बेहतर जानकारी से शुरू होता है।",
  heroSubtitle: "स्वास्थ्य जागरूकता अभियान, विश्वसनीय स्वास्थ्य जानकारी, रोकथाम मार्गदर्शन और स्वस्थ जीवनशैली संसाधनों की खोज करें — सब एक जगह।",
  heroSearch: "स्वास्थ्य जानकारी खोजें...",
  exploreTopics: "स्वास्थ्य विषय खोजें",
  exploreCampaigns: "अभियान खोजें",

  quickAccess: "त्वरित पहुँच",
  quickAccessDesc: "अपनी आवश्यकता की स्वास्थ्य जानकारी खोजें, विषय के अनुसार व्यवस्थित।",
  featuredCampaigns: "प्रमुख स्वास्थ्य अभियान",
  featuredCampaignsDesc: "सार्वजनिक स्वास्थ्य में बदलाव लाने वाले अभियानों की खोज करें।",
  viewAll: "सभी देखें",
  healthTopicsTitle: "स्वास्थ्य विषय खोजें",
  healthTopicsDesc: "सामान्य स्वास्थ्य स्थितियों और कल्याण पर आधारित जानकारी।",
  preventionLifestyle: "रोकथाम और स्वस्थ जीवन",
  preventionLifestyleDesc: "छोटी दैनिक आदतें स्थायी स्वास्थ्य सुधार लाती हैं।",
  latestArticles: "नवीनतम स्वास्थ्य लेख",
  latestArticlesDesc: "आधारित जानकारी से सूचित रहें।",
  healthCalendar: "स्वास्थ्य जागरूकता कैलेंडर",
  healthCalendarDesc: "पूरे वर्ष महत्वपूर्ण स्वास्थ्य दिवस और जागरूकता कार्यक्रम।",
  healthTip: "आज का स्वास्थ्य सुझाव",
  takeFirstStep: "बेहतर स्वास्थ्य की ओर पहला कदम उठाएं।",
  takeFirstStepDesc: "हमारे व्यापक स्वास्थ्य संसाधनों का पता लगाएं और आज ही अपने कल्याण के बारे में सूचित निर्णय लेना शुरू करें।",
  disclaimer: "डिजिटल स्वास्थ्य जागरूकता पोर्टल द्वारा प्रदान की गई जानकारी केवल सामान्य शैक्षिक और जागरूकता उद्देश्यों के लिए है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है।",

  learnAbout: "सामान्य स्वास्थ्य स्थितियों और चिंताओं के बारे में जानें।",
  discoverWays: "स्वास्थ्य जोखिमों को कम करने के व्यावहारिक तरीके खोजें।",
  learnTips: "पोषण, व्यायाम, नींद और कल्याण के बारे में जानें।",
  understandSymptoms: "सामान्य लक्षणों और चेतावनी संकेतों को समझें।",
  exploreAwareness: "जागरूकता अभियानों और सार्वजनिक स्वास्थ्य पहलों का पता लगाएं।",
  emergencyInfo: "कब तत्काल पेशेवर चिकित्सा ध्यान की आवश्यकता हो सकती है, यह जानें।",

  createAccount: "अपना खाता बनाएं",
  startJourney: "आज ही अपनी स्वास्थ्य जागरूकता यात्रा शुरू करें",
  welcomeBack: "वापसी पर स्वागत है",
  accessDashboard: "अपने स्वास्थ्य डैशबोर्ड तक पहुँचने के लिए साइन इन करें",
  fullName: "पूरा नाम",
  email: "ईमेल पता",
  phone: "फ़ोन नंबर",
  password: "पासवर्ड",
  confirmPassword: "पासवर्ड की पुष्टि करें",
  createPassword: "पासवर्ड बनाएं",
  reEnterPassword: "अपना पासवर्ड फिर से दर्ज करें",
  alreadyHaveAccount: "पहले से खाता है?",
  dontHaveAccount: "खाता नहीं है?",
  createOneFree: "मुफ्त में बनाएं",
  signInInstead: "साइन इन करें",
  noOTPRequired: "OTP सत्यापन की आवश्यकता नहीं है।",
  continue_: "जारी रखें",
  createAcc: "खाता बनाएं",
  back: "वापस",
  continueWith: "जारी रखें",
  joinBenefits: "हजारों लोगों से जुड़ें जो अपने स्वास्थ्य को प्राथमिकता देते हैं",
  benefit1: "12+ स्वास्थ्य विषयों तक पहुँचें",
  benefit2: "अपने पसंदीदा लेख और अभियान सहेजें",
  benefit3: "दैनिक सुझावों से अपनी कल्याण यात्रा ट्रैक करें",
  passwordMin6: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",
  passwordsMatch: "पासवर्ड मेल नहीं खाते",
  enterEmailOrPhone: "कृपया अपना ईमेल या फ़ोन नंबर दर्ज करें",
  enterPassword: "कृपया अपना पासवर्ड दर्ज करें",
  accountStoredLocal: "आपका खाता इस डिवाइस पर स्थानीय रूप से संग्रहीत है।",
  newToPortal: "पोर्टल पर नए हैं?",

  welcome: "स्वागत है",
  memberSince: "सदस्य बनने की तिथि",
  quickActions: "त्वरित कार्य",
  viewBookmarks: "बुकमार्क देखें",
  browseCampaigns: "अभियान देखें",
  readArticles: "लेख पढ़ें",
  healthyLifestyle: "स्वस्थ जीवनशैली",
  symptomsGuide: "लक्षण गाइड",
  smallSteps: "याद रखें: छोटे कदम बड़े बदलाव लाते हैं",
  smallStepsDesc: "आज एक स्वस्थ आदत से शुरू करें — अधिक पानी पिएं, छोटी सैर करें, या समय पर सो जाएं।",

  preventionTitle: "स्वास्थ्य रोकथाम गाइड",
  preventionDesc: "रोकथाम आपके स्वास्थ्य की पहली रक्षा रेखा है।",
  preventionMessage: "जागरूकता → समझ → रोकथाम → स्वस्थ कार्रवाई",
  preventionMessageDesc: "छोटी दैनिक आदतें पुरानी बीमारी के जोखिम को काफी कम कर सकती हैं।",
  whenToSeekHelp: "पेशेवर मदद कब लें",
  seekHelpDesc: "यदि आपको कोई चेतावनी संकेत या लगातार लक्षण दिखते हैं, तो तुरंत एक योग्य स्वास्थ्य पेशेवर से परामर्श करें।",

  lifestyleTitle: "स्वस्थ जीवनशैली",
  lifestyleDesc: "छोटी दैनिक आदतें स्थायी स्वास्थ्य सुधार लाती हैं।",
  sixPillars: "स्वस्थ जीवन के छह स्तंभ",
  sixPillarsDesc: "ये आधारभूत आदतें आपके समग्र स्वास्थ्य का समर्थन करती हैं।",
  dailyRoutine: "आपकी स्वस्थ दैनिक दिनचर्या",
  dailyRoutineDesc: "अपने दिन को स्वस्थ आदतों से संरचित करें।",
  dailyTips: "दैनिक स्वास्थ्य सुझाव",
  dailyTipsDesc: "हर दिन अपने स्वास्थ्य में सुधार के लिए त्वरित सुझाव।",
  morning: "सुबह",
  afternoon: "दोपहर",
  evening: "शाम",
  night: "रात",

  calendarTitle: "स्वास्थ्य जागरूकता कैलेंडर",
  calendarDesc: "पूरे वर्ष महत्वपूर्ण स्वास्थ्य दिवस और जागरूकता कार्यक्रम।",
  allMonths: "सभी महीने",

  emergencyTitle: "आपातकाल जागरूकता",
  emergencyDesc: "चिकित्सा आपातकाल को पहचानना सीखें और समझें कि कब तत्काल पेशेवर मदद लेनी चाहिए।",
  emergencyCallNow: "यदि यह चिकित्सा आपातकाल है, तो तुरंत अपना स्थानीय आपातकाल नंबर कॉल करें (911 / 999 / 112)",
  emergencyCallDesc: "तुरंत अपना स्थानीय आपातकाल नंबर कॉल करें यदि आपको या किसी अन्य को:",
  recognizeEmergencies: "आपातकाल को पहचानना",
  recognizeDesc: "तत्काल चिकित्सा ध्यान आवश्यक चेतावनी संकेत जानें।",
  firstAidBasics: "प्राथमिक चिकित्सा मूल बातें",
  firstAidDesc: "आवश्यक प्राथमिक चिकित्सा ज्ञान जो हर किसी को पता होना चाहिए।",
  learnMoreConditions: "स्वास्थ्य स्थितियों के बारे में अधिक जानें",

  symptomsTitle: "लक्षण और चेतावनी संकेत",
  symptomsDesc: "सामान्य लक्षणों को पहचानना सीखें और समझें कि कब चिकित्सा ध्यान की आवश्यकता हो सकती है।",
  urgencyLevels: "तत्कालता स्तर:",
  seekImmediateHelp: "तत्काल मदद लें",
  seeDoctorSoon: "जल्द डॉक्टर से मिलें",
  monitorAndDiscuss: "निगरानी करें और चर्चा करें",
  allSystems: "सभी प्रणालियां",
  whenInDoubt: "संदेह हो तो मदद लें",
  whenInDoubtDesc: "गंभीर लक्षण, अचानक बदलाव, या चिकित्सा आपातकाल के चेतावनी संकेत हों तो इंतजार न करें।",

  searchTitle: "स्वास्थ्य जानकारी खोजें",
  searchDesc: "हमारे पूरे प्लेटफॉर्म में स्वास्थ्य विषय, अभियान और लेख खोजें।",
  searchPlaceholder: "स्वास्थ्य विषय, अभियान, लेख खोजें...",
  enterSearchTerm: "खोज शब्द दर्ज करें",
  enterSearchDesc: "स्वास्थ्य विषय, अभियान और लेखों में खोजें",
  noResults: "कोई परिणाम नहीं मिला",
  tryDifferent: "अलग शब्दों का प्रयास करें।",
  resultsFor: "परिणाम",

  aboutTitle: "हमारे बारे में",
  mission: "हमारा मिशन",
  missionDesc1: "डिजिटल स्वास्थ्य जागरूकता पोर्टल एक स्पष्ट मिशन के साथ बनाया गया था: विश्वसनीय, आधारित स्वास्थ्य जानकारी को हर किसी के लिए सुलभ बनाना।",
  missionDesc2: "हमारा मानना है कि ज्ञान बेहतर स्वास्थ्य की ओर पहला कदम है।",
  missionDesc3: "हमारा प्लेटफॉर्म जागरूकता से समझ, रोकथाम और स्वस्थ कार्रवाई तक की यात्रा पर केंद्रित है।",
  ourValues: "हमारे मूल्य",
  evidenceBased: "आधारित",
  evidenceBasedDesc: "हमारे प्लेटफॉर्म की सभी जानकारी शोध और सार्वजनिक स्वास्थ्य दिशानिर्देशों पर आधारित है।",
  accessible: "सुलभ",
  accessibleDesc: "हम जटिल स्वास्थ्य जानकारी को समझने और सभी के लिए सुलभ बनाते हैं।",
  globalPerspective: "वैश्विक दृष्टिकोण",
  globalPerspectiveDesc: "हमारी सामग्री विश्व स्तर पर स्वास्थ्य चुनौतियों को संबोधित करती है।",
  communityFocused: "समुदाय केंद्रित",
  communityFocusedDesc: "हम समुदायों को शिक्षा और जागरूकता के माध्यम से अपने स्वास्थ्य का नेतृत्व करने के लिए सशक्त बनाते हैं।",
  educational: "शैक्षिक",
  educationalDesc: "हमारा मिशन सूचित और शिक्षित करना है, निदान या पेशेवर चिकित्सा सलाह का विकल्प नहीं।",
  trustworthy: "विश्वसनीय",
  trustworthyDesc: "हम अपनी सभी स्वास्थ्य सामग्री में सटीकता और पारदर्शिता के उच्चतम मानक बनाए रखते हैं।",
  importantNotice: "महत्वपूर्ण सूचना",
  importantNoticeDesc: "डिजिटल स्वास्थ्य जागरूकता पोर्टल एक शैक्षिक जागरूकता मंच है। यह पेशेवर चिकित्सा सलाह, निदान या उपचार का विकल्प नहीं है।",

  contactTitle: "संपर्क करें",
  contactDesc: "प्रश्न, सुझाव, या सहयोग करना चाहते हैं? हमसे सुनना पसंद करेंगे।",
  getInTouch: "संपर्क में रहें",
  name: "नाम",
  subject: "विषय",
  message: "संदेश",
  selectTopic: "विषय चुनें",
  generalInquiry: "सामान्य पूछताछ",
  contentFeedback: "सामग्री प्रतिक्रिया",
  collaboration: "साझेदारी",
  reportError: "त्रुटि रिपोर्ट",
  other: "अन्य",
  howCanWeHelp: "हम आपकी कैसे मदद कर सकते हैं?",
  sendMessage: "संदेश भेजें",
  messageSent: "संदेश भेजा गया!",
  messageSentDesc: "संपर्क करने के लिए धन्यवाद। हम 2-3 कार्य दिवसों में जवाब देंगे।",
  sendAnother: "एक और संदेश भेजें",
  responseTime: "हम आमतौर पर 2-3 कार्य दिवसों में जवाब देते हैं।",

  bookmarksTitle: "आपके बुकमार्क",
  bookmarksDesc: "त्वरित संदर्भ के लिए सहेजे गए विषय, अभियान और लेख।",
  savedItems: "सहेजे गए आइटम",
  allSaved: "सहेजे गए",
  noBookmarksYet: "अभी तक कोई बुकमार्क नहीं",
  noBookmarksDesc: "त्वरित पहुँच के लिए स्वास्थ्य विषय, अभियान और लेख सहेजें।",
  saveItems: "सहेजें",
  browseTopics: "विषय देखें",

  aiChatTitle: "स्वास्थ्य सहायक",
  aiChatDesc: "स्वास्थ्य विषयों के बारे में मुझसे कुछ भी पूछें",
  aiPlaceholder: "अपना स्वास्थ्य प्रश्न टाइप करें...",
  aiWelcome: "नमस्ते! मैं आपका स्वास्थ्य सहायक हूं।",
  aiWelcomeDesc: "लक्षणों, रोकथाम, स्वस्थ जीवन, या किसी भी स्वास्थ्य विषय के बारे में मुझसे पूछें।",

  cameraTitle: "स्वास्थ्य फोटो जांच",
  cameraDesc: "त्वचा की स्थिति या स्वास्थ्य समस्या की फोटो लें और सामान्य मार्गदर्शन प्राप्त करें",
  cameraAccess: "कैमरा सक्षम करें",
  takePhoto: "फोटो लें",
  analyzePhoto: "फोटो का विश्लेषण करें",
  analyzing: "आपकी फोटो का विश्लेषण हो रहा है...",
  analysisResult: "विश्लेषण परिणाम",

  findDoctors: "निकटतम डॉक्टर खोजें",
  findDoctorsDesc: "अपनी स्वास्थ्य चिंता के लिए अपने निकट स्वास्थ्य सुविधाएं खोजें",
  nearestDoctors: "निकटतम स्वास्थ्य सुविधाएं",
  kmAway: "किमी दूर",

  learnMore: "और जानें",
  disclaimerText: "डिजिटल स्वास्थ्य जागरूकता पोर्टल द्वारा प्रदान की गई जानकारी केवल सामान्य शैक्षिक और जागरूकता उद्देश्यों के लिए है।",
  language: "भाषा",
  chooseLanguage: "अपनी भाषा चुनें",
  chooseLanguageDesc: "बेहतर अनुभव के लिए अपनी पसंदीदा भाषा चुनें",
  getStarted: "शुरू करें",// Home page body content
  trustedHealthPlatform: "Trusted Health Information Platform",
  topicsCount: "12+ Topics",
  topicsCountDesc: "Trusted Info",
  aiAssistantLabel: "AI Assistant",
  aiAssistantDesc: "24/7 Help",
  homeLearnAbout: "Learn about common health conditions and health concerns.",
  homeDiscoverWays: "Discover practical ways to reduce health risks.",
  homeLearnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeUnderstandSymptoms: "Understand common symptoms and warning signs.",
  homeExploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  homeEmergencyInfo: "Learn when urgent professional medical attention may be needed.",
  homeCardTopicsDesc: "Learn about common health conditions and health concerns.",
  homeCardPreventionDesc: "Discover practical ways to reduce health risks.",
  homeCardLifestyleDesc: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeCardSymptomsDesc: "Understand common symptoms and warning signs.",
  homeCardCampaignsDesc: "Explore awareness campaigns and public-health initiatives.",
  homeCardEmergencyDesc: "Learn when urgent professional medical attention may be needed.",
  homeTipDesc: "A quick wellness tip to brighten your day.",
  homeStartYourJourney: "Start Your Health Journey Today",
  homeStartDesc: "Join thousands of people who are making better health choices every day. Create your free account to get personalized tips, save your favorite articles, and track your wellness progress.",
  homeJoinNow: "Join Now — It's Free",
  homeReadArticles: "Read the latest health articles and research-backed insights.",
  homeReadArticlesDesc: "Stay informed with the latest health news and expert advice.",
  homeViewAllEvents: "View all upcoming health awareness events and campaigns.",
  homeViewAllEventsDesc: "Never miss an important health awareness day.",
  
  // About page
  aboutSubtitle: "Our mission is to make reliable health information accessible to everyone, everywhere.",
  missionTitle: "Our Mission",
  missionDesc: "We believe that everyone deserves access to trustworthy health information. Our portal is designed to bridge the gap between complex medical knowledge and everyday understanding, empowering individuals to make informed decisions about their health and wellbeing.",
  valuesTitle: "Our Values",
  valueEvidence: "Evidence-Based",
  valueEvidenceDesc: "All our content is reviewed by healthcare professionals and based on the latest medical research and guidelines.",
  valueAccessible: "Accessible to All",
  valueAccessibleDesc: "We present health information in simple, easy-to-understand language that anyone can follow, regardless of their background.",
  valueCommunity: "Community Focused",
  valueCommunityDesc: "We are committed to building a healthier community by spreading awareness and promoting preventive health practices.",
  educationalDisclaimer: "This platform is for educational and awareness purposes only. It does not provide medical diagnosis, treatment, or professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
  
  // Contact page
  contactSubtitle: "Have questions or feedback? We would love to hear from you. Our team is here to help.",
  contactInfo: "Contact Information",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactSubject: "Subject",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message Sent!",
  contactSentDesc: "Thank you for reaching out. We will get back to you within 24 hours.",
  contactPhoneLabel: "Phone",
  contactEmailLabel: "Email",
  contactHoursLabel: "Hours",
  contactResponseTime: "Response Time",
  contactResponseDesc: "We typically respond within 24 hours on business days.",
  
  // Bookmarks page
  noBookmarks: "No bookmarks yet",
  allItems: "All Items",
  remove: "Remove",
  
  // Search page
  searchResults: "Search Results",
  noResultsDesc: "Try different keywords or browse our categories to find what you are looking for.",
  searchingFor: "Searching for",
  
  // Dashboard body
  dashWelcome: "Welcome back",
  dashWelcomeDesc: "Here is your health dashboard. Track your progress and explore new content.",
  dashStats: "Your Stats",
  dashSaved: "Saved Items",
  dashTopicsExplored: "Topics",
  dashArticlesRead: "Articles",
  dashQuickActions: "Quick Actions",
  dashBrowseTopics: "Browse Topics",
  dashBrowseTopicsDesc: "Explore 12+ health topics",
  dashViewBookmarks: "View Bookmarks",
  dashViewBookmarksDesc: "Access your saved content",
  dashBrowseArticles: "Read Articles",
  dashBrowseArticlesDesc: "Latest health insights",
  dashDailyTip: "Today's Wellness Tip",
  dashLearnPrevention: "Prevention Guide",
  dashLearnPreventionDesc: "Practical health tips",
  dashLifestyle: "Healthy Lifestyle",
  dashLifestyleDesc: "Daily wellness habits",
  dashCheckSymptoms: "Check Symptoms",
  dashCheckSymptomsDesc: "Understand warning signs",
  
  // Prevention page body
  preventionEatWell: "Eat Well",
  preventionEatWellDesc: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is one of the most powerful tools for disease prevention. Limit processed foods, sugar, and excessive sodium.",
  preventionExercise: "Exercise Regularly",
  preventionExerciseDesc: "Aim for at least 150 minutes of moderate physical activity per week. Walking, cycling, swimming, or any activity you enjoy can significantly reduce your risk of chronic diseases.",
  preventionSleep: "Prioritize Sleep",
  preventionSleepDesc: "Adults need 7-9 hours of quality sleep each night. Good sleep strengthens your immune system, improves memory, and reduces the risk of heart disease and diabetes.",
  preventionHygiene: "Practice Good Hygiene",
  preventionHygieneDesc: "Wash your hands frequently with soap and water, especially before eating and after using the bathroom. Cover your mouth when coughing or sneezing to prevent the spread of germs.",
  preventionVaccines: "Stay Up to Date on Vaccines",
  preventionVaccinesDesc: "Vaccines are one of the safest and most effective ways to prevent serious diseases. Follow your local health authority's recommended immunization schedule.",
  preventionMentalHealth: "Protect Your Mental Health",
  preventionMentalHealthDesc: "Manage stress through meditation, deep breathing, or talking to someone you trust. Mental health is just as important as physical health for overall wellbeing.",
  preventionScreenings: "Get Regular Screenings",
  preventionScreeningsDesc: "Regular health screenings can detect conditions early when they are most treatable. Talk to your doctor about which screenings are appropriate for your age and risk factors.",
  preventionHydration: "Stay Hydrated",
  preventionHydrationDesc: "Drink at least 8 glasses of water daily. Proper hydration supports kidney function, helps maintain healthy skin, and keeps your body's systems running smoothly.",
  preventionSunProtection: "Protect Your Skin from Sun",
  preventionSunProtectionDesc: "Use sunscreen with SPF 30 or higher, wear protective clothing, and avoid peak sun hours (10 AM to 4 PM) to reduce your risk of skin cancer and premature aging.",
  preventionAvoidTobacco: "Avoid Tobacco and Limit Alcohol",
  preventionAvoidTobaccoDesc: "Smoking is the leading cause of preventable death. If you smoke, seek help to quit. Also, limit alcohol consumption to reduce your risk of liver disease, cancer, and other conditions.",
  
  // Lifestyle page body
  lifestyleEatBetter: "Eat Better",
  lifestyleEatBetterDesc: "Fuel your body with nutritious foods. Fill half your plate with fruits and vegetables, choose whole grains, and include lean proteins. Cooking at home gives you control over ingredients and portions.",
  lifestyleMoveMore: "Move More",
  lifestyleMoveMoreDesc: "Find activities you enjoy and make them part of your routine. Even 20 minutes of walking, dancing, or stretching can boost your mood, strengthen your heart, and improve your energy levels throughout the day.",
  lifestyleSleepWell: "Sleep Well",
  lifestyleSleepWellDesc: "Create a relaxing bedtime routine. Keep your room cool and dark, avoid screens before bed, and try to go to bed and wake up at the same time every day. Quality sleep is the foundation of good health.",
  lifestyleStayHydrated: "Stay Hydrated",
  lifestyleStayHydratedDesc: "Water is essential for every function in your body. Carry a water bottle, drink a glass of water first thing in the morning, and eat water-rich foods like cucumbers, watermelon, and oranges.",
  lifestyleManageStress: "Manage Stress",
  lifestyleManageStressDesc: "Chronic stress can harm your body and mind. Practice deep breathing, spend time in nature, journal your thoughts, or talk to a friend. Taking breaks throughout the day helps reset your focus.",
  lifestyleMaintainHygiene: "Maintain Good Hygiene",
  lifestyleMaintainHygieneDesc: "Simple daily habits like washing your hands, brushing your teeth twice a day, and keeping your living space clean can prevent infections and keep you feeling your best.",
  
  // Calendar page body
  calendarEventDetails: "Event Details",
  calendarIn: "In",
  calendarDays: "days",
  calendarPast: "Past",
  calendarNoEvents: "No events for this month",
  
  // Emergency page body
  emergencyCallEmergency: "Call Emergency Services",
  emergencyCallEmergencyDesc: "If you or someone nearby is experiencing a medical emergency, call your local emergency number (911 in the US, 112 in Europe, 108 in India) immediately.",
  emergencyWhenToCall: "When to Call Emergency Services",
  emergencyWhenToCallDesc: "Call immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, choking, or any life-threatening situation.",
  emergencyCPRTitle: "CPR Basics",
  emergencyCPRDesc: "If someone collapses and is not breathing normally: Call emergency services, place your hands in the center of their chest, push hard and fast at least 2 inches deep, at a rate of 100-120 compressions per minute.",
  emergencyChokingTitle: "Choking First Aid",
  emergencyChokingDesc: "For a conscious choking adult: Stand behind them, place your fist just above their navel, and give quick upward thrusts. For infants, use back blows and chest thrusts.",
  emergencyBleedingTitle: "Control Severe Bleeding",
  emergencyBleedingDesc: "Apply firm, direct pressure with a clean cloth or gauze. Do not remove the cloth if it soaks through — add more on top. Elevate the injured area above the heart if possible.",
  emergencyStrokeTitle: "FAST Stroke Recognition",
  emergencyStrokeDesc: "F — Face: Is one side drooping? A — Arms: Can they raise both arms? S — Speech: Is their speech slurred? T — Time: If any of these, call emergency services immediately.",
  emergencyBurnTitle: "Burn First Aid",
  emergencyBurnDesc: "Cool the burn under running cold water for at least 20 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean, non-fluffy dressing. Seek medical help for burns larger than your palm.",
  
  // Symptoms page body
  symptomsChestPain: "Chest pain or discomfort",
  symptomsShortBreath: "Shortness of breath",
  symptomsSevereHeadache: "Severe or sudden headache",
  symptomsHighFever: "High fever (above 103F/39.4C)",
  symptomsAbdominalPain: "Persistent abdominal pain",
  symptomsVisionChanges: "Sudden vision changes",
  symptomsFatigue: "Unexplained fatigue or weakness",
  symptomsJointPain: "Joint pain or swelling",
  symptomsRash: "Unexplained rash or skin changes",
  symptomsNausea: "Persistent nausea or vomiting",
  symptomsDizziness: "Dizziness or fainting",
  symptomsBackPain: "Severe back pain",
  symptomsSwelling: "Unexplained swelling",
  symptomsCough: "Persistent cough",
  symptomsInsomnia: "Difficulty sleeping",
  symptomsWeightChange: "Unexplained weight change",
  symptomsAnxiety: "Anxiety or panic attacks",
  symptomsAllergies: "Allergic reactions",
  
  // Footer body
  footerAbout: "About",
  footerAboutDesc: "Digital Health Awareness Portal provides reliable, evidence-based health information to help you make informed decisions about your wellbeing.",
  footerResources: "Resources",
  footerSupport: "Support",
  footerContactUs: "Contact Us",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerSitemap: "Sitemap",
  footerRights: "All rights reserved. For educational and awareness purposes only.",
  
  // Registration login extra
  regStep1Title: "Personal Information",
  regStep1Desc: "Tell us a bit about yourself",
  regProvideEmailOrPhone: "Please provide email or phone number",
  regAccountInfo: "Account Information",
  regCreateSecure: "Create a secure password for your account",
  regSecureNote: "Your account is stored locally on this device. No email verification needed.",
  regJoinDescription: "Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.",
  loginEmailOrPhone: "Email or Phone",
  loginPasswordLabel: "Password",
  loginNewUser: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",
  loginCreateOne: "Create one free",
  
  // AI Chat body
  aiDisclaimer: "Educational info only. Not medical advice.",
  
  // Language selector body
  langTitle: "Choose Your Language",
  langDesc: "Select your preferred language to continue. You can change it anytime.",

  loginDemoNote: "No OTP verification required. Sign in with just your credentials.",

};

const es: TranslationKeys = {
  home: "Inicio",
  campaigns: "Campañas",
  healthTopics: "Temas de Salud",
  symptoms: "Síntomas",
  prevention: "Prevención",
  lifestyle: "Estilo de Vida",
  calendar: "Calendario",
  articles: "Artículos",
  emergency: "Emergencia",
  signIn: "Iniciar sesión",
  register: "Registrarse",
  signOut: "Cerrar sesión",

  heroTitle: "Una Mejor Salud Comienza con Mejor Información.",
  heroSubtitle: "Descubra campañas de concienciación sobre salud, información confiable, orientación de prevención y recursos de estilo de vida saludable, todo en un solo lugar.",
  heroSearch: "Buscar información de salud...",
  exploreTopics: "Explorar Temas de Salud",
  exploreCampaigns: "Explorar Campañas",

  quickAccess: "Acceso Rápido",
  quickAccessDesc: "Encuentre la información de salud que necesita, organizada por tema.",
  featuredCampaigns: "Campañas Destacadas",
  featuredCampaignsDesc: "Descubra campañas que marcan la diferencia en la salud pública.",
  viewAll: "Ver Todo",
  healthTopicsTitle: "Explorar Temas de Salud",
  healthTopicsDesc: "Información basada en evidencia sobre condiciones de salud comunes y bienestar.",
  preventionLifestyle: "Prevención y Vida Saludable",
  preventionLifestyleDesc: "Pequeños hábitos diarios conducen a mejoras duraderas en la salud.",
  latestArticles: "Últimos Artículos de Salud",
  latestArticlesDesc: "Manténgase informado con información basada en evidencia.",
  healthCalendar: "Calendario de Concienciación de Salud",
  healthCalendarDesc: "Días importantes de salud y eventos de concienciación durante todo el año.",
  healthTip: "Consejo de Salud de Hoy",
  takeFirstStep: "Dé el Primer Paso Hacia una Mejor Salud.",
  takeFirstStepDesc: "Explore nuestros recursos integrales de salud y comience a tomar decisiones informadas sobre su bienestar hoy.",
  disclaimer: "La información proporcionada por el Portal de Concienciación de Salud Digital es solo para fines educativos generales y de concienciación. No sustituye el consejo médico profesional, el diagnóstico o el tratamiento.",

  learnAbout: "Aprenda sobre condiciones de salud comunes y preocupaciones.",
  discoverWays: "Descubra formas prácticas de reducir riesgos de salud.",
  learnTips: "Aprenda sobre nutrición, ejercicio, sueño y bienestar.",
  understandSymptoms: "Comprenda síntomas comunes y señales de advertencia.",
  exploreAwareness: "Explore campañas de concienciación e iniciativas de salud pública.",
  emergencyInfo: "Aprenda cuándo puede ser necesaria atención médica profesional urgente.",

  createAccount: "Cree su cuenta",
  startJourney: "Comience su viaje de concienciación de salud hoy",
  welcomeBack: "Bienvenido de nuevo",
  accessDashboard: "Inicie sesión para acceder a su panel de salud",
  fullName: "Nombre Completo",
  email: "Correo Electrónico",
  phone: "Teléfono",
  password: "Contraseña",
  confirmPassword: "Confirmar Contraseña",
  createPassword: "Crear Contraseña",
  reEnterPassword: "Reingrese su contraseña",
  alreadyHaveAccount: "¿Ya tiene una cuenta?",
  dontHaveAccount: "¿No tiene cuenta?",
  createOneFree: "Crear una gratis",
  signInInstead: "Iniciar sesión",
  noOTPRequired: "No se requiere verificación OTP.",
  continue_: "Continuar",
  createAcc: "Crear Cuenta",
  back: "Volver",
  continueWith: "Continuar",
  joinBenefits: "Únase a Miles que Priorizan Su Salud",
  benefit1: "Acceda a más de 12 temas de salud con información detallada",
  benefit2: "Guarde sus artículos y campañas favoritas",
  benefit3: "Rastree su viaje de bienestar con consejos diarios",
  passwordMin6: "La contraseña debe tener al menos 6 caracteres",
  passwordsMatch: "Las contraseñas no coinciden",
  enterEmailOrPhone: "Ingrese su correo o teléfono",
  enterPassword: "Ingrese su contraseña",
  accountStoredLocal: "Su cuenta se almacena localmente en este dispositivo.",
  newToPortal: "¿Nuevo en el portal?",

  welcome: "Bienvenido",
  memberSince: "Miembro desde",
  quickActions: "Acciones Rápidas",
  viewBookmarks: "Ver Marcadores",
  browseCampaigns: "Ver Campañas",
  readArticles: "Leer Artículos",
  healthyLifestyle: "Vida Saludable",
  symptomsGuide: "Guía de Síntomas",
  smallSteps: "Recuerde: Los Pasos Pequeños Llevan a Grandes Cambios",
  smallStepsDesc: "Comience con un hábito saludable hoy — beba más agua, dé un paseo o acuéstese a tiempo.",

  preventionTitle: "Guía de Prevención de Salud",
  preventionDesc: "La prevención es la primera línea de defensa para su salud.",
  preventionMessage: "Conciencia → Comprensión → Prevención → Acción Saludable",
  preventionMessageDesc: "Los pequeños hábitos diarios pueden reducir significativamente su riesgo de enfermedad crónica.",
  whenToSeekHelp: "Cuándo Buscar Ayuda Profesional",
  seekHelpDesc: "Si experimenta señales de advertencia, consulte a un profesional de la salud calificado inmediatamente.",

  lifestyleTitle: "Estilo de Vida Saludable",
  lifestyleDesc: "Los pequeños hábitos diarios conducen a mejoras duraderas en la salud.",
  sixPillars: "Seis Pilares de la Vida Saludable",
  sixPillarsDesc: "Estos hábitos fundamentales trabajan juntos para apoyar su salud general.",
  dailyRoutine: "Su Rutina Diaria Saludable",
  dailyRoutineDesc: "Estructure su día con hábitos saludables en cada etapa.",
  dailyTips: "Consejos de Salud Diarios",
  dailyTipsDesc: "Consejos rápidos y accionables para mejorar su salud cada día.",
  morning: "Mañana",
  afternoon: "Tarde",
  evening: "Noche",
  night: "Noche",

  calendarTitle: "Calendario de Concienciación de Salud",
  calendarDesc: "Días importantes de salud y eventos de concienciación durante todo el año.",
  allMonths: "Todos los Meses",

  emergencyTitle: "Concienciación de Emergencia",
  emergencyDesc: "Aprenda a reconocer emergencias médicas y cuándo buscar ayuda profesional inmediata.",
  emergencyCallNow: "Si esta es una emergencia médica, llame a su número de emergencia local inmediatamente",
  emergencyCallDesc: "Llame a su número de emergencia local inmediatamente si usted u otra persona experimenta:",
  recognizeEmergencies: "Reconociendo Emergencias",
  recognizeDesc: "Conozca las señales de advertencia que requieren atención médica inmediata.",
  firstAidBasics: "Primeros Auxilios Básicos",
  firstAidDesc: "Conocimientos esenciales de primeros auxilios que todos deben saber.",
  learnMoreConditions: "Aprender Más Sobre Condiciones de Salud",

  symptomsTitle: "Síntomas y Señales de Advertencia",
  symptomsDesc: "Aprenda a reconocer síntomas comunes y cuándo pueden requerir atención médica.",
  urgencyLevels: "Niveles de urgencia:",
  seekImmediateHelp: "Busque ayuda inmediata",
  seeDoctorSoon: "Consulte a un doctor pronto",
  monitorAndDiscuss: "Monitoree y discuta",
  allSystems: "Todos los Sistemas",
  whenInDoubt: "En Caso de Duda, Busque Ayuda",
  whenInDoubtDesc: "Si experimenta síntomas severos, no espere — contacte a un profesional de salud inmediatamente.",

  searchTitle: "Buscar Información de Salud",
  searchDesc: "Encuentre temas, campañas y artículos de salud en toda nuestra plataforma.",
  searchPlaceholder: "Buscar temas de salud, campañas, artículos...",
  enterSearchTerm: "Ingrese un término de búsqueda",
  enterSearchDesc: "Busque en temas de salud, campañas y artículos",
  noResults: "No se encontraron resultados",
  tryDifferent: "Intente con diferentes palabras clave.",
  resultsFor: "resultados para",

  aboutTitle: "Sobre Nosotros",
  mission: "Nuestra Misión",
  missionDesc1: "El Portal de Concienciación de Salud Digital fue creado con una misión clara: hacer que la información de salud confiable sea fácil de descubrir y entender para todos.",
  missionDesc2: "Creemos que el conocimiento es el primer paso hacia una mejor salud.",
  missionDesc3: "Nuestra plataforma se centra en el viaje de la Conciencia a la Comprensión, la Prevención y la Acción Saludable.",
  ourValues: "Nuestros Valores",
  evidenceBased: "Basado en Evidencia",
  evidenceBasedDesc: "Toda la información está basada en investigación y directrices de salud pública establecidas.",
  accessible: "Accesible",
  accessibleDesc: "Hacemos que la información de salud compleja sea fácil de entender y accesible para todos.",
  globalPerspective: "Perspectiva Global",
  globalPerspectiveDesc: "Nuestro contenido aborda los desafíos de salud desde una perspectiva mundial.",
  communityFocused: "Enfocado en la Comunidad",
  communityFocusedDesc: "Empoderamos a las comunidades para que tomen el control de su salud.",
  educational: "Educacional",
  educationalDesc: "Nuestra misión es informar y educar, nunca diagnosticar o reemplazar el consejo médico profesional.",
  trustworthy: "Confiable",
  trustworthyDesc: "Mantenemos los más altos estándares de precisión y transparencia.",
  importantNotice: "Aviso Importante",
  importantNoticeDesc: "El Portal de Concienciación de Salud Digital es una plataforma educativa. No sustituye el consejo médico profesional.",

  contactTitle: "Contáctenos",
  contactDesc: "¿Tiene preguntas, sugerencias o quiere colaborar? Nos encantaría escuchar de usted.",
  getInTouch: "Póngase en Contacto",
  name: "Nombre",
  subject: "Asunto",
  message: "Mensaje",
  selectTopic: "Seleccione un tema",
  generalInquiry: "Consulta General",
  contentFeedback: "Retroalimentación de Contenido",
  collaboration: "Asociación / Colaboración",
  reportError: "Reportar un Error",
  other: "Otro",
  howCanWeHelp: "¿Cómo podemos ayudarle?",
  sendMessage: "Enviar Mensaje",
  messageSent: "¡Mensaje Enviado!",
  messageSentDesc: "Gracias por contactarnos. Le responderemos en 2-3 días hábiles.",
  sendAnother: "Enviar Otro Mensaje",
  responseTime: "Normalmente respondemos dentro de 2-3 días hábiles.",

  bookmarksTitle: "Sus Marcadores",
  bookmarksDesc: "Acceda a sus temas, campañas y artículos guardados.",
  savedItems: "Elementos Guardados",
  allSaved: "guardados",
  noBookmarksYet: "Aún no hay marcadores",
  noBookmarksDesc: "Guarde temas de salud, campañas y artículos para acceso rápido.",
  saveItems: "Guardar",
  browseTopics: "Explorar Temas",

  aiChatTitle: "Asistente de Salud",
  aiChatDesc: "Pregúnteme cualquier cosa sobre temas de salud",
  aiPlaceholder: "Escriba su pregunta de salud...",
  aiWelcome: "¡Hola! Soy su Asistente de Salud.",
  aiWelcomeDesc: "Pregúnteme sobre síntomas, prevención, vida saludable o cualquier tema de salud.",

  cameraTitle: "Verificación de Foto de Salud",
  cameraDesc: "Tome una foto de una condición de la piel y obtenga orientación general",
  cameraAccess: "Habilitar Cámara",
  takePhoto: "Tomar Foto",
  analyzePhoto: "Analizar Foto",
  analyzing: "Analizando su foto...",
  analysisResult: "Resultado del Análisis",

  findDoctors: "Encontrar Doctores Cercanos",
  findDoctorsDesc: "Localice instalaciones de salud cerca de usted",
  nearestDoctors: "Instalaciones de Salud Cercanas",
  kmAway: "km de distancia",

  learnMore: "Más información",
  disclaimerText: "La información proporcionada es solo para fines educativos generales.",
  language: "Idioma",
  chooseLanguage: "Elija Su Idioma",
  chooseLanguageDesc: "Seleccione su idioma preferido para la mejor experiencia",
  getStarted: "Comenzar",// Home page body content
  trustedHealthPlatform: "Trusted Health Information Platform",
  topicsCount: "12+ Topics",
  topicsCountDesc: "Trusted Info",
  aiAssistantLabel: "AI Assistant",
  aiAssistantDesc: "24/7 Help",
  homeLearnAbout: "Learn about common health conditions and health concerns.",
  homeDiscoverWays: "Discover practical ways to reduce health risks.",
  homeLearnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeUnderstandSymptoms: "Understand common symptoms and warning signs.",
  homeExploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  homeEmergencyInfo: "Learn when urgent professional medical attention may be needed.",
  homeCardTopicsDesc: "Learn about common health conditions and health concerns.",
  homeCardPreventionDesc: "Discover practical ways to reduce health risks.",
  homeCardLifestyleDesc: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeCardSymptomsDesc: "Understand common symptoms and warning signs.",
  homeCardCampaignsDesc: "Explore awareness campaigns and public-health initiatives.",
  homeCardEmergencyDesc: "Learn when urgent professional medical attention may be needed.",
  homeTipDesc: "A quick wellness tip to brighten your day.",
  homeStartYourJourney: "Start Your Health Journey Today",
  homeStartDesc: "Join thousands of people who are making better health choices every day. Create your free account to get personalized tips, save your favorite articles, and track your wellness progress.",
  homeJoinNow: "Join Now — It's Free",
  homeReadArticles: "Read the latest health articles and research-backed insights.",
  homeReadArticlesDesc: "Stay informed with the latest health news and expert advice.",
  homeViewAllEvents: "View all upcoming health awareness events and campaigns.",
  homeViewAllEventsDesc: "Never miss an important health awareness day.",
  
  // About page
  aboutSubtitle: "Our mission is to make reliable health information accessible to everyone, everywhere.",
  missionTitle: "Our Mission",
  missionDesc: "We believe that everyone deserves access to trustworthy health information. Our portal is designed to bridge the gap between complex medical knowledge and everyday understanding, empowering individuals to make informed decisions about their health and wellbeing.",
  valuesTitle: "Our Values",
  valueEvidence: "Evidence-Based",
  valueEvidenceDesc: "All our content is reviewed by healthcare professionals and based on the latest medical research and guidelines.",
  valueAccessible: "Accessible to All",
  valueAccessibleDesc: "We present health information in simple, easy-to-understand language that anyone can follow, regardless of their background.",
  valueCommunity: "Community Focused",
  valueCommunityDesc: "We are committed to building a healthier community by spreading awareness and promoting preventive health practices.",
  educationalDisclaimer: "This platform is for educational and awareness purposes only. It does not provide medical diagnosis, treatment, or professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
  
  // Contact page
  contactSubtitle: "Have questions or feedback? We would love to hear from you. Our team is here to help.",
  contactInfo: "Contact Information",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactSubject: "Subject",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message Sent!",
  contactSentDesc: "Thank you for reaching out. We will get back to you within 24 hours.",
  contactPhoneLabel: "Phone",
  contactEmailLabel: "Email",
  contactHoursLabel: "Hours",
  contactResponseTime: "Response Time",
  contactResponseDesc: "We typically respond within 24 hours on business days.",
  
  // Bookmarks page
  noBookmarks: "No bookmarks yet",
  allItems: "All Items",
  remove: "Remove",
  
  // Search page
  searchResults: "Search Results",
  noResultsDesc: "Try different keywords or browse our categories to find what you are looking for.",
  searchingFor: "Searching for",
  
  // Dashboard body
  dashWelcome: "Welcome back",
  dashWelcomeDesc: "Here is your health dashboard. Track your progress and explore new content.",
  dashStats: "Your Stats",
  dashSaved: "Saved Items",
  dashTopicsExplored: "Topics",
  dashArticlesRead: "Articles",
  dashQuickActions: "Quick Actions",
  dashBrowseTopics: "Browse Topics",
  dashBrowseTopicsDesc: "Explore 12+ health topics",
  dashViewBookmarks: "View Bookmarks",
  dashViewBookmarksDesc: "Access your saved content",
  dashBrowseArticles: "Read Articles",
  dashBrowseArticlesDesc: "Latest health insights",
  dashDailyTip: "Today's Wellness Tip",
  dashLearnPrevention: "Prevention Guide",
  dashLearnPreventionDesc: "Practical health tips",
  dashLifestyle: "Healthy Lifestyle",
  dashLifestyleDesc: "Daily wellness habits",
  dashCheckSymptoms: "Check Symptoms",
  dashCheckSymptomsDesc: "Understand warning signs",
  
  // Prevention page body
  preventionEatWell: "Eat Well",
  preventionEatWellDesc: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is one of the most powerful tools for disease prevention. Limit processed foods, sugar, and excessive sodium.",
  preventionExercise: "Exercise Regularly",
  preventionExerciseDesc: "Aim for at least 150 minutes of moderate physical activity per week. Walking, cycling, swimming, or any activity you enjoy can significantly reduce your risk of chronic diseases.",
  preventionSleep: "Prioritize Sleep",
  preventionSleepDesc: "Adults need 7-9 hours of quality sleep each night. Good sleep strengthens your immune system, improves memory, and reduces the risk of heart disease and diabetes.",
  preventionHygiene: "Practice Good Hygiene",
  preventionHygieneDesc: "Wash your hands frequently with soap and water, especially before eating and after using the bathroom. Cover your mouth when coughing or sneezing to prevent the spread of germs.",
  preventionVaccines: "Stay Up to Date on Vaccines",
  preventionVaccinesDesc: "Vaccines are one of the safest and most effective ways to prevent serious diseases. Follow your local health authority's recommended immunization schedule.",
  preventionMentalHealth: "Protect Your Mental Health",
  preventionMentalHealthDesc: "Manage stress through meditation, deep breathing, or talking to someone you trust. Mental health is just as important as physical health for overall wellbeing.",
  preventionScreenings: "Get Regular Screenings",
  preventionScreeningsDesc: "Regular health screenings can detect conditions early when they are most treatable. Talk to your doctor about which screenings are appropriate for your age and risk factors.",
  preventionHydration: "Stay Hydrated",
  preventionHydrationDesc: "Drink at least 8 glasses of water daily. Proper hydration supports kidney function, helps maintain healthy skin, and keeps your body's systems running smoothly.",
  preventionSunProtection: "Protect Your Skin from Sun",
  preventionSunProtectionDesc: "Use sunscreen with SPF 30 or higher, wear protective clothing, and avoid peak sun hours (10 AM to 4 PM) to reduce your risk of skin cancer and premature aging.",
  preventionAvoidTobacco: "Avoid Tobacco and Limit Alcohol",
  preventionAvoidTobaccoDesc: "Smoking is the leading cause of preventable death. If you smoke, seek help to quit. Also, limit alcohol consumption to reduce your risk of liver disease, cancer, and other conditions.",
  
  // Lifestyle page body
  lifestyleEatBetter: "Eat Better",
  lifestyleEatBetterDesc: "Fuel your body with nutritious foods. Fill half your plate with fruits and vegetables, choose whole grains, and include lean proteins. Cooking at home gives you control over ingredients and portions.",
  lifestyleMoveMore: "Move More",
  lifestyleMoveMoreDesc: "Find activities you enjoy and make them part of your routine. Even 20 minutes of walking, dancing, or stretching can boost your mood, strengthen your heart, and improve your energy levels throughout the day.",
  lifestyleSleepWell: "Sleep Well",
  lifestyleSleepWellDesc: "Create a relaxing bedtime routine. Keep your room cool and dark, avoid screens before bed, and try to go to bed and wake up at the same time every day. Quality sleep is the foundation of good health.",
  lifestyleStayHydrated: "Stay Hydrated",
  lifestyleStayHydratedDesc: "Water is essential for every function in your body. Carry a water bottle, drink a glass of water first thing in the morning, and eat water-rich foods like cucumbers, watermelon, and oranges.",
  lifestyleManageStress: "Manage Stress",
  lifestyleManageStressDesc: "Chronic stress can harm your body and mind. Practice deep breathing, spend time in nature, journal your thoughts, or talk to a friend. Taking breaks throughout the day helps reset your focus.",
  lifestyleMaintainHygiene: "Maintain Good Hygiene",
  lifestyleMaintainHygieneDesc: "Simple daily habits like washing your hands, brushing your teeth twice a day, and keeping your living space clean can prevent infections and keep you feeling your best.",
  
  // Calendar page body
  calendarEventDetails: "Event Details",
  calendarIn: "In",
  calendarDays: "days",
  calendarPast: "Past",
  calendarNoEvents: "No events for this month",
  
  // Emergency page body
  emergencyCallEmergency: "Call Emergency Services",
  emergencyCallEmergencyDesc: "If you or someone nearby is experiencing a medical emergency, call your local emergency number (911 in the US, 112 in Europe, 108 in India) immediately.",
  emergencyWhenToCall: "When to Call Emergency Services",
  emergencyWhenToCallDesc: "Call immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, choking, or any life-threatening situation.",
  emergencyCPRTitle: "CPR Basics",
  emergencyCPRDesc: "If someone collapses and is not breathing normally: Call emergency services, place your hands in the center of their chest, push hard and fast at least 2 inches deep, at a rate of 100-120 compressions per minute.",
  emergencyChokingTitle: "Choking First Aid",
  emergencyChokingDesc: "For a conscious choking adult: Stand behind them, place your fist just above their navel, and give quick upward thrusts. For infants, use back blows and chest thrusts.",
  emergencyBleedingTitle: "Control Severe Bleeding",
  emergencyBleedingDesc: "Apply firm, direct pressure with a clean cloth or gauze. Do not remove the cloth if it soaks through — add more on top. Elevate the injured area above the heart if possible.",
  emergencyStrokeTitle: "FAST Stroke Recognition",
  emergencyStrokeDesc: "F — Face: Is one side drooping? A — Arms: Can they raise both arms? S — Speech: Is their speech slurred? T — Time: If any of these, call emergency services immediately.",
  emergencyBurnTitle: "Burn First Aid",
  emergencyBurnDesc: "Cool the burn under running cold water for at least 20 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean, non-fluffy dressing. Seek medical help for burns larger than your palm.",
  
  // Symptoms page body
  symptomsChestPain: "Chest pain or discomfort",
  symptomsShortBreath: "Shortness of breath",
  symptomsSevereHeadache: "Severe or sudden headache",
  symptomsHighFever: "High fever (above 103F/39.4C)",
  symptomsAbdominalPain: "Persistent abdominal pain",
  symptomsVisionChanges: "Sudden vision changes",
  symptomsFatigue: "Unexplained fatigue or weakness",
  symptomsJointPain: "Joint pain or swelling",
  symptomsRash: "Unexplained rash or skin changes",
  symptomsNausea: "Persistent nausea or vomiting",
  symptomsDizziness: "Dizziness or fainting",
  symptomsBackPain: "Severe back pain",
  symptomsSwelling: "Unexplained swelling",
  symptomsCough: "Persistent cough",
  symptomsInsomnia: "Difficulty sleeping",
  symptomsWeightChange: "Unexplained weight change",
  symptomsAnxiety: "Anxiety or panic attacks",
  symptomsAllergies: "Allergic reactions",
  
  // Footer body
  footerAbout: "About",
  footerAboutDesc: "Digital Health Awareness Portal provides reliable, evidence-based health information to help you make informed decisions about your wellbeing.",
  footerResources: "Resources",
  footerSupport: "Support",
  footerContactUs: "Contact Us",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerSitemap: "Sitemap",
  footerRights: "All rights reserved. For educational and awareness purposes only.",
  
  // Registration login extra
  regStep1Title: "Personal Information",
  regStep1Desc: "Tell us a bit about yourself",
  regProvideEmailOrPhone: "Please provide email or phone number",
  regAccountInfo: "Account Information",
  regCreateSecure: "Create a secure password for your account",
  regSecureNote: "Your account is stored locally on this device. No email verification needed.",
  regJoinDescription: "Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.",
  loginEmailOrPhone: "Email or Phone",
  loginPasswordLabel: "Password",
  loginNewUser: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",
  loginCreateOne: "Create one free",
  
  // AI Chat body
  aiDisclaimer: "Educational info only. Not medical advice.",
  
  // Language selector body
  langTitle: "Choose Your Language",
  langDesc: "Select your preferred language to continue. You can change it anytime.",

  loginDemoNote: "No OTP verification required. Sign in with just your credentials.",

};

const fr: TranslationKeys = {
  home: "Accueil",
  campaigns: "Campagnes",
  healthTopics: "Thèmes de Santé",
  symptoms: "Symptômes",
  prevention: "Prévention",
  lifestyle: "Mode de Vie",
  calendar: "Calendrier",
  articles: "Articles",
  emergency: "Urgence",
  signIn: "Se connecter",
  register: "S'inscrire",
  signOut: "Déconnexion",

  heroTitle: "Une Meilleure Santé Commence par de Meilleures Informations.",
  heroSubtitle: "Découvrez des campagnes de sensibilisation à la santé, des informations fiables, des conseils de prévention et des ressources de mode de vie sain, le tout au même endroit.",
  heroSearch: "Rechercher des informations de santé...",
  exploreTopics: "Explorer les Thèmes de Santé",
  exploreCampaigns: "Explorer les Campagnes",

  quickAccess: "Accès Rapide",
  quickAccessDesc: "Trouvez les informations de santé dont vous avez besoin, organisées par thème.",
  featuredCampaigns: "Campagnes en Vedette",
  featuredCampaignsDesc: "Découvrez les campagnes qui font la différence dans la santé publique.",
  viewAll: "Tout Voir",
  healthTopicsTitle: "Explorer les Thèmes de Santé",
  healthTopicsDesc: "Informations fondées sur des preuves sur les conditions de santé courantes et le bien-être.",
  preventionLifestyle: "Prévention et Vie Saine",
  preventionLifestyleDesc: "De petits habitudes quotidiennes mènent à des améliorations durables de la santé.",
  latestArticles: "Derniers Articles de Santé",
  latestArticlesDesc: "Restez informé avec des informations fondées sur des preuves.",
  healthCalendar: "Calendrier de Sensibilisation à la Santé",
  healthCalendarDesc: "Jours importants de santé et événements de sensibilisation tout au long de l'année.",
  healthTip: "Conseil Santé du Jour",
  takeFirstStep: "Faites le Premier Pas vers une Meilleure Santé.",
  takeFirstStepDesc: "Explorez nos ressources de santé complètes et commencez à prendre des décisions éclairées sur votre bien-être aujourd'hui.",
  disclaimer: "Les informations fournies par le Portail de Sensibilisation à la Santé Numérique sont uniquement à des fins éducatives et de sensibilisation générales.",

  learnAbout: "Apprenez sur les conditions de santé courantes.",
  discoverWays: "Découvrez des moyens pratiques de réduire les risques pour la santé.",
  learnTips: "Apprenez sur la nutrition, l'exercice, le sommeil et le bien-être.",
  understandSymptoms: "Comprenez les symptômes courants et les signes d'alerte.",
  exploreAwareness: "Explorez les campagnes de sensibilisation.",
  emergencyInfo: "Apprenez quand une attention médicale professionnelle urgente peut être nécessaire.",

  createAccount: "Créez votre compte",
  startJourney: "Commencez votre parcours de sensibilisation à la santé aujourd'hui",
  welcomeBack: "Bon retour",
  accessDashboard: "Connectez-vous pour accéder à votre tableau de bord santé",
  fullName: "Nom Complet",
  email: "Adresse E-mail",
  phone: "Téléphone",
  password: "Mot de Passe",
  confirmPassword: "Confirmer le Mot de Passe",
  createPassword: "Créer un Mot de Passe",
  reEnterPassword: "Ressaisissez votre mot de passe",
  alreadyHaveAccount: "Vous avez déjà un compte?",
  dontHaveAccount: "Vous n'avez pas de compte?",
  createOneFree: "Créer un compte gratuit",
  signInInstead: "Se connecter",
  noOTPRequired: "Aucune vérification OTP requise.",
  continue_: "Continuer",
  createAcc: "Créer le Compte",
  back: "Retour",
  continueWith: "Continuer",
  joinBenefits: "Rejoignez des Milliers qui Priorisent Leur Santé",
  benefit1: "Accédez à 12+ thèmes de santé avec des informations détaillées",
  benefit2: "Sauvegardez vos articles et campagnes préférés",
  benefit3: "Suivez votre parcours de bien-être avec des conseils quotidiens",
  passwordMin6: "Le mot de passe doit contenir au moins 6 caractères",
  passwordsMatch: "Les mots de passe ne correspondent pas",
  enterEmailOrPhone: "Veuillez entrer votre e-mail ou téléphone",
  enterPassword: "Veuillez entrer votre mot de passe",
  accountStoredLocal: "Votre compte est stocké localement sur cet appareil.",
  newToPortal: "Nouveau sur le portail?",

  welcome: "Bienvenue",
  memberSince: "Membre depuis",
  quickActions: "Actions Rapides",
  viewBookmarks: "Voir les Signets",
  browseCampaigns: "Voir les Campagnes",
  readArticles: "Lire les Articles",
  healthyLifestyle: "Mode de Vie Sain",
  symptomsGuide: "Guide des Symptômes",
  smallSteps: "Rappelez-vous: Les Petits Pas Mènent à de Grands Changements",
  smallStepsDesc: "Commencez par une habitude saine aujourd'hui — buvez plus d'eau, faites une promenade ou allez dormir à l'heure.",

  preventionTitle: "Guide de Prévention de la Santé",
  preventionDesc: "La prévention est la première ligne de défense pour votre santé.",
  preventionMessage: "Sensibilisation → Compréhension → Prévention → Action Salubre",
  preventionMessageDesc: "De petits habitudes quotidiennes peuvent réduire considérablement votre risque de maladie chronique.",
  whenToSeekHelp: "Quand Chercher de l'Aide Professionnelle",
  seekHelpDesc: "Si vous ressentez des signes d'alerte, consultez immédiatement un professionnel de santé qualifié.",

  lifestyleTitle: "Mode de Vie Sain",
  lifestyleDesc: "De petits habitudes quotidiennes mènent à des améliorations durables de la santé.",
  sixPillars: "Six Piliers d'une Vie Saine",
  sixPillarsDesc: "Ces habitudes fondamentales travaillent ensemble pour soutenir votre santé globale.",
  dailyRoutine: "Votre Routine Quotidienne Saine",
  dailyRoutineDesc: "Structurez votre journée avec des habitudes saines à chaque étape.",
  dailyTips: "Conseils Santé Quotidiens",
  dailyTipsDesc: "Conseils rapides et pratiques pour améliorer votre santé chaque jour.",
  morning: "Matin",
  afternoon: "Après-midi",
  evening: "Soir",
  night: "Nuit",

  calendarTitle: "Calendrier de Sensibilisation à la Santé",
  calendarDesc: "Jours importants de santé et événements de sensibilisation tout au long de l'année.",
  allMonths: "Tous les Mois",

  emergencyTitle: "Sensibilisation aux Urgences",
  emergencyDesc: "Apprenez à reconnaître les urgences médicales et quand chercher une aide professionnelle immédiate.",
  emergencyCallNow: "S'il s'agit d'une urgence médicale, appelez immédiatement votre numéro d'urgence local",
  emergencyCallDesc: "Appelez immédiatement votre numéro d'urgence si vous ou quelqu'un d'autre:",
  recognizeEmergencies: "Reconnaître les Urgences",
  recognizeDesc: "Connaître les signes d'alerte nécessitant une attention médicale immédiate.",
  firstAidBasics: "Bases des Premiers Secours",
  firstAidDesc: "Connaissances essentielles de premiers secours que tout le monde devrait connaître.",
  learnMoreConditions: "En Savoir Plus sur les Conditions de Santé",

  symptomsTitle: "Symptômes et Signes d'Alerte",
  symptomsDesc: "Apprenez à reconnaître les symptômes courants et quand ils peuvent nécessiter une attention médicale.",
  urgencyLevels: "Niveaux d'urgence:",
  seekImmediateHelp: "Cherchez une aide immédiate",
  seeDoctorSoon: "Consultez un médecin bientôt",
  monitorAndDiscuss: "Surveillez et discutez",
  allSystems: "Tous les Systèmes",
  whenInDoubt: "En Cas de Doute, Cherchez de l'Aide",
  whenInDoubtDesc: "Si vous ressentez des symptômes graves, n'attendez pas — contactez immédiatement un professionnel de santé.",

  searchTitle: "Rechercher des Informations de Santé",
  searchDesc: "Trouvez des thèmes, campagnes et articles de santé sur toute notre plateforme.",
  searchPlaceholder: "Rechercher des thèmes de santé, campagnes, articles...",
  enterSearchTerm: "Entrez un terme de recherche",
  enterSearchDesc: "Recherchez dans les thèmes de santé, campagnes et articles",
  noResults: "Aucun résultat trouvé",
  tryDifferent: "Essayez avec différents mots-clés.",
  resultsFor: "résultats pour",

  aboutTitle: "À Propos de Nous",
  mission: "Notre Mission",
  missionDesc1: "Le Portail de Sensibilisation à la Santé Numérique a été créé avec une mission claire: rendre les informations de santé fiables faciles à découvrir et à comprendre pour tous.",
  missionDesc2: "Nous croyons que la connaissance est le premier pas vers une meilleure santé.",
  missionDesc3: "Notre plateforme se concentre sur le voyage de la Sensibilisation à la Compréhension, la Prévention et l'Action Salubre.",
  ourValues: "Nos Valeurs",
  evidenceBased: "Basé sur les Preuves",
  evidenceBasedDesc: "Toutes les informations sont basées sur la recherche et les directives de santé publique établies.",
  accessible: "Accessible",
  accessibleDesc: "Nous rendons les informations de santé complexes faciles à comprendre et accessibles à tous.",
  globalPerspective: "Perspective Mondiale",
  globalPerspectiveDesc: "Notre contenu aborde les défis de santé du point de vue mondial.",
  communityFocused: "Axé sur la Communauté",
  communityFocusedDesc: "Nous autonomisons les communautés pour prendre en main leur santé.",
  educational: "Éducatif",
  educationalDesc: "Notre mission est d'informer et d'éduquer, jamais de diagnostiquer ou de remplacer un conseil médical professionnel.",
  trustworthy: "Fiable",
  trustworthyDesc: "Nous maintenons les plus hauts standards de précision et de transparence.",
  importantNotice: "Avis Important",
  importantNoticeDesc: "Le Portail de Sensibilisation à la Santé Numérique est une plateforme éducative. Il ne remplace pas un conseil médical professionnel.",

  contactTitle: "Contactez-Nous",
  contactDesc: "Des questions, des suggestions ou vous voulez collaborer? Nous serions ravis de vous entendre.",
  getInTouch: "Restez en Contact",
  name: "Nom",
  subject: "Sujet",
  message: "Message",
  selectTopic: "Sélectionnez un sujet",
  generalInquiry: "Demande Générale",
  contentFeedback: "Retour sur le Contenu",
  collaboration: "Partenariat / Collaboration",
  reportError: "Signaler une Erreur",
  other: "Autre",
  howCanWeHelp: "Comment pouvons-nous vous aider?",
  sendMessage: "Envoyer le Message",
  messageSent: "Message Envoyé!",
  messageSentDesc: "Merci de nous avoir contactés. Nous vous répondrons dans 2-3 jours ouvrables.",
  sendAnother: "Envoyer un Autre Message",
  responseTime: "Nous répondons généralement dans les 2-3 jours ouvrables.",

  bookmarksTitle: "Vos Signets",
  bookmarksDesc: "Accédez à vos thèmes, campagnes et articles enregistrés.",
  savedItems: "Éléments Enregistrés",
  allSaved: "enregistrés",
  noBookmarksYet: "Pas encore de signets",
  noBookmarksDesc: "Enregistrez des thèmes de santé, campagnes et articles pour un accès rapide.",
  saveItems: "Enregistrer",
  browseTopics: "Explorer les Thèmes",

  aiChatTitle: "Assistant Santé",
  aiChatDesc: "Demandez-moi n'importe quoi sur les thèmes de santé",
  aiPlaceholder: "Tapez votre question de santé...",
  aiWelcome: "Bonjour! Je suis votre Assistant Santé.",
  aiWelcomeDesc: "Demandez-moi sur les symptômes, la prévention, la vie saine ou tout thème de santé.",

  cameraTitle: "Vérification Photo de Santé",
  cameraDesc: "Prenez une photo d'un problème de peau et obtenez des conseils généraux",
  cameraAccess: "Activer la Caméra",
  takePhoto: "Prendre une Photo",
  analyzePhoto: "Analyser la Photo",
  analyzing: "Analyse de votre photo...",
  analysisResult: "Résultat de l'Analyse",

  findDoctors: "Trouver des Médecins Proches",
  findDoctorsDesc: "Localisez les installations de santé près de vous",
  nearestDoctors: "Installations de Santé Proches",
  kmAway: "km de distance",

  learnMore: "En savoir plus",
  disclaimerText: "Les informations fournies sont uniquement à des fins éducatives générales.",
  language: "Langue",
  chooseLanguage: "Choisissez Votre Langue",
  chooseLanguageDesc: "Sélectionnez votre langue préférée pour la meilleure expérience",
  getStarted: "Commencer",// Home page body content
  trustedHealthPlatform: "Trusted Health Information Platform",
  topicsCount: "12+ Topics",
  topicsCountDesc: "Trusted Info",
  aiAssistantLabel: "AI Assistant",
  aiAssistantDesc: "24/7 Help",
  homeLearnAbout: "Learn about common health conditions and health concerns.",
  homeDiscoverWays: "Discover practical ways to reduce health risks.",
  homeLearnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeUnderstandSymptoms: "Understand common symptoms and warning signs.",
  homeExploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  homeEmergencyInfo: "Learn when urgent professional medical attention may be needed.",
  homeCardTopicsDesc: "Learn about common health conditions and health concerns.",
  homeCardPreventionDesc: "Discover practical ways to reduce health risks.",
  homeCardLifestyleDesc: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeCardSymptomsDesc: "Understand common symptoms and warning signs.",
  homeCardCampaignsDesc: "Explore awareness campaigns and public-health initiatives.",
  homeCardEmergencyDesc: "Learn when urgent professional medical attention may be needed.",
  homeTipDesc: "A quick wellness tip to brighten your day.",
  homeStartYourJourney: "Start Your Health Journey Today",
  homeStartDesc: "Join thousands of people who are making better health choices every day. Create your free account to get personalized tips, save your favorite articles, and track your wellness progress.",
  homeJoinNow: "Join Now — It's Free",
  homeReadArticles: "Read the latest health articles and research-backed insights.",
  homeReadArticlesDesc: "Stay informed with the latest health news and expert advice.",
  homeViewAllEvents: "View all upcoming health awareness events and campaigns.",
  homeViewAllEventsDesc: "Never miss an important health awareness day.",
  
  // About page
  aboutSubtitle: "Our mission is to make reliable health information accessible to everyone, everywhere.",
  missionTitle: "Our Mission",
  missionDesc: "We believe that everyone deserves access to trustworthy health information. Our portal is designed to bridge the gap between complex medical knowledge and everyday understanding, empowering individuals to make informed decisions about their health and wellbeing.",
  valuesTitle: "Our Values",
  valueEvidence: "Evidence-Based",
  valueEvidenceDesc: "All our content is reviewed by healthcare professionals and based on the latest medical research and guidelines.",
  valueAccessible: "Accessible to All",
  valueAccessibleDesc: "We present health information in simple, easy-to-understand language that anyone can follow, regardless of their background.",
  valueCommunity: "Community Focused",
  valueCommunityDesc: "We are committed to building a healthier community by spreading awareness and promoting preventive health practices.",
  educationalDisclaimer: "This platform is for educational and awareness purposes only. It does not provide medical diagnosis, treatment, or professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
  
  // Contact page
  contactSubtitle: "Have questions or feedback? We would love to hear from you. Our team is here to help.",
  contactInfo: "Contact Information",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactSubject: "Subject",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message Sent!",
  contactSentDesc: "Thank you for reaching out. We will get back to you within 24 hours.",
  contactPhoneLabel: "Phone",
  contactEmailLabel: "Email",
  contactHoursLabel: "Hours",
  contactResponseTime: "Response Time",
  contactResponseDesc: "We typically respond within 24 hours on business days.",
  
  // Bookmarks page
  noBookmarks: "No bookmarks yet",
  allItems: "All Items",
  remove: "Remove",
  
  // Search page
  searchResults: "Search Results",
  noResultsDesc: "Try different keywords or browse our categories to find what you are looking for.",
  searchingFor: "Searching for",
  
  // Dashboard body
  dashWelcome: "Welcome back",
  dashWelcomeDesc: "Here is your health dashboard. Track your progress and explore new content.",
  dashStats: "Your Stats",
  dashSaved: "Saved Items",
  dashTopicsExplored: "Topics",
  dashArticlesRead: "Articles",
  dashQuickActions: "Quick Actions",
  dashBrowseTopics: "Browse Topics",
  dashBrowseTopicsDesc: "Explore 12+ health topics",
  dashViewBookmarks: "View Bookmarks",
  dashViewBookmarksDesc: "Access your saved content",
  dashBrowseArticles: "Read Articles",
  dashBrowseArticlesDesc: "Latest health insights",
  dashDailyTip: "Today's Wellness Tip",
  dashLearnPrevention: "Prevention Guide",
  dashLearnPreventionDesc: "Practical health tips",
  dashLifestyle: "Healthy Lifestyle",
  dashLifestyleDesc: "Daily wellness habits",
  dashCheckSymptoms: "Check Symptoms",
  dashCheckSymptomsDesc: "Understand warning signs",
  
  // Prevention page body
  preventionEatWell: "Eat Well",
  preventionEatWellDesc: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is one of the most powerful tools for disease prevention. Limit processed foods, sugar, and excessive sodium.",
  preventionExercise: "Exercise Regularly",
  preventionExerciseDesc: "Aim for at least 150 minutes of moderate physical activity per week. Walking, cycling, swimming, or any activity you enjoy can significantly reduce your risk of chronic diseases.",
  preventionSleep: "Prioritize Sleep",
  preventionSleepDesc: "Adults need 7-9 hours of quality sleep each night. Good sleep strengthens your immune system, improves memory, and reduces the risk of heart disease and diabetes.",
  preventionHygiene: "Practice Good Hygiene",
  preventionHygieneDesc: "Wash your hands frequently with soap and water, especially before eating and after using the bathroom. Cover your mouth when coughing or sneezing to prevent the spread of germs.",
  preventionVaccines: "Stay Up to Date on Vaccines",
  preventionVaccinesDesc: "Vaccines are one of the safest and most effective ways to prevent serious diseases. Follow your local health authority's recommended immunization schedule.",
  preventionMentalHealth: "Protect Your Mental Health",
  preventionMentalHealthDesc: "Manage stress through meditation, deep breathing, or talking to someone you trust. Mental health is just as important as physical health for overall wellbeing.",
  preventionScreenings: "Get Regular Screenings",
  preventionScreeningsDesc: "Regular health screenings can detect conditions early when they are most treatable. Talk to your doctor about which screenings are appropriate for your age and risk factors.",
  preventionHydration: "Stay Hydrated",
  preventionHydrationDesc: "Drink at least 8 glasses of water daily. Proper hydration supports kidney function, helps maintain healthy skin, and keeps your body's systems running smoothly.",
  preventionSunProtection: "Protect Your Skin from Sun",
  preventionSunProtectionDesc: "Use sunscreen with SPF 30 or higher, wear protective clothing, and avoid peak sun hours (10 AM to 4 PM) to reduce your risk of skin cancer and premature aging.",
  preventionAvoidTobacco: "Avoid Tobacco and Limit Alcohol",
  preventionAvoidTobaccoDesc: "Smoking is the leading cause of preventable death. If you smoke, seek help to quit. Also, limit alcohol consumption to reduce your risk of liver disease, cancer, and other conditions.",
  
  // Lifestyle page body
  lifestyleEatBetter: "Eat Better",
  lifestyleEatBetterDesc: "Fuel your body with nutritious foods. Fill half your plate with fruits and vegetables, choose whole grains, and include lean proteins. Cooking at home gives you control over ingredients and portions.",
  lifestyleMoveMore: "Move More",
  lifestyleMoveMoreDesc: "Find activities you enjoy and make them part of your routine. Even 20 minutes of walking, dancing, or stretching can boost your mood, strengthen your heart, and improve your energy levels throughout the day.",
  lifestyleSleepWell: "Sleep Well",
  lifestyleSleepWellDesc: "Create a relaxing bedtime routine. Keep your room cool and dark, avoid screens before bed, and try to go to bed and wake up at the same time every day. Quality sleep is the foundation of good health.",
  lifestyleStayHydrated: "Stay Hydrated",
  lifestyleStayHydratedDesc: "Water is essential for every function in your body. Carry a water bottle, drink a glass of water first thing in the morning, and eat water-rich foods like cucumbers, watermelon, and oranges.",
  lifestyleManageStress: "Manage Stress",
  lifestyleManageStressDesc: "Chronic stress can harm your body and mind. Practice deep breathing, spend time in nature, journal your thoughts, or talk to a friend. Taking breaks throughout the day helps reset your focus.",
  lifestyleMaintainHygiene: "Maintain Good Hygiene",
  lifestyleMaintainHygieneDesc: "Simple daily habits like washing your hands, brushing your teeth twice a day, and keeping your living space clean can prevent infections and keep you feeling your best.",
  
  // Calendar page body
  calendarEventDetails: "Event Details",
  calendarIn: "In",
  calendarDays: "days",
  calendarPast: "Past",
  calendarNoEvents: "No events for this month",
  
  // Emergency page body
  emergencyCallEmergency: "Call Emergency Services",
  emergencyCallEmergencyDesc: "If you or someone nearby is experiencing a medical emergency, call your local emergency number (911 in the US, 112 in Europe, 108 in India) immediately.",
  emergencyWhenToCall: "When to Call Emergency Services",
  emergencyWhenToCallDesc: "Call immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, choking, or any life-threatening situation.",
  emergencyCPRTitle: "CPR Basics",
  emergencyCPRDesc: "If someone collapses and is not breathing normally: Call emergency services, place your hands in the center of their chest, push hard and fast at least 2 inches deep, at a rate of 100-120 compressions per minute.",
  emergencyChokingTitle: "Choking First Aid",
  emergencyChokingDesc: "For a conscious choking adult: Stand behind them, place your fist just above their navel, and give quick upward thrusts. For infants, use back blows and chest thrusts.",
  emergencyBleedingTitle: "Control Severe Bleeding",
  emergencyBleedingDesc: "Apply firm, direct pressure with a clean cloth or gauze. Do not remove the cloth if it soaks through — add more on top. Elevate the injured area above the heart if possible.",
  emergencyStrokeTitle: "FAST Stroke Recognition",
  emergencyStrokeDesc: "F — Face: Is one side drooping? A — Arms: Can they raise both arms? S — Speech: Is their speech slurred? T — Time: If any of these, call emergency services immediately.",
  emergencyBurnTitle: "Burn First Aid",
  emergencyBurnDesc: "Cool the burn under running cold water for at least 20 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean, non-fluffy dressing. Seek medical help for burns larger than your palm.",
  
  // Symptoms page body
  symptomsChestPain: "Chest pain or discomfort",
  symptomsShortBreath: "Shortness of breath",
  symptomsSevereHeadache: "Severe or sudden headache",
  symptomsHighFever: "High fever (above 103F/39.4C)",
  symptomsAbdominalPain: "Persistent abdominal pain",
  symptomsVisionChanges: "Sudden vision changes",
  symptomsFatigue: "Unexplained fatigue or weakness",
  symptomsJointPain: "Joint pain or swelling",
  symptomsRash: "Unexplained rash or skin changes",
  symptomsNausea: "Persistent nausea or vomiting",
  symptomsDizziness: "Dizziness or fainting",
  symptomsBackPain: "Severe back pain",
  symptomsSwelling: "Unexplained swelling",
  symptomsCough: "Persistent cough",
  symptomsInsomnia: "Difficulty sleeping",
  symptomsWeightChange: "Unexplained weight change",
  symptomsAnxiety: "Anxiety or panic attacks",
  symptomsAllergies: "Allergic reactions",
  
  // Footer body
  footerAbout: "About",
  footerAboutDesc: "Digital Health Awareness Portal provides reliable, evidence-based health information to help you make informed decisions about your wellbeing.",
  footerResources: "Resources",
  footerSupport: "Support",
  footerContactUs: "Contact Us",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerSitemap: "Sitemap",
  footerRights: "All rights reserved. For educational and awareness purposes only.",
  
  // Registration login extra
  regStep1Title: "Personal Information",
  regStep1Desc: "Tell us a bit about yourself",
  regProvideEmailOrPhone: "Please provide email or phone number",
  regAccountInfo: "Account Information",
  regCreateSecure: "Create a secure password for your account",
  regSecureNote: "Your account is stored locally on this device. No email verification needed.",
  regJoinDescription: "Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.",
  loginEmailOrPhone: "Email or Phone",
  loginPasswordLabel: "Password",
  loginNewUser: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",
  loginCreateOne: "Create one free",
  
  // AI Chat body
  aiDisclaimer: "Educational info only. Not medical advice.",
  
  // Language selector body
  langTitle: "Choose Your Language",
  langDesc: "Select your preferred language to continue. You can change it anytime.",

  loginDemoNote: "No OTP verification required. Sign in with just your credentials.",

};

const ar: TranslationKeys = {
  home: "الرئيسية",
  campaigns: "الحملات",
  healthTopics: "مواضيع الصحة",
  symptoms: "الأعراض",
  prevention: "الوقاية",
  lifestyle: "نمط الحياة",
  calendar: "التقويم",
  articles: "المقالات",
  emergency: "الطوارئ",
  signIn: "تسجيل الدخول",
  register: "التسجيل",
  signOut: "تسجيل الخروج",

  heroTitle: "الصحة الأفضل تبدأ بمعلومات أفضل.",
  heroSubtitle: "اكتشف حملات التوعية الصحية والمعلومات الموثوقة وإرشادات الوقاية وموارد نمط الحياة الصحية — كل ذلك في مكان واحد.",
  heroSearch: "البحث عن معلومات صحية...",
  exploreTopics: "استكشاف المواضيع الصحية",
  exploreCampaigns: "استكشاف الحملات",

  quickAccess: "وصول سريع",
  quickAccessDesc: "اعثر على المعلومات الصحية التي تحتاجها، منظمة حسب الموضوع.",
  featuredCampaigns: "الحملات الصحية المميزة",
  featuredCampaignsDesc: "اكتشف الحملات التي تحدث فرقاً في الصحة العامة.",
  viewAll: "عرض الكل",
  healthTopicsTitle: "استكشاف المواضيع الصحية",
  healthTopicsDesc: "معلومات مبنية على الأدلة حول الحالات الصحية الشائعة والرفاهية.",
  preventionLifestyle: "الوقاية والحياة الصحية",
  preventionLifestyleDesc: "العادات اليومية البسيطة تؤدي إلى تحسينات صحية دائمة.",
  latestArticles: "أحدث المقالات الصحية",
  latestArticlesDesc: "ابقَ على اطلاع مع رؤى صحية مبنية على الأدلة.",
  healthCalendar: "تقويم التوعية الصحية",
  healthCalendarDesc: "أيام صحية مهمة وفعاليات توعوية على مدار العام.",
  healthTip: "نصيحة صحية اليوم",
  takeFirstStep: "اتخذ الخطوة الأولى نحو صحة أفضل.",
  takeFirstStepDesc: "استكشف مواردنا الصحية الشاملة وابدأ في اتخاذ قرارات مدروسة حول رفاهيتك اليوم.",
  disclaimer: "المعلومات المقدمة من بوابة التوعية الصحية الرقمية هي لأغراض تعليمية وتوعوية عامة فقط.",

  learnAbout: "تعرف على الحالات الصحية الشائعة والمخاوف.",
  discoverWays: "اكتشف طرق عملية لتقليل المخاطر الصحية.",
  learnTips: "تعلم عن التغذية والنوم والرفاهية.",
  understandSymptoms: "افهم الأعراض الشائعة وعلامات التحذير.",
  exploreAwareness: "استكشف حملات التوعية ومبادرات الصحة العامة.",
  emergencyInfo: "تعرف متى قد تكون هناك حاجة لرعاية طبية مهنية عاجلة.",

  createAccount: "أنشئ حسابك",
  startJourney: "ابدأ رحلة التوعية الصحية اليوم",
  welcomeBack: "مرحباً بعودتك",
  accessDashboard: "سجّل الدخول للوصول إلى لوحة تحكمك الصحية",
  fullName: "الاسم الكامل",
  email: "البريد الإلكتروني",
  phone: "الهاتف",
  password: "كلمة المرور",
  confirmPassword: "تأكيد كلمة المرور",
  createPassword: "إنشاء كلمة مرور",
  reEnterPassword: "أعد إدخال كلمة المرور",
  alreadyHaveAccount: "لديك حساب بالفعل؟",
  dontHaveAccount: "ليس لديك حساب؟",
  createOneFree: "أنشئ حساباً مجانياً",
  signInInstead: "تسجيل الدخول",
  noOTPRequired: "لا حاجة للتحقق برمز OTP.",
  continue_: "متابعة",
  createAcc: "إنشاء الحساب",
  back: "رجوع",
  continueWith: "متابعة",
  joinBenefits: "انضم إلى آلاف من يعطون أولوية لصحتهم",
  benefit1: "الوصول إلى أكثر من 12 موضوعاً صحياً",
  benefit2: "احفظ مقالاتك وحملاتك المفضلة",
  benefit3: "تتبع رحلة رفاهيتك مع نصائح يومية",
  passwordMin6: "يجب أن تكون كلمة المرور 6 أحرف على الأقل",
  passwordsMatch: "كلمتا المرور غير متطابقتين",
  enterEmailOrPhone: "أدخل بريدك الإلكتروني أو هاتفك",
  enterPassword: "أدخل كلمة المرور",
  accountStoredLocal: "يُخزّن حسابك محلياً على هذا الجهاز.",
  newToPortal: "جديد على البوابة؟",

  welcome: "مرحباً",
  memberSince: "عضو منذ",
  quickActions: "إجراءات سريعة",
  viewBookmarks: "عرض الإشارات المرجعية",
  browseCampaigns: "تصفح الحملات",
  readArticles: "قراءة المقالات",
  healthyLifestyle: "نمط حياة صحي",
  symptomsGuide: "دليل الأعراض",
  smallSteps: "تذكر: الخطوات البسيطة تؤدي إلى تغييرات كبيرة",
  smallStepsDesc: "ابدأ بعادة صحية واحدة اليوم — اشرب المزيد من الماء أو تمشّى قليلاً.",

  preventionTitle: "دليل الوقاية الصحية",
  preventionDesc: "الوقاية هي خط الدفاع الأول لصحتك.",
  preventionMessage: "التوعية → الفهم → الوقاية → الفعل الصحي",
  preventionMessageDesc: "العادات اليومية البسيطة يمكن أن تقلل بشكل كبير من خطر الإصابة بالأمراض المزمنة.",
  whenToSeekHelp: "متى تطلب المساعدة المهنية",
  seekHelpDesc: "إذا شعرت بأي علامات تحذيرية، استشر فني رعاية صحية مؤهل على الفور.",

  lifestyleTitle: "نمط حياة صحي",
  lifestyleDesc: "العادات اليومية البسيطة تؤدي إلى تحسينات صحية دائمة.",
  sixPillars: "الأعمدة الستة للحياة الصحية",
  sixPillarsDesc: "هذه العادات الأساسية تعمل معاً لدعم صحتك العامة.",
  dailyRoutine: "روتينك اليومي الصحي",
  dailyRoutineDesc: "هيكل يومك بعادات صحية في كل مرحلة.",
  dailyTips: "نصائح صحية يومية",
  dailyTipsDesc: "نصائح سريعة وعملية لتحسين صحتك كل يوم.",
  morning: "صباحاً",
  afternoon: "ظهراً",
  evening: "مساءً",
  night: "ليلاً",

  calendarTitle: "تقويم التوعية الصحية",
  calendarDesc: "أيام صحية مهمة وفعاليات توعوية على مدار العام.",
  allMonths: "جميع الأشهر",

  emergencyTitle: "التوعية بالإسعافات",
  emergencyDesc: "تعلم كيفية التعرف على الطوارئ الطبية ومتى تطلب مساعدة مهنية فورية.",
  emergencyCallNow: "إذا كانت هذه حالة طوارئ طبية، اتصل برقم الطوارئ المحلي فوراً",
  emergencyCallDesc: "اتصل برقم الطوارئ المحلي فوراً:",
  recognizeEmergencies: "التعرف على الطوارئ",
  recognizeDesc: "اعرف علامات التحذير التي تتطلب رعاية طبية فورية.",
  firstAidBasics: "أساسيات الإسعافات الأولية",
  firstAidDesc: "معرفة الإسعافات الأولية الأساسية التي يجب على الجميع معرفتها.",
  learnMoreConditions: "اعرف المزيد عن الحالات الصحية",

  symptomsTitle: "الأعراض وعلامات التحذير",
  symptomsDesc: "تعلم كيفية التعرف على الأعراض الشائعة ومتى قد تتطلب رعاية طبية.",
  urgencyLevels: "مستويات الإلحاح:",
  seekImmediateHelp: "اطلب مساعدة فورية",
  seeDoctorSoon: "_visited قريباً",
  monitorAndDiscuss: "راقب وناقش",
  allSystems: "جميع الأنظمة",
  whenInDoubt: "عند الشك، اطلب المساعدة",
  whenInDoubtDesc: "إذا شعرت بأعراض حادة، لا تنتظر — اتصل بفني رعاية صحية فوراً.",

  searchTitle: "البحث عن معلومات صحية",
  searchDesc: "اعثر على مواضيع ومقالات صحية في منصتنا بالكامل.",
  searchPlaceholder: "ابحث عن مواضيع صحية، حملات، مقالات...",
  enterSearchTerm: "أدخل مصطلح البحث",
  enterSearchDesc: "ابحث في المواضيع الصحية والحملات والمقالات",
  noResults: "لم يتم العثور على نتائج",
  tryDifferent: "جرب كلمات مفتاحية مختلفة.",
  resultsFor: "نتائج لـ",

  aboutTitle: "من نحن",
  mission: "مهمتنا",
  missionDesc1: "تم إنشاء بوابة التوعية الصحية الرقمية بهدف واضح: جعل المعلومات الصحية الموثوقة سهلة الاكتشاف والفهم للجميع.",
  missionDesc2: "نؤمن بأن المعرفة هي الخطوة الأولى نحو صحة أفضل.",
  missionDesc3: "تركز منصتنا على رحلة التوعية إلى الفهم والوقاية والفعل الصحي.",
  ourValues: "قيمنا",
  evidenceBased: "مبنية على الأدلة",
  evidenceBasedDesc: "جميع المعلومات مبنية على الأبحاث وإرشادات الصحة العامة.",
  accessible: "متاحة",
  accessibleDesc: "نجعل المعلومات الصحية المعقدة سهلة الفهم ومتاحة للجميع.",
  globalPerspective: "منظور عالمي",
  globalPerspectiveDesc: "محتوانا يتناول التحديات الصحية من منظور عالمي.",
  communityFocused: "مركزة على المجتمع",
  communityFocusedDesc: "نمكّن المجتمعات من تولي صحتهم من خلال التعليم والتوعية.",
  educational: "تعليمية",
  educationalDesc: "مهمتنا هي التثقيف والتوعية، وليس التشخيص أو استبدال المشورة الطبية المهنية.",
  trustworthy: "موثوقة",
  trustworthyDesc: "نحافظ على أعلى معايير الدقة والشفافية.",
  importantNotice: "إشعار مهم",
  importantNoticeDesc: "بوابة التوعية الصحية الرقمية هي منصة تعليمية. هي ليست بديلاً عن المشورة الطبية المهنية.",

  contactTitle: "تواصل معنا",
  contactDesc: "لديك أسئلة أو اقتراحات أو تريد التعاون؟ يسعدنا سماعك.",
  getInTouch: "تواصل معنا",
  name: "الاسم",
  subject: "الموضوع",
  message: "الرسالة",
  selectTopic: "اختر موضوعاً",
  generalInquiry: "استفسار عام",
  contentFeedback: "ملاحظات على المحتوى",
  collaboration: "شراكة / تعاون",
  reportError: "الإبلاغ عن خطأ",
  other: "أخرى",
  howCanWeHelp: "كيف يمكننا مساعدتك؟",
  sendMessage: "إرسال الرسالة",
  messageSent: "تم إرسال الرسالة!",
  messageSentDesc: "شكراً لتواصلك. سنجيبك خلال 2-3 أيام عمل.",
  sendAnother: "إرسال رسالة أخرى",
  responseTime: "نرد عادةً خلال 2-3 أيام عمل.",

  bookmarksTitle: "إشاراتك المرجعية",
  bookmarksDesc: "الوصول إلى مواضيعك وحملاتك ومقالاتك المحفوظة.",
  savedItems: "العناصر المحفوظة",
  allSaved: "محفوظة",
  noBookmarksYet: "لا توجد إشارات مرجعية بعد",
  noBookmarksDesc: "احفظ المواضيع الصحية والحملات والمقالات للوصول السريع.",
  saveItems: "حفظ",
  browseTopics: "تصفح المواضيع",

  aiChatTitle: "مساعد الصحة",
  aiChatDesc: "اسألني أي شيء عن المواضيع الصحية",
  aiPlaceholder: "اكتب سؤالك الصحي...",
  aiWelcome: "مرحباً! أنا مساعدك الصحي.",
  aiWelcomeDesc: "اسألني عن الأعراض أو الوقاية أو الحياة الصحية أو أي موضوع صحي.",

  cameraTitle: "فحص الصور الصحية",
  cameraDesc: "خذ صورة لحالة جلدية واحصل على إرشادات عامة",
  cameraAccess: "تفعيل الكاميرا",
  takePhoto: "التقاط صورة",
  analyzePhoto: "تحليل الصورة",
  analyzing: "جاري تحليل صورتك...",
  analysisResult: "نتيجة التحليل",

  findDoctors: "البحث عن أطباء قريبين",
  findDoctorsDesc: "حدد المرافق الصحية القريبة منك",
  nearestDoctors: "المرافق الصحية القريبة",
  kmAway: "كم بعيداً",

  learnMore: "اعرف المزيد",
  disclaimerText: "المعلومات المقدمة هي لأغراض تعليمية وتوعوية عامة فقط.",
  language: "اللغة",
  chooseLanguage: "اختر لغتك",
  chooseLanguageDesc: "حدد لغتك المفضلة لأفضل تجربة",
  getStarted: "ابدأ",// Home page body content
  trustedHealthPlatform: "Trusted Health Information Platform",
  topicsCount: "12+ Topics",
  topicsCountDesc: "Trusted Info",
  aiAssistantLabel: "AI Assistant",
  aiAssistantDesc: "24/7 Help",
  homeLearnAbout: "Learn about common health conditions and health concerns.",
  homeDiscoverWays: "Discover practical ways to reduce health risks.",
  homeLearnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeUnderstandSymptoms: "Understand common symptoms and warning signs.",
  homeExploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  homeEmergencyInfo: "Learn when urgent professional medical attention may be needed.",
  homeCardTopicsDesc: "Learn about common health conditions and health concerns.",
  homeCardPreventionDesc: "Discover practical ways to reduce health risks.",
  homeCardLifestyleDesc: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeCardSymptomsDesc: "Understand common symptoms and warning signs.",
  homeCardCampaignsDesc: "Explore awareness campaigns and public-health initiatives.",
  homeCardEmergencyDesc: "Learn when urgent professional medical attention may be needed.",
  homeTipDesc: "A quick wellness tip to brighten your day.",
  homeStartYourJourney: "Start Your Health Journey Today",
  homeStartDesc: "Join thousands of people who are making better health choices every day. Create your free account to get personalized tips, save your favorite articles, and track your wellness progress.",
  homeJoinNow: "Join Now — It's Free",
  homeReadArticles: "Read the latest health articles and research-backed insights.",
  homeReadArticlesDesc: "Stay informed with the latest health news and expert advice.",
  homeViewAllEvents: "View all upcoming health awareness events and campaigns.",
  homeViewAllEventsDesc: "Never miss an important health awareness day.",
  
  // About page
  aboutSubtitle: "Our mission is to make reliable health information accessible to everyone, everywhere.",
  missionTitle: "Our Mission",
  missionDesc: "We believe that everyone deserves access to trustworthy health information. Our portal is designed to bridge the gap between complex medical knowledge and everyday understanding, empowering individuals to make informed decisions about their health and wellbeing.",
  valuesTitle: "Our Values",
  valueEvidence: "Evidence-Based",
  valueEvidenceDesc: "All our content is reviewed by healthcare professionals and based on the latest medical research and guidelines.",
  valueAccessible: "Accessible to All",
  valueAccessibleDesc: "We present health information in simple, easy-to-understand language that anyone can follow, regardless of their background.",
  valueCommunity: "Community Focused",
  valueCommunityDesc: "We are committed to building a healthier community by spreading awareness and promoting preventive health practices.",
  educationalDisclaimer: "This platform is for educational and awareness purposes only. It does not provide medical diagnosis, treatment, or professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
  
  // Contact page
  contactSubtitle: "Have questions or feedback? We would love to hear from you. Our team is here to help.",
  contactInfo: "Contact Information",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactSubject: "Subject",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message Sent!",
  contactSentDesc: "Thank you for reaching out. We will get back to you within 24 hours.",
  contactPhoneLabel: "Phone",
  contactEmailLabel: "Email",
  contactHoursLabel: "Hours",
  contactResponseTime: "Response Time",
  contactResponseDesc: "We typically respond within 24 hours on business days.",
  
  // Bookmarks page
  noBookmarks: "No bookmarks yet",
  allItems: "All Items",
  remove: "Remove",
  
  // Search page
  searchResults: "Search Results",
  noResultsDesc: "Try different keywords or browse our categories to find what you are looking for.",
  searchingFor: "Searching for",
  
  // Dashboard body
  dashWelcome: "Welcome back",
  dashWelcomeDesc: "Here is your health dashboard. Track your progress and explore new content.",
  dashStats: "Your Stats",
  dashSaved: "Saved Items",
  dashTopicsExplored: "Topics",
  dashArticlesRead: "Articles",
  dashQuickActions: "Quick Actions",
  dashBrowseTopics: "Browse Topics",
  dashBrowseTopicsDesc: "Explore 12+ health topics",
  dashViewBookmarks: "View Bookmarks",
  dashViewBookmarksDesc: "Access your saved content",
  dashBrowseArticles: "Read Articles",
  dashBrowseArticlesDesc: "Latest health insights",
  dashDailyTip: "Today's Wellness Tip",
  dashLearnPrevention: "Prevention Guide",
  dashLearnPreventionDesc: "Practical health tips",
  dashLifestyle: "Healthy Lifestyle",
  dashLifestyleDesc: "Daily wellness habits",
  dashCheckSymptoms: "Check Symptoms",
  dashCheckSymptomsDesc: "Understand warning signs",
  
  // Prevention page body
  preventionEatWell: "Eat Well",
  preventionEatWellDesc: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is one of the most powerful tools for disease prevention. Limit processed foods, sugar, and excessive sodium.",
  preventionExercise: "Exercise Regularly",
  preventionExerciseDesc: "Aim for at least 150 minutes of moderate physical activity per week. Walking, cycling, swimming, or any activity you enjoy can significantly reduce your risk of chronic diseases.",
  preventionSleep: "Prioritize Sleep",
  preventionSleepDesc: "Adults need 7-9 hours of quality sleep each night. Good sleep strengthens your immune system, improves memory, and reduces the risk of heart disease and diabetes.",
  preventionHygiene: "Practice Good Hygiene",
  preventionHygieneDesc: "Wash your hands frequently with soap and water, especially before eating and after using the bathroom. Cover your mouth when coughing or sneezing to prevent the spread of germs.",
  preventionVaccines: "Stay Up to Date on Vaccines",
  preventionVaccinesDesc: "Vaccines are one of the safest and most effective ways to prevent serious diseases. Follow your local health authority's recommended immunization schedule.",
  preventionMentalHealth: "Protect Your Mental Health",
  preventionMentalHealthDesc: "Manage stress through meditation, deep breathing, or talking to someone you trust. Mental health is just as important as physical health for overall wellbeing.",
  preventionScreenings: "Get Regular Screenings",
  preventionScreeningsDesc: "Regular health screenings can detect conditions early when they are most treatable. Talk to your doctor about which screenings are appropriate for your age and risk factors.",
  preventionHydration: "Stay Hydrated",
  preventionHydrationDesc: "Drink at least 8 glasses of water daily. Proper hydration supports kidney function, helps maintain healthy skin, and keeps your body's systems running smoothly.",
  preventionSunProtection: "Protect Your Skin from Sun",
  preventionSunProtectionDesc: "Use sunscreen with SPF 30 or higher, wear protective clothing, and avoid peak sun hours (10 AM to 4 PM) to reduce your risk of skin cancer and premature aging.",
  preventionAvoidTobacco: "Avoid Tobacco and Limit Alcohol",
  preventionAvoidTobaccoDesc: "Smoking is the leading cause of preventable death. If you smoke, seek help to quit. Also, limit alcohol consumption to reduce your risk of liver disease, cancer, and other conditions.",
  
  // Lifestyle page body
  lifestyleEatBetter: "Eat Better",
  lifestyleEatBetterDesc: "Fuel your body with nutritious foods. Fill half your plate with fruits and vegetables, choose whole grains, and include lean proteins. Cooking at home gives you control over ingredients and portions.",
  lifestyleMoveMore: "Move More",
  lifestyleMoveMoreDesc: "Find activities you enjoy and make them part of your routine. Even 20 minutes of walking, dancing, or stretching can boost your mood, strengthen your heart, and improve your energy levels throughout the day.",
  lifestyleSleepWell: "Sleep Well",
  lifestyleSleepWellDesc: "Create a relaxing bedtime routine. Keep your room cool and dark, avoid screens before bed, and try to go to bed and wake up at the same time every day. Quality sleep is the foundation of good health.",
  lifestyleStayHydrated: "Stay Hydrated",
  lifestyleStayHydratedDesc: "Water is essential for every function in your body. Carry a water bottle, drink a glass of water first thing in the morning, and eat water-rich foods like cucumbers, watermelon, and oranges.",
  lifestyleManageStress: "Manage Stress",
  lifestyleManageStressDesc: "Chronic stress can harm your body and mind. Practice deep breathing, spend time in nature, journal your thoughts, or talk to a friend. Taking breaks throughout the day helps reset your focus.",
  lifestyleMaintainHygiene: "Maintain Good Hygiene",
  lifestyleMaintainHygieneDesc: "Simple daily habits like washing your hands, brushing your teeth twice a day, and keeping your living space clean can prevent infections and keep you feeling your best.",
  
  // Calendar page body
  calendarEventDetails: "Event Details",
  calendarIn: "In",
  calendarDays: "days",
  calendarPast: "Past",
  calendarNoEvents: "No events for this month",
  
  // Emergency page body
  emergencyCallEmergency: "Call Emergency Services",
  emergencyCallEmergencyDesc: "If you or someone nearby is experiencing a medical emergency, call your local emergency number (911 in the US, 112 in Europe, 108 in India) immediately.",
  emergencyWhenToCall: "When to Call Emergency Services",
  emergencyWhenToCallDesc: "Call immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, choking, or any life-threatening situation.",
  emergencyCPRTitle: "CPR Basics",
  emergencyCPRDesc: "If someone collapses and is not breathing normally: Call emergency services, place your hands in the center of their chest, push hard and fast at least 2 inches deep, at a rate of 100-120 compressions per minute.",
  emergencyChokingTitle: "Choking First Aid",
  emergencyChokingDesc: "For a conscious choking adult: Stand behind them, place your fist just above their navel, and give quick upward thrusts. For infants, use back blows and chest thrusts.",
  emergencyBleedingTitle: "Control Severe Bleeding",
  emergencyBleedingDesc: "Apply firm, direct pressure with a clean cloth or gauze. Do not remove the cloth if it soaks through — add more on top. Elevate the injured area above the heart if possible.",
  emergencyStrokeTitle: "FAST Stroke Recognition",
  emergencyStrokeDesc: "F — Face: Is one side drooping? A — Arms: Can they raise both arms? S — Speech: Is their speech slurred? T — Time: If any of these, call emergency services immediately.",
  emergencyBurnTitle: "Burn First Aid",
  emergencyBurnDesc: "Cool the burn under running cold water for at least 20 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean, non-fluffy dressing. Seek medical help for burns larger than your palm.",
  
  // Symptoms page body
  symptomsChestPain: "Chest pain or discomfort",
  symptomsShortBreath: "Shortness of breath",
  symptomsSevereHeadache: "Severe or sudden headache",
  symptomsHighFever: "High fever (above 103F/39.4C)",
  symptomsAbdominalPain: "Persistent abdominal pain",
  symptomsVisionChanges: "Sudden vision changes",
  symptomsFatigue: "Unexplained fatigue or weakness",
  symptomsJointPain: "Joint pain or swelling",
  symptomsRash: "Unexplained rash or skin changes",
  symptomsNausea: "Persistent nausea or vomiting",
  symptomsDizziness: "Dizziness or fainting",
  symptomsBackPain: "Severe back pain",
  symptomsSwelling: "Unexplained swelling",
  symptomsCough: "Persistent cough",
  symptomsInsomnia: "Difficulty sleeping",
  symptomsWeightChange: "Unexplained weight change",
  symptomsAnxiety: "Anxiety or panic attacks",
  symptomsAllergies: "Allergic reactions",
  
  // Footer body
  footerAbout: "About",
  footerAboutDesc: "Digital Health Awareness Portal provides reliable, evidence-based health information to help you make informed decisions about your wellbeing.",
  footerResources: "Resources",
  footerSupport: "Support",
  footerContactUs: "Contact Us",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerSitemap: "Sitemap",
  footerRights: "All rights reserved. For educational and awareness purposes only.",
  
  // Registration login extra
  regStep1Title: "Personal Information",
  regStep1Desc: "Tell us a bit about yourself",
  regProvideEmailOrPhone: "Please provide email or phone number",
  regAccountInfo: "Account Information",
  regCreateSecure: "Create a secure password for your account",
  regSecureNote: "Your account is stored locally on this device. No email verification needed.",
  regJoinDescription: "Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.",
  loginEmailOrPhone: "Email or Phone",
  loginPasswordLabel: "Password",
  loginNewUser: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",
  loginCreateOne: "Create one free",
  
  // AI Chat body
  aiDisclaimer: "Educational info only. Not medical advice.",
  
  // Language selector body
  langTitle: "Choose Your Language",
  langDesc: "Select your preferred language to continue. You can change it anytime.",

  loginDemoNote: "No OTP verification required. Sign in with just your credentials.",

};

const te: TranslationKeys = {
  home: "హోమ్",
  campaigns: "ప్రచారాలు",
  healthTopics: "ఆరోగ్య అంశాలు",
  symptoms: "లక్షణాలు & హెచ్చరిక సంకేతాలు",
  prevention: "నివారణ",
  lifestyle: "జీవనశైలి",
  calendar: "ఆరోగ్య క్యాలెండర్",
  articles: "వ్యాసాలు & వనరులు",
  emergency: "అత్యవసర సమాచారం",
  signIn: "లాగిన్",
  register: "నమోదు",
  signOut: "లాగ్ అవుట్",
  heroTitle: "మెరుగైన ఆరోగ్యం మెరుగైన సమాచారంతో ప్రారంభమవుతుంది.",
  heroSubtitle: "నమ్మకమైన ఆరోగ్య అవగాహన సమాచారం, నివారణ మార్గదర్శకత్వం మరియు ప్రజారోగ్య ప్రచారాలను అన్వేషించండి.",
  heroSearch: "ఆరోగ్య సమాచారం శోధించండి...",
  exploreTopics: "ఆరోగ్య అంశాలను అన్వేషించండి",
  exploreCampaigns: "ప్రచారాలను అన్వేషించండి",
  quickAccess: "త్వరిత ప్రవేశం",
  quickAccessDesc: "ముఖ్యమైన ఆరోగ్య విభాగాలను వెంటనే యాక్సెస్ చేయండి",
  featuredCampaigns: "ప్రముఖ ప్రచారాలు",
  featuredCampaignsDesc: "మా ఆరోగ్య ప్రచారాలను అన్వేషించండి",
  viewAll: "అన్నీ చూడండి",
  healthTopicsTitle: "ఆరోగ్య అంశాలు",
  healthTopicsDesc: "సాధారణ ఆరోగ్య పరిస్థితుల గురించి తెలుసుకోండి",
  preventionLifestyle: "నివారణ & జీవనశైలి",
  preventionLifestyleDesc: "ఆరోగ్యకరమైన జీవనం కోసం చిట్కాలు",
  latestArticles: "తాజా వ్యాసాలు",
  latestArticlesDesc: "మా తాజా ఆరోగ్య వ్యాసాలను చదవండి",
  healthCalendar: "ఆరోగ్య క్యాలెండర్",
  healthCalendarDesc: "రాబోయే ఆరోగ్య అవగాహన రోజులను చూడండి",
  healthTip: "ఆరోగ్య చిట్కా",
  takeFirstStep: "మీ మొదటి అడుగు వేయండి",
  takeFirstStepDesc: "మెరుగైన ఆరోగ్యం కోసం ఈరోజే ప్రారంభించండి.",
  disclaimer: "సాధారణ సమాచారం",
  learnAbout: "ఆరోగ్య అంశాల గురించి తెలుసుకోండి",
  discoverWays: "ఆరోగ్యకరమైన జీవన మార్గాలను కనుగొనండి",
  learnTips: "ప్రాక్టికల్ ఆరోగ్య చిట్కాలు నేర్చుకోండి",
  understandSymptoms: "లక్షణాలు మరియు హెచ్చరిక సంకేతాలను అర్థం చేసుకోండి",
  exploreAwareness: "అవగాహన ప్రచారాలను అన్వేషించండి",
  emergencyInfo: "అత్యవసర సమాచారం యాక్సెస్ చేయండి",
  createAccount: "ఖాతా సృష్టించండి",
  startJourney: "మీ ఆరోగ్య ప్రయాణాన్ని ప్రారంభించండి",
  welcomeBack: "తిరిగి స్వాగతం!",
  accessDashboard: "మీ డాష్‌బోర్డ్‌ను యాక్సెస్ చేయండి",
  fullName: "పూర్తి పేరు",
  email: "ఇమెయిల్",
  phone: "ఫోన్",
  password: "పాస్‌వర్డ్",
  confirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
  createPassword: "పాస్‌వర్డ్ సృష్టించండి",
  reEnterPassword: "పాస్‌వర్డ్ మళ్ళీ నమోదు చేయండి",
  alreadyHaveAccount: "ఇప్పటికే ఖాతా ఉందా?",
  dontHaveAccount: "ఖాతా లేదా?",
  createOneFree: "ఉచితంగా సృష్టించండి",
  signInInstead: "బదులుగా లాగిన్ చేయండి",
  noOTPRequired: "OTP అవసరం లేదు — కేవలం పాస్‌వర్డ్ సృష్టించండి",
  continue_: "కొనసాగించండి",
  createAcc: "ఖాతా సృష్టించండి",
  back: "వెనుకకు",
  continueWith: "దీనితో కొనసాగించండి",
  joinBenefits: "చేరడం ద్వారా ప్రయోజనాలు",
  benefit1: "వ్యక్తిగతీకరించిన ఆరోగ్య సిఫార్సులు",
  benefit2: "ఆరోగ్య సమాచారాన్ని సేవ్ చేయండి",
  benefit3: "AI ఆరోగ్య సహాయకుడికి యాక్సెస్",
  passwordMin6: "కనీసం 6 అక్షరాలు ఉండాలి",
  passwordsMatch: "పాస్‌వర్డులు సరిపోలాలి",
  enterEmailOrPhone: "ఇమెయిల్ లేదా ఫోన్ నమోదు చేయండి",
  enterPassword: "మీ పాస్‌వర్డ్ నమోదు చేయండి",
  accountStoredLocal: "మీ ఖాతా సమాచారం మీ బ్రౌజర్‌లో సురక్షితంగా సేవ్ చేయబడుతుంది.",
  newToPortal: "పోర్టల్ కొత్తగా ఉందా?",
  welcome: "స్వాగతం",
  memberSince: "సభ్యత్వం నుండి",
  quickActions: "త్వరిత చర్యలు",
  viewBookmarks: "బుక్‌మార్కులు చూడండి",
  browseCampaigns: "ప్రచారాలను బ్రౌజ్ చేయండి",
  readArticles: "వ్యాసాలు చదవండి",
  healthyLifestyle: "ఆరోగ్యకరమైన జీవనశైలి",
  symptomsGuide: "లక్షణాల గైడ్",
  smallSteps: "చిన్న అడుగులు, పెద్ద ఫలితాలు",
  smallStepsDesc: "ప్రతి రోజూ మీ ఆరోగ్యం కోసం ఒక చిన్న అడుగు వేయండి.",
  preventionTitle: "ఆరోగ్య నివారణ గైడ్",
  preventionDesc: "ఆరోగ్యకరమైన జీవనశైలి ద్వారా వ్యాధులను ఎలా నివారించాలో తెలుసుకోండి.",
  preventionMessage: "నివారణ మెరుగైన చికిత్స కంటే మెరుగైనది",
  preventionMessageDesc: "సరైన అలవాట్లతో అనేక వ్యాధులను నివారించవచ్చు.",
  whenToSeekHelp: "ఎప్పుడు సహాయం అర్థం చేసుకోవాలి",
  seekHelpDesc: "మీ లక్షణాలు తీవ్రంగా ఉంటే వెంటనే వైద్య సహాయం పొందండి.",
  lifestyleTitle: "ఆరోగ్యకరమైన జీవనశైలి",
  lifestyleDesc: "ఆరోగ్యకరమైన జీవనం కోసం మార్గదర్శకత్వం.",
  sixPillars: "ఆరోగ్య జీవనశైలి యొక్క 6 స్తంభాలు",
  sixPillarsDesc: "ఆరోగ్యకరమైన జీవనానికి పునాది స్తంభాలు.",
  dailyRoutine: "దైనందిన దినచర్య",
  dailyRoutineDesc: "మీ రోజును ఆరోగ్యకరంగా ఎలా ప్లాన్ చేయాలి.",
  dailyTips: "రోజువారీ ఆరోగ్య చిట్కాలు",
  dailyTipsDesc: "మీ రోజువారీ జీవనంలో సులభంగా అమలు చేయగల చిట్కాలు.",
  morning: "ఉదయం",
  afternoon: "మధ్యాహ్నం",
  evening: "సాయంత్రం",
  night: "రాత్రి",
  calendarTitle: "ఆరోగ్య అవగాహన క్యాలెండర్",
  calendarDesc: "రాబోయే ఆరోగ్య అవగాహన రోజులు మరియు సంఘటనలను ట్రాక్ చేయండి.",
  allMonths: "అన్ని నెలలు",
  emergencyTitle: "అత్యవసర ఆరోగ్య సమాచారం",
  emergencyDesc: "అత్యవసర పరిస్థితులను గుర్తించడం మరియు ప్రతిస్పందించడం నేర్చుకోండి.",
  emergencyCallNow: "వెంటనే కాల్ చేయండి: 108",
  emergencyCallDesc: "అత్యవసర పరిస్థితిలో వెంటనే సహాయం కోసం కాల్ చేయండి.",
  recognizeEmergencies: "అత్యవసర పరిస్థితులను గుర్తించండి",
  recognizeDesc: "తెలుసుకోండి, గుర్తించండి, చర్య తీసుకోండి.",
  firstAidBasics: "ప్రాథమిక సహాయ ప్రాథమికాలు",
  firstAidDesc: "ప్రాథమిక సహాయ నైపుణ్యాలను నేర్చుకోండి.",
  learnMoreConditions: "మరిన్ని పరిస్థితుల గురించి తెలుసుకోండి",
  symptomsTitle: "లక్షణాలు & హెచ్చరిక సంకేతాలు",
  symptomsDesc: "సాధారణ లక్షణాలను అర్థం చేసుకోండి మరియు ఎప్పుడు వైద్య సహాయం పొందాలో తెలుసుకోండి.",
  urgencyLevels: "అత్యవసర స్థాయిలు",
  seekImmediateHelp: "వెంటనే సహాయం పొందండి",
  seeDoctorSoon: "త్వరలో వైద్యుడిని సంప్రదించండి",
  monitorAndDiscuss: "పర్యవేక్షించండి & చర్చించండి",
  allSystems: "అన్ని శరీర వ్యవస్థలు",
  whenInDoubt: "సందేహం ఉంటే, సహాయం అడగండి",
  whenInDoubtDesc: "మీ ఆరోగ్యం గురించి మీకు సందేహం ఉంటే, ఎల్లప్పుడూ వృత్తిపరమైన సలహా పొందండి.",
  searchTitle: "ఆరోగ్య సమాచారం శోధించండి",
  searchDesc: "అంశాలు, ప్రచారాలు మరియు వ్యాసాలలో శోధించండి.",
  searchPlaceholder: "ఆరోగ్య అంశాలు, ప్రచారాలు లేదా వ్యాసాలను శోధించండి...",
  enterSearchTerm: "శోధన పదం నమోదు చేయండి",
  enterSearchDesc: "మీరు ఏ ఆరోగ్య అంశాలను అన్వేషించాలనుకుంటున్నారో టైప్ చేయండి.",
  noResults: "ఫలితాలు కనుగొనబడలేదు",
  tryDifferent: "భిన్నమైన పదాలతో ప్రయత్నించండి",
  resultsFor: "కోసం ఫలితాలు",
  aboutTitle: "మా గురించి",
  mission: "మా లక్ష్యం",
  missionDesc1: "డిజిటల్ హెల్త్ అవేర్‌నెస్ పోర్టల్ ఒక స్పష్టమైన లక్ష్యంతో సృష్టించబడింది: నమ్మకమైన ఆరోగ్య సమాచారాన్ని అందరికీ సులభంగా అందుబాటులో ఉంచడం.",
  missionDesc2: "మేము ఆధారం ఆధారంగా, స్పష్టమైన మరియు అందుబాటులో ఉండే సమాచారాన్ని అందిస్తాము.",
  missionDesc3: "ప్రతి ఒక్కరూ, ఎక్కడైనా, తమ ఆరోగ్యం గురించి నిర్ణయాలు తీసుకోగల సామర్థ్యం కలిగి ఉండాలని మేము కోరుకుంటున్నాము.",
  ourValues: "మా విలువలు",
  evidenceBased: "ఆధారం ఆధారంగా",
  evidenceBasedDesc: "అన్ని సమాచారం పరిశోధన మరియు ప్రజారోగ్య మార్గదర్శకాలపై ఆధారపడి ఉంటుంది.",
  accessible: "అందుబాటులో ఉండేది",
  accessibleDesc: "సంక్లిష్టమైన ఆరోగ్య సమాచారాన్ని సులభంగా అర్థమయ్యేలా చేస్తాము.",
  globalPerspective: "ప్రపంచ దృష్టికోణం",
  globalPerspectiveDesc: "ప్రపంచ ఆరోగ్య సవాళ్లను పరిష్కరించే కంటెంట్.",
  communityFocused: "సమాజం కేంద్రంగా",
  communityFocusedDesc: "విద్య మరియు అవగాహన ద్వారా సమాజాలను శక్తివంతం చేస్తాము.",
  educational: "విద్యాత్మకం",
  educationalDesc: "మా లక్ష్యం విద్య మరియు అవగాహన, నిర్ధారణ కాదు.",
  trustworthy: "నమ్మకమైనది",
  trustworthyDesc: "ఖచ్చితత్వం మరియు పారదర్శకత యొక్క అత్యున్నత ప్రమాణాలను కాపాడతాము.",
  importantNotice: "ముఖ్యమైన నోటీసు",
  importantNoticeDesc: "డిజిటల్ హెల్త్ అవేర్‌నెస్ పోర్టల్ ఒక విద్యాత్మక వేదిక. ఇది వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు.",
  contactTitle: "మమ్మల్ని సంప్రదించండి",
  contactDesc: "ప్రశ్నలు లేదా సూచనలు ఉన్నాయా? మేము మీ నుండి వినాలనుకుంటున్నాము.",
  getInTouch: "సంప్రదించండి",
  name: "పేరు",
  subject: "సబ్జెక్ట్",
  message: "సందేశం",
  selectTopic: "సబ్జెక్ట్ ఎంచుకోండి",
  generalInquiry: "సాధారణ విచారణ",
  contentFeedback: "కంటెంట్ ఫీడ్‌బ్యాక్",
  collaboration: "సహకారం",
  reportError: "లోపం నివేదించండి",
  other: "ఇతర",
  howCanWeHelp: "మేము ఎలా సహాయం చేయగలం?",
  sendMessage: "సందేశం పంపండి",
  messageSent: "సందేశం పంపబడింది!",
  messageSentDesc: "సంప్రదించినందుకు ధన్యవాదాలు. మేము 2-3 రోజుల్లో ప్రతిస్పందిస్తాము.",
  sendAnother: "మరొక సందేశం పంపండి",
  responseTime: "సాధారణంగా 2-3 పని దినాల్లో ప్రతిస్పందిస్తాము.",
  bookmarksTitle: "మీ బుక్‌మార్కులు",
  bookmarksDesc: "మీ సేవ్ చేసిన అంశాలు, ప్రచారాలు మరియు వ్యాసాలను యాక్సెస్ చేయండి.",
  savedItems: "సేవ్ చేసిన అంశాలు",
  allSaved: "సేవ్ చేశాయి",
  noBookmarksYet: "ఇంకా బుక్‌మార్కులు లేవు",
  noBookmarksDesc: "త్వరిత యాక్సెస్ కోసం ఆరోగ్య అంశాలు, ప్రచారాలు మరియు వ్యాసాలను సేవ్ చేయండి.",
  saveItems: "సేవ్ చేయండి",
  browseTopics: "అంశాలను బ్రౌజ్ చేయండి",
  aiChatTitle: "ఆరోగ్య సహాయకుడు",
  aiChatDesc: "ఆరోగ్య అంశాల గురించి ఏదైనా అడగండి",
  aiPlaceholder: "మీ ఆరోగ్య ప్రశ్న టైప్ చేయండి...",
  aiWelcome: "స్వాగతం!",
  aiWelcomeDesc: "లక్షణాలు, నివారణ లేదా ఆరోగ్యకరమైన జీవనం గురించి అడగండి.",
  cameraTitle: "ఆరోగ్య చిత్ర పరిశీలన",
  cameraDesc: "చర్మ పరిస్థితి యొక్క ఫోటో తీసి మార్గదర్శకత్వం పొందండి",
  cameraAccess: "కెమెరా యాక్సెస్",
  takePhoto: "ఫోటో తీయండి",
  analyzePhoto: "ఫోటో విశ్లేషించండి",
  analyzing: "విశ్లేషిస్తోంది...",
  analysisResult: "విశ్లేషణ ఫలితం",
  findDoctors: "సమీపంలోని వైద్యులను కనుగొనండి",
  findDoctorsDesc: "సమీపంలోని ఆరోగ్య సౌకర్యాలను గుర్తించండి",
  nearestDoctors: "సమీపంలోని ఆరోగ్య సౌకర్యాలు",
  kmAway: "కి.మీ దూరంలో",
  learnMore: "మరింత తెలుసుకోండి",
  disclaimerText: "సమాచారం విద్యాత్మక మరియు అవగాహన ప్రయోజనాల కోసం మాత్రమే.",
  language: "భాష",
  chooseLanguage: "మీ భాషను ఎంచుకోండి",
  chooseLanguageDesc: "మెరుగైన అనుభవం కోసం మీ ప్రాధాన్య భాషను ఎంచుకోండి",
  getStarted: "ప్రారంభించండి",// Home page body content
  trustedHealthPlatform: "Trusted Health Information Platform",
  topicsCount: "12+ Topics",
  topicsCountDesc: "Trusted Info",
  aiAssistantLabel: "AI Assistant",
  aiAssistantDesc: "24/7 Help",
  homeLearnAbout: "Learn about common health conditions and health concerns.",
  homeDiscoverWays: "Discover practical ways to reduce health risks.",
  homeLearnTips: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeUnderstandSymptoms: "Understand common symptoms and warning signs.",
  homeExploreAwareness: "Explore awareness campaigns and public-health initiatives.",
  homeEmergencyInfo: "Learn when urgent professional medical attention may be needed.",
  homeCardTopicsDesc: "Learn about common health conditions and health concerns.",
  homeCardPreventionDesc: "Discover practical ways to reduce health risks.",
  homeCardLifestyleDesc: "Learn about nutrition, exercise, sleep and wellbeing.",
  homeCardSymptomsDesc: "Understand common symptoms and warning signs.",
  homeCardCampaignsDesc: "Explore awareness campaigns and public-health initiatives.",
  homeCardEmergencyDesc: "Learn when urgent professional medical attention may be needed.",
  homeTipDesc: "A quick wellness tip to brighten your day.",
  homeStartYourJourney: "Start Your Health Journey Today",
  homeStartDesc: "Join thousands of people who are making better health choices every day. Create your free account to get personalized tips, save your favorite articles, and track your wellness progress.",
  homeJoinNow: "Join Now — It's Free",
  homeReadArticles: "Read the latest health articles and research-backed insights.",
  homeReadArticlesDesc: "Stay informed with the latest health news and expert advice.",
  homeViewAllEvents: "View all upcoming health awareness events and campaigns.",
  homeViewAllEventsDesc: "Never miss an important health awareness day.",
  
  // About page
  aboutSubtitle: "Our mission is to make reliable health information accessible to everyone, everywhere.",
  missionTitle: "Our Mission",
  missionDesc: "We believe that everyone deserves access to trustworthy health information. Our portal is designed to bridge the gap between complex medical knowledge and everyday understanding, empowering individuals to make informed decisions about their health and wellbeing.",
  valuesTitle: "Our Values",
  valueEvidence: "Evidence-Based",
  valueEvidenceDesc: "All our content is reviewed by healthcare professionals and based on the latest medical research and guidelines.",
  valueAccessible: "Accessible to All",
  valueAccessibleDesc: "We present health information in simple, easy-to-understand language that anyone can follow, regardless of their background.",
  valueCommunity: "Community Focused",
  valueCommunityDesc: "We are committed to building a healthier community by spreading awareness and promoting preventive health practices.",
  educationalDisclaimer: "This platform is for educational and awareness purposes only. It does not provide medical diagnosis, treatment, or professional medical advice. Always consult a qualified healthcare provider for any health concerns.",
  
  // Contact page
  contactSubtitle: "Have questions or feedback? We would love to hear from you. Our team is here to help.",
  contactInfo: "Contact Information",
  contactName: "Your Name",
  contactEmail: "Your Email",
  contactSubject: "Subject",
  contactMessage: "Your Message",
  contactSend: "Send Message",
  contactSent: "Message Sent!",
  contactSentDesc: "Thank you for reaching out. We will get back to you within 24 hours.",
  contactPhoneLabel: "Phone",
  contactEmailLabel: "Email",
  contactHoursLabel: "Hours",
  contactResponseTime: "Response Time",
  contactResponseDesc: "We typically respond within 24 hours on business days.",
  
  // Bookmarks page
  noBookmarks: "No bookmarks yet",
  allItems: "All Items",
  remove: "Remove",
  
  // Search page
  searchResults: "Search Results",
  noResultsDesc: "Try different keywords or browse our categories to find what you are looking for.",
  searchingFor: "Searching for",
  
  // Dashboard body
  dashWelcome: "Welcome back",
  dashWelcomeDesc: "Here is your health dashboard. Track your progress and explore new content.",
  dashStats: "Your Stats",
  dashSaved: "Saved Items",
  dashTopicsExplored: "Topics",
  dashArticlesRead: "Articles",
  dashQuickActions: "Quick Actions",
  dashBrowseTopics: "Browse Topics",
  dashBrowseTopicsDesc: "Explore 12+ health topics",
  dashViewBookmarks: "View Bookmarks",
  dashViewBookmarksDesc: "Access your saved content",
  dashBrowseArticles: "Read Articles",
  dashBrowseArticlesDesc: "Latest health insights",
  dashDailyTip: "Today's Wellness Tip",
  dashLearnPrevention: "Prevention Guide",
  dashLearnPreventionDesc: "Practical health tips",
  dashLifestyle: "Healthy Lifestyle",
  dashLifestyleDesc: "Daily wellness habits",
  dashCheckSymptoms: "Check Symptoms",
  dashCheckSymptomsDesc: "Understand warning signs",
  
  // Prevention page body
  preventionEatWell: "Eat Well",
  preventionEatWellDesc: "A balanced diet rich in fruits, vegetables, whole grains, and lean proteins is one of the most powerful tools for disease prevention. Limit processed foods, sugar, and excessive sodium.",
  preventionExercise: "Exercise Regularly",
  preventionExerciseDesc: "Aim for at least 150 minutes of moderate physical activity per week. Walking, cycling, swimming, or any activity you enjoy can significantly reduce your risk of chronic diseases.",
  preventionSleep: "Prioritize Sleep",
  preventionSleepDesc: "Adults need 7-9 hours of quality sleep each night. Good sleep strengthens your immune system, improves memory, and reduces the risk of heart disease and diabetes.",
  preventionHygiene: "Practice Good Hygiene",
  preventionHygieneDesc: "Wash your hands frequently with soap and water, especially before eating and after using the bathroom. Cover your mouth when coughing or sneezing to prevent the spread of germs.",
  preventionVaccines: "Stay Up to Date on Vaccines",
  preventionVaccinesDesc: "Vaccines are one of the safest and most effective ways to prevent serious diseases. Follow your local health authority's recommended immunization schedule.",
  preventionMentalHealth: "Protect Your Mental Health",
  preventionMentalHealthDesc: "Manage stress through meditation, deep breathing, or talking to someone you trust. Mental health is just as important as physical health for overall wellbeing.",
  preventionScreenings: "Get Regular Screenings",
  preventionScreeningsDesc: "Regular health screenings can detect conditions early when they are most treatable. Talk to your doctor about which screenings are appropriate for your age and risk factors.",
  preventionHydration: "Stay Hydrated",
  preventionHydrationDesc: "Drink at least 8 glasses of water daily. Proper hydration supports kidney function, helps maintain healthy skin, and keeps your body's systems running smoothly.",
  preventionSunProtection: "Protect Your Skin from Sun",
  preventionSunProtectionDesc: "Use sunscreen with SPF 30 or higher, wear protective clothing, and avoid peak sun hours (10 AM to 4 PM) to reduce your risk of skin cancer and premature aging.",
  preventionAvoidTobacco: "Avoid Tobacco and Limit Alcohol",
  preventionAvoidTobaccoDesc: "Smoking is the leading cause of preventable death. If you smoke, seek help to quit. Also, limit alcohol consumption to reduce your risk of liver disease, cancer, and other conditions.",
  
  // Lifestyle page body
  lifestyleEatBetter: "Eat Better",
  lifestyleEatBetterDesc: "Fuel your body with nutritious foods. Fill half your plate with fruits and vegetables, choose whole grains, and include lean proteins. Cooking at home gives you control over ingredients and portions.",
  lifestyleMoveMore: "Move More",
  lifestyleMoveMoreDesc: "Find activities you enjoy and make them part of your routine. Even 20 minutes of walking, dancing, or stretching can boost your mood, strengthen your heart, and improve your energy levels throughout the day.",
  lifestyleSleepWell: "Sleep Well",
  lifestyleSleepWellDesc: "Create a relaxing bedtime routine. Keep your room cool and dark, avoid screens before bed, and try to go to bed and wake up at the same time every day. Quality sleep is the foundation of good health.",
  lifestyleStayHydrated: "Stay Hydrated",
  lifestyleStayHydratedDesc: "Water is essential for every function in your body. Carry a water bottle, drink a glass of water first thing in the morning, and eat water-rich foods like cucumbers, watermelon, and oranges.",
  lifestyleManageStress: "Manage Stress",
  lifestyleManageStressDesc: "Chronic stress can harm your body and mind. Practice deep breathing, spend time in nature, journal your thoughts, or talk to a friend. Taking breaks throughout the day helps reset your focus.",
  lifestyleMaintainHygiene: "Maintain Good Hygiene",
  lifestyleMaintainHygieneDesc: "Simple daily habits like washing your hands, brushing your teeth twice a day, and keeping your living space clean can prevent infections and keep you feeling your best.",
  
  // Calendar page body
  calendarEventDetails: "Event Details",
  calendarIn: "In",
  calendarDays: "days",
  calendarPast: "Past",
  calendarNoEvents: "No events for this month",
  
  // Emergency page body
  emergencyCallEmergency: "Call Emergency Services",
  emergencyCallEmergencyDesc: "If you or someone nearby is experiencing a medical emergency, call your local emergency number (911 in the US, 112 in Europe, 108 in India) immediately.",
  emergencyWhenToCall: "When to Call Emergency Services",
  emergencyWhenToCallDesc: "Call immediately for: chest pain, difficulty breathing, severe bleeding, loss of consciousness, suspected stroke, severe allergic reaction, choking, or any life-threatening situation.",
  emergencyCPRTitle: "CPR Basics",
  emergencyCPRDesc: "If someone collapses and is not breathing normally: Call emergency services, place your hands in the center of their chest, push hard and fast at least 2 inches deep, at a rate of 100-120 compressions per minute.",
  emergencyChokingTitle: "Choking First Aid",
  emergencyChokingDesc: "For a conscious choking adult: Stand behind them, place your fist just above their navel, and give quick upward thrusts. For infants, use back blows and chest thrusts.",
  emergencyBleedingTitle: "Control Severe Bleeding",
  emergencyBleedingDesc: "Apply firm, direct pressure with a clean cloth or gauze. Do not remove the cloth if it soaks through — add more on top. Elevate the injured area above the heart if possible.",
  emergencyStrokeTitle: "FAST Stroke Recognition",
  emergencyStrokeDesc: "F — Face: Is one side drooping? A — Arms: Can they raise both arms? S — Speech: Is their speech slurred? T — Time: If any of these, call emergency services immediately.",
  emergencyBurnTitle: "Burn First Aid",
  emergencyBurnDesc: "Cool the burn under running cold water for at least 20 minutes. Do not apply ice, butter, or toothpaste. Cover loosely with a clean, non-fluffy dressing. Seek medical help for burns larger than your palm.",
  
  // Symptoms page body
  symptomsChestPain: "Chest pain or discomfort",
  symptomsShortBreath: "Shortness of breath",
  symptomsSevereHeadache: "Severe or sudden headache",
  symptomsHighFever: "High fever (above 103F/39.4C)",
  symptomsAbdominalPain: "Persistent abdominal pain",
  symptomsVisionChanges: "Sudden vision changes",
  symptomsFatigue: "Unexplained fatigue or weakness",
  symptomsJointPain: "Joint pain or swelling",
  symptomsRash: "Unexplained rash or skin changes",
  symptomsNausea: "Persistent nausea or vomiting",
  symptomsDizziness: "Dizziness or fainting",
  symptomsBackPain: "Severe back pain",
  symptomsSwelling: "Unexplained swelling",
  symptomsCough: "Persistent cough",
  symptomsInsomnia: "Difficulty sleeping",
  symptomsWeightChange: "Unexplained weight change",
  symptomsAnxiety: "Anxiety or panic attacks",
  symptomsAllergies: "Allergic reactions",
  
  // Footer body
  footerAbout: "About",
  footerAboutDesc: "Digital Health Awareness Portal provides reliable, evidence-based health information to help you make informed decisions about your wellbeing.",
  footerResources: "Resources",
  footerSupport: "Support",
  footerContactUs: "Contact Us",
  footerPrivacy: "Privacy Policy",
  footerTerms: "Terms of Service",
  footerSitemap: "Sitemap",
  footerRights: "All rights reserved. For educational and awareness purposes only.",
  
  // Registration login extra
  regStep1Title: "Personal Information",
  regStep1Desc: "Tell us a bit about yourself",
  regProvideEmailOrPhone: "Please provide email or phone number",
  regAccountInfo: "Account Information",
  regCreateSecure: "Create a secure password for your account",
  regSecureNote: "Your account is stored locally on this device. No email verification needed.",
  regJoinDescription: "Create your free account and get personalized access to health topics, campaigns, bookmarks, and daily wellness tips.",
  loginEmailOrPhone: "Email or Phone",
  loginPasswordLabel: "Password",
  loginNewUser: "New to the portal? Create an account with just your name, email/phone, and password. No OTP verification required.",
  loginCreateOne: "Create one free",
  
  // AI Chat body
  aiDisclaimer: "Educational info only. Not medical advice.",
  
  // Language selector body
  langTitle: "Choose Your Language",
  langDesc: "Select your preferred language to continue. You can change it anytime.",

  loginDemoNote: "No OTP verification required. Sign in with just your credentials.",

};

const translations: Record<Language, TranslationKeys> = { en, hi, es, te, fr, ar };
export default translations;