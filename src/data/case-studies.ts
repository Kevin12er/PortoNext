export type CaseStudy = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  overview: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    points: string[];
  };
  capabilities?: {
    title: string;
    points: string[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
    data: string[];
    deploy: string[];
  };
  impact: string;
  links: {
    label: string;
    url: string;
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "learnbridge",
    title: "LearnBridge",
    excerpt:
      "Mastery-based practice exercise LMS for vocational high school students, featuring auto-grading, step-by-step prerequisite checkpoints, and structured progress tracking.",
    cover:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    overview:
      "LearnBridge is a mastery-based learning management platform designed specifically for vocational high school (SMK) students and educators. The platform addresses a common breakdown in technical education: students advancing into complex topics before fully grasping fundamental prerequisites.",
    problem: {
      title: "The Core Problem",
      points: [
        "In traditional self-paced systems, students frequently skip between chapters without verifying prerequisite understanding. When foundational concepts remain unverified, advanced exercises become overwhelming, leading to low completion rates and disengagement.",
        "Teachers also lack instant visibility into which specific sub-topic caused a student to struggle.",
      ],
    },
    solution: {
      title: "Architectural Solution",
      points: [
        "LearnBridge introduces a mandatory 'Bridge Checkpoint' design to ensure continuous foundational mastery before progression.",
        "Prerequisite Validation - Every curriculum sub-module contains an automated test quest that must be passed before unlocking subsequent chapters.",
        "Immediate Auto-Grading - Algorithm-driven evaluation delivers instant test results and actionable explanations, removing the multi-day grading delay.",
        "Teacher Analytics Dashboard - Real-time progress monitoring provides instructors with immediate insight into individual and class-wide comprehension bottlenecks.",
      ],
    },
    capabilities: {
      title: "Key Capabilities & Workflows",
      points: [
        "Dynamic Curriculum Builder - Enables educators to assemble and update modular quizzes with multiple question types from any device.",
        "Instant Student Feedback - Auto-grading algorithms calculate test scores immediately upon submission with step-by-step answer keys.",
        "Foundation Guardrails - Automated progression gates ensure every student builds solid understanding before tackling complex topics.",
        "RESTful API Contracts - Clean separation between the Next.js frontend client and the NestJS backend service, documented via interactive Swagger endpoints.",
      ],
    },
    techStack: {
      frontend: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4"],
      backend: ["NestJS", "Modular REST API", "JWT Authentication", "Bcrypt Password Hashing"],
      data: ["PostgreSQL", "Prisma ORM", "Relational Data Schemas"],
      deploy: ["Jest Unit Testing", "Vercel (Frontend CI/CD)", "Railway (Backend Deployment)", "Swagger API Documentation"],
    },
    impact:
      "By enforcing structured foundational checkpoints and eliminating manual grading bottlenecks, LearnBridge allows teachers to focus on targeted student interventions rather than repetitive paperwork, while providing students with clear, confidence-building milestone progression.",
    links: [
      { label: "Live Demo", url: "https://www.learnbridge.fun/" },
      { label: "Frontend GitHub", url: "https://github.com/Kevin12er/crack-fe-Kevin12er.git" },
      { label: "Backend GitHub", url: "https://github.com/Kevin12er/crack-be-Kevin12er.git" },
    ],
  },
  {
    id: "revoshop",
    title: "RevoShop",
    excerpt:
      "Modern e-commerce storefront engineered with Next.js 16 and React 19, featuring zero-reload navigation, persistent shopping cart, and product management dashboard.",
    cover:
      "https://images.unsplash.com/photo-1556742049-0cfed4f7a06d?w=800&q=80",
    overview:
      "RevoShop is a comprehensive, production-ready e-commerce web application developed with Next.js 16 and React 19. The application emphasizes fluid navigation, rapid item discovery, and reliable checkout preparation, delivering a shopping experience that feels as fast and responsive as a native application.",
    problem: {
      title: "The E-Commerce Challenge",
      points: [
        "E-commerce stores suffer significant bounce rates when page navigation causes full browser reloads, or when cart state is lost during transitions.",
        "Catalog browsing often becomes sluggish when handling extensive product collections without optimized client-side caching.",
      ],
    },
    solution: {
      title: "Architectural Solution",
      points: [
        "RevoShop harnesses Next.js App Router streaming and persistent state to create a seamless customer flow.",
        "Zero-Reload Route Transitions - Instantaneous page navigation without page reloads powered by Next.js client-side streaming.",
        "Resilient Shopping Cart Logic - Stateful cart engine that recalculates totals in real-time, persists selections, and supports instant quantity edits.",
        "Integrated Management Dashboard - Dedicated admin panel enabling store operators to adjust prices, update stock, and audit categories easily.",
      ],
    },
    capabilities: {
      title: "Key Capabilities & Workflows",
      points: [
        "Dynamic Product Discovery Feed - Responsive showcase featuring category filtering, dynamic price badges, and quick-add actions.",
        "Deep-Dive Item Views - Rich product specifications, high-res previews, and related category recommendations.",
        "Interactive Cart Drawer - Slide-over shopping cart providing live subtotal recalculations and smooth item removal animations.",
        "Inventory Control Panel - Streamlined operational interface designed for store administrators to manage item records.",
      ],
    },
    techStack: {
      frontend: ["Next.js 16 (App Router)", "React 19 Server & Client Components", "Tailwind CSS v4", "React Icons"],
      backend: ["Stateful Shopping Cart Engine", "Persistent Client-Side Storage", "Zero-Reload Router Transitions"],
      data: ["RESTful Product Endpoints", "Categorized Product Recommendations"],
      deploy: ["Administrative Inventory Panel"],
    },
    impact:
      "RevoShop delivers high-speed commerce UX by combining React 19 client components with Next.js 16 server-driven routing.",
    links: [
      { label: "Live Demo", url: "https://milestone-3-kevin12er-ylzm.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Revou-FSSE-Feb26/milestone-3-Kevin12er.git" },
    ],
  },
  {
    id: "revofun",
    title: "RevoFun",
    excerpt:
      "Interactive collection of five web arcade games engineered with pure vanilla JavaScript, focusing on event-driven state coordination and zero-dependency performance.",
    cover:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&q=80",
    overview:
      "RevoFun is an interactive browser-based arcade featuring five fully functional web games. Engineered purely with vanilla JavaScript, HTML5, and CSS3, the project was created to demonstrate deep mastery of core JavaScript fundamentals, browser event loops, DOM manipulation, and state coordination without relying on third-party UI libraries or heavy gaming engines.",
    problem: {
      title: "The Architectural Challenge",
      points: [
        "Modern web development heavily relies on frontend frameworks that abstract away core browser mechanics.",
        "Building multi-state interactive games in vanilla JavaScript demands rigorous architecture to avoid spaghetti DOM queries, memory leaks from uncleaned event listeners, and sluggish frame rendering.",
      ],
    },
    solution: {
      title: "Key Capabilities & Workflows",
      points: [
        "Typing Speed Challenge - Measures words per minute (WPM) and keystroke accuracy via high-resolution timestamp calculations.",
        "Memory Card Game - Card-flipping memory puzzle utilizing randomized array shuffling and non-blocking timeout delays.",
        "Rock Paper Scissors - Algorithmic opponent logic paired with round tracking and winning streak calculations.",
        "Number Guessing - Binary-search style deductive reasoning puzzle with dynamic range indicators and validation bounds.",
        "Whack a Mole - Reflex arcade test featuring randomized pop-up intervals and collision detection under time pressure.",
      ],
    },
    techStack: {
      frontend: ["Vanilla JavaScript (ES6+)", "Native DOM Event Architecture", "High-Resolution Timers"],
      backend: [],
      data: ["HTML5 Semantic Structure", "CSS3 Grid & Flexbox", "Custom Theme Variables"],
      deploy: ["Deterministic State Machines", "LocalStorage Score Tracking", "Responsive Coordinate Mapping"],
    },
    impact:
      "Demonstrates that high-performance, engaging web experiences can be delivered with zero runtime dependencies through disciplined use of native browser APIs, clean event loops, and responsive CSS.",
    links: [
      { label: "Live Demo", url: "https://revou-fsse-feb26.github.io/milestone-2-Kevin12er/" },
      { label: "GitHub", url: "https://github.com/Revou-FSSE-Feb26/milestone-2-Kevin12er.git" },
    ],
  },
];

export function getCaseStudy(id: string) {
  return caseStudies.find((cs) => cs.id === id);
}