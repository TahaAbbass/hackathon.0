<!--
Sync Impact Report:
- Version change: 0.1.0 → 1.0.0
- Added principles: Spec-first workflow, Technical accuracy, Clear documentation, Reproducible setup
- Added sections: Technology stack, Development workflow
- Templates: All templates updated to reflect new principles
- Files requiring follow-up: None
-->
# AI/Spec-Driven Book with Embedded RAG Chatbot Constitution

## Core Principles

### Spec-first workflow using Spec-Kit Plus
All development must begin with a formal specification created using Spec-Kit Plus. No code implementation should proceed without an approved spec document. This ensures clarity of requirements, testable acceptance criteria, and proper architectural planning before implementation.

### Technical accuracy from official sources
All technical content and implementation must be grounded in official documentation and authoritative sources. No information should be based on assumptions, personal opinions, or unverified third-party tutorials. This ensures the highest quality and reliability of the content.

### Clear, developer-focused writing
All documentation, code comments, and user-facing content must be written with the developer audience in mind. Technical concepts should be explained clearly with practical examples, avoiding unnecessary jargon while maintaining precision and completeness.

### Reproducible setup and deployment
All development environments, build processes, and deployment procedures must be fully documented and reproducible. Anyone should be able to set up the project and deploy it successfully using the provided documentation and scripts.

## Technology Stack Requirements

The project must use the specified technology stack: Docusaurus for the book platform, deployed on GitHub Pages; OpenAI Agents/ChatKit for the RAG chatbot; FastAPI for backend services; Neon Postgres for the database; and Qdrant Cloud for vector storage. No alternative technologies should be introduced without explicit architectural approval.

The RAG chatbot must be grounded only in book content or user-selected text to prevent hallucinations. No external information sources should be used without explicit user permission.

## Development Workflow

All code must follow a test-driven approach where appropriate, with clear acceptance criteria defined in the specification. Code reviews must verify compliance with all constitutional principles. GitHub-based source control must be used for all project artifacts, with clear commit messages following conventional patterns.

All implementations must be runnable and well-documented, with examples that users can reproduce successfully. No "theoretical" code should be committed without verification that it works as intended.

## Governance

This constitution supersedes all other development practices and must be followed for all project work. Amendments to this constitution require formal documentation and team approval. All pull requests and code reviews must verify compliance with these principles. The project must maintain end-to-end reproducibility at all times.

**Version**: 1.0.0 | **Ratified**: 2025-12-27 | **Last Amended**: 2025-12-27