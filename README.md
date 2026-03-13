# DistrictOps AI — Shadow Mode Platform

A specialized operations platform for Local Government Special Districts (Water, Fire, Parks). Built around Commissioner Doug Liles's **90-Day Framework** for de-risking AI adoption in government operations.

![License](https://img.shields.io/badge/license-MIT-blue)
![Tailwind](https://img.shields.io/badge/tailwindcss-v4.2-38bdf8)

## What It Does

DistrictOps AI runs in **Shadow Mode** — processing service requests alongside human dispatchers without giving AI direct control. The platform generates empirical ROI data to prove AI value before full-scale deployment.

### Features

| Feature | Description |
|---------|-------------|
| **Dashboard** | KPI cards, cost comparison charts, triage feedback distribution, live activity feed |
| **Shadow Triage Engine** | Three-panel split-screen: raw input → manual triage → locked AI analysis with feedback voting |
| **ROI Calculator** | Dynamic cost modeling with 7 configurable inputs and real-time chart updates |
| **90-Day Framework Tracker** | Plan → Pilot → Prove phase management with checklists and progress tracking |
| **RFP Generator** | Select requirements, generate tailored vendor evaluation questions, one-click copy |

## Quick Start

```bash
# Install dependencies
npm install

# Build production CSS
npm run build

# Open in browser
open src/index.html

# Or start a dev server with watch mode
npm run dev
```

## Project Structure

```
districtops-ai/
├── src/
│   ├── index.html       # Main application (single-file, production-ready)
│   └── input.css        # Tailwind CSS source with custom theme
├── dist/
│   └── output.css       # Compiled & minified Tailwind CSS (21KB)
├── package.json
└── README.md
```

## Tech Stack

- **Tailwind CSS v4.2** — compiled via `@tailwindcss/cli` (no CDN in production)
- **Chart.js v4.4** — cost comparison bar charts, feedback doughnut, ROI breakdown
- **DM Sans + JetBrains Mono** — Google Fonts for institutional clarity
- **Zero build framework** — vanilla JS, no React/Vue/Svelte dependency

## Architecture Context

This front-end is designed as the client layer for a larger stack:

- **Backend (AI):** Python 3.11 + FastAPI + LangChain/OpenAI
- **Database:** PostgreSQL (Supabase / AWS RDS)
- **Compliance:** SOC2-ready (AES-256, TLS 1.3), CJIS-aware data isolation
- **LLM Options:** Azure OpenAI GPT-4o or Anthropic Claude (Gov-compliant hosting)

See the full PRD for system architecture details.

## License

MIT — Good Samaritan Institute
