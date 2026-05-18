Overview

DevPulse is a backend monitoring and observability system designed to process application events, analyze distributed traces, and identify root causes of failures across services.
 
The project simulates how modern monitoring platforms help engineers detect failures, debug issues, and understand dependencies in distributed systems.

Features

Event & log ingestion APIs
Distributed trace analysis
Root cause detection
Service dependency tracking
Backend monitoring workflows
RESTful API architecture
Real-time event processing logic
Failure identification across services

System Architecture 

Application Services
        │
        ▼
 Event/Log Generator
        │
        ▼
 DevPulse API Server
        │
 ┌──────┴──────┐
 ▼             ▼
Event Store   Trace Analyzer
                  │
                  ▼
          Root Cause Engine
                  │
                  ▼
            API Responses

Tech Stack

Backend
Node.js
Express.js
JavaScript
APIs & Tools
REST APIs
Axios
Concepts Used
Distributed Tracing
Event Processing
Root Cause Analysis
Backend Monitoring
Observability
Service Dependency Mapping
