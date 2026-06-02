<div align="center">

# 🚀 DevPulse

### Distributed Observability & Root Cause Analysis Platform

Track failures. Reconstruct traces. Find root causes.

![Node.js](https://img.shields.io/badge/Node.js-20-green)
![React](https://img.shields.io/badge/React-19-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![Prometheus](https://img.shields.io/badge/Prometheus-Metrics-orange)

</div>

---

## 🎯 What is DevPulse?

DevPulse is a distributed observability platform built to simulate and analyze cascading failures across microservices.

Instead of investigating hundreds of disconnected logs, DevPulse reconstructs the entire failure journey and identifies the original root cause.

---

## ⚡ Failure Flow

```mermaid
graph LR
A[Sensor Failure] --> B[Edge Timeout]
B --> C[Retry Failed]
C --> D[Dashboard Disconnect]
```

---

## 🏗️ System Architecture

```mermaid
flowchart TD

Sensor[Sensor Service]
Edge[Edge Service]
Cloud[Cloud Service]
Dashboard[Dashboard Service]

Middleware[Middleware Service]

Mongo[(MongoDB Atlas)]

ReactUI[React Dashboard]

Sensor --> Edge
Edge --> Cloud
Cloud --> Dashboard

Dashboard --> Middleware
Cloud --> Middleware
Edge --> Middleware
Sensor --> Middleware

Middleware --> Mongo

ReactUI --> Middleware
```

---

## ✨ Features

✅ Distributed Event Simulation

✅ Trace Propagation

✅ Root Cause Analysis

✅ Failure Chain Reconstruction

✅ Dockerized Architecture

✅ React Investigation Dashboard

✅ Prometheus Metrics

---

## 🛠️ Tech Stack

| Layer | Technology |
|---------|---------|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| Containerization | Docker + Docker Compose |
| Monitoring | Prometheus |
| Architecture | Distributed Systems |

---

## 📸 Dashboard

<img width="1370" height="348" alt="WhatsApp Image 2026-05-22 at 15 18 46" src="https://github.com/user-attachments/assets/b30e395c-12f0-40a5-a792-94e9209d31f8" />
<img width="1550" height="1412" alt="12345 " src="https://github.com/user-attachments/assets/63e6dac9-ca4f-4745-813a-34d00823474a" />


```text
---

## 🚀 Quick Start

```bash
git clone https://github.com/YOUR_USERNAME/DevPulse.git

cd DevPulse

docker compose up --build
```

---

## 📡 APIs

```http
POST /api/logs

GET /api/events

GET /api/traces/:traceId

GET /api/root-cause/:traceId

GET /metrics
```

---

## 🔭 Roadmap

- [x] Distributed Event Simulation
- [x] Root Cause Engine
- [x] React Dashboard
- [x] Dockerization
- [x] Prometheus Metrics
- [ ] Grafana Dashboards
- [ ] OpenTelemetry
- [ ] AWS Deployment
- [ ] Real-Time Alerting

---

<div align="center">

Built to explore Distributed Systems, Observability, and DevOps concepts 🚀

</div>
