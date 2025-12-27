---
title: Robot Structure with URDF
sidebar_label: Robot Structure with URDF
description: Understanding URDF for humanoid robots and simulation readiness
---

# Robot Structure with URDF

## Understanding URDF (Unified Robot Description Format)

URDF (Unified Robot Description Format) is an XML-based format used in ROS to describe robot models. It defines the physical and visual properties of a robot, including its links, joints, and other components.

### Key URDF Concepts

- **Links**: Rigid bodies with visual and collision properties
- **Joints**: Connections between links that allow relative motion
- **Materials**: Visual appearance properties for links
- **Transmissions**: Mapping between joints and actuators

## URDF for Humanoid Robots

Humanoid robots require special considerations in their URDF descriptions due to their complex structure and multiple degrees of freedom. A typical humanoid robot URDF includes:

- **Torso**: The main body of the robot
- **Head**: With sensors like cameras and IMUs
- **Arms**: With multiple joints for manipulation
- **Legs**: For locomotion and balance
- **End effectors**: Hands or other tools

### Basic Humanoid URDF Structure

```xml
<?xml version="1.0"?>
<robot name="simple_humanoid">
  <!-- Torso -->
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.2 0.1 0.5"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 0.8 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <box size="0.2 0.1 0.5"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="5"/>
      <inertia ixx="1" ixy="0" ixz="0" iyy="1" iyz="0" izz="1"/>
    </inertial>
  </link>

  <!-- Head -->
  <link name="head">
    <visual>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
      <material name="white">
        <color rgba="1 1 1 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <sphere radius="0.1"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="1"/>
      <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/>
    </inertial>
  </link>

  <joint name="head_joint" type="fixed">
    <parent link="base_link"/>
    <child link="head"/>
    <origin xyz="0 0 0.3"/>
  </joint>

  <!-- Left Arm -->
  <link name="left_upper_arm">
    <visual>
      <geometry>
        <cylinder length="0.3" radius="0.05"/>
      </geometry>
      <material name="red">
        <color rgba="0.8 0 0 1"/>
      </material>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.3" radius="0.05"/>
      </geometry>
    </collision>
    <inertial>
      <mass value="0.5"/>
      <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/>
    </inertial>
  </link>

  <joint name="left_shoulder_joint" type="revolute">
    <parent link="base_link"/>
    <child link="left_upper_arm"/>
    <origin xyz="0.1 0.1 0.1" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
    <limit lower="-1.57" upper="1.57" effort="100" velocity="1"/>
  </joint>
</robot>
```

## Creating Basic URDF Files

When creating URDF files for humanoid robots, follow these best practices:

1. **Start Simple**: Begin with a basic skeleton and add complexity gradually
2. **Use Proper Inertials**: Accurate inertial properties are crucial for simulation
3. **Define Materials**: Use materials to make the robot visually appealing
4. **Check Joint Limits**: Ensure joint limits are realistic for your robot

## Simulation Readiness Requirements

For a URDF to be ready for simulation, it must meet several requirements:

- **Complete Kinematic Chain**: All parts of the robot must be connected
- **Valid Inertial Properties**: Every link must have properly defined mass and inertia
- **Collision Models**: Collision properties must be defined for physics simulation
- **Joint Types**: Use appropriate joint types (revolute, prismatic, fixed, etc.)
- **Gazebo Integration**: Include Gazebo-specific tags if using Gazebo simulator

### Gazebo-Specific URDF Extensions

```xml
<gazebo reference="left_upper_arm">
  <material>Gazebo/Red</material>
</gazebo>

<gazebo>
  <plugin name="robot_state_publisher" filename="libgazebo_ros_robot_state_publisher.so">
    <robotNamespace>/simple_humanoid</robotNamespace>
  </plugin>
</gazebo>
```

## Learning Objectives

By the end of this chapter, you will be able to:
- Understand the structure and components of URDF files
- Create URDF descriptions for humanoid robots
- Define proper link and joint relationships
- Prepare URDF files for simulation environments
- Validate URDF files for correctness

## Hands-on Exercises

1. Create a simple URDF for a basic humanoid robot with torso, head, and arms
2. Load your URDF in RViz to visualize the robot structure
3. Add proper inertial properties to your robot's links
4. Create a URDF that includes Gazebo-specific tags for simulation
5. Validate your URDF using ROS tools like check_urdf

## Summary

URDF is the standard way to describe robots in ROS and is essential for humanoid robotics. Understanding how to create proper URDF files is crucial for both simulation and real-world robot operation.

## Technical Accuracy Note

All URDF examples and concepts in this chapter are based on official ROS and URDF documentation from the ROS project.