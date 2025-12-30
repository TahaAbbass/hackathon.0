// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
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
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'digital-twin-gazebo-unity/physics-simulation-gazebo',
        'digital-twin-gazebo-unity/digital-twins-hri-unity',
        'digital-twin-gazebo-unity/sensor-simulation-validation',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™)',
      items: [
        'ai-robot-brain-nvidia-isaac/nvidia-isaac-sim-photorealistic-simulation',
        'ai-robot-brain-nvidia-isaac/isaac-ros-vslam-navigation',
        'ai-robot-brain-nvidia-isaac/nav2-path-planning-humanoid-robots',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'vision-language-action-vla/voice-to-action-openai-whisper',
        'vision-language-action-vla/cognitive-planning-llms-ros2',
        'vision-language-action-vla/capstone-autonomous-humanoid-tasks',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
