# Quickstart: ROS 2 Humanoid Nervous System

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Clone or initialize the Docusaurus project:**
   ```bash
   npx create-docusaurus@latest my-website classic
   cd my-website
   ```

2. **Install additional dependencies (if needed):**
   ```bash
   npm install
   ```

3. **Create the ROS 2 module directory:**
   ```bash
   mkdir docs/ros2-humanoid-nervous-system
   ```

4. **Add the three chapters to the new directory:**
   - `introduction-to-ros2.md`
   - `ros2-communication-model.md`
   - `robot-structure-with-urdf.md`

5. **Update the sidebar configuration** in `sidebars.js`:
   ```javascript
   module.exports = {
     tutorialSidebar: [
       'intro',
       {
         type: 'category',
         label: 'Module 1: The Robotic Nervous System (ROS 2)',
         items: [
           'ros2-humanoid-nervous-system/introduction-to-ros2',
           'ros2-humanoid-nervous-system/ros2-communication-model',
           'ros2-humanoid-nervous-system/robot-structure-with-urdf',
         ],
       },
     ],
   };
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

1. Create your Markdown files in the `docs/ros2-humanoid-nervous-system/` directory
2. Follow the Docusaurus Markdown syntax for headers, code blocks, and other formatting
3. Include relevant code examples and diagrams to support the educational content
4. Test your content by running the development server