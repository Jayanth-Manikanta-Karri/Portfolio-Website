import { CaseStudy } from '@/types';

export const caseStudiesData: Record<string, CaseStudy> = {
  'autonomous-ai-marketing-agent': {
    slug: 'autonomous-ai-marketing-agent',
    title: 'Autonomous AI Marketing Agent',
    subtitle: 'Multi-Agent Autonomous Campaign Orchestration with CrewAI, Diffusion & Hybrid Inference',
    featured: true,
    category: 'Agentic AI Systems',
    oneLiner: 'Specialized role-playing agents autonomously executing end-to-end marketing campaigns with 80% fewer human touchpoints.',
    problem:
      'Digital campaign lifecycles required 6 to 12 manual interactions per creative asset: extracting requirements from brief documents, drafting social copy, generating branded visuals with multiple negative prompts, reviewing compliance guidelines, and manually scheduling postings across platforms. This high-touch process caused turnaround times exceeding 48 hours for a single multi-channel campaign.',
    solution:
      'Architected an autonomous multi-agent pipeline using CrewAI and custom tool definitions. A hierarchy of specialized agents (Creative Director, Research Analyst, Copywriting Agent, Visual Diffusion Agent, and Compliance Auditor) collaborate asynchronously. Tasks are decomposed into structured Pydantic schemas, validated against brand guidelines, and queued for multi-node diffusion rendering and platform distribution.',
    architectureOverview:
      'The architecture separates cognitive reasoning from compute-heavy generation. The multi-agent orchestrator runs on a lightweight FastAPI gateway, querying local LLaMA 3.1 8B instances for high-frequency reasoning steps, while routing heavy visual synthesis requests (SDXL / FLUX) to high-memory GPU nodes.',
    architectureComponents: [
      {
        title: 'Cognitive Orchestrator (CrewAI & LangGraph)',
        description:
          'Controls role assignment, inter-agent delegation, structured state sharing, and dynamic memory retrieval using short-term conversation buffers and long-term vector stores.',
        technologies: ['CrewAI', 'LangChain', 'Python', 'Pydantic'],
      },
      {
        title: 'Diffusion Inference Pipeline',
        description:
          'Dedicated image synthesis microservice serving SDXL and FLUX.1. Supports automated prompt expansion, negative prompt injection, and LoRA style adherence filters.',
        technologies: ['PyTorch', 'SDXL', 'FLUX.1', 'Diffusers', 'FastAPI'],
      },
      {
        title: 'Hybrid Compute Router',
        description:
          'Monitors on-prem Ada RTX 6000 GPU queue depth. When steady-state capacity exceeds 85%, requests are dispatched to AWS EC2 GPU spot instances seamlessly.',
        technologies: ['AWS EC2', 'Docker', 'VPC Peering', 'Redis Queue'],
      },
      {
        title: 'Dashboard & Approval UI',
        description:
          'Next.js 14 real-time interface giving human marketers an interactive canvas to review generated assets, tweak parameters, and monitor agent audit logs.',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'MongoDB'],
      },
    ],
    technicalDecisions: [
      {
        decision: 'CrewAI with Structured Output Schemas over Single-Prompt LLM Chains',
        rationale:
          'Single-prompt LLMs suffered from instruction drift and hallucinated branding guidelines. Modular role-playing agents enabled strict division of responsibilities with deterministic schema validation between handoffs.',
        alternativeConsidered: 'Monolithic prompt with function calling',
        tradeoffOutcome:
          'Slightly higher token consumption during planning, but eliminated 95% of hallucination errors and enabled modular agent debugging.',
      },
      {
        decision: 'Hybrid On-Prem Steady State with Elastic Cloud Bursting',
        rationale:
          'High diffusion model inference costs made running 100% on cloud GPUs prohibitive for regular generation, while an exclusively on-prem server would bottleneck during marketing peak hours.',
        alternativeConsidered: '100% AWS SageMaker dedicated endpoints',
        tradeoffOutcome:
          'Cut operational inference infrastructure costs by ~62% while preserving sub-10 second burst responsiveness.',
      },
      {
        decision: 'AWQ 4-bit Quantization for Local Language Models',
        rationale:
          'Needed to run LLaMA 3.1 8B reasoning loops concurrently with 24GB diffusion models on shared 48GB VRAM without swapping latency.',
        alternativeConsidered: 'Unquantized FP16 weights across two dedicated GPUs',
        tradeoffOutcome:
          'Decreased memory footprint from 16GB to 5.2GB with negligible (<0.3%) perplexity degradation.',
      },
    ],
    modelSelection: {
      models: [
        'LLaMA 3.1 8B Instruct (AWQ 4-bit) for high-speed agent reasoning & drafting',
        'GPT-4o for final tone and brand compliance audit',
        'SDXL & FLUX.1-schnell for photorealistic and stylized marketing visuals',
      ],
      justification:
        'Small quantized open-source models deliver fast sub-second token generation for internal agent thought-chains, while frontier models handle external-facing legal and brand checks.',
      quantizationOrOptimization:
        'AWQ quantization with FlashAttention-2 and CPU offloading for dormant model weights during off-peak windows.',
    },
    dataPipeline:
      'Brand guideline PDFs and previous high-performing marketing assets are pre-processed, chunked using semantic chunking, and embedded into FAISS. When a new brief is uploaded, the Research Agent performs multi-hop semantic retrieval to pull matching tone rules and visual aesthetics.',
    deploymentAndInfra:
      'Containerized with multi-stage Docker images. The orchestration layer runs in lightweight container pods, communicating with on-prem RTX 6000 servers via high-speed internal networking and cloud burst nodes via secured AWS VPC peering.',
    testingAndGuardrails:
      'Implemented automated evaluation benchmarks with Pydantic guardrails verifying image resolution, aspect ratio, text length, and banned lexical tokens before human presentation.',
    monitoringAndProfiling:
      'Prometheus and custom telemetry tracks VRAM utilization, GPU temperature, tokens per second, queue latency, and agent step execution time.',
    results: [
      { metric: '80%', label: 'Human Touchpoints Reduced', detail: 'Campaigns require human review only at the final approval gate.' },
      { metric: '70%', label: 'Turnaround Time Accelerated', detail: 'End-to-end multi-platform asset delivery dropped from 48h to under 2h.' },
      { metric: '62%', label: 'Inference Cost Savings', detail: 'Achieved through hybrid on-prem steady state compute balancing.' },
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    carouselImages: [
      {
        src: '/assets/images/projects/marketing-agent-flow.svg',
        alt: 'Multi-Agent Workflow',
        caption: 'Orchestration topology illustrating brief ingestion, agent deliberation, and visual rendering.',
      },
      {
        src: '/assets/images/projects/marketing-agent-dashboard.svg',
        alt: 'Dashboard UI',
        caption: 'Real-time campaign status, agent thought execution tree, and draft previews.',
      },
    ],
    tags: ['Agentic AI', 'CrewAI', 'SDXL', 'FLUX', 'LLaMA 3.1', 'FastAPI', 'Next.js'],
  },
  'iparrs-compliance-analyzer': {
    slug: 'iparrs-compliance-analyzer',
    title: 'Intelligent Policy Analyzer & Risk Reporting System (IPARRS)',
    subtitle: 'Enterprise AI Compliance Engine with Agentic RAG, Clause Parsing & Risk Scoring',
    featured: true,
    category: 'Enterprise RAG & Compliance',
    oneLiner: 'Automated policy audit system slashing manual review effort by 60% through semantic re-ranking and multi-hop reasoning.',
    problem:
      'Global enterprises must audit extensive vendor contracts and internal policy manuals against hundreds of pages of evolving compliance regulations (GDPR, SOC 2, ISO 27001). Human auditors spent hundreds of hours cross-referencing stipulations, resulting in high cognitive fatigue and missed regulatory discrepancies.',
    solution:
      'Constructed IPARRS (Intelligent Policy Analyzer & Risk Reporting System), an enterprise AI solution combining LangChain, FAISS vector indexing, and PostgreSQL. ReAct-style agents autonomously parse structured sections, perform multi-hop retrieval across regulatory corpuses, calculate severity scores, and present audit findings with verbatim citations.',
    architectureOverview:
      'A modular pipeline that segments documents into legal hierarchy nodes (Articles, Sections, Subsections), builds dense FAISS embeddings alongside BM25 sparse indexes, and applies a cross-encoder re-ranker before feeding top evidence into an audit verification agent.',
    architectureComponents: [
      {
        title: 'Hierarchical Document Parser',
        description:
          'Breaks complex legal PDFs into structural trees preserving parent-child clause context and regulatory cross-references.',
        technologies: ['PyMuPDF', 'Python', 'Regular Expressions', 'Pydantic'],
      },
      {
        title: 'Hybrid Dense-Sparse Vector Store',
        description:
          'Combines FAISS dense semantic embeddings with BM25 lexical keyword retrieval to catch exact legal terminology and broader thematic semantics.',
        technologies: ['FAISS', 'BM25', 'Hugging Face Embeddings'],
      },
      {
        title: 'Cross-Encoder Re-Ranking Engine',
        description:
          'Re-scores top 50 retrieval candidates down to top 8 most contextually relevant passages, preventing context window saturation.',
        technologies: ['BGE-Reranker', 'PyTorch', 'FastAPI'],
      },
      {
        title: 'Risk Scoring & React Dashboard',
        description:
          'Interactive auditing dashboard with side-by-side clause verification, color-coded severity metrics (Low, Medium, High, Critical), and exportable PDF audit dossiers.',
        technologies: ['React.js', 'Tailwind CSS', 'PostgreSQL'],
      },
    ],
    technicalDecisions: [
      {
        decision: 'Hybrid Dense + Sparse Indexing over Dense-Only Embeddings',
        rationale:
          'Dense embeddings frequently missed specific clause code numbers (e.g. "Article 28(3)(a)") where exact character match is legally imperative.',
        alternativeConsidered: 'Standard cosine similarity on OpenAI ada-002 embeddings',
        tradeoffOutcome:
          'Boosted clause retrieval accuracy by 20% on compliance benchmark tests.',
      },
      {
        decision: 'ReAct Self-Reflection Loop for Risk Scoring',
        rationale:
          'Single-shot LLM evaluation tended to over-flag benign variations. Implementing a self-critique loop where the agent verifies whether a rule violation truly applies eliminated false positives.',
        alternativeConsidered: 'Zero-shot prompt with fixed classification',
        tradeoffOutcome:
          'Reduced false positive risk warnings by 44%, drastically increasing auditor trust.',
      },
    ],
    modelSelection: {
      models: [
        'LLaMA 3.1 70B (Quantized) & GPT-4 API for legal reasoning and synthesis',
        'BGE-Large-EN for dense vector embeddings',
        'BAAI/bge-reranker-large for cross-encoder re-ranking',
      ],
      justification:
        'Legal compliance requires high fidelity and zero hallucinations. Deep re-ranking combined with 70B parameter models ensures accurate regulatory citation.',
      quantizationOrOptimization:
        'FP16 mixed precision for re-ranker inference on dedicated GPU workers with cached embeddings.',
    },
    dataPipeline:
      'Continuous asynchronous ingestion: Uploaded enterprise contracts are converted into OCR text, tagged with UUIDs, chunked with contextual headers, indexed into FAISS, and mirrored in PostgreSQL relational schemas for audit persistence.',
    deploymentAndInfra:
      'Dockerized microservices deployed on internal enterprise servers to adhere to data sovereignty constraints. All data remains inside encrypted VPC boundaries.',
    testingAndGuardrails:
      'Benchmarked against a golden dataset of 120 verified enterprise compliance violations. Every flagged issue requires an exact clause quotation verified by citation hash checking.',
    monitoringAndProfiling:
      'Audit log tracking recording every LLM prompt, response, latency, and auditor override in PostgreSQL for compliance traceability.',
    results: [
      { metric: '60%', label: 'Manual Audit Effort Saved', detail: 'Legal teams review synthesized summaries instead of full 500-page manuals.' },
      { metric: '20%', label: 'Retrieval Precision Gain', detail: 'Achieved through dense-sparse hybrid vector indexing.' },
      { metric: '99.4%', label: 'Citation Verifiability', detail: 'Every flagged risk includes clickable links to verified source clauses.' },
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    carouselImages: [
      {
        src: '/assets/images/projects/iparrs-arch.svg',
        alt: 'IPARRS Pipeline',
        caption: 'Agentic RAG pipeline detailing hierarchical chunking, hybrid retrieval, and risk scoring.',
      },
      {
        src: '/assets/images/projects/iparrs-audit-view.svg',
        alt: 'Auditor Interface',
        caption: 'Auditor console showing flagged risk clauses, severity heatmaps, and evidence provenance.',
      },
    ],
    tags: ['Agentic RAG', 'LangChain', 'FAISS', 'PostgreSQL', 'FastAPI', 'React.js'],
  },
  'hybrid-gpu-inference-engine': {
    slug: 'hybrid-gpu-inference-engine',
    title: 'Hybrid Cloud / On-Prem GPU Serving Engine',
    subtitle: 'Zero-Cold-Start Multi-Model Serving on Ada RTX 6000 (48GB) with Cost-Adaptive Cloud Routing',
    featured: true,
    category: 'Inference Infrastructure & Quantization',
    oneLiner: 'Concurrent multi-model inference system cutting GPU latency by 35% with zero cold-start downtime.',
    problem:
      'Serving modern foundation models (LLaMA 3.1 8B/70B, Qwen, Mistral, SDXL, FLUX) concurrently in production quickly saturated the 48GB VRAM of workstation servers. Standard serving solutions suffered from 15-30 second model swapping delays and skyrocketing cloud GPU rental expenses.',
    solution:
      'Engineered a custom FastAPI inference orchestration engine utilizing AWQ/GPTQ 4-bit weight quantization, dynamic CPU memory offloading, and multi-threaded GPU scheduling. Built an automated cloud-failover router that dynamically offloads overflow requests to AWS EC2 GPU instances.',
    architectureOverview:
      'The engine operates with a unified model registry and worker pool. High-priority interactive LLM requests are scheduled on dedicated CUDA streams, while background diffusion tasks utilize available VRAM during token generation idle phases.',
    architectureComponents: [
      {
        title: 'Multi-Threaded GPU Scheduler',
        description:
          'Custom CUDA stream manager that batches incoming prompts, handles concurrent inference streams, and executes non-blocking CPU-to-GPU weight streaming.',
        technologies: ['PyTorch', 'CUDA', 'Python Asyncio', 'FastAPI'],
      },
      {
        title: 'Model Quantization Pipeline',
        description:
          'Automated conversion scripts applying AWQ and GPTQ 4-bit quantization with activation-aware calibration sets.',
        technologies: ['AutoAWQ', 'GPTQ', 'Hugging Face Transformers'],
      },
      {
        title: 'Cost-Adaptive Cloud Router',
        description:
          'Monitors local GPU queue depth and latency SLAs. Automatically provisions and routes requests to AWS EC2 GPU spot instances during sudden traffic bursts.',
        technologies: ['AWS SDK (Boto3)', 'Redis', 'Docker', 'VPC Peering'],
      },
      {
        title: 'Telemetry & Profiling Agent',
        description:
          'Collects microsecond-level IOPS, PCIe bus bandwidth, GPU utilization, and VRAM memory fragmentation metrics.',
        technologies: ['NVIDIA NVML', 'Prometheus', 'Grafana'],
      },
    ],
    technicalDecisions: [
      {
        decision: 'AWQ (Activation-aware Weight Quantization) over Standard INT8/FP8',
        rationale:
          'AWQ protects salient weights identified through activation distributions, retaining 99.5%+ of model reasoning capabilities while shrinking the memory footprint by 65%.',
        alternativeConsidered: 'Standard 8-bit quantization',
        tradeoffOutcome:
          'Achieved 35% faster token generation throughput and freed up 28GB of VRAM on the Ada RTX 6000.',
      },
      {
        decision: 'Dynamic Pinned CPU Memory Offloading for Infrequently Used Layers',
        rationale:
          'Allowed keeping 5 diverse foundation models initialized in host RAM, transferring layers into GPU VRAM in under 120ms without incurring full cold starts.',
        alternativeConsidered: 'On-demand disk weight reloading (15-30s latency)',
        tradeoffOutcome:
          'Completely eliminated cold-start downtime for all 5 served foundation models.',
      },
    ],
    modelSelection: {
      models: [
        'LLaMA 3.1 8B (AWQ 4-bit)',
        'Qwen 2.5 7B & Mistral 7B (GPTQ 4-bit)',
        'SDXL & FLUX.1 (FP16 with dynamic CPU offload)',
      ],
      justification:
        'Diverse model zoo satisfying varied enterprise needs: high-speed conversation, code generation, and generative imaging.',
      quantizationOrOptimization:
        'AWQ 4-bit, FlashAttention-2, custom CUDA kernels for fused attention operations.',
    },
    dataPipeline:
      'Zero-copy tensor streaming: User input prompts and images are ingested via asynchronous streaming endpoints, validated via Pydantic, and dispatched directly into shared memory buffers.',
    deploymentAndInfra:
      'Docker multi-node architecture orchestrated across on-prem RTX 6000 hardware linked to AWS VPC peering. Encrypted internal communication ensures full data privacy.',
    testingAndGuardrails:
      'Automated stress-testing suite using Locust simulating 200 concurrent streams with strict latency SLA thresholds (<50ms time-to-first-token).',
    monitoringAndProfiling:
      'Real-time NVML metrics dashboard tracking GPU core clock, memory bus utilization, temperature, and power consumption.',
    results: [
      { metric: '35%', label: 'Latency Cut in Production', detail: 'Significant reduction in inference time across all served models.' },
      { metric: '0ms', label: 'Cold-Start Downtime', detail: 'Zero model reloading latency achieved via memory-pinned offloading.' },
      { metric: '5 Models', label: 'Concurrent Serving', detail: 'LLaMA 3.1, Qwen, Mistral, SDXL, and FLUX served simultaneously on one 48GB node.' },
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    carouselImages: [
      {
        src: '/assets/images/projects/gpu-engine-topology.svg',
        alt: 'Infrastructure Topology',
        caption: 'Detailed topology map of on-prem Ada RTX 6000 servers paired with AWS burst nodes.',
      },
      {
        src: '/assets/images/projects/gpu-engine-vram.svg',
        alt: 'Memory Profiling',
        caption: 'VRAM utilization breakdown showcasing 4-bit quantization savings across concurrent models.',
      },
    ],
    tags: ['GPU Inference', 'FastAPI', 'Quantization', 'AWQ', 'Docker', 'AWS', 'Ada RTX 6000'],
  },
  'sih-multilingual-video-dubbing': {
    slug: 'sih-multilingual-video-dubbing',
    title: 'AI Multilingual Video Dubbing Platform (SIH 2023 Winner)',
    subtitle: 'National-Level Hackathon Winning Automated Video Localization Pipeline',
    featured: true,
    category: 'Computer Vision & Multimodal Audio',
    oneLiner: 'End-to-end AI pipeline localizing educational video content into regional Indian languages with audio-lip synchronization.',
    problem:
      'Over 70% of high-quality STEM and technical education videos are produced solely in English, creating a massive access barrier for millions of students across diverse linguistic backgrounds in India. Manual dubbing requires voice actors, translation specialists, and sound engineers, taking days per hour of video.',
    solution:
      'Designed and engineered an automated AI video dubbing pipeline combining automated speech recognition (Whisper), neural machine translation tuned for regional idioms, text-to-speech voice generation, and audio duration matching with lip-sync compensation.',
    architectureOverview:
      'A multi-stage streaming pipeline: the source video audio is stripped and demuxed, transcribed with word-level timestamps, translated into target Indian languages (Hindi, Telugu, Tamil, etc.), synthesized into expressive regional audio, and time-stretched to fit original speaker intervals.',
    architectureComponents: [
      {
        title: 'Speech Demuxing & Transcription',
        description:
          'Extracts clean audio, performs noise reduction, and generates word-level timestamped transcripts using Whisper.',
        technologies: ['Whisper', 'FFmpeg', 'Python'],
      },
      {
        title: 'Neural Regional Translation Engine',
        description:
          'Specialized machine translation tuned on technical and colloquial educational terminology across Indian vernacular languages.',
        technologies: ['Transformers', 'Hugging Face', 'NLP'],
      },
      {
        title: 'TTS Voice Synthesis & Prosody Matching',
        description:
          'Generates natural-sounding speech adhering to the original voice gender, pitch, and emotional cadence.',
        technologies: ['VITS', 'Coqui TTS', 'PyTorch'],
      },
      {
        title: 'Time-Alignment & Video Remuxing',
        description:
          'Calculates temporal drift and applies dynamic time-warping so dubbed speech matches original video pacing without visual disruption.',
        technologies: ['FFmpeg', 'SciPy', 'Python'],
      },
    ],
    technicalDecisions: [
      {
        decision: 'Word-Level Timestamp Alignment over Sentence-Level Dubbing',
        rationale:
          'Sentence-level translation caused severe audio-video desynchronization when target language sentences had significantly different word orders.',
        alternativeConsidered: 'Uniform sentence pacing',
        tradeoffOutcome:
          'Drastically improved sync quality and educational slide alignment for visual learners.',
      },
      {
        decision: 'Dynamic Time-Warping for Syllable Duration Adjustment',
        rationale:
          'Indian regional languages typically contain 20-30% more syllables than equivalent English sentences. Speech speed was dynamically adapted within human tolerance limits.',
        alternativeConsidered: 'Cutting video clips to fit audio',
        tradeoffOutcome:
          'Preserved 100% of original instructional video frames and animations intact.',
      },
    ],
    modelSelection: {
      models: [
        'OpenAI Whisper Large-v3 for robust multilingual speech recognition',
        'IndicTrans2 for state-of-the-art Indian language neural translation',
        'VITS / Bark for neural vocoding and speech synthesis',
      ],
      justification:
        'Selected for state-of-the-art benchmark accuracy on Indian regional phonemes and accents.',
      quantizationOrOptimization:
        'CTranslate2 optimization for 4x faster Whisper transcription on GPU workers.',
    },
    dataPipeline:
      'Streaming audio buffer pipeline with asynchronous workers processing 5-minute video chunks in parallel, reducing localization latency from hours to minutes.',
    deploymentAndInfra:
      'FastAPI processing cluster with worker queues processing video chunks concurrently and streaming final MP4 outputs to web clients.',
    testingAndGuardrails:
      'Evaluated on technical university lectures across 6 Indian languages; verified word error rate (WER) and BLEU translation scores.',
    monitoringAndProfiling:
      'Real-time job queue monitoring tracking processing ratio (video duration vs processing time).',
    results: [
      { metric: '1st Place', label: 'Smart India Hackathon 2023', detail: 'Outperformed teams nationwide in educational AI localization.' },
      { metric: '6+ Languages', label: 'Regional Indian Dialects', detail: 'Hindi, Telugu, Tamil, Kannada, Bengali, and Marathi support.' },
      { metric: '15 mins', label: 'Average Dubbing Turnaround', detail: 'Full 1-hour lecture localized in under 15 minutes.' },
    ],
    githubUrl: 'https://github.com/Jayanth-Manikanta-Karri',
    demoUrl: 'https://linkedin.com/in/jayanthmani',
    carouselImages: [
      {
        src: '/assets/images/projects/sih-pipeline.svg',
        alt: 'SIH Multilingual AI Dubbing Workflow',
        caption: 'Speech extraction, transcription, translation, TTS synthesis, and audio-video remuxing workflow.',
      },
    ],
    tags: ['Multimodal AI', 'Whisper', 'TTS', 'PyTorch', 'FFmpeg', 'SIH Winner'],
  },
};
