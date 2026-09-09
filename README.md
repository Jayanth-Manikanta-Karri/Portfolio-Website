# Jayanth Manikanta Karri — AI/ML Engineer Portfolio

> **Production-grade, modern, and interactive portfolio website built with Next.js (App Router), TypeScript, and Tailwind CSS.**  
> Showcases expertise in Agentic AI pipelines, multi-agent orchestration (LangGraph, AutoGen, CrewAI), Model Context Protocol (MCP), LLM fine-tuning & quantization, and hybrid cloud / on-premise GPU inference infrastructure.

---

## 📌 Table of Contents
- [Executive Overview](#-executive-overview)
- [Target Tech Stack](#-target-tech-stack)
- [Design Aesthetics & Theme System](#-design-aesthetics--theme-system)
- [Information Architecture & Pages](#-information-architecture--pages)
  - [1. Home (Hero & Highlights)](#1-home-page-hero--highlights)
  - [2. About Me](#2-about-page)
  - [3. Technical Skills Matrix](#3-skills-page)
  - [4. Projects & Deep-Dive Case Studies](#4-projects--deep-dive-case-studies)
  - [5. Work Experience & Leadership](#5-work-experience--leadership)
  - [6. Interactive Resume](#6-resume-page)
  - [7. Contact & Connect](#7-contact-page)
  - [8. Future Extensions (Roadmap)](#8-future-extensions-roadmap)
- [Deep-Dive Project Case Studies Specification](#-deep-dive-project-case-studies-specification)
- [Project Directory Structure](#-project-directory-structure)
- [Step-by-Step Development Roadmap](#-step-by-step-development-roadmap)
- [Getting Started & Local Development](#-getting-started--local-development)

---

## 🚀 Executive Overview

The goal of this portfolio is to establish an industry-leading, visually arresting personal brand for **Jayanth Manikanta Karri**, highlighting 2+ years of production AI engineering experience, real-world metrics, and deep systems-level knowledge.

### Key Highlights to Feature
- **Agentic AI & Orchestration:** LangGraph, AutoGen, CrewAI, ReAct, Chain-of-Thought, Tool-Use Agents, Model Context Protocol (MCP), Agentic RAG.
- **Inference & Infrastructure:** Hybrid deployment (Ada RTX 6000 48GB VRAM on-prem + AWS EC2 / Azure AI cloud), zero-cold-start multi-model serving (LLaMA 3.1, Qwen, Mistral, SDXL, FLUX), CPU offloading, Docker multi-node networking.
- **Quantization & Performance:** GPTQ and AWQ optimization yielding **35% inference latency reduction**.
- **Production Impact:** **70% faster content creation** with autonomous marketing agents, **60% reduction in audit effort** with IPARRS compliance engine.
- **Hackathon & Research:** Smart India Hackathon 2023 Winner (multilingual AI video dubbing), published researcher in deep learning for healthcare (STM Journals 2023).

---

## 🛠 Target Tech Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Server-side rendering (SSR), Static Site Generation (SSG), optimal SEO, and API routes. |
| **Language** | **TypeScript** | Strict typing for reliability, maintainability, and clean data contracts. |
| **Styling** | **Tailwind CSS** | Utility-first, highly customizable styling with custom color tokens and responsive design. |
| **Animations** | **Framer Motion** | Micro-interactions, smooth page transitions, interactive hover effects, and scroll reveals. |
| **Icons** | **Lucide React** | Clean, modern, lightweight SVG icons. |
| **Content / Data** | **Local Typed Config / MDX** | Easily maintainable, type-safe data structures for projects, experiences, and case studies. |
| **Forms & Email** | **Next.js Server Actions / Resend / Web3Forms** | Frictionless contact form with anti-spam honeypot and real-time validation. |
| **Deployment** | **Vercel / Cloudflare Pages** | Global edge network with continuous integration via GitHub. |

---

## 🎨 Design Aesthetics & Theme System

- **Visual Style:** Sleek AI & High-Performance Compute aesthetic. Dark-mode first with obsidian backgrounds, subtle neon accents, glassmorphic cards, and crisp modern typography.
- **Color Palette:**
  - **Background Dark:** `#0A0D14` (Deep Space Obsidian) / `#0F141F` (Surface Elevation)
  - **Card Surface & Glass:** `rgba(17, 24, 39, 0.7)` with `backdrop-blur-md` and `1px border-slate-800`
  - **Primary Accent (Cyan / Neon Teal):** `#06B6D4` / `#22D3EE` (signifying intelligence, connectivity)
  - **Secondary Accent (Violet / Purple):** `#8B5CF6` / `#A78BFA` (signifying AI creativity & neural networks)
  - **Success / Metric Accent (Emerald):** `#10B981` (highlighting benchmarks and quantitative results)
  - **Text:** `#F8FAFC` (Slate 50 heading), `#94A3B8` (Slate 400 body text)
- **Typography:**
  - Headings: `Space Grotesk` or `Outfit`
  - Body: `Inter`
  - Code / Monospace / Metrics: `JetBrains Mono`

---

## 📄 Information Architecture & Pages

### 1. Home Page (Hero & Highlights)
- **Hero Section:**
  - Clean greeting & status badge (`Available for AI/ML & Agentic AI Roles`).
  - **Headline:** *Jayanth Manikanta Karri* — AI/ML Engineer.
  - **Sub-headline:** *Specializing in Agentic AI Pipelines, LLM Fine-tuning & Quantization, and Hybrid Cloud/On-Prem GPU Inference.*
  - **Profile Avatar:** High-resolution portrait with animated ambient gradient ring.
  - **Primary CTA Buttons:**
    - `View Projects` (smooth scroll or route to `/projects`)
    - `Download Resume` (direct PDF download / link to `/resume`)
    - `Contact Me` (`/contact`)
  - **Social Links:** GitHub (`github.com/Jayanth-Manikanta-Karri`), LinkedIn (`linkedin.com/in/jayanthmani`), Email.
- **Key Metrics Ticker:**
  - `2+ Years` Production AI Experience
  - `35%` Inference Latency Reduction via Quantization
  - `70%` Faster Content Generation Pipelines
  - `60%` Reduction in Enterprise Audit Effort
  - `SIH '23` National Hackathon Winner
- **Featured Projects Showcase:** Top 2–3 flagship projects with interactive cards and quick links to full case studies.
- **Technical Domains Overview:** Agentic Orchestration, High-Performance GPU Serving, Enterprise RAG, Multimodal Systems.

---

### 2. About Page
- **Professional Bio:** Journey from Computer Science & AI/ML specialization to building multi-agent systems and hybrid GPU clusters at Quantum AI Global.
- **Engineering Philosophy:** Systemic thinking, cost-adaptive compute routing, zero-downtime inference, and autonomous reasoning loops.
- **AI/ML Focus Areas:**
  - Multi-Agent Orchestration & Tool Use (MCP, LangGraph, AutoGen, CrewAI)
  - Production Inference Optimization (GPTQ/AWQ, multi-threaded GPU scheduling)
  - Multimodal Vision-Language Pipelines (LLaVA, GPT-4V, YOLOv8)
- **Leadership & Mentorship:** Experience as Product Lead leading 5 engineers and 3 interns, improving PR throughput by 40%.
- **Education & Credentials:**
  - B.Tech in CSE (Specialization in AI & ML), Gayatri Vidya Parishad College of Engineering (CGPA: 8.8 / 10).
  - NxtWave Genius Track Certification (Full-Stack & MERN).

---

### 3. Skills Page
Organized into interactive, filterable domains with visual proficiency indicators:
1. **Agentic AI & Orchestration:** LangGraph, LangChain, LlamaIndex, AutoGen, CrewAI, ReAct, Chain-of-Thought, Tool-Use Agents, Model Context Protocol (MCP), Agentic RAG.
2. **AI & Machine Learning Models:** LLaMA 3.1, Qwen, Mistral, GPT-4, Diffusion Models (SDXL, FLUX), VLMs (LLaVA, GPT-4V), YOLOv8, ViT, Fine-tuning, Quantization (GPTQ / AWQ), PyTorch, Hugging Face.
3. **Deployment & GPU Infrastructure:** Docker, GPU Inference Orchestration (Ada RTX 6000), CPU Offloading, Multi-node Serving, Load Balancing, Hybrid Cloud / On-Prem Deployment, FastAPI, Apache, SSL / HTTPS, Linux.
4. **Cloud Platforms:** AWS (EC2 GPU, S3, SageMaker), Azure (AI Services, VM), GCP (Vertex AI, Cloud Run).
5. **Databases & Vector Stores:** PostgreSQL, MongoDB, MySQL, FAISS, MongoDB Atlas Vector Search.
6. **Frontend & Full-Stack:** React.js, Next.js, Tailwind CSS, TypeScript, Node.js, Express.js.
7. **Languages:** Python, TypeScript, JavaScript, Java, C++.

---

### 4. Projects & Deep-Dive Case Studies
For every project:
- Project Title & Catchy Subtitle
- One-line Description
- Problem Statement
- Solution Overview
- Architecture Overview & Diagram
- Tech Stack Tags
- Personal Contribution & Role
- Quantitative Results & Metrics
- GitHub Repository Link & Live Demo (if available)

---

### 5. Work Experience & Leadership
Interactive chronological experience timeline:
1. **AI / ML Engineer — Agentic AI & Deployment Infrastructure** *(Jul 2025 – Present)*
   - *Quantum AI Global, Hyderabad*
   - Hybrid GPU deployment (Ada RTX 6000 + AWS/Azure), LangGraph/AutoGen multi-agent pipelines, MCP integration, multi-threaded FastAPI inference engine.
2. **Junior AI Developer** *(Nov 2024 – Jul 2025)*
   - *Quantum AI Global, Hyderabad*
   - Agentic RAG (LangChain + LlamaIndex), open-source model serving, GPTQ/AWQ 35% latency reduction, multimodal VLM and YOLOv8 computer vision.
3. **ML Engineer Intern** *(Mar 2024 – Nov 2024)*
   - *Quantum AI Global, Hyderabad*
   - Hybrid dense-sparse FAISS + MongoDB Atlas vector RAG (+20% retrieval precision), 4 production PoCs with GPT-4 & Claude.
4. **Product Lead** *(Leadership Highlight)*
   - *Quantum AI Global*
   - Spearheaded two AI products from zero to deployment; managed team of 5 devs + 3 interns; introduced code-review best practices (+40% PR velocity).

---

### 6. Resume Page
- Embedded responsive PDF viewer for [Jayanth_AI_ML_Resume.pdf](file:///c:/Users/bhavy/OneDrive/Desktop/Personal/Portfolio-website/Jayanth_AI_ML_Resume.pdf).
- One-click `Download PDF` button with file size info.
- Clean, structured, ATS-friendly HTML text view with quick jump-to-section navigation.

---

### 7. Contact Page
- Direct inquiry form with fields: Name, Email, Subject/Role, Message.
- Contact cards:
  - **Email:** `jayanth.karri2004@gmail.com`
  - **Phone:** `+91 9493801776`
  - **Location:** Hyderabad, India (Open to Remote / Hybrid / Relocation)
  - **Socials:** LinkedIn & GitHub
- Calendar invite placeholder / quick link for discovery calls.

---

### 8. Future Extensions (Roadmap)
- **Technical Blog / Publications:** Interactive MDX blog featuring research on Diabetic Retinopathy Detection (STM Journals 2023) and guides on MCP & GPU quantization.
- **Embedded AI Chatbot:** Interactive portfolio assistant powered by Gemini / LLM with RAG on Jayanth's resume and case studies.
- **Live Model Demos:** Interactive browser-based playground for model inference and agent workflows.

---

## 🔬 Deep-Dive Project Case Studies Specification

The top flagship projects will feature dedicated deep-dive routes (`/projects/[slug]`):

```
/projects/
├── autonomous-ai-marketing-agent/
├── iparrs-compliance-analyzer/
├── hybrid-gpu-inference-engine/
└── sih-multilingual-video-dubbing/
```

### Case Study Structure & Content Checklist:
1. **Executive Summary & Overview:** High-level problem, impact, timeline, and tech stack pills.
2. **The Problem:** Detailed pain points in legacy/manual workflows.
3. **System Architecture:**
   - Visual Mermaid / SVG architecture diagrams showing data flow and agent coordination.
   - Component breakdown: ingest layer, agent coordinator, memory store, inference router.
4. **Technical Decisions & Trade-offs:**
   - Why LangGraph/CrewAI over hardcoded scripts?
   - Cloud burst inference vs. on-prem steady state cost evaluation.
   - Quantization format choices (GPTQ vs AWQ vs FP16).
5. **Model Selection & Benchmark:**
   - Rationale for chosen foundation models (LLaMA 3.1, SDXL, FLUX, Qwen).
6. **Data & Pipeline Engineering:**
   - Ingestion, chunking, dense/sparse embeddings, context routing.
7. **Deployment & DevOps:**
   - Docker containerization, multi-threaded FastAPI workers, VPC peering, SSL setup.
8. **Testing & Validation:**
   - Unit tests, prompt regression testing, schema validation via Pydantic.
9. **Monitoring & Profiling:**
   - GPU VRAM utilization, network latency, token generation speed (tokens/sec).
10. **Quantitative Results & Business Impact:**
    - Speedups, cost savings, accuracy metrics, and user feedback.
11. **Links & Media:**
    - GitHub repository, live staging links, screenshots, and terminal recordings.

---

## 📁 Project Directory Structure

```
portfolio-website/
├── public/
│   ├── assets/
│   │   ├── images/          # Profile pictures, project screenshots, diagrams
│   │   └── docs/
│   │       └── Jayanth_AI_ML_Resume.pdf  # Static resume asset
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with Navbar, Footer, ThemeProvider
│   │   ├── page.tsx         # Home (Hero, Metrics, Featured Projects, Highlights)
│   │   ├── about/
│   │   │   └── page.tsx     # About page
│   │   ├── skills/
│   │   │   └── page.tsx     # Skills matrix & categorizations
│   │   ├── projects/
│   │   │   ├── page.tsx     # All projects directory
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Dynamic dedicated project case study page
│   │   ├── experience/
│   │   │   └── page.tsx     # Experience & Leadership timeline
│   │   ├── resume/
│   │   │   └── page.tsx     # Resume viewer & download
│   │   ├── contact/
│   │   │   └── page.tsx     # Contact form & social connections
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts # Contact form submission endpoint
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileNav.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── MetricsBanner.tsx
│   │   │   └── FeaturedProjects.tsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ArchitectureDiagram.tsx
│   │   │   └── MetricBadge.tsx
│   │   ├── skills/
│   │   │   ├── SkillCategory.tsx
│   │   │   └── SkillBadge.tsx
│   │   ├── experience/
│   │   │   └── TimelineItem.tsx
│   │   └── ui/              # Buttons, Cards, Modals, Inputs, Badges
│   ├── data/
│   │   ├── profile.ts       # Central personal & contact information
│   │   ├── skills.ts        # Typed skills array with categories
│   │   ├── experience.ts    # Work history and leadership entries
│   │   └── projects.ts      # Comprehensive project metadata & case study data
│   ├── styles/
│   │   └── globals.css      # Tailwind base, utilities, and custom glows
│   └── types/
│       └── index.ts         # TypeScript interfaces for Project, Experience, Skill, etc.
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 📅 Step-by-Step Development Roadmap

### Phase 1: Environment & Project Foundation
- [ ] Initialize Next.js 14+ app with TypeScript, Tailwind CSS, and ESLint.
- [ ] Configure `tailwind.config.ts` with custom brand colors (Obsidian `#0A0D14`, Neon Cyan `#06B6D4`, Violet `#8B5CF6`).
- [ ] Set up Google Fonts (`Inter`, `Space Grotesk`, `JetBrains Mono`) and global styles.
- [ ] Install UI and animation dependencies (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`).

### Phase 2: Data Modeling & Content Schemas
- [ ] Create strict TypeScript interfaces in `src/types/index.ts` for:
  - `Project` & `CaseStudy`
  - `ExperienceItem`
  - `SkillCategory`
  - `ProfileInfo`
- [ ] Populate `src/data/` files with accurate details from `Jayanth_AI_ML_Resume.pdf`.

### Phase 3: Global Layout & Navigation
- [ ] Implement responsive `Navbar` with glassmorphic backdrop, active link indicator, and mobile sheet drawer.
- [ ] Implement global `Footer` with copyright, quick site links, and live status indicator.
- [ ] Add smooth scrolling and page transition wrappers.

### Phase 4: Core Pages Implementation
- [ ] **Home Page:**
  - Hero section with animated particle/glow background, punchy copy, CTA buttons, and social pills.
  - Quantitative metrics ticker.
  - Featured projects summary grid.
- [ ] **About Page:**
  - Bio, engineering philosophy, AI/ML domains, leadership experience, education cards.
- [ ] **Skills Page:**
  - Interactive grid organized by domains (Agentic AI, Models, Infra, Cloud, DB, Frontend, Languages).
- [ ] **Experience Page:**
  - Visual timeline detailing roles at Quantum AI Global, responsibilities, and quantified achievements.
- [ ] **Resume Page:**
  - Embedded PDF viewer with direct download link and quick-reference HTML resume.
- [ ] **Contact Page:**
  - Interactive contact form with client-side validation, error handling, and direct contact details.

### Phase 5: Deep-Dive Project Case Studies
- [ ] Build dynamic route `src/app/projects/[slug]/page.tsx`.
- [ ] Craft 4 comprehensive case studies:
  1. **Autonomous AI Marketing Agent**
  2. **Intelligent Policy Analyzer & Risk Reporting System (IPARRS)**
  3. **Hybrid On-Prem & Cloud GPU Serving Engine**
  4. **Smart India Hackathon Winning Multilingual Video Dubbing Platform**
- [ ] Integrate Mermaid diagrams / interactive architecture flow charts.

### Phase 6: Interactive Polish & Animations
- [ ] Add Framer Motion scroll animations (`fade-in-up`, stagger children for skill pills and cards).
- [ ] Add micro-interactions: card hover tilts, button glow pulses, and badge sheen effects.
- [ ] Verify accessibility (ARIA attributes, keyboard navigation, color contrast ratios).

### Phase 7: Optimization, SEO & Deployment
- [ ] Add OpenGraph (OG) image, Twitter card metadata, and JSON-LD structured data.
- [ ] Optimize image assets with `next/image` and WebP formats.
- [ ] Verify production build (`npm run build`).
- [ ] Deploy to Vercel / Cloudflare with custom domain linkage.

---

## 💻 Getting Started & Local Development

Once the project files are initialized, run the following commands:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:3000
```

---

*Authored by Jayanth Manikanta Karri — AI/ML Engineer*