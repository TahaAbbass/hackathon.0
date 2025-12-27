# Quickstart: Digital Twin (Gazebo & Unity)

## Setup Instructions

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager
- Git

### Installation Steps

1. **Navigate to the Docusaurus project:**
   ```bash
   cd book_frontend
   ```

2. **Create the Digital Twin module directory:**
   ```bash
   mkdir docs/digital-twin-gazebo-unity
   ```

3. **Add the three chapters to the new directory:**
   - `physics-simulation-gazebo.md`
   - `digital-twins-hri-unity.md`
   - `sensor-simulation-validation.md`

4. **Update the sidebar configuration** in `sidebars.js` to include the new module:
   ```javascript
   {
     type: 'category',
     label: 'Module 2: The Digital Twin (Gazebo & Unity)',
     items: [
       'digital-twin-gazebo-unity/physics-simulation-gazebo',
       'digital-twin-gazebo-unity/digital-twins-hri-unity',
       'digital-twin-gazebo-unity/sensor-simulation-validation',
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

1. Create your Markdown files in the `docs/digital-twin-gazebo-unity/` directory
2. Follow the Docusaurus Markdown syntax for headers, code blocks, and other formatting
3. Include relevant code examples and diagrams to support the educational content
4. Test your content by running the development server