---
title: ROS 2 Communication Model
sidebar_label: ROS 2 Communication Model
description: Understanding nodes, topics, services, and rclpy-based agent ↔ controller flow in ROS 2
---

# ROS 2 Communication Model

## Nodes and Their Role

In ROS 2, a node is a process that performs computation. Nodes are the fundamental building blocks of a ROS 2 system. Each node is designed to perform a specific task and can communicate with other nodes through topics, services, or actions.

### Key Node Concepts

- **Node Lifecycle**: Nodes can be configured with lifecycle management for complex state transitions
- **Node Composition**: Multiple nodes can be combined into a single process for efficiency
- **Node Parameters**: Nodes can be configured using parameters that can be changed at runtime

## Topics and the Publish/Subscribe Pattern

Topics enable asynchronous communication between nodes using a publish/subscribe pattern. Publishers send messages to a topic, and subscribers receive messages from a topic without needing to know about each other.

### Topic Communication Features

- **Message Types**: All messages on a topic must be of the same type
- **Quality of Service (QoS)**: Configurable policies for reliability, durability, etc.
- **Message Flow**: Publishers and subscribers can come and go without affecting each other

## Services and Request/Response

Services provide synchronous request/response communication between nodes. A service client sends a request and waits for a response from a service server.

### Service Communication Features

- **Synchronous**: The client waits for a response before continuing
- **Request/Response Types**: Each service has a specific request and response message type
- **Reliability**: Services provide reliable request/response communication

## Basic rclpy-based Agent ↔ Controller Flow

rclpy is the Python client library for ROS 2. It provides the interface for creating ROS 2 nodes in Python and managing communication.

### Creating a Publisher Node with rclpy

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Creating a Subscriber Node with rclpy

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(
            String,
            'topic',
            self.listener_callback,
            10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)

def main(args=None):
    rclpy.init(args=args)
    minimal_subscriber = MinimalSubscriber()
    rclpy.spin(minimal_subscriber)
    minimal_subscriber.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Learning Objectives

By the end of this chapter, you will be able to:
- Explain the role of nodes in ROS 2 communication
- Implement publisher-subscriber communication patterns
- Create service-based request/response interactions
- Write basic ROS 2 nodes using rclpy
- Understand the agent ↔ controller flow in humanoid robotics contexts

## Hands-on Exercises

1. Create a publisher node that publishes sensor data from a simulated humanoid robot
2. Create a subscriber node that processes the sensor data and makes decisions
3. Implement a service that allows remote control of a robot action
4. Experiment with different Quality of Service settings and observe the effects

## Summary

The ROS 2 communication model provides flexible and robust ways for nodes to interact. Understanding nodes, topics, and services is crucial for building complex robotic systems, especially in humanoid robotics where multiple subsystems need to coordinate effectively.

## Technical Accuracy Note

All code examples and concepts in this chapter are based on official ROS 2 documentation and tutorials from the ROS 2 project.