# Cyberoni Test Project - NestJS Backend

Welcome to the Cyberoni Test Project. This project is a backend service built using [NestJS](https://nestjs.com/), a powerful Node.js framework. It provides RESTful APIs for managing users and posts and leverages [Prisma ORM](https://www.prisma.io/) for database interactions with PostgreSQL. The application is fully containerized using Docker, making it easy to set up and deploy.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
- [API Documentation](#api-documentation)
- [Development](#development)
  - [Directory Structure](#directory-structure)
  - [Running Tests](#running-tests)
- [Docker Setup](#docker-setup)
- [Deployment](#deployment)
- [Common Issues](#common-issues)

## Project Overview

This backend service handles the core business logic for managing users and posts. It is part of a full-stack application and serves data to the frontend through RESTful APIs.

The backend is designed to be scalable, maintainable, and easy to deploy, leveraging the power of NestJS and Prisma ORM.

## Features

- **User Management:** Create, read, update, and delete user information.
- **Post Management:** Create, read, update, and delete posts associated with users.
- **API Documentation:** Integrated with Swagger for easy API exploration.
- **Database:** Uses PostgreSQL with Prisma ORM for efficient database operations.
- **Dockerized:** Fully containerized for easy setup and deployment.

## Technologies Used

- **Node.js:** JavaScript runtime built on Chrome's V8 engine.
- **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Prisma ORM:** An open-source database toolkit that makes database access easy with an auto-generated query builder for TypeScript and Node.js.
- **PostgreSQL:** An advanced, open-source relational database.
- **Docker:** A platform for developing, shipping, and running applications in containers.

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js) or **pnpm** (v7 or higher) for package management
- **Docker** and **Docker Compose** for containerization
- **PostgreSQL** (if running the database locally without Docker)

### Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/cyberoni-test-backend.git
   cd cyberoni-test-backend
   ```

2. **Install dependencies:**

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using pnpm:

   ```bash
   pnpm install
   ```

3. **Set up the environment variables:**

   Create a `.env` file in the root directory and add your environment variables. Here’s an example:

   ```env
   DATABASE_URL="postgresql://foo:dATyWvnhJ4CqP2utVxbLBc@db:5432/cyberoni-test"
   PORT=8888
   ```

### Running the Application

#### With Docker

1. **Build and run the Docker containers:**

   ```bash
   docker-compose up --build
   ```

2. **Access the application:**

   - The API will be available at `http://localhost:8888`.
   - The Swagger API documentation will be available at `http://localhost:8888/api-docs`.

#### Without Docker

1. **Ensure PostgreSQL is running and accessible.**

2. **Run database migrations and start the application:**

   ```bash
   npx prisma generate
   npx prisma db push
   npm run start:dev
   ```

3. **Access the application:**

   - The API will be available at `http://localhost:8888`.
   - The Swagger API documentation will be available at `http://localhost:8888/api-docs`.

### Environment Variables

The application requires certain environment variables to function correctly. These should be defined in a `.env` file in the root directory.

- **`DATABASE_URL`**: Connection string for the PostgreSQL database.
- **`PORT`**: The port on which the NestJS application will run (default is 8888).

### Database Setup

This project uses PostgreSQL as its database, managed via Prisma ORM.

1. **Applying Database Migrations:**

   After setting up the environment and the database, apply the Prisma migrations to create the necessary tables:

   ```bash
   npx prisma migrate dev --name init
   ```

2. **Generating Prisma Client:**

   After any schema change, generate the updated Prisma client:

   ```bash
   npx prisma generate
   ```

## API Documentation

The API is documented using Swagger. After running the application, you can access the interactive API documentation at:

http://localhost:8888/api-docs

markdown
Always show details

Copy code

This documentation allows you to explore and test the API endpoints directly from your browser.

## Development

### Directory Structure

Here's an overview of the project structure:

```
cyberoni-test-backend/
│
├── src/                     # Source files
│   ├── app.module.ts        # Main application module
│   ├── main.ts              # Entry point for the application
│   ├── users/               # Users module, controller, service, DTOs
│   └── posts/               # Posts module, controller, service, DTOs
│
├── prisma/                  # Prisma schema and migrations
│   └── schema.prisma        # Database schema definition
│
├── test/                    # Unit and integration tests
├── .env                     # Environment variables
├── docker-compose.yml       # Docker Compose configuration
├── Dockerfile               # Docker image configuration
├── package.json             # npm or pnpm scripts and dependencies
└── README.md                # Project documentation
```

### Running Tests

This project uses Jest for unit and integration testing.

- **Run all tests:**

  ```bash
  npm run test
  ```

- **Run tests with coverage:**

  ```bash
  npm run test:cov
  ```

- **Run e2e tests:**

  ```bash
  npm run test:e2e
  ```

## Docker Setup

This project is fully containerized using Docker. The `docker-compose.yml` file defines the services required to run the application, including the NestJS server and PostgreSQL database.

### Building and Running Containers

To build and run the containers:

```bash
docker-compose up --build
```

This will start both the API server and the PostgreSQL database.

## Deployment

For production deployment, ensure that you:

1. Set the environment to `production` in your environment variables.
2. Use a production-ready database.
3. Consider using Docker or a cloud service like AWS, Heroku, or DigitalOcean to deploy the containers.

## Common Issues

### 1. **Database Connection Errors**

If you encounter errors related to database connection, ensure that:

- The `DATABASE_URL` in your `.env` file is correctly configured.
- The PostgreSQL service is running and accessible.
- The database credentials are correct.

### 2. **Port Conflicts**

If the application fails to start due to port conflicts:

- Ensure that the port specified in the `.env` file is not being used by another process.
- Change the port in the `.env` file if necessary.

### 3. **Prisma Migrations Fail**

If you encounter issues with Prisma migrations:

- Ensure that the database service is running.
- Check the migration logs for specific errors.
- Try re-running the migrations after fixing any issues.
