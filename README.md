# StudPro

**StudPro** is an innovative platform designed for developers, students, and educators to enhance their coding experience. This project is currently a prototype and incorporates cutting-edge technologies such as Docker and Gemini Flash LLM.

## Features

- **Problem Authoring**: Upload or link coding questions, add test cases, and submit problems for verification by the Gemini Flash LLM. Once verified, your problem is published for all users to solve.
- **FlowChart Visualization**: Generate and download flowcharts from any code, useful for understanding algorithms and presenting them in assignments or projects.
- **Code Conversion**: Convert written code into different programming languages, run, and submit it within the platform.
- **Optimized Data Handling**: Tables with filtering and pagination for efficient navigation and data retrieval.
- **Program Execution in Docker**: All program executions are securely managed in Docker containers for consistency and scalability.

## Tech Stack

- **Frontend**: React & Next.js
- **Backend**: Express & NestJS
- **Database**: PostgreSQL
- **LLM**: Gemini Flash LLM
- **Containerization**: Docker

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- **Node.js** (latest version recommended)
- **Docker** (for containerization)
- **Git** (for cloning the repository)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/praveen18071999/studPro.git
   cd studPro
   docker-compose up --build

