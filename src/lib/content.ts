/**
 * Single source of truth for site copy (TheraVita Intelligence + TheraVita Global).
 */

export const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "EXPLORE", href: "/explore" },
  { label: "STORIES", href: "/stories" },
  { label: "EXPERTS", href: "/experts" },
  { label: "COMMUNITY", href: "/community" },
  { label: "CONTRIBUTE", href: "/contribute" },
  { label: "PARTNER", href: "/partner" },
] as const;

export const ASK_HREF = "/contact?topic=general#message";

export const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Conversations", href: "/conversations" },
  { label: "Editorial Standards", href: "/editorial-standards" },
  { label: "Contact", href: "/contact" },
  { label: "TheraVita Global", href: "/global" },
] as const;

export const SITE_URL = "https://intelligence.theravitaglobal.com";

export const LENSES = [
  {
    key: "health",
    num: "01",
    title: "Health",
    icon: "heart",
    image: "/images/health.jpg",
    alt: "A doctor examining a sample under a microscope",
    short: "The science, conditions, questions and experiences that shape human health.",
    note: "We go beyond the obvious to help you understand the issues behind the headlines.",
    cta: "Explore Health",
    detail: {
      headline: "Understanding the human condition.",
      body: [
        "We explore health, illness, prevention, emerging health concerns, medical developments and the questions people ask about their bodies and wellbeing.",
      ],
      chips: ["Conditions", "Prevention", "Medical science", "Health behaviour", "Emerging health issues", "Health questions"],
      chipsLabel: "Topics may include",
    },
  },
  {
    key: "healthcare",
    num: "02",
    title: "Healthcare",
    icon: "building",
    image: "/images/healthcare.jpg",
    alt: "Nurses wheeling a patient through a hospital corridor",
    short: "How healthcare actually works.",
    note: "Hospitals. Doctors. Pharmacies. Laboratories. HMOs. Costs. Access. Referrals. Waiting. Caregiving. Patient experiences. We examine the system behind the experience.",
    cta: "Explore Healthcare",
    detail: {
      headline: "Understanding the system behind the care.",
      questions: [
        "What happens when you enter a hospital?",
        "How do referrals work?",
        "What does an HMO actually do?",
        "Why can healthcare cost so much?",
        "How do laboratories, pharmacies and hospitals connect?",
      ],
      body: ["We investigate the systems and structures that shape healthcare experiences."],
    },
  },
  {
    key: "people",
    num: "03",
    title: "People",
    icon: "users",
    image: "/images/people.jpg",
    alt: "A smiling family outdoors in golden light",
    short: "Healthcare is ultimately about people.",
    note: "Patients. Families. Caregivers. Doctors. Nurses. Pharmacists. Researchers. Entrepreneurs. Innovators. Leaders. We tell stories that help us see healthcare differently.",
    cta: "Meet the People",
    detail: {
      headline: "The human stories behind healthcare.",
      chips: ["Patients", "Families", "Caregivers", "Doctors", "Nurses", "Researchers", "Entrepreneurs", "Innovators", "Leaders"],
      body: ["Their experiences reveal what healthcare looks like beyond statistics."],
    },
  },
  {
    key: "future",
    num: "04",
    title: "The Future",
    icon: "cpu",
    image: "/images/future.jpg",
    alt: "A man interacting with a holographic brain interface",
    short: "Artificial intelligence. Digital health. Biotechnology. Data. Robotics. New models of care.",
    note: "We explore where healthcare is going — and what it could mean for Africa and the world.",
    cta: "Explore the Future",
    detail: {
      headline: "Understanding what comes next.",
      chips: ["Artificial intelligence", "Digital health", "Robotics", "Biotechnology", "Health data", "Genomics", "New models of care"],
      body: [
        "We examine emerging technologies and ideas — and ask what they could mean for Africa and the wider world.",
      ],
    },
  },
  {
    key: "society",
    num: "05",
    title: "Society",
    icon: "globe",
    image: "/images/society.jpg",
    alt: "A city skyline at golden hour",
    short: "Health does not exist in isolation.",
    note: "Culture, economics, education, technology, policy, behaviour and communities all shape healthcare. We examine the forces around healthcare that are often overlooked.",
    cta: "Explore Society",
    detail: {
      headline: "Healthcare does not happen in a vacuum.",
      statements: [
        "Culture influences healthcare.",
        "Money influences healthcare.",
        "Education influences healthcare.",
        "Technology influences healthcare.",
        "Policy influences healthcare.",
        "Families and communities influence healthcare.",
      ],
      body: ["We explore the forces surrounding healthcare and the ways they shape people's experiences."],
    },
  },
] as const;

export const FEATURED = [
  { tag: "Why does this happen?", title: "Why does this happen?", desc: "We take everyday healthcare experiences and investigate the deeper reasons behind them.", image: "/images/feat-navigate.jpg", alt: "Patients and staff in a busy outpatient waiting area" },
  { tag: "TheraVita Explains", title: "TheraVita Explains", desc: "Complex healthcare ideas, systems and developments — explained clearly.", image: "/images/feat-intelligence.jpg", alt: "Hands holding a phone with a health dashboard" },
  { tag: "Behind the System", title: "Behind the System", desc: "We look behind hospitals, healthcare institutions, policies, technologies and processes to understand how they actually work.", image: "/images/feat-system.jpg", alt: "Healthcare professionals collaborating around a tablet" },
  { tag: "Ask the Expert", title: "Ask the Expert", desc: "Real questions. Qualified voices. Clear explanations.", image: "/images/feat-expert.jpg", alt: "A doctor being interviewed with a microphone" },
  { tag: "The Healthcare Experience", title: "The Healthcare Experience", desc: "Stories from patients, families, caregivers and healthcare professionals.", image: "/images/feat-patient.jpg", alt: "A nurse sitting beside an elderly patient" },
  { tag: "Healthcare, Reimagined", title: "Healthcare, Reimagined", desc: "Ideas, technologies and people challenging how healthcare is delivered.", image: "/images/future.jpg", alt: "An entrepreneur holding a tablet with a telemedicine app" },
] as const;

export const STORY_STREAMS = [
  { title: "Why does this happen?", desc: "We investigate questions people encounter in everyday healthcare.", image: "/images/feat-navigate.jpg", alt: "Patients and staff in a busy outpatient waiting area" },
  { title: "TheraVita Explains", desc: "Healthcare can be complicated. We make complex subjects easier to understand without reducing their importance.", image: "/images/feat-intelligence.jpg", alt: "Hands holding a phone with a health dashboard" },
  { title: "Behind the System", desc: "We look inside the structures and processes that shape healthcare.", image: "/images/feat-system.jpg", alt: "Healthcare professionals collaborating around a tablet" },
  { title: "The Healthcare Experience", desc: "Real experiences from patients, families, caregivers and healthcare professionals.", image: "/images/feat-patient.jpg", alt: "A nurse sitting beside an elderly patient" },
  { title: "Healthcare, Reimagined", desc: "Ideas and innovations challenging conventional approaches to healthcare.", image: "/images/future.jpg", alt: "An entrepreneur holding a tablet with a telemedicine app" },
  { title: "Expert Conversations", desc: "Conversations with people who have something meaningful to contribute to healthcare.", image: "/images/feat-expert.jpg", alt: "A doctor being interviewed with a microphone" },
] as const;

export const DISCLAIMER =
  "TheraVita Intelligence provides health and healthcare information for educational and informational purposes. Our content does not replace consultation with a qualified healthcare professional. Where appropriate, we identify sources, expert contributors and relevant evidence.";

export const CONTACT_TOPICS = [
  { value: "general", label: "General Enquiry" },
  { value: "editorial", label: "Editorial" },
  { value: "contributor", label: "Contributor" },
  { value: "expert", label: "Expert" },
  { value: "partnership", label: "Partnership" },
  { value: "media", label: "Media" },
  { value: "community", label: "Community" },
  { value: "other", label: "Other" },
] as const;
