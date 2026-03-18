# IoT Motor Data Simulator

This project simulates IoT data from 100 motors and processes it using a Kafka pipeline.

## Prerequisites

- Docker
- Docker Compose
- Node.js
- npm

## Setup and Running

1.  **Start Kafka and Zookeeper:**
    ```bash
    docker compose down
    docker compose pull
    docker compose up -d
    ```

2.  **Verify containers are running:**
    ```bash
    docker ps
    ```

3.  **Create the Kafka topic:**
    ```bash
    docker exec -it kafka bash
    kafka-topics --create --topic iot-data --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1
    kafka-topics --list --bootstrap-server localhost:9092
    exit
    ```

4.  **Install dependencies:**
    ```bash
    npm install kafkajs
    ```

5.  **Run the producer and consumer:**
    In one terminal, run the producer:
    ```bash
    node producer.js
    ```
    In another terminal, run the consumer:
    ```bash
    node consumer.js
    ```

    I'll help you understand the core project, its focus, and the technology solutions it implements. Let me explore the repository code.Let me get more detailed information from the key files:## Project Analysis: MEGAHACK-techsevak

Based on the code analysis, here's what this project focuses on:

### **Core Project Purpose**
**IoT Motor Data Simulator and Intelligent Monitoring System** - A real-time platform for monitoring and optimizing industrial motor operations using Kafka streaming, machine learning, and Firebase for data storage and analytics.

---

## **Key Technologies & Architecture**

```
┌─────────────────────────────────────────────────────────┐
│                  MEGAHACK-techsevak                      │
│           IoT Motor Monitoring & Optimization             │
└─────────────────────────────────────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
    ┌───▼────┐         ┌──▼────┐         ┌──▼─────┐
    │Producer │        │ Kafka  │        │Consumer │
    │(Data Gen)        │ Pipeline         (Analytics)
    └────────┘         └────────┘         └────────┘
        │                                      │
        └──────────────┬───────────────────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
    ┌───▼──────┐   ┌──▼──────┐   ┌──▼────────┐
    │ Firebase │   │ Realtime │   │ WebSocket │
    │ Firestore│   │   DB     │   │  Server   │
    └──────────┘   └──────────┘   └──────────┘
```

---

## **Core Components**

### **1. PRODUCER (producer.js)** - Data Generation
```javascript
- Generates IoT sensor data from multiple device types:
  • 100 Motors
  • 50 Pumps
  • 50 Generators
  • 20 Compressors
  
- Simulates realistic metrics:
  • Temperature: 40-95°C
  • Pressure: 900-1100 hPa
  • Current: 5-25A (biased distribution)
  
- Sends data every 2 seconds via Kafka
- Stores data in Firebase Realtime Database
```

### **2. CONSUMER (consumer.js)** - Advanced Analytics & ML
The consumer implements intelligent scheduling using:

**A. Real-time Data Processing:**
- Consumes Kafka streams
- Calculates 10-second rolling window averages
- Broadcasts data via WebSocket to frontend

**B. Machine Learning (K-Means Clustering):**
```javascript
✓ Feature Normalization
  - Normalizes current, temperature, pressure
  
✓ Optimal Cluster Detection
  - Uses Elbow method (WCSS analysis)
  - Finds best number of clusters (1-3)
  
✓ Silhouette Score Analysis
  - Measures clustering quality
  - Falls back to rule-based if quality < 0.1
  
✓ Centroid Ranking
  - Sorts devices by operational load
  - Maps to operational schedules
```

**C. Anomaly Detection:**
```javascript
- Z-Score based detection
- Identifies devices with abnormal:
  • Current > 2.5σ
  • Temperature > 2.5σ  
  • Pressure > 2.5σ
- Severity classification (MEDIUM/HIGH)
- Stores alerts in Firestore
```

**D. Smart Scheduling Engine:**
```javascript
Outputs schedule assignments:
├── Light Load (Morning slot) - current 5-10A
├── Medium Load (Night slot) - current 10-15A
├── Heavy Load (Evening slot) - current 15-25A
├── Monitoring Required (Reduced Load) - risky conditions
└── Excluded (Maintenance needed) - critical issues
```

### **3. FRONTEND** 
React + TypeScript + Vite stack with:
- Real-time data visualization (Recharts)
- WebSocket connection for live updates
- Firebase integration
- Tailwind CSS styling

---

## **Technology Stack**

```json
Backend:
├── kafkajs (v2.2.4) - Message streaming
├── firebase-admin (v10.3.0) - Backend services
├── ml-kmeans (v6.0.0) - Machine learning clustering
└── ws (v8.18.0) - WebSocket server

Frontend:
├── React (v19.1.1)
├── TypeScript (v5.8)
├── Vite (v7.1.7)
├── Recharts (v3.2.1) - Charts
├── Tailwind CSS (v4.1.13)
└── React Router (v7.9.3)
```

---

## **Problem It Solves**

1. **Industrial Equipment Monitoring** - Real-time tracking of motor health metrics
2. **Predictive Maintenance** - Detects anomalies before failures
3. **Load Balancing Optimization** - Intelligent scheduling based on operational loads
4. **Data-Driven Insights** - ML clustering reveals device behavior patterns
5. **Alerting System** - Immediate notification for high-severity anomalies
6. **Historical Analytics** - Stores and analyzes operational trends in Firestore

This is a **comprehensive IoT monitoring solution** suitable for manufacturing, energy, or industrial sectors requiring smart equipment management!
