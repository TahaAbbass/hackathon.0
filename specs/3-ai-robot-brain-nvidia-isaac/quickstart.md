# Quickstart: AI-Robot Brain (NVIDIA Isaac™)

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git
- Access to NVIDIA Isaac tools (Isaac Sim, Isaac ROS)

### Installation Steps

1. **Navigate to the Docusaurus project:**
   ```bash
   cd book_frontend
   ```

2. **Create the AI-Robot Brain module directory:**
   ```bash
   mkdir docs/ai-robot-brain-nvidia-isaac
   ```

3. **Add the three chapters to the new directory:**
   - `nvidia-isaac-sim-photorealistic-simulation.md`
   - `isaac-ros-vslam-navigation.md`
   - `nav2-path-planning-humanoid-robots.md`

4. **Update the sidebar configuration** in `sidebars.js` to include the new module:
   ```javascript
   {
     type: 'category',
     label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
     items: [
       'ai-robot-brain-nvidia-isaac/nvidia-isaac-sim-photorealistic-simulation',
       'ai-robot-brain-nvidia-isaac/isaac-ros-vslam-navigation',
       'ai-robot-brain-nvidia-isaac/nav2-path-planning-humanoid-robots',
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

1. Create your Markdown files in the `docs/ai-robot-brain-nvidia-isaac/` directory
2. Follow the Docusaurus Markdown syntax for headers, code blocks, and other formatting
3. Include relevant code examples and diagrams to support the educational content
4. Test your content by running the development server