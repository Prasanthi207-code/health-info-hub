export interface Campaign {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  image: string;
  startDate: string;
  endDate: string;
  status: "active" | "upcoming" | "completed";
  objective: string;
  keyFacts: string[];
  whyItMatters: string[];
  preventionActions: string[];
  statistics: { label: string; value: string }[];
  relatedArticleIds: string[];
}

export interface HealthTopic {
  id: string;
  categoryId: string;
  title: string;
  shortDescription: string;
  overview: string;
  symptoms: string[];
  riskFactors: string[];
  prevention: string[];
  warningSigns: string[];
  keyFacts: { label: string; value: string }[];
  references: string[];
  image: string;
  updatedAt: string;
  color: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  content: string;
  image: string;
  author: string;
  publishedDate: string;
  readingTime: string;
  keyTakeaways: string[];
  relatedTopicIds: string[];
}

export interface HealthTip {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface AwarenessEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  month: number;
  day: number;
  category: string;
  color: string;
}

export interface Bookmark {
  id: string;
  contentType: "campaign" | "topic" | "article";
  contentId: string;
  createdAt: string;
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: "c1",
    title: "Heart Health Awareness",
    shortDescription: "Promoting cardiovascular health through education, prevention, and healthy lifestyle choices.",
    description: "Heart disease remains one of the leading causes of death worldwide. This campaign focuses on raising awareness about cardiovascular health, encouraging regular heart checkups, promoting physical activity, and educating communities about heart-healthy nutrition and lifestyle choices.",
    category: "Disease Prevention",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    status: "active",
    objective: "Reduce cardiovascular disease risk through community education and awareness programs.",
    keyFacts: [
      "Heart disease is responsible for approximately 17.9 million deaths globally each year",
      "Up to 80% of premature heart disease is preventable through healthy lifestyle choices",
      "Regular physical activity can reduce heart disease risk by up to 30%",
      "A balanced diet rich in fruits, vegetables, and whole grains supports heart health"
    ],
    whyItMatters: [
      "Heart disease is the leading cause of death globally",
      "Many risk factors are modifiable through lifestyle changes",
      "Early awareness can prevent serious complications",
      "Community education empowers individuals to take action"
    ],
    preventionActions: [
      "Maintain a balanced diet low in saturated fats and sodium",
      "Engage in at least 150 minutes of moderate physical activity per week",
      "Monitor blood pressure and cholesterol levels regularly",
      "Avoid tobacco use and limit alcohol consumption",
      "Manage stress through relaxation techniques and adequate sleep"
    ],
    statistics: [
      { label: "Global Deaths Yearly", value: "17.9M" },
      { label: "Preventable Cases", value: "80%" },
      { label: "Risk Reduction with Exercise", value: "30%" },
      { label: "Adults Affected Globally", value: "1 in 5" }
    ],
    relatedArticleIds: ["a1", "a2"]
  },
  {
    id: "c2",
    title: "Diabetes Prevention",
    shortDescription: "Understanding diabetes risk factors and taking preventive steps for a healthier life.",
    description: "Diabetes affects millions of people worldwide, and many cases of type 2 diabetes are preventable through lifestyle modifications. This campaign raises awareness about diabetes risk factors, early warning signs, and the importance of maintaining a healthy weight, balanced diet, and regular physical activity.",
    category: "Disease Prevention",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    startDate: "2026-03-01",
    endDate: "2026-11-30",
    status: "active",
    objective: "Empower communities with knowledge about diabetes prevention and early detection.",
    keyFacts: [
      "Over 400 million people worldwide live with diabetes",
      "Type 2 diabetes accounts for approximately 90% of all diabetes cases",
      "Healthy eating and regular exercise can reduce type 2 diabetes risk by up to 58%",
      "Early detection and management prevent serious complications"
    ],
    whyItMatters: [
      "Diabetes prevalence is rising globally at an alarming rate",
      "Unmanaged diabetes can lead to heart disease, kidney failure, and vision loss",
      "Prevention through lifestyle changes is highly effective",
      "Awareness helps reduce stigma and encourages early screening"
    ],
    preventionActions: [
      "Maintain a healthy body weight through balanced nutrition",
      "Engage in regular physical activity — at least 30 minutes daily",
      "Limit intake of sugary beverages and processed foods",
      "Get regular blood sugar screenings, especially if at risk",
      "Learn about family history and personal risk factors"
    ],
    statistics: [
      { label: "People Living with Diabetes", value: "537M" },
      { label: "Preventable with Lifestyle", value: "58%" },
      { label: "Type 2 Cases", value: "90%" },
      { label: "Undiagnosed Worldwide", value: "1 in 2" }
    ],
    relatedArticleIds: ["a2", "a3"]
  },
  {
    id: "c3",
    title: "Mental Well-being",
    shortDescription: "Breaking stigma and promoting mental health awareness for all communities.",
    description: "Mental health is a fundamental component of overall well-being. This campaign focuses on breaking the stigma surrounding mental health conditions, promoting emotional well-being, and encouraging people to seek professional support when needed. Mental health awareness helps communities build resilience and support systems.",
    category: "Mental Health",
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&h=500&fit=crop",
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    status: "active",
    objective: "Normalize conversations about mental health and promote accessible support resources.",
    keyFacts: [
      "Approximately 1 in 8 people globally live with a mental health condition",
      "Depression is one of the leading causes of disability worldwide",
      "Early intervention significantly improves mental health outcomes",
      "Social connection and community support are protective factors for mental health"
    ],
    whyItMatters: [
      "Mental health conditions affect people of all ages and backgrounds",
      "Stigma prevents many from seeking help",
      "Mental and physical health are deeply interconnected",
      "Workplace and community mental health initiatives benefit everyone"
    ],
    preventionActions: [
      "Practice mindfulness and stress-management techniques",
      "Maintain strong social connections and support networks",
      "Seek professional help early when experiencing persistent symptoms",
      "Engage in regular physical activity, which benefits mental health",
      "Limit excessive screen time and prioritize quality sleep"
    ],
    statistics: [
      { label: "People Affected Globally", value: "1B+" },
      { label: "Deaths by Suicide Yearly", value: "700K" },
      { label: "Receive No Treatment", value: "75%" },
      { label: "Most Onset Before Age 24", value: "50%" }
    ],
    relatedArticleIds: ["a4", "a5"]
  },
  {
    id: "c4",
    title: "Clean Air & Respiratory Health",
    shortDescription: "Raising awareness about air quality and its impact on respiratory health.",
    description: "Air pollution is a major environmental health risk affecting billions of people. This campaign highlights the connection between air quality and respiratory health, promoting awareness about indoor and outdoor air pollutants, their health effects, and practical steps to breathe cleaner air.",
    category: "Environmental Health",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop",
    startDate: "2026-04-01",
    endDate: "2026-09-30",
    status: "active",
    objective: "Educate communities about air pollution risks and promote respiratory health protections.",
    keyFacts: [
      "Air pollution contributes to approximately 7 million premature deaths annually",
      "9 out of 10 people breathe air that exceeds guideline limits",
      "Indoor air pollution can be 2 to 5 times worse than outdoor air",
      "Children and the elderly are particularly vulnerable to air pollution effects"
    ],
    whyItMatters: [
      "Air pollution is the largest environmental health risk globally",
      "Respiratory conditions like asthma are exacerbated by poor air quality",
      "Climate change is worsening air quality in many regions",
      "Clean air is a fundamental health right"
    ],
    preventionActions: [
      "Monitor local air quality indexes regularly",
      "Use air purifiers in indoor environments when needed",
      "Reduce personal contributions to air pollution",
      "Avoid outdoor exercise during high pollution periods",
      "Support clean energy and green transportation initiatives"
    ],
    statistics: [
      { label: "Premature Deaths Yearly", value: "7M" },
      { label: "People Breathing Unsafe Air", value: "99%" },
      { label: "Children Under 5 Affected", value: "600K" },
      { label: "Economic Cost", value: "$5T/year" }
    ],
    relatedArticleIds: ["a6"]
  },
  {
    id: "c5",
    title: "Healthy Nutrition",
    shortDescription: "Encouraging balanced diets and informed food choices for better health outcomes.",
    description: "Good nutrition is the foundation of good health. This campaign promotes awareness about balanced diets, the importance of fruits and vegetables, understanding food labels, and making informed dietary choices. Proper nutrition prevents malnutrition in all its forms and reduces the risk of noncommunicable diseases.",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    startDate: "2026-02-01",
    endDate: "2026-12-31",
    status: "active",
    objective: "Promote evidence-based nutrition knowledge and healthy eating habits across communities.",
    keyFacts: [
      "Poor diet is a leading risk factor for global disease burden",
      "Consuming 5 portions of fruits and vegetables daily reduces disease risk",
      "Excessive salt intake contributes to hypertension and heart disease",
      "Nutrition education improves food choices and health outcomes"
    ],
    whyItMatters: [
      "Diet-related diseases are among the top global health threats",
      "Malnutrition exists in both undernutrition and overweight forms",
      "Healthy eating habits established early last a lifetime",
      "Access to nutrition information empowers better food decisions"
    ],
    preventionActions: [
      "Eat at least 5 servings of fruits and vegetables daily",
      "Choose whole grains over refined grains",
      "Limit added sugars, salt, and processed foods",
      "Stay adequately hydrated throughout the day",
      "Read and understand nutrition labels on packaged foods"
    ],
    statistics: [
      { label: "Diet-Related Deaths Yearly", value: "11M" },
      { label: "Adults Eating Enough Vegetables", value: "1 in 10" },
      { label: "Children with Hidden Hunger", value: "340M" },
      { label: "Global Obesity Tripled Since 1975", value: "3x" }
    ],
    relatedArticleIds: ["a3", "a7"]
  },
  {
    id: "c6",
    title: "Immunization Awareness",
    shortDescription: "Promoting the importance of vaccinations for individuals and communities.",
    description: "Vaccination is one of the most effective public health interventions, saving millions of lives every year. This campaign raises awareness about the importance of immunization, addresses common concerns, and encourages timely vaccination for people of all ages to protect individuals and communities.",
    category: "Infectious Diseases",
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=500&fit=crop",
    startDate: "2026-04-24",
    endDate: "2026-05-01",
    status: "active",
    objective: "Increase vaccination coverage and address misinformation about immunizations.",
    keyFacts: [
      "Vaccines prevent approximately 4 to 5 million deaths every year",
      "Immunization protects not only individuals but entire communities",
      "Vaccine-preventable diseases still cause significant morbidity in under-vaccinated populations",
      "Routine childhood immunization is one of the most cost-effective health interventions"
    ],
    whyItMatters: [
      "Vaccine hesitancy threatens global immunization progress",
      "Preventable disease outbreaks can resurge without adequate coverage",
      "New vaccines continue to expand the range of preventable diseases",
      "Community immunity requires high vaccination rates"
    ],
    preventionActions: [
      "Follow recommended vaccination schedules",
      "Consult healthcare providers about vaccines for all age groups",
      "Stay informed about new vaccines and booster recommendations",
      "Address concerns with evidence-based information",
      "Ensure children receive all recommended childhood vaccines"
    ],
    statistics: [
      { label: "Deaths Prevented Yearly", value: "4-5M" },
      { label: "Children Unvaccinated Globally", value: "20M+" },
      { label: "Diseases Preventable by Vaccines", value: "30+" },
      { label: "Cost per DALY Saved", value: "$25-50" }
    ],
    relatedArticleIds: ["a8"]
  },
  {
    id: "c7",
    title: "Cancer Awareness",
    shortDescription: "Early detection, prevention, and support for cancer patients and survivors.",
    description: "Cancer is a leading cause of death worldwide, but many cancers are preventable and treatable when detected early. This campaign focuses on cancer prevention through lifestyle changes, the importance of regular screenings, recognizing warning signs, and supporting those affected by cancer.",
    category: "Disease Prevention",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=500&fit=crop",
    startDate: "2026-02-04",
    endDate: "2026-04-30",
    status: "active",
    objective: "Promote cancer prevention, early detection, and support for affected individuals.",
    keyFacts: [
      "Approximately 1 in 5 people worldwide develop cancer during their lifetime",
      "At least 30-50% of cancers are preventable through healthy lifestyle choices",
      "Early detection significantly improves treatment outcomes",
      "Tobacco use is the single largest preventable cause of cancer"
    ],
    whyItMatters: [
      "Cancer incidence continues to rise globally",
      "Many cancers are detected too late for effective treatment",
      "Survivorship quality of life can be improved through awareness",
      "Prevention and screening programs save lives and reduce healthcare costs"
    ],
    preventionActions: [
      "Avoid tobacco use in all forms",
      "Protect skin from excessive UV radiation",
      "Maintain a healthy weight and stay physically active",
      "Get recommended cancer screenings at appropriate ages",
      "Limit alcohol consumption and eat a balanced diet"
    ],
    statistics: [
      { label: "New Cases Yearly", value: "20M+" },
      { label: "Cancer Deaths Yearly", value: "9.7M" },
      { label: "Preventable Through Lifestyle", value: "30-50%" },
      { label: "Survival Rate with Early Detection", value: "80%+" }
    ],
    relatedArticleIds: ["a9"]
  },
  {
    id: "c8",
    title: "Road Safety & Injury Prevention",
    shortDescription: "Promoting safer roads and reducing preventable injuries and deaths.",
    description: "Road traffic injuries are a leading cause of death and disability worldwide. This campaign raises awareness about road safety measures, injury prevention strategies, and the importance of safe behaviors on roads to reduce preventable deaths and injuries.",
    category: "Safety",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    startDate: "2026-05-01",
    endDate: "2026-11-30",
    status: "active",
    objective: "Reduce road traffic injuries through education and safety awareness.",
    keyFacts: [
      "Road traffic injuries claim approximately 1.35 million lives annually",
      "Road crashes are the leading cause of death for young people aged 5-29",
      "Over 90% of road traffic deaths occur in low- and middle-income countries",
      "Seat belts reduce the risk of fatal injury by 45%"
    ],
    whyItMatters: [
      "Most road traffic deaths are preventable",
      "Injuries affect families and communities profoundly",
      "Safe road behaviors benefit all road users",
      "Economic costs of road crashes are substantial"
    ],
    preventionActions: [
      "Always wear seat belts and ensure child restraint use",
      "Avoid driving under the influence of alcohol or substances",
      "Obey speed limits and traffic regulations",
      "Eliminate distracted driving, especially phone use",
      "Promote pedestrian and cyclist safety awareness"
    ],
    statistics: [
      { label: "Road Deaths Yearly", value: "1.35M" },
      { label: "Leading Cause of Youth Death", value: "5-29" },
      { label: "Seat Belt Risk Reduction", value: "45%" },
      { label: "Economic Cost", value: "3% of GDP" }
    ],
    relatedArticleIds: ["a10"]
  }
];

export const HEALTH_TOPICS: HealthTopic[] = [
  {
    id: "t1", categoryId: "heart-health", title: "Heart Health",
    shortDescription: "Understanding cardiovascular health and how to keep your heart strong.",
    overview: "Cardiovascular health refers to the health of the heart and blood vessels. The heart is a muscular organ that pumps blood throughout the body, delivering oxygen and nutrients. Maintaining heart health involves a combination of healthy eating, regular physical activity, avoiding tobacco, managing stress, and regular health checkups.",
    symptoms: ["Chest pain or discomfort", "Shortness of breath during activities", "Irregular heartbeat or palpitations", "Fatigue during routine activities", "Swelling in legs, ankles, or feet"],
    riskFactors: ["High blood pressure", "High cholesterol levels", "Smoking and tobacco use", "Obesity and physical inactivity", "Diabetes", "Family history of heart disease", "Excessive alcohol consumption"],
    prevention: ["Maintain a balanced, heart-healthy diet", "Exercise regularly — at least 150 minutes of moderate activity per week", "Monitor blood pressure and cholesterol", "Manage stress through healthy coping strategies", "Avoid tobacco and limit alcohol intake", "Get regular health screenings"],
    warningSigns: ["Sudden severe chest pain", "Pain radiating to arm, jaw, or back", "Sudden shortness of breath", "Loss of consciousness", "Sudden severe weakness on one side of the body"],
    keyFacts: [
      { label: "Leading Cause of Death Globally", value: "17.9M/year" },
      { label: "Preventable Risk", value: "80%" },
      { label: "Blood Pressure Target", value: "<120/80" },
      { label: "Recommended Weekly Exercise", value: "150 min" }
    ],
    references: ["World Health Organization — Cardiovascular Diseases", "American Heart Association — Heart Disease Facts", "Mayo Clinic — Heart Disease Prevention"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    updatedAt: "2026-08-15",
    color: "oklch(0.55 0.15 25)",
    icon: "Heart"
  },
  {
    id: "t2", categoryId: "diabetes", title: "Diabetes",
    shortDescription: "Learning about diabetes types, risk factors, and prevention strategies.",
    overview: "Diabetes is a chronic health condition that affects how your body turns food into energy. It occurs when the pancreas doesn't produce enough insulin or the body can't effectively use the insulin it produces. There are several types, with type 2 being the most common, often linked to lifestyle factors.",
    symptoms: ["Increased thirst and frequent urination", "Unexplained weight loss", "Fatigue and weakness", "Blurred vision", "Slow-healing wounds", "Tingling or numbness in hands or feet"],
    riskFactors: ["Being overweight or obese", "Sedentary lifestyle", "Family history of diabetes", "Age (risk increases over 45)", "High blood pressure", "Unhealthy diet", "Gestational diabetes history"],
    prevention: ["Maintain a healthy body weight", "Eat a balanced diet rich in whole foods", "Exercise regularly", "Limit sugary drinks and processed foods", "Monitor blood sugar if at risk", "Get regular health screenings"],
    warningSigns: ["Persistent high blood sugar readings", "Signs of ketoacidosis (nausea, fruity breath, confusion)", "Recurrent infections", "Non-healing ulcers", "Sudden changes in vision"],
    keyFacts: [
      { label: "People Affected Globally", value: "537M" },
      { label: "Type 2 Proportion", value: "90%" },
      { label: "Preventable with Lifestyle", value: "58%" },
      { label: "Undiagnosed Cases", value: "50%" }
    ],
    references: ["International Diabetes Federation — Diabetes Atlas", "WHO — Diabetes Fact Sheet", "CDC — About Diabetes"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    updatedAt: "2026-07-20",
    color: "oklch(0.55 0.12 180)",
    icon: "Droplet"
  },
  {
    id: "t3", categoryId: "cancer", title: "Cancer",
    shortDescription: "Understanding cancer risk factors, prevention, and the importance of early detection.",
    overview: "Cancer is a group of diseases characterized by the uncontrolled growth of abnormal cells. It can develop in virtually any part of the body. While cancer can be a serious condition, many cancers are preventable, and early detection dramatically improves outcomes. Understanding risk factors and protective measures is essential for cancer prevention.",
    symptoms: ["Unexplained weight loss", "Persistent fatigue", "Unusual lumps or swelling", "Changes in skin or moles", "Persistent cough or hoarseness", "Changes in bowel or bladder habits", "Unexplained bleeding"],
    riskFactors: ["Tobacco use", "Excessive sun exposure", "Obesity and poor diet", "Family history and genetics", "Certain infections", "Excessive alcohol consumption", "Environmental exposures"],
    prevention: ["Avoid all forms of tobacco", "Protect skin from UV radiation", "Maintain healthy weight and diet", "Get recommended screenings", "Limit alcohol consumption", "Get vaccinated against cancer-causing infections"],
    warningSigns: ["Any lump that persists or grows", "Changes in moles (asymmetry, color, size)", "Persistent unexplained pain", "Blood in stool or urine", "Sudden unexplained weight loss of 10+ lbs"],
    keyFacts: [
      { label: "New Cases Yearly", value: "20M+" },
      { label: "Preventable", value: "30-50%" },
      { label: "Survival with Early Detection", value: "80%+" },
      { label: "Leading Risk Factor", value: "Tobacco" }
    ],
    references: ["WHO — Cancer Fact Sheet", "American Cancer Society — Cancer Prevention", "National Cancer Institute"],
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=500&fit=crop",
    updatedAt: "2026-08-01",
    color: "oklch(0.5 0.15 300)",
    icon: "Activity"
  },
  {
    id: "t4", categoryId: "mental-health", title: "Mental Health",
    shortDescription: "Promoting emotional well-being and mental health awareness.",
    overview: "Mental health encompasses our emotional, psychological, and social well-being. It affects how we think, feel, and act. Good mental health is essential at every stage of life. Mental health conditions are common and treatable, and seeking help is a sign of strength.",
    symptoms: ["Persistent sadness or low mood", "Withdrawal from social activities", "Changes in sleep patterns", "Difficulty concentrating", "Loss of interest in usual activities", "Unexplained aches and pains", "Excessive worry or fear"],
    riskFactors: ["Chronic stress", "Traumatic experiences", "Social isolation", "Family history of mental illness", "Substance use", "Chronic physical health conditions", "Major life changes or losses"],
    prevention: ["Build and maintain supportive relationships", "Practice regular physical activity", "Develop healthy coping strategies", "Seek help early when struggling", "Practice mindfulness and relaxation", "Maintain a regular sleep schedule"],
    warningSigns: ["Thoughts of self-harm or suicide", "Inability to perform daily tasks", "Hearing voices or unusual beliefs", "Severe mood swings", "Substance abuse"],
    keyFacts: [
      { label: "Affected Globally", value: "1 in 8" },
      { label: "Receive No Treatment", value: "75%" },
      { label: "Onset Before Age 24", value: "50%" },
      { label: "Leading Disability Cause", value: "Yes" }
    ],
    references: ["WHO — Mental Health Fact Sheet", "National Institute of Mental Health", "Mental Health Foundation"],
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&h=500&fit=crop",
    updatedAt: "2026-08-10",
    color: "oklch(0.5 0.1 200)",
    icon: "Brain"
  },
  {
    id: "t5", categoryId: "nutrition", title: "Nutrition",
    shortDescription: "The role of balanced nutrition in overall health and disease prevention.",
    overview: "Good nutrition is fundamental to health and well-being. A balanced diet provides the body with essential nutrients needed for growth, tissue repair, and daily functioning. Proper nutrition helps prevent chronic diseases, supports immune function, and maintains healthy body weight.",
    symptoms: ["Chronic fatigue", "Weak immune system", "Poor concentration", "Slow wound healing", "Digestive issues", "Bone and joint pain", "Brittle nails and hair loss"],
    riskFactors: ["Poor dietary habits", "Excessive processed food consumption", "Skipping meals regularly", "Over-reliance on supplements", "Limited food variety", "Food insecurity", "Lack of nutrition knowledge"],
    prevention: ["Eat a variety of fruits and vegetables daily", "Choose whole grains over refined options", "Include lean proteins and healthy fats", "Stay hydrated with water as primary beverage", "Limit added sugars, salt, and ultra-processed foods", "Practice portion awareness"],
    warningSigns: ["Significant unexplained weight changes", "Persistent nutrient deficiency symptoms", "Severe digestive problems", "Signs of malnutrition or over-nutrition"],
    keyFacts: [
      { label: "Diet-Related Deaths Yearly", value: "11M" },
      { label: "Fruit & Veg Enough", value: "1 in 10 adults" },
      { label: "Recommended Servings/Day", value: "5+" },
      { label: "Added Sugar Limit", value: "<25g/day" }
    ],
    references: ["WHO — Healthy Diet Fact Sheet", "Harvard T.H. Chan School of Public Health — Nutrition Source", "Dietitians of Canada"],
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    updatedAt: "2026-07-25",
    color: "oklch(0.55 0.12 150)",
    icon: "Apple"
  },
  {
    id: "t6", categoryId: "womens-health", title: "Women's Health",
    shortDescription: "Addressing unique health needs and concerns for women across all life stages.",
    overview: "Women's health encompasses a range of conditions and considerations unique to the female body, including reproductive health, hormonal changes, and conditions that disproportionately affect women. Comprehensive care and awareness at every life stage are essential for optimal health.",
    symptoms: ["Irregular menstrual cycles", "Severe menstrual cramps", "Pelvic pain", "Unusual vaginal discharge", "Breast lumps or changes", "Mood changes related to hormonal fluctuations"],
    riskFactors: ["Hormonal imbalances", "Family history of breast or ovarian cancer", "Sedentary lifestyle", "Poor nutrition", "Late or no pregnancy screening", "Stress and mental health challenges"],
    prevention: ["Regular reproductive health screenings", "Breast self-examinations and mammograms as recommended", "Prenatal and postnatal care", "Regular physical activity", "Balanced nutrition rich in iron and calcium", "Stress management and mental health support"],
    warningSigns: ["Sudden changes in menstrual patterns", "Severe pelvic pain", "Breast changes or discharge", "Post-menopausal bleeding", "Persistent fatigue or mood changes"],
    keyFacts: [
      { label: "Breast Cancer — Most Common in Women", value: "2.3M/year" },
      { label: "Maternal Deaths Yearly", value: "287K" },
      { label: "Preventable with Screening", value: "Most" },
      { label: "Iron Deficiency Affects", value: "2B+" }
    ],
    references: ["WHO — Women's Health", "Office on Women's Health — womenshealth.gov", "American College of Obstetricians and Gynecologists"],
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop",
    updatedAt: "2026-08-05",
    color: "oklch(0.55 0.12 340)",
    icon: "Heart"
  },
  {
    id: "t7", categoryId: "child-health", title: "Child Health",
    shortDescription: "Supporting healthy growth, development, and well-being for children.",
    overview: "Child health covers the physical, mental, and social well-being of children from infancy through adolescence. Promoting healthy habits in childhood sets the foundation for lifelong health. Regular checkups, immunizations, and nutrition are critical components of child health.",
    symptoms: ["Persistent fever", "Delayed growth or development", "Frequent infections", "Changes in eating or sleeping patterns", "Behavioral changes", "Recurring pain or discomfort"],
    riskFactors: ["Inadequate nutrition", "Lack of physical activity", "Excessive screen time", "Unsafe living conditions", "Missed vaccinations", "Social and economic disadvantage"],
    prevention: ["Follow recommended immunization schedules", "Ensure balanced nutrition appropriate for age", "Encourage regular physical activity and play", "Promote adequate sleep for age group", "Limit screen time and encourage outdoor activities", "Ensure regular pediatric checkups"],
    warningSigns: ["High fever that doesn't respond to treatment", "Difficulty breathing", "Severe allergic reactions", "Signs of dehydration", "Severe pain or injury", "Sudden behavioral changes"],
    keyFacts: [
      { label: "Child Deaths Preventable", value: "75%" },
      { label: "Undernutrition in Children", value: "149M" },
      { label: "Measles Deaths Prevented by Vaccine", value: "Millions" },
      { label: "Physical Activity Recommended", value: "60 min/day" }
    ],
    references: ["UNICEF — Child Health", "WHO — Child and Adolescent Health", "American Academy of Pediatrics"],
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=500&fit=crop",
    updatedAt: "2026-07-30",
    color: "oklch(0.6 0.1 90)",
    icon: "Baby"
  },
  {
    id: "t8", categoryId: "respiratory-health", title: "Respiratory Health",
    shortDescription: "Keeping your lungs healthy and understanding common respiratory conditions.",
    overview: "Respiratory health involves the health of the lungs and airways. Conditions like asthma, COPD, and respiratory infections can significantly impact quality of life. Maintaining respiratory health through clean air, avoiding smoking, and managing chronic conditions is essential.",
    symptoms: ["Persistent cough", "Wheezing", "Shortness of breath", "Chest tightness", "Frequent respiratory infections", "Difficulty breathing during physical activity"],
    riskFactors: ["Smoking and secondhand smoke exposure", "Air pollution", "Occupational exposures", "Allergies", "Family history of respiratory conditions", "Obesity"],
    prevention: ["Avoid smoking and secondhand smoke", "Monitor and reduce exposure to air pollution", "Get recommended vaccinations (flu, pneumonia)", "Practice good hand hygiene", "Maintain healthy indoor air quality", "Exercise to strengthen lung capacity"],
    warningSigns: ["Severe difficulty breathing", "Coughing up blood", "Chest pain with breathing", "Blue-tinged lips or fingernails", "Rapid worsening of symptoms"],
    keyFacts: [
      { label: "COPD Deaths Yearly", value: "3.23M" },
      { label: "Asthma Affects", value: "262M" },
      { label: "Smoking Causes 90% of Lung Cancers", value: "90%" },
      { label: "Pneumonia Child Deaths Yearly", value: "740K" }
    ],
    references: ["WHO — Respiratory Infections", "Global Initiative for Asthma (GINA)", "American Lung Association"],
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&h=500&fit=crop",
    updatedAt: "2026-08-12",
    color: "oklch(0.5 0.12 220)",
    icon: "Wind"
  },
  {
    id: "t9", categoryId: "oral-health", title: "Oral Health",
    shortDescription: "The connection between oral health and overall well-being.",
    overview: "Oral health is an integral part of general health and well-being. Poor oral health can lead to pain, infection, and can be linked to chronic conditions like diabetes and heart disease. Regular dental care and good oral hygiene practices are essential for maintaining oral health.",
    symptoms: ["Toothache or sensitivity", "Bleeding gums", "Persistent bad breath", "Mouth sores or ulcers", "Loose teeth", "Jaw pain or clicking"],
    riskFactors: ["Poor oral hygiene", "Excessive sugar consumption", "Tobacco use", "Dry mouth", "Certain medications", "Poor nutrition"],
    prevention: ["Brush teeth at least twice daily with fluoride toothpaste", "Floss daily", "Visit dentist regularly for checkups", "Limit sugary snacks and drinks", "Avoid tobacco products", "Replace toothbrush every 3 months"],
    warningSigns: ["Persistent tooth pain", "Gums that bleed frequently", "Sores that don't heal within 2 weeks", "Loose or shifting teeth", "Pain when chewing or opening the mouth"],
    keyFacts: [
      { label: "People Affected by Oral Disease", value: "3.5B" },
      { label: "Caries in Adults", value: "2B" },
      { label: "Tooth Decay Most Common Disease", value: "#1" },
      { label: "Brushing Should Last", value: "2 min" }
    ],
    references: ["WHO — Oral Health", "Fédération Dentaire Internationale", "American Dental Association"],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=500&fit=crop",
    updatedAt: "2026-07-15",
    color: "oklch(0.65 0.08 190)",
    icon: "Smile"
  },
  {
    id: "t10", categoryId: "skin-health", title: "Skin Health",
    shortDescription: "Understanding skin care, protection, and common skin conditions.",
    overview: "The skin is the body's largest organ and serves as the first line of defense against environmental threats. Skin health involves proper care, sun protection, hydration, and awareness of changes that may indicate health conditions. Common skin conditions include eczema, psoriasis, and skin cancers.",
    symptoms: ["Persistent rash or irritation", "Changes in skin color or texture", "New or changing moles", "Chronic dryness or flaking", "Itching without visible cause", "Slow-healing wounds"],
    riskFactors: ["Excessive UV radiation exposure", "Tanning habits", "Fair skin with less melanin", "Family history of skin cancer", "Use of tanning beds", "Weakened immune system"],
    prevention: ["Use sunscreen SPF 30+ daily", "Seek shade during peak UV hours (10am-4pm)", "Wear protective clothing and hats", "Avoid tanning beds", "Perform regular skin self-examinations", "Moisturize regularly and stay hydrated"],
    warningSigns: ["New or changing moles (ABCDE signs)", "Sores that don't heal", "Rapid growth of skin lesions", "Itching, bleeding, or crusting on skin", "Dark streaks under nails"],
    keyFacts: [
      { label: "Skin Cancers Yearly", value: "2-3M" },
      { label: "Melanoma Cases Rising", value: "325K" },
      { label: "SPF Recommendation", value: "30+" },
      { label: "Self-Exam Frequency", value: "Monthly" }
    ],
    references: ["WHO — UV Radiation and Skin Cancer", "American Academy of Dermatology", "Skin Cancer Foundation"],
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=500&fit=crop",
    updatedAt: "2026-08-08",
    color: "oklch(0.6 0.1 50)",
    icon: "Sun"
  },
  {
    id: "t11", categoryId: "infectious-diseases", title: "Infectious Diseases",
    shortDescription: "Understanding how infectious diseases spread and how to protect yourself.",
    overview: "Infectious diseases are caused by pathogenic microorganisms such as bacteria, viruses, parasites, or fungi. They can be spread from person to person, through contaminated food and water, or via vectors like mosquitoes. Understanding transmission and prevention is key to protecting public health.",
    symptoms: ["Fever", "Fatigue", "Muscle aches", "Cough or sore throat", "Nausea, vomiting, or diarrhea", "Skin rash", "Swollen lymph nodes"],
    riskFactors: ["Close contact with infected individuals", "Travel to endemic areas", "Weakened immune system", "Poor sanitation and hygiene", "Contaminated food or water", "Lack of vaccination"],
    prevention: ["Practice regular hand washing", "Stay up to date on vaccinations", "Use food and water safety practices", "Practice safe sex", "Avoid close contact with infected individuals", "Use insect repellent in endemic areas"],
    warningSigns: ["High fever not responding to treatment", "Severe headache with neck stiffness", "Difficulty breathing", "Persistent vomiting or diarrhea", "Severe dehydration", "Confusion or altered consciousness"],
    keyFacts: [
      { label: "Infectious Disease Deaths", value: "13M/year" },
      { label: "Tuberculosis Cases Yearly", value: "10.6M" },
      { label: "Malaria Deaths Yearly", value: "619K" },
      { label: "Hand Washing Reduces Spread", value: "Up to 50%" }
    ],
    references: ["WHO — Infectious Diseases", "CDC — Diseases and Conditions", "Gates Foundation — Global Health"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&h=500&fit=crop",
    updatedAt: "2026-08-14",
    color: "oklch(0.5 0.12 280)",
    icon: "Shield"
  },
  {
    id: "t12", categoryId: "physical-activity", title: "Physical Activity",
    shortDescription: "The benefits of regular exercise for physical and mental health.",
    overview: "Regular physical activity is one of the most important things you can do for your health. It helps control weight, reduces risk of chronic diseases, strengthens bones and muscles, improves mental health, and boosts energy levels. Both aerobic and strength exercises offer unique health benefits.",
    symptoms: ["Chronic fatigue", "Poor sleep quality", "Joint stiffness", "Weight gain", "Reduced mobility or flexibility", "Low mood or increased stress"],
    riskFactors: ["Sedentary lifestyle", "Desk-based work", "Lack of access to exercise facilities", "Chronic pain or disability", "Motivation or mental health barriers", "Age-related physical changes"],
    prevention: ["Aim for at least 150 minutes of moderate aerobic activity per week", "Include strength training twice per week", "Reduce prolonged sitting time", "Find enjoyable activities to sustain motivation", "Start gradually and increase intensity over time", "Consult a healthcare professional before starting a new program if needed"],
    warningSigns: ["Chest pain during exercise", "Severe shortness of breath at rest", "Dizziness or fainting during activity", "Joint swelling or injury", "Persistent exercise-related pain"],
    keyFacts: [
      { label: "Adults Not Active Enough", value: "1 in 4" },
      { label: "Risk Reduction for Heart Disease", value: "30%" },
      { label: "Minutes of Weekly Activity", value: "150+" },
      { label: "Sitting Time Reduction Benefit", value: "Significant" }
    ],
    references: ["WHO — Physical Activity Guidelines", "CDC — Benefits of Physical Activity", "American College of Sports Medicine"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=500&fit=crop",
    updatedAt: "2026-08-11",
    color: "oklch(0.5 0.1 150)",
    icon: "Dumbbell"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "a1", title: "Understanding Your Heart: A Complete Guide to Cardiovascular Health",
    category: "Heart Health",
    shortDescription: "Everything you need to know about keeping your heart healthy, from diet and exercise to understanding your risk factors.",
    content: `The heart beats approximately 100,000 times per day, pumping blood through a network of blood vessels that, if laid end to end, would stretch over 100,000 miles. This remarkable organ is at the center of your cardiovascular system, and maintaining its health is one of the most important things you can do for overall well-being.

Cardiovascular disease (CVD) remains the leading cause of death globally, accounting for an estimated 17.9 million deaths each year. However, research consistently shows that up to 80% of premature heart disease and stroke are preventable through healthy lifestyle choices.

**Key Strategies for Heart Health:**

1. **Eat a heart-healthy diet** — Focus on fruits, vegetables, whole grains, lean proteins, and healthy fats like those found in fish, nuts, and olive oil. Limit saturated fats, trans fats, sodium, and added sugars.

2. **Stay physically active** — Aim for at least 150 minutes of moderate-intensity aerobic activity per week. Walking, swimming, cycling, and dancing are all excellent choices.

3. **Monitor key health numbers** — Keep track of your blood pressure, cholesterol levels, and blood sugar. Know your numbers and discuss them with your healthcare provider.

4. **Manage stress** — Chronic stress can contribute to heart disease risk. Practice relaxation techniques, maintain social connections, and seek professional help when needed.

5. **Avoid tobacco** — Smoking damages blood vessels and accelerates atherosclerosis. Quitting smoking at any age reduces your risk.

6. **Limit alcohol** — Excessive alcohol intake can raise blood pressure and contribute to heart failure.

**Warning Signs You Should Never Ignore:**

Chest discomfort, shortness of breath, pain in the arms, jaw, or back, cold sweats, nausea, and lightheadedness can all be signs of a heart event. If you experience these symptoms, seek emergency medical attention immediately.`,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    author: "Dr. Sarah Mitchell",
    publishedDate: "2026-08-15",
    readingTime: "8 min",
    keyTakeaways: [
      "Heart disease is largely preventable through lifestyle changes",
      "Regular physical activity reduces cardiovascular risk by 30%",
      "Monitoring blood pressure and cholesterol is essential",
      "Recognizing warning signs can save lives"
    ],
    relatedTopicIds: ["t1"]
  },
  {
    id: "a2", title: "The Global Diabetes Epidemic: Prevention Strategies That Work",
    category: "Diabetes",
    shortDescription: "How communities and individuals can combat the growing diabetes crisis through evidence-based prevention.",
    content: `Diabetes affects more than 537 million adults worldwide, and that number is projected to rise to 783 million by 2045 if current trends continue. Yet type 2 diabetes, which accounts for about 90% of all cases, is largely preventable.

Research from the Diabetes Prevention Program (DPP) has shown that lifestyle interventions — including modest weight loss of 5-7% of body weight and 150 minutes of weekly physical activity — can reduce the risk of developing type 2 diabetes by 58%.

**Understanding the Risk Factors:**

Type 2 diabetes develops when the body becomes resistant to insulin or when the pancreas doesn't produce enough insulin. Key risk factors include:

- Being overweight or obese (especially carrying excess weight around the waist)
- Physical inactivity
- Family history of diabetes
- Age over 45
- High blood pressure
- Abnormal cholesterol levels
- History of gestational diabetes

**Practical Prevention Steps:**

1. **Choose whole foods over processed** — Replace refined carbohydrates with whole grains, add more vegetables to meals, and choose lean proteins.

2. **Move more, sit less** — Aim for 30 minutes of moderate activity daily. Even simple changes like taking the stairs or walking after meals help.

3. **Watch portion sizes** — Use smaller plates, read nutrition labels, and practice mindful eating.

4. **Stay hydrated** — Choose water over sugary beverages. A single sugary drink per day increases type 2 diabetes risk by 26%.

5. **Get screened** — If you have risk factors, talk to your healthcare provider about regular blood sugar testing.`,
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    author: "Dr. James Okafor",
    publishedDate: "2026-08-10",
    readingTime: "7 min",
    keyTakeaways: [
      "Type 2 diabetes is 58% preventable through lifestyle changes",
      "Losing 5-7% of body weight significantly reduces risk",
      "150 minutes of weekly activity is a key threshold",
      "Regular screening enables early intervention"
    ],
    relatedTopicIds: ["t2"]
  },
  {
    id: "a3", title: "Building a Plate That Builds Health: The Essentials of Nutrition",
    category: "Nutrition",
    shortDescription: "A practical guide to balanced nutrition and making healthier food choices every day.",
    content: `What you eat directly impacts your energy, mood, disease risk, and long-term health. Yet with conflicting nutrition advice and a complex food environment, many people find healthy eating confusing. Here's a clear, evidence-based approach.

**The Fundamentals of Healthy Eating:**

A balanced diet includes a variety of foods from all major food groups:

- **Fruits and vegetables** — Aim for at least 5 servings per day. Different colors provide different nutrients, so eat the rainbow.

- **Whole grains** — Choose whole wheat, brown rice, oats, quinoa, and other whole grains over refined options.

- **Protein** — Include lean meats, fish, legumes, nuts, seeds, and eggs. Fish provides omega-3 fatty acids beneficial for heart and brain health.

- **Healthy fats** — Focus on monounsaturated and polyunsaturated fats from olive oil, avocados, nuts, and fatty fish.

- **Dairy or alternatives** — Choose low-fat options for calcium and vitamin D.

**What to Limit:**

- Added sugars (less than 25 grams per day for women, 36 grams for men)
- Sodium (less than 2,300 mg per day)
- Trans fats and excessive saturated fats
- Ultra-processed foods
- Excessive alcohol

**Practical Tips:**

1. Plan meals ahead to reduce impulsive, unhealthy choices
2. Cook at home more often — you control the ingredients
3. Read nutrition labels and ingredient lists
4. Don't skip meals, especially breakfast
5. Eat slowly and mindfully`,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    author: "Dr. Amira Hassan",
    publishedDate: "2026-08-05",
    readingTime: "6 min",
    keyTakeaways: [
      "Eat at least 5 servings of fruits and vegetables daily",
      "Choose whole grains over refined carbohydrates",
      "Limit added sugars to less than 25-36 grams daily",
      "Meal planning significantly improves diet quality"
    ],
    relatedTopicIds: ["t5"]
  },
  {
    id: "a4", title: "Breaking the Silence: Why Mental Health Awareness Matters More Than Ever",
    category: "Mental Health",
    shortDescription: "Understanding the growing mental health crisis and what we can do about it — as individuals and as a society.",
    content: `Mental health conditions affect approximately one in eight people globally — that's nearly one billion individuals. Yet stigma, misinformation, and lack of access to care mean that three-quarters of those affected receive no treatment. Mental health awareness is not just important; it's urgent.

**The Current Landscape:**

The COVID-19 pandemic significantly worsened mental health worldwide. Rates of anxiety and depression increased by an estimated 25% in the first year of the pandemic alone. Young people, healthcare workers, and those with pre-existing conditions were particularly affected.

**Why Awareness Matters:**

1. **It reduces stigma** — When we talk openly about mental health, we create environments where people feel safe seeking help.

2. **It promotes early intervention** — Most mental health conditions respond well to treatment when caught early.

3. **It improves community resilience** — Mental health literacy helps communities support those in need.

**What You Can Do:**

- **Educate yourself** — Learn about common mental health conditions and their signs.
- **Check in regularly** — Ask friends, family, and colleagues how they're doing — and truly listen.
- **Seek help when needed** — Talking to a mental health professional is a sign of strength, not weakness.
- **Practice self-care** — Regular exercise, adequate sleep, social connection, and mindfulness all support mental health.
- **Reduce stigma** — Use respectful language and challenge stereotypes about mental illness.

**Building Resilience:**

Resilience isn't about avoiding difficulty — it's about developing the capacity to recover from adversity. Strong social connections, a sense of purpose, and effective coping strategies all contribute to psychological resilience.`,
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=800&h=500&fit=crop",
    author: "Dr. Elena Rodriguez",
    publishedDate: "2026-08-01",
    readingTime: "9 min",
    keyTakeaways: [
      "1 in 8 people globally live with a mental health condition",
      "75% of those affected receive no treatment",
      "Early intervention significantly improves outcomes",
      "Mental health awareness reduces stigma and promotes help-seeking"
    ],
    relatedTopicIds: ["t4"]
  },
  {
    id: "a5", title: "The Power of Sleep: Why Rest Is Essential for Health",
    category: "Healthy Lifestyle",
    shortDescription: "Discover why quality sleep is fundamental to your physical and mental well-being.",
    content: `Sleep is not a luxury — it's a biological necessity. During sleep, your body repairs tissues, consolidates memories, regulates hormones, and strengthens the immune system. Chronic sleep deprivation increases the risk of heart disease, diabetes, obesity, depression, and weakened immunity.

**How Much Sleep Do You Need?**

- Newborns (0-3 months): 14-17 hours
- Adults (18-64): 7-9 hours
- Older adults (65+): 7-8 hours

**The Consequences of Poor Sleep:**

Getting less than 7 hours of sleep regularly is associated with:

- Increased risk of heart disease and stroke
- Higher risk of obesity (sleep deprivation affects hunger hormones)
- Impaired cognitive function and memory
- Weakened immune response
- Increased risk of depression and anxiety

**Tips for Better Sleep:**

1. **Maintain a consistent schedule** — Go to bed and wake up at the same time daily, even on weekends.

2. **Create a sleep-friendly environment** — Keep your bedroom cool, dark, and quiet.

3. **Limit screen time before bed** — Blue light from devices disrupts melatonin production. Stop screen use 1 hour before sleep.

4. **Watch your intake** — Avoid caffeine after 2 PM, limit alcohol before bed, and don't eat heavy meals close to bedtime.

5. **Exercise regularly** — Physical activity promotes deeper sleep, but avoid vigorous exercise within 3 hours of bedtime.

6. **Manage stress** — Practice relaxation techniques like deep breathing or meditation before sleep.`,
    image: "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?w=800&h=500&fit=crop",
    author: "Dr. Michael Torres",
    publishedDate: "2026-07-28",
    readingTime: "6 min",
    keyTakeaways: [
      "Adults need 7-9 hours of sleep per night",
      "Chronic sleep deprivation increases risk of multiple diseases",
      "Consistent sleep schedule is the most important habit",
      "Blue light exposure before bed disrupts sleep quality"
    ],
    relatedTopicIds: ["t4", "t12"]
  },
  {
    id: "a6", title: "Breathing Clean Air: How Air Quality Affects Your Health",
    category: "Respiratory Health",
    shortDescription: "The invisible threat — understanding how air pollution impacts respiratory and overall health.",
    content: `Air pollution is the single largest environmental health risk, contributing to an estimated 7 million premature deaths every year. Both outdoor and indoor air pollution pose significant health risks, affecting the lungs, heart, brain, and other organs.

**Types of Air Pollutants:**

- **Particulate matter (PM2.5 and PM10)** — Tiny particles that penetrate deep into lungs and bloodstream
- **Nitrogen dioxide (NO2)** — From vehicle emissions and industrial processes
- **Ozone (O3)** — Ground-level ozone from chemical reactions between pollutants
- **Carbon monoxide (CO)** — From incomplete combustion of fuels
- **Volatile organic compounds (VOCs)** — From household products, paints, and solvents

**Health Effects:**

Exposure to air pollution increases the risk of respiratory infections, heart disease, stroke, lung cancer, and chronic respiratory diseases like COPD and asthma. Children, the elderly, and those with pre-existing conditions are particularly vulnerable.

**Protecting Yourself:**

1. Check your local air quality index daily
2. Limit outdoor exercise when air quality is poor
3. Use air purifiers with HEPA filters indoors
4. Keep windows closed during high pollution periods
5. Reduce personal contributions — use public transport, reduce energy use
6. Advocate for clean air policies in your community`,
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop",
    author: "Dr. Lisa Chen",
    publishedDate: "2026-07-25",
    readingTime: "7 min",
    keyTakeaways: [
      "Air pollution causes 7 million premature deaths annually",
      "PM2.5 particles penetrate deep into lungs and bloodstream",
      "Children and elderly are most vulnerable",
      "Checking air quality indexes is a simple protective step"
    ],
    relatedTopicIds: ["t8"]
  },
  {
    id: "a7", title: "Hydration 101: How Much Water Do You Really Need?",
    category: "Healthy Lifestyle",
    shortDescription: "Understanding the role of hydration in health and how to stay properly hydrated.",
    content: `Water is essential for virtually every function in the human body — from regulating temperature and transporting nutrients to supporting digestion and cognitive function. Even mild dehydration can impair mood, concentration, and physical performance.

**How Much Water Do You Need?**

The "8 glasses per day" guideline is a reasonable starting point, but individual needs vary based on:

- Body size and weight
- Physical activity level
- Climate and altitude
- Overall health status
- Pregnancy and breastfeeding

A good rule of thumb: drink enough so your urine is pale yellow in color.

**Signs of Dehydration:**

- Dark yellow urine
- Thirst (already a sign of mild dehydration)
- Dry mouth and lips
- Headaches
- Fatigue and low energy
- Dizziness
- Dry skin

**Tips for Better Hydration:**

1. Carry a reusable water bottle throughout the day
2. Drink a glass of water with each meal
3. Eat water-rich foods like fruits and vegetables
4. Set reminders on your phone to drink water
5. Replace sugary drinks with water or herbal tea
6. Increase intake during exercise and hot weather

**Special Considerations:**

Older adults may have a reduced sense of thirst and need to be more intentional about hydration. Athletes and those doing physical work in heat need significantly more fluids. People with certain medical conditions should follow their healthcare provider's specific fluid intake recommendations.`,
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=500&fit=crop",
    author: "Dr. Amira Hassan",
    publishedDate: "2026-07-20",
    readingTime: "5 min",
    keyTakeaways: [
      "Water is essential for virtually every body function",
      "Urine color is a simple hydration indicator",
      "Individual needs vary based on activity, climate, and health",
      "Water-rich foods contribute significantly to hydration"
    ],
    relatedTopicIds: ["t5", "t12"]
  },
  {
    id: "a8", title: "Vaccines Explained: How Immunization Protects Communities",
    category: "Infectious Diseases",
    shortDescription: "A clear, evidence-based explanation of how vaccines work and why they matter for community health.",
    content: `Vaccines are one of the greatest achievements in public health history. They have eradicated smallpox, nearly eliminated polio, and prevent millions of deaths each year from diseases like measles, tetanus, and influenza.

**How Vaccines Work:**

Vaccines work by training the immune system to recognize and fight specific pathogens (viruses or bacteria) without causing the disease itself. They contain weakened, inactivated, or parts of the pathogen that trigger an immune response. This creates "memory cells" that can quickly respond if you encounter the real pathogen in the future.

**The Power of Herd Immunity:**

When a high percentage of a community is vaccinated, it creates "herd immunity" (or community immunity), which protects those who cannot be vaccinated — including infants too young for certain vaccines, people with compromised immune systems, and those with allergies to vaccine components.

**Childhood Vaccination Schedule:**

Routine childhood vaccinations typically protect against 14+ diseases, including:
- Measles, mumps, and rubella (MMR)
- Diphtheria, tetanus, and pertussis (DTaP)
- Polio
- Hepatitis A and B
- Chickenpox
- HPV (human papillomavirus)
- Meningococcal disease

**Adult Vaccinations:**

Adults also need vaccines, including:
- Annual flu shot
- Td/Tdap boosters every 10 years
- COVID-19 vaccines as recommended
- Shingles vaccine (age 50+)
- Pneumonia vaccine (age 65+)

**Addressing Common Concerns:**

Vaccines undergo rigorous testing for safety and effectiveness before approval and are continuously monitored for side effects. Serious adverse reactions are extremely rare — far rarer than the complications from the diseases they prevent.`,
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=800&h=500&fit=crop",
    author: "Dr. James Okafor",
    publishedDate: "2026-07-15",
    readingTime: "8 min",
    keyTakeaways: [
      "Vaccines prevent 4-5 million deaths every year",
      "Herd immunity protects those who cannot be vaccinated",
      "Both children and adults need regular vaccinations",
      "Serious vaccine side effects are extremely rare"
    ],
    relatedTopicIds: ["t11"]
  },
  {
    id: "a9", title: "Cancer Prevention: What You Can Control",
    category: "Cancer",
    shortDescription: "Evidence-based steps to reduce your cancer risk through lifestyle modifications.",
    content: `While not all cancers are preventable, research shows that 30-50% of cancer cases could be prevented through healthy lifestyle choices. Understanding modifiable risk factors empowers individuals to take proactive steps.

**The Major Preventable Risk Factors:**

1. **Tobacco use** — Responsible for approximately 22% of cancer deaths. Quitting smoking at any age reduces risk.

2. **Obesity** — Excess body fat is linked to 13 types of cancer. Maintaining a healthy weight significantly reduces risk.

3. **Physical inactivity** — Regular exercise reduces the risk of colon, breast, and endometrial cancers.

4. **Alcohol** — Even moderate alcohol consumption increases the risk of several cancers. There is no "safe" level.

5. **UV radiation** — Excessive sun exposure and tanning bed use increase skin cancer risk.

6. **Diet** — Diets high in processed meats increase colorectal cancer risk.

**Screening Saves Lives:**

Early detection through screening dramatically improves cancer outcomes:
- **Breast cancer** — Mammography recommended starting at age 40-50
- **Colorectal cancer** — Screening starting at age 45
- **Cervical cancer** — Pap smears and HPV testing
- **Lung cancer** — Low-dose CT scan for high-risk individuals
- **Skin cancer** — Regular dermatological checkups

**Building a Cancer-Preventive Lifestyle:**

- Eat 5+ servings of fruits and vegetables daily
- Stay physically active — 150+ minutes per week
- Maintain a healthy body weight
- Avoid all tobacco products
- Limit alcohol consumption
- Protect skin from UV radiation`,
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=500&fit=crop",
    author: "Dr. Elena Rodriguez",
    publishedDate: "2026-07-10",
    readingTime: "7 min",
    keyTakeaways: [
      "30-50% of cancers are preventable through lifestyle",
      "Tobacco is the single largest preventable cause",
      "Regular screening dramatically improves outcomes",
      "Healthy weight, exercise, and diet are key protective factors"
    ],
    relatedTopicIds: ["t3"]
  },
  {
    id: "a10", title: "Road Safety: Simple Steps That Save Lives",
    category: "Safety",
    shortDescription: "Understanding the leading causes of road traffic injuries and how to protect yourself and others.",
    content: `Every year, approximately 1.35 million people die in road traffic crashes, making it the leading cause of death for children and young adults aged 5-29. Yet most road traffic deaths are preventable through proven safety measures.

**The Big Five Risk Factors:**

1. **Speeding** — Higher speeds dramatically increase both the likelihood and severity of crashes.

2. **Driving under the influence** — Alcohol and drugs impair judgment, reaction time, and coordination.

3. **Not wearing seat belts** — Seat belts reduce the risk of fatal injury by 45% in front-seat passengers.

4. **Distracted driving** — Phone use, eating, and other distractions take eyes, hands, and attention from the road.

5. **Fatigue** — Drowsy driving can be as dangerous as impaired driving.

**For Drivers:**

- Always wear your seat belt and ensure all passengers do the same
- Never drive under the influence of alcohol or drugs
- Obey speed limits and traffic signs
- Put your phone away — even hands-free calls increase cognitive distraction
- Get adequate rest before long drives
- Regularly maintain your vehicle (brakes, tires, lights)

**For Pedestrians and Cyclists:**

- Use crosswalks and obey traffic signals
- Wear visible clothing, especially at night
- Cyclists should wear helmets and use lights after dark
- Stay alert — avoid using phones while walking near traffic

**For Communities:**

- Advocate for safer road infrastructure
- Support speed reduction measures
- Promote school-based road safety education
- Encourage safe driving policies in workplaces`,
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
    author: "Dr. Michael Torres",
    publishedDate: "2026-07-05",
    readingTime: "6 min",
    keyTakeaways: [
      "1.35 million road traffic deaths occur yearly",
      "Seat belts reduce fatal injury risk by 45%",
      "The five biggest risk factors are all preventable",
      "Community advocacy plays a key role in road safety"
    ],
    relatedTopicIds: []
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  { id: "ht1", title: "Start Your Day Hydrated", description: "Drink a glass of water first thing in the morning to kickstart your metabolism and rehydrate after sleep.", category: "Hydration" },
  { id: "ht2", title: "Take Walking Breaks", description: "If you sit for long periods, stand up and walk for 5 minutes every hour to improve circulation and energy levels.", category: "Physical Activity" },
  { id: "ht3", title: "Eat More Vegetables", description: "Add an extra serving of vegetables to at least one meal today. Aim for variety in color and type.", category: "Nutrition" },
  { id: "ht4", title: "Practice Deep Breathing", description: "Take 5 deep breaths when you feel stressed. Inhale for 4 counts, hold for 4, exhale for 6.", category: "Mental Health" },
  { id: "ht5", title: "Get 7-8 Hours of Sleep", description: "Prioritize sleep by setting a consistent bedtime and reducing screen time before bed.", category: "Sleep" },
  { id: "ht6", title: "Wash Your Hands Properly", description: "Wash hands with soap and water for at least 20 seconds, especially before eating and after using the restroom.", category: "Hygiene" },
  { id: "ht7", title: "Take the Stairs", description: "Choose stairs over elevators when possible. It's a simple way to add physical activity to your day.", category: "Physical Activity" },
  { id: "ht8", title: "Limit Sugary Drinks", description: "Replace one sugary drink today with water, herbal tea, or infused water with fruits.", category: "Nutrition" },
  { id: "ht9", title: "Connect with Someone", description: "Reach out to a friend or family member. Social connection is vital for mental health.", category: "Mental Health" },
  { id: "ht10", title: "Step Outside for Sunlight", description: "Get 15-20 minutes of natural sunlight daily to support vitamin D production and mood.", category: "Lifestyle" },
  { id: "ht11", title: "Prepare a Healthy Snack", description: "Keep cut fruits, vegetables, or nuts accessible for healthy snacking instead of processed options.", category: "Nutrition" },
  { id: "ht12", title: "Stretch Your Body", description: "Spend 5 minutes stretching in the morning or before bed to improve flexibility and reduce tension.", category: "Physical Activity" },
  { id: "ht13", title: "Practice Gratitude", description: "Write down three things you're grateful for. Gratitude practice improves mental well-being.", category: "Mental Health" },
  { id: "ht14", title: "Check Your Posture", description: "If you're sitting, check that your back is straight and feet are flat on the floor. Good posture prevents back pain.", category: "Lifestyle" },
  { id: "ht15", title: "Spend Time in Nature", description: "Spending time outdoors in green spaces reduces stress and improves overall well-being.", category: "Mental Health" }
];

export const AWARENESS_EVENTS: AwarenessEvent[] = [
  { id: "e1", title: "World Cancer Day", description: "Raise awareness about cancer prevention, detection, and treatment. Held every February 4th.", date: "February 4", month: 2, day: 4, category: "Disease Prevention", color: "oklch(0.55 0.15 300)" },
  { id: "e2", title: "World Hearing Day", description: "Promote ear and hearing care awareness. Held annually on March 3rd.", date: "March 3", month: 3, day: 3, category: "General Health", color: "oklch(0.55 0.12 220)" },
  { id: "e3", title: "World Health Day", description: "Celebrating the founding of WHO and raising awareness about a global health theme. April 7th.", date: "April 7", month: 4, day: 7, category: "General Health", color: "oklch(0.5 0.12 210)" },
  { id: "e4", title: "World Immunization Week", description: "Promoting the importance of vaccines to protect people of all ages. Last week of April.", date: "April 24-30", month: 4, day: 24, category: "Infectious Diseases", color: "oklch(0.5 0.15 180)" },
  { id: "e5", title: "World No Tobacco Day", description: "Highlighting the health risks of tobacco and promoting policies to reduce consumption. May 31st.", date: "May 31", month: 5, day: 31, category: "Healthy Lifestyle", color: "oklch(0.5 0.1 150)" },
  { id: "e6", title: "World Blood Donor Day", description: "Thanking blood donors and promoting voluntary blood donation. June 14th.", date: "June 14", month: 6, day: 14, category: "Community Health", color: "oklch(0.55 0.15 25)" },
  { id: "e7", title: "World Population Day", description: "Raising awareness about global population issues and reproductive health. July 11th.", date: "July 11", month: 7, day: 11, category: "General Health", color: "oklch(0.5 0.12 180)" },
  { id: "e8", title: "World Mental Health Day", description: "Raising awareness about mental health issues and promoting mental well-being. October 10th.", date: "October 10", month: 10, day: 10, category: "Mental Health", color: "oklch(0.5 0.1 200)" },
  { id: "e9", title: "World Diabetes Day", description: "Raising awareness about diabetes prevention and management. November 14th.", date: "November 14", month: 11, day: 14, category: "Disease Prevention", color: "oklch(0.55 0.12 180)" },
  { id: "e10", title: "World AIDS Day", description: "Raising awareness about HIV/AIDS and supporting those affected. December 1st.", date: "December 1", month: 12, day: 1, category: "Infectious Diseases", color: "oklch(0.55 0.15 25)" },
  { id: "e11", title: "World Patient Safety Day", description: "Promoting patient safety and reducing harm in healthcare. September 17th.", date: "September 17", month: 9, day: 17, category: "Community Health", color: "oklch(0.5 0.12 210)" },
  { id: "e12", title: "International Day of Older Persons", description: "Raising awareness about issues affecting the elderly and promoting their well-being. October 1st.", date: "October 1", month: 10, day: 1, category: "General Health", color: "oklch(0.55 0.1 180)" }
];

export const CAMPAIGN_CATEGORIES = [
  "All",
  "Disease Prevention",
  "Mental Health",
  "Nutrition",
  "Maternal & Child Health",
  "Infectious Diseases",
  "Noncommunicable Diseases",
  "Healthy Lifestyle",
  "Safety",
  "Community Health",
  "Environmental Health"
];

export const TOPIC_CATEGORIES = [
  { id: "heart-health", name: "Heart Health" },
  { id: "diabetes", name: "Diabetes" },
  { id: "cancer", name: "Cancer" },
  { id: "mental-health", name: "Mental Health" },
  { id: "nutrition", name: "Nutrition" },
  { id: "womens-health", name: "Women's Health" },
  { id: "mens-health", name: "Men's Health" },
  { id: "child-health", name: "Child Health" },
  { id: "respiratory-health", name: "Respiratory Health" },
  { id: "oral-health", name: "Oral Health" },
  { id: "skin-health", name: "Skin Health" },
  { id: "infectious-diseases", name: "Infectious Diseases" },
  { id: "physical-activity", name: "Physical Activity" },
  { id: "sleep", name: "Sleep" },
  { id: "general-wellness", name: "General Wellness" }
];

export const TELUGU_CONTENT = {
  campaigns: {
    c1: "హృదయ ఆరోగ్య అవగాహన", c2: "మధుమేహ నివారణ", c3: "మానసిక శ్రేయస్సు", c4: "శుభ్రమైన గాలి & శ్వాసకోశ ఆరోగ్యం",
    c5: "ఆరోగ్యకరమైన పోషకాహారం", c6: "టీకాల అవగాహన", c7: "క్యాన్సర్ అవగాహన", c8: "రోడ్డు భద్రత & గాయాల నివారణ",
  },
  topics: {
    t1: "హృదయ ఆరోగ్యం", t2: "మధుమేహం", t3: "క్యాన్సర్", t4: "మానసిక ఆరోగ్యం", t5: "పోషకాహారం", t6: "మహిళల ఆరోగ్యం",
    t7: "పిల్లల ఆరోగ్యం", t8: "శ్వాసకోశ ఆరోగ్యం", t9: "నోటి ఆరోగ్యం", t10: "చర్మ ఆరోగ్యం", t11: "సంక్రమణ వ్యాధులు", t12: "శారీరక చురుకుదనం",
  },
  articles: {
    a1: "మీ హృదయాన్ని అర్థం చేసుకోండి: హృదయ ఆరోగ్యానికి పూర్తి మార్గదర్శిని", a2: "ప్రపంచ మధుమేహ వ్యాప్తి: పనిచేసే నివారణ మార్గాలు",
    a3: "ఆరోగ్యాన్ని నిర్మించే ఆహారం: పోషకాహార ప్రాథమికాలు", a4: "నిశ్శబ్దాన్ని ఛేదిద్దాం: మానసిక ఆరోగ్య అవగాహన ఎందుకు ముఖ్యం",
    a5: "నిద్ర శక్తి: ఆరోగ్యానికి విశ్రాంతి ఎందుకు అవసరం", a6: "శుభ్రమైన గాలిని పీల్చండి: గాలి నాణ్యత ఆరోగ్యంపై ప్రభావం",
    a7: "నీటి గురించి తెలుసుకోండి: మీకు ఎంత నీరు అవసరం?", a8: "టీకాల వివరణ: టీకాలు సమాజాన్ని ఎలా రక్షిస్తాయి",
    a9: "క్యాన్సర్ నివారణ: మీరు నియంత్రించగల విషయాలు", a10: "రోడ్డు భద్రత: ప్రాణాలను కాపాడే సులభమైన చర్యలు",
  },
} as const;

export const TELUGU_DESCRIPTIONS = {
  campaigns: {
    c1: "విద్య, నివారణ మరియు ఆరోగ్యకరమైన జీవనశైలి ద్వారా హృదయ ఆరోగ్యాన్ని ప్రోత్సహించడం.", c2: "మధుమేహ ప్రమాదాలను అర్థం చేసుకుని ఆరోగ్యకరమైన జీవితానికి నివారణ చర్యలు తీసుకోండి.",
    c3: "మానసిక ఆరోగ్యంపై అవగాహన పెంచి, సహాయం కోరడాన్ని ప్రోత్సహించే ప్రచారం.", c4: "గాలి నాణ్యత మరియు శ్వాసకోశ ఆరోగ్యాన్ని రక్షించే మార్గాలపై అవగాహన.",
    c5: "సమతుల్య ఆహారం మరియు సరైన ఆహార ఎంపికలను ప్రోత్సహించే ప్రచారం.", c6: "వ్యక్తులు మరియు సమాజాలను రక్షించడంలో టీకాల ప్రాముఖ్యతపై అవగాహన.",
    c7: "క్యాన్సర్ నివారణ, ముందస్తు గుర్తింపు మరియు చికిత్సపై అవగాహన.", c8: "రోడ్డు భద్రత మరియు నివారించగల గాయాలపై అవగాహన.",
  },
  topics: {
    t1: "హృదయాన్ని ఆరోగ్యంగా ఉంచుకోవడానికి లక్షణాలు, ప్రమాదాలు మరియు నివారణ మార్గాలను తెలుసుకోండి.", t2: "మధుమేహ లక్షణాలు, ప్రమాద కారకాలు మరియు నిర్వహణ గురించి తెలుసుకోండి.",
    t3: "క్యాన్సర్ రకాలు, హెచ్చరిక సంకేతాలు మరియు నివారణ చర్యలపై నమ్మకమైన సమాచారం.", t4: "మానసిక ఆరోగ్యం, భావోద్వేగ శ్రేయస్సు మరియు సహాయం పొందే మార్గాల గురించి తెలుసుకోండి.",
    t5: "సమతుల్య ఆహారం మరియు ఆరోగ్యకరమైన ఆహార అలవాట్లకు మార్గదర్శిని.", t6: "మహిళల జీవితంలోని వివిధ దశల్లో ఆరోగ్య సంరక్షణ గురించి సమాచారం.",
    t7: "పిల్లల పెరుగుదల, భద్రత మరియు ఆరోగ్య సంరక్షణ గురించి తెలుసుకోండి.", t8: "శ్వాసకోశ ఆరోగ్యం, సాధారణ పరిస్థితులు మరియు రక్షణ మార్గాలు.",
    t9: "పళ్లు మరియు చిగుళ్ల ఆరోగ్యాన్ని కాపాడుకునే రోజువారీ అలవాట్లు.", t10: "చర్మ ఆరోగ్యం, సాధారణ సమస్యలు మరియు సురక్షిత సంరక్షణ మార్గాలు.",
    t11: "సంక్రమణ వ్యాధులు ఎలా వ్యాపిస్తాయి మరియు వాటిని ఎలా నివారించాలి.", t12: "క్రమం తప్పకుండా శారీరక చురుకుదనం వల్ల కలిగే ఆరోగ్య ప్రయోజనాలు.",
  },
  articles: {
    a1: "హృదయ ఆరోగ్యాన్ని అర్థం చేసుకోవడానికి పూర్తి మార్గదర్శిని.", a2: "మధుమేహాన్ని నివారించడానికి పనిచేసే ఆరోగ్యకరమైన వ్యూహాలు.",
    a3: "మీ ఆరోగ్యానికి తోడ్పడే సమతుల్య ఆహారాన్ని ఎలా నిర్మించాలి.", a4: "మానసిక ఆరోగ్య అవగాహన మరియు సహాయం కోరడం యొక్క ప్రాముఖ్యత.",
    a5: "మంచి ఆరోగ్యానికి నాణ్యమైన నిద్ర ఎందుకు అవసరమో తెలుసుకోండి.", a6: "గాలి నాణ్యత మీ శ్వాస మరియు ఆరోగ్యాన్ని ఎలా ప్రభావితం చేస్తుంది.",
    a7: "రోజువారీ నీటి అవసరాలు మరియు శరీరానికి హైడ్రేషన్ ప్రాముఖ్యత.", a8: "టీకాలు వ్యక్తులు మరియు సమాజాలను ఎలా రక్షిస్తాయో తెలుసుకోండి.",
    a9: "క్యాన్సర్ ప్రమాదాన్ని తగ్గించడానికి మీరు తీసుకోగల చర్యలు.", a10: "ప్రాణాలను కాపాడే సులభమైన రోడ్డు భద్రతా చర్యలు.",
  },
} as const;

export const TELUGU_LONG_DESCRIPTIONS = {
  c1: "ప్రపంచవ్యాప్తంగా మరణాలకు ప్రధాన కారణాలలో హృదయ వ్యాధి ఒకటి. ఈ ప్రచారం హృదయ ఆరోగ్యంపై అవగాహన పెంచడం, క్రమం తప్పకుండా పరీక్షలు చేయించుకోవడం, శారీరక చురుకుదనం మరియు హృదయానికి మేలు చేసే ఆహారాన్ని ప్రోత్సహించడం లక్ష్యంగా పెట్టుకుంది.",
  c2: "మధుమేహం ప్రపంచవ్యాప్తంగా లక్షలాది మందిని ప్రభావితం చేస్తుంది. ఆరోగ్యకరమైన బరువు, సమతుల్య ఆహారం మరియు క్రమం తప్పని వ్యాయామం ద్వారా టైప్ 2 మధుమేహాన్ని చాలావరకు నివారించవచ్చు. ఈ ప్రచారం ప్రమాద కారకాలు మరియు ప్రారంభ హెచ్చరిక సంకేతాలపై అవగాహన కల్పిస్తుంది.",
  c3: "మానసిక ఆరోగ్యం మొత్తం శ్రేయస్సులో ముఖ్యమైన భాగం. ఈ ప్రచారం మానసిక ఆరోగ్య సమస్యలపై ఉన్న అపోహలను తగ్గించడం, భావోద్వేగ శ్రేయస్సును ప్రోత్సహించడం మరియు అవసరమైనప్పుడు వృత్తిపరమైన సహాయం పొందేలా ప్రోత్సహిస్తుంది.",
  c4: "వాయు కాలుష్యం ప్రపంచవ్యాప్తంగా కోట్లాది మందిని ప్రభావితం చేసే ప్రధాన పర్యావరణ ఆరోగ్య ప్రమాదం. ఈ ప్రచారం గాలి నాణ్యత మరియు శ్వాసకోశ ఆరోగ్యం మధ్య సంబంధాన్ని వివరిస్తూ, శుభ్రమైన గాలిని పీల్చడానికి ఆచరణాత్మక మార్గాలను అందిస్తుంది.",
  c5: "మంచి పోషకాహారం మంచి ఆరోగ్యానికి పునాది. ఈ ప్రచారం సమతుల్య ఆహారం, పండ్లు మరియు కూరగాయల ప్రాముఖ్యత, ఆహార లేబుళ్లను అర్థం చేసుకోవడం మరియు ఆరోగ్యకరమైన ఆహార ఎంపికలపై అవగాహన కల్పిస్తుంది.",
  c6: "టీకాలు ప్రతి సంవత్సరం లక్షలాది ప్రాణాలను కాపాడే అత్యంత ప్రభావవంతమైన ప్రజారోగ్య చర్యలలో ఒకటి. ఈ ప్రచారం అన్ని వయసుల వారికి సమయానికి టీకాలు వేయించుకోవడం మరియు వ్యక్తులు, సమాజాలను రక్షించడం యొక్క ప్రాముఖ్యతను వివరిస్తుంది.",
  c7: "క్యాన్సర్ ప్రపంచవ్యాప్తంగా మరణాలకు ప్రధాన కారణాలలో ఒకటి. ఈ ప్రచారం ఆరోగ్యకరమైన జీవనశైలి, క్రమం తప్పని స్క్రీనింగ్‌లు, హెచ్చరిక సంకేతాలను గుర్తించడం మరియు ముందస్తు గుర్తింపు ద్వారా క్యాన్సర్ ప్రమాదాన్ని తగ్గించడంపై దృష్టి పెడుతుంది.",
  c8: "రోడ్డు ప్రమాదాల వల్ల కలిగే గాయాలు ప్రపంచవ్యాప్తంగా మరణాలు మరియు వైకల్యాలకు ప్రధాన కారణం. ఈ ప్రచారం రోడ్డు భద్రతా చర్యలు, గాయాల నివారణ వ్యూహాలు మరియు రోడ్లపై బాధ్యతాయుతమైన ప్రవర్తన యొక్క ప్రాముఖ్యతపై అవగాహన కల్పిస్తుంది. సీట్‌బెల్ట్ ధరించడం, హెల్మెట్ వాడటం, వేగ పరిమితులను పాటించడం మరియు డ్రైవింగ్ సమయంలో ఫోన్ వాడకపోవడం వంటి సురక్షిత అలవాట్లు నివారించగల మరణాలు, గాయాలను తగ్గించగలవు.",
} as const;

export const TELUGU_EVENTS = {
  e1: ["ప్రపంచ క్యాన్సర్ దినోత్సవం", "క్యాన్సర్ నివారణ, గుర్తింపు మరియు చికిత్సపై అవగాహన. ప్రతి సంవత్సరం ఫిబ్రవరి 4న."],
  e2: ["ప్రపంచ వినికిడి దినోత్సవం", "చెవి మరియు వినికిడి సంరక్షణపై అవగాహన. ప్రతి సంవత్సరం మార్చి 3న."],
  e3: ["ప్రపంచ ఆరోగ్య దినోత్సవం", "ప్రపంచ ఆరోగ్య అంశంపై అవగాహన పెంచుతూ WHO స్థాపనను గుర్తుచేసుకునే రోజు. ఏప్రిల్ 7న."],
  e4: ["ప్రపంచ టీకాల వారోత్సవం", "అన్ని వయసుల వారిని రక్షించడానికి టీకాల ప్రాముఖ్యతను ప్రోత్సహిస్తుంది. ఏప్రిల్ చివరి వారంలో."],
  e5: ["ప్రపంచ పొగాకు వ్యతిరేక దినోత్సవం", "పొగాకు వల్ల కలిగే ఆరోగ్య ప్రమాదాలు మరియు వినియోగాన్ని తగ్గించే మార్గాలపై అవగాహన. మే 31న."],
  e6: ["ప్రపంచ రక్తదాతల దినోత్సవం", "రక్తదాతలకు కృతజ్ఞతలు తెలుపుతూ స్వచ్ఛంద రక్తదానాన్ని ప్రోత్సహించే రోజు. జూన్ 14న."],
  e7: ["ప్రపంచ జనాభా దినోత్సవం", "ప్రపంచ జనాభా సమస్యలు మరియు పునరుత్పత్తి ఆరోగ్యంపై అవగాహన. జూలై 11న."],
  e8: ["ప్రపంచ మానసిక ఆరోగ్య దినోత్సవం", "మానసిక ఆరోగ్య సమస్యలపై అవగాహన మరియు మానసిక శ్రేయస్సు ప్రోత్సాహం. అక్టోబర్ 10న."],
  e9: ["ప్రపంచ మధుమేహ దినోత్సవం", "మధుమేహ నివారణ మరియు నిర్వహణపై అవగాహన. నవంబర్ 14న."],
  e10: ["ప్రపంచ ఎయిడ్స్ దినోత్సవం", "HIV/AIDSపై అవగాహన మరియు ప్రభావితులైన వారికి మద్దతు. డిసెంబర్ 1న."],
  e11: ["ప్రపంచ రోగి భద్రతా దినోత్సవం", "రోగి భద్రతను ప్రోత్సహించడం మరియు వైద్య సేవల్లో నష్టాన్ని తగ్గించడం. సెప్టెంబర్ 17న."],
  e12: ["అంతర్జాతీయ వృద్ధుల దినోత్సవం", "వృద్ధులను ప్రభావితం చేసే సమస్యలు మరియు వారి శ్రేయస్సుపై అవగాహన. అక్టోబర్ 1న."],
} as const;

export function localizeCategory(category: string, language: string): string {
  if (language !== "te") return category;
  const categories: Record<string, string> = {
    "Disease Prevention": "వ్యాధి నివారణ",
    "General Health": "సాధారణ ఆరోగ్యం",
    "Infectious Diseases": "సంక్రమణ వ్యాధులు",
    "Healthy Lifestyle": "ఆరోగ్యకరమైన జీవనశైలి",
    "Community Health": "సమాజ ఆరోగ్యం",
    "Mental Health": "మానసిక ఆరోగ్యం",
  };
  return categories[category] || category;
}

export function localizeEvents<T extends { id: string; title: string; description: string }>(events: T[], language: string): T[] {
  if (language !== "te") return events;
  return events.map((event) => {
    const translation = TELUGU_EVENTS[event.id as keyof typeof TELUGU_EVENTS];
    return translation ? { ...event, title: translation[0], description: translation[1] } : event;
  });
}

export function localizeContent<T extends { id: string; title: string; shortDescription?: string; description?: string }>(items: T[], language: string, type: keyof typeof TELUGU_CONTENT): T[] {
  if (language !== "te") return items;
  const translations = TELUGU_CONTENT[type] as Record<string, string>;
  const descriptions = TELUGU_DESCRIPTIONS[type] as Record<string, string>;
  return items.map((item) => ({
    ...item,
    ...(translations[item.id] ? { title: translations[item.id] } : {}),
    ...(item.shortDescription && descriptions[item.id] ? { shortDescription: descriptions[item.id] } : {}),
    ...(type === "campaigns" && item.description && TELUGU_LONG_DESCRIPTIONS[item.id as keyof typeof TELUGU_LONG_DESCRIPTIONS] ? { description: TELUGU_LONG_DESCRIPTIONS[item.id as keyof typeof TELUGU_LONG_DESCRIPTIONS] } : {}),
  }));
}

export const ARTICLE_CATEGORIES = [
  "All",
  "Heart Health",
  "Diabetes",
  "Nutrition",
  "Mental Health",
  "Healthy Lifestyle",
  "Respiratory Health",
  "Infectious Diseases",
  "Cancer",
  "Safety",
  "Women's Health"
];

export const DISCLAIMER = "The information provided by the Digital Health Awareness Portal is for general educational and awareness purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. If you have personal health concerns, consult a qualified healthcare professional.";
