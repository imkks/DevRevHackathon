# CustomerEcho Insights Submission by Team CodeCrusaders

## Overview

This project, developed by Team CodeCrusaders, aims to derive insights from customer reviews using the IntelliTune Engine and present them through an Insights Engine. The project encompasses three main components: IntelliTune Engine, Backend, and Frontend Dashboard.

![1](https://github.com/imkks/DevRevHackathon/assets/31439850/73ae027d-53dd-4fe4-8a76-ae07f53c1f67)

## 1. IntelliTune Engine

The IntelliTune Engine is responsible for extracting insights from customer review data using Large Language Models (LLMs). By analyzing the textual data, it provides valuable insights into customer sentiments, preferences, and feedback.

## 2. Data Ingestion Engine - Backend

The Backend component consists of a service that handles data ingestion from various sources, integrates with a MongoDB database, processes the data using the IntelliTune Engine, and performs auto-tagging for integration with the DevRev Platform as a Snap-in.

### Technologies Used:
- Docker for containerization
- MongoDB for database management
- DevRev API for auto-tagging

## 3. Insights Engine

The Insights Engine - Frontend is built using React JS and provides a user-friendly interface for visualizing the insights derived from the IntelliTune Engine.

### Key Features:
- Utilizes React Hooks, Events, and Components for efficient state management and UI rendering
- Integrates with Chart.js for data visualization
- Utilizes AXIOS for handling HTTP requests
- Prioritizes UI/UX design for enhanced user experience

### Dashboard CustomerEcho Insights
![1](https://github.com/imkks/DevRevHackathon/assets/96498610/c7305f12-7c60-4e4c-b0e7-053b5c172b55)

### Click of Fetch

![4](https://github.com/imkks/DevRevHackathon/assets/96498610/8a06c06a-faa1-4e5b-b5cb-a647b44d49c7)

### Graphs on click of Fetch
![2](https://github.com/imkks/DevRevHackathon/assets/96498610/96e7b45f-290e-4f39-ae5b-32ce97dc5bc2)

### Drill down to each graph
![3](https://github.com/imkks/DevRevHackathon/assets/96498610/22b2eece-3428-44a8-b3c5-397f8d6ce694)

# How to reproduce the CustomerEcho Insights

## Backend

To reproduce the CustomerEcho Insights Backend, follow these steps:

```bash
git clone repo-url
cd backend
npm install
docker-compose up
```

**Prerequisites:** Node.js, Docker, Docker Compose should be installed on your system. API keys should be passed with you own keys.

## Frontend

To reproduce the CustomerEcho Insights Frontend, follow these steps:

```bash
npm install
npm run dev
```

**Prerequisites:** React, Node.js should be installed on your system.

### Sample .env file ( prerequisite )

- MONGO_USER=username
- MONGO_PASSWORD=password
- MONGO_PATH=clusterpath
- PORT=3000
- FIREWORKS_API_KEY=api_key
- org_name=openai_org_name
- OPENAI_API_KEY=openaiapikey


## Testing and Technology Selection

Throughout the development process, extensive testing was conducted to ensure the reliability and accuracy of the insights derived from the IntelliTune Engine. The technology stack, including the choice of Language Models and input data, was carefully selected based on the best outputs obtained from testing.

## About Team:-

![team](https://github.com/imkks/DevRevHackathon/assets/96498610/1a00e655-8cb0-4bc7-a456-892ffc164365)

---

This README provides an overview of the CustomerEcho Insights Submission project developed by Team CodeCrusaders. For more detailed information, refer to the project documentation and codebase.
