# Quickstart: Vision-Language-Action (VLA)

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git
- Access to OpenAI Whisper and LLM APIs
- ROS 2 environment for examples

### Installation Steps

1. **Navigate to the Docusaurus project:**
   ```bash
   cd book_frontend
   ```

2. **Create the VLA module directory:**
   ```bash
   mkdir docs/vision-language-action-vla
   ```

3. **Add the three chapters to the new directory:**
   - `voice-to-action-openai-whisper.md`
   - `cognitive-planning-llms-ros2.md`
   - `capstone-autonomous-humanoid-tasks.md`

4. **Update the sidebar configuration** in `sidebars.js` to include the new module:
   ```javascript
   {
     type: 'category',
     label: 'Module 4: Vision-Language-Action (VLA)',
     items: [
       'vision-language-action-vla/voice-to-action-openai-whisper',
       'vision-language-action-vla/cognitive-planning-llms-ros2',
       'vision-language-action-vla/capstone-autonomous-humanoid-tasks',
     ],
   },
   ```

### Running the Development Server

```bash
npm run start
```

This will start the development server at `http://localhost:3000`.

### Building for Production

```bash
npm run build
```

The built site will be available in the `build/` directory and can be deployed to GitHub Pages.

### Adding Content

1. Create your Markdown files in the `docs/vision-language-action-vla/` directory
2. Follow the Docusaurus Markdown syntax for headers, code blocks, and other formatting
3. Include relevant code examples and diagrams to support the educational content
4. Test your content by running the development server