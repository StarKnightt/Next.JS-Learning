# Contributing to Next.js Learning

Thanks for your interest in contributing. Whether it's a typo fix, new chapter, better explanation, or UI improvement - every contribution matters.

## Getting Started

1. Fork the repository
2. Clone your fork locally

```bash
git clone https://github.com/YOUR_USERNAME/Next.JS-Learning.git
cd Next.JS-Learning
npm install
npm run dev
```

3. Create a new branch for your changes

```bash
git checkout -b feature/your-change
```

## What You Can Contribute

### Content
- Fix typos, grammar, or unclear explanations
- Add new chapters or expand existing ones
- Add curated YouTube videos (must be high quality and relevant)
- Improve code examples

### Code
- Fix bugs or improve performance
- Improve accessibility
- Enhance responsive design
- Add new features (please open an issue first to discuss)

### Design
- Improve the UI/UX
- Fix styling inconsistencies
- Better mobile experience

## Adding a New Chapter

1. Create a new file in `src/lib/chapters/your-topic.ts`:

```typescript
import { ContentBlock } from "../content";

export const content: ContentBlock[] = [
  { type: "heading", content: "Your Section Title", level: 2 },
  { type: "text", content: "Your explanation here..." },
  { type: "code", code: "// your code", language: "typescript", filename: "example.ts" },
];
```

2. Add the chapter metadata to `src/lib/chapters.ts`
3. Import and register in `src/lib/content.ts`
4. The route is automatically created at `/chapters/your-slug`

## Content Block Types

| Type | Required Fields | Optional Fields |
|------|----------------|-----------------|
| `heading` | `content`, `level` (2 or 3) | - |
| `text` | `content` | - |
| `code` | `code` | `language`, `filename`, `highlight` |
| `callout` | `content`, `calloutType` | `title` |
| `comparison` | `items` | - |
| `video` | `title`, `videos` | - |

## Content Guidelines

- Write in a conversational, teaching tone (first person)
- Explain the "why" before the "how"
- Include practical code examples that actually work
- Use callouts for tips, warnings, and important notes
- Keep paragraphs short and scannable
- No em-dashes

## Pull Request Process

1. Make sure your code builds without errors (`npm run build`)
2. Keep PRs focused - one feature or fix per PR
3. Write a clear PR title and description
4. Reference any related issues

## Code Style

- TypeScript strict mode
- Tailwind CSS for all styling (no custom CSS unless necessary)
- Functional components with hooks
- Use `"use client"` only when needed (prefer Server Components)

## Questions?

Open an issue or start a discussion. No question is too small.
