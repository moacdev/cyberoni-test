# NestJS Backend for Cyberoni Test Project

Welcome to the backend service for the Cyberoni Test Project. This service is built using [NestJS](https://nestjs.com/), a progressive Node.js framework for building efficient and scalable server-side applications. The backend handles API requests for user and post management, interacts with a PostgreSQL database using Prisma ORM, and is containerized using Docker for easy deployment and scalability.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [API Documentation](#api-documentation)
- [Database](#database)
- [Docker Setup](#docker-setup)
- [Deployment](#deployment)

## Project Overview

This backend service provides a RESTful API for managing users and posts. It is part of a full-stack application, where the backend handles all the business logic, database interactions, and serves data to the frontend.

The backend is designed with scalability and maintainability in mind, leveraging the power of NestJS and Prisma ORM for a clean, modular architecture.

## Features

- **User Management:** Create, read, update, and delete user information.
- **Post Management:** Create, read, update, and delete posts associated with users.
- **API Documentation:** Integrated with Swagger for interactive API documentation.
- **Dockerized:** Fully containerized with Docker for easy deployment.
- **Database:** Uses PostgreSQL as the database, managed through Prisma ORM.

## Technologies Used

- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **Prisma ORM**: An open-source database toolkit for TypeScript and Node.js that simplifies database access.
- **PostgreSQL**: An advanced, open-source relational database.
- **Docker**: Containerization platform that simplifies deployment and scaling.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **Docker** and **Docker Compose**
- **PostgreSQL** (if running locally without Docker)

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/yourusername/cyberoni-test-backend.git
   cd cyberoni-test-backend
   \`\`\`

2. Install the dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Set up the environment variables:

   Create a `.env` file in the root of your project and configure your database connection and other environment variables:

   \`\`\`env
   DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase?schema=public"
   \`\`\`

### Running the Application

#### With Docker

1. Build and run the Docker containers:

   \`\`\`bash
   docker-compose up --build
   \`\`\`

2. The API will be available at `http://localhost:3000`.

#### Without Docker

1. Ensure PostgreSQL is running and accessible.

2. Run the NestJS application:

   \`\`\`bash
   npm run start:dev
   \`\`\`

3. The API will be available at `http://localhost:3000`.

### API Documentation

The API is documented using Swagger. After running the application, you can access the interactive API documentation at:

\`\`\`
http://localhost:3000/api-docs
\`\`\`

## Database

The application uses PostgreSQL as its database, with Prisma ORM to manage database interactions. The schema is defined in `prisma/schema.prisma`.

### Applying Database Migrations

After setting up the environment and the database, you can apply the Prisma migrations to create the necessary tables:

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

## Docker Setup

This project is fully containerized using Docker. The `docker-compose.yml` file defines the services required to run the application, including the NestJS server and PostgreSQL database.

### Building and Running Containers

To build and run the containers, use:

\`\`\`bash
docker-compose up --build
\`\`\`

This will start both the API server and the PostgreSQL database.

## Deployment

For production deployment, ensure that you:

1. Set the environment to `production` in your environment variables.
2. Use a production-ready database.
3. Consider using Docker or a cloud service like AWS, Heroku, or DigitalOcean to deploy the containers.
