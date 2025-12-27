---
id: 1
title: Create-project-constitution
stage: constitution
date: 2025-12-27
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: user
command: /sp.constitution
labels: [constitution,spec-driven,rag-chatbot,setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
---

## Prompt

```
/sp.constitution Project: AI/Spec-Driven Book with Embedded RAG Chatbot

Core principles:
Spec-first workflow using Spec-Kit Plus

Technical accuracy from official sources

Clear, developer-focused writing

Reproducible setup and deployment

Key standards:
Book written with Docusaurus and deployed on GitHub Pages

RAG chatbot grounded only in book content or user-selected text

Stack: OpenAI Agents/ChatKit, FastAPI, Neon Postgres, Qdrant Cloud

Runnable, well-documented code

Constraints:
GitHub-based source control

No hallucinated responses

End-to-end reproducibility

Success criteria:
Live book on GitHub Pages

Fully functional embedded RAG chatbot

All specs implemented via Spec-Kit Plus
```

## Response snapshot

Created a project constitution for the AI/Spec-Driven Book with Embedded RAG Chatbot project based on the provided specifications. The constitution includes:

- Core principles: Spec-first workflow, technical accuracy, clear documentation, and reproducible setup
- Technology stack requirements specifying Docusaurus, GitHub Pages, OpenAI Agents/ChatKit, FastAPI, Neon Postgres, and Qdrant Cloud
- Development workflow guidelines
- Governance section

The constitution enforces the specified technology stack and ensures the RAG chatbot is grounded only in book content to prevent hallucinations.

## Outcome

- ✅ Impact: Project constitution established with core principles and governance
- 🧪 Tests: N/A
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Continue with spec creation for the book and RAG chatbot
- 🧠 Reflection: Constitution provides clear guidance for the project's development approach

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin creating feature specifications based on the constitution