<div align="center">
  <img src="apps/web/public/assets/BlastAPI_logo.svg" alt="BlastAPI_Logo" width="210px" height="210px" />
  <p align="center">
    A modern, open-source API load testing platform
    <br />
    <a href="https://blastapi-web.onrender.com"><strong>Live Demo »</strong></a>
    <br />
    <br />
    <a href="#-quick-start">Quick Start</a>
    ·
    <a href="#-features">Features</a>
    ·
    <a href="https://github.com/lra8dev/blastapi/issues">Report Bug</a>
    ·
    <a href="https://github.com/lra8dev/blastapi/issues">Request Feature</a>
  </p>
</div>

<p align="center">
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white" alt="TypeScript"></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?logo=next.js&logoColor=white" alt="Next.js"></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=fff&style=flat" alt="Express.js"></a>
  <a href="https://prisma.io/"><img src="https://img.shields.io/badge/Prisma_ORM-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma"></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" alt="Docker"></a>
</p>

---

## 📖 About

**BlastAPI** is a full-stack API load testing platform that helps developers stress test their APIs, analyze performance metrics, and identify bottlenecks — all in real-time. Built with modern technologies and designed for both simplicity and power.

### Why BlastAPI?

- **No installation required** — Use the web interface instandly [here](https://blastapi-web.onrender.com)
- **Real-time metrics** — Watch your API performance as tests run
- **Developer-friendly** — Clean UI, detailed logs, and exportable results
- **Self-hostable** — Run your own instance with Docker or deploy to any cloud

---

## ✨ Features

| Feature                      | Description                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------ |
| 🚀 **Load Testing**          | Execute HTTP load tests with configurable virtual users, duration, and ramp-up |
| 📊 **Live Dashboard**        | Monitor throughput, response times, and error rates in real-time               |
| 📈 **Performance Analytics** | P50, P95, P99 response times with detailed breakdowns                          |
| 🔐 **Authentication**        | Secure OAuth login with Google and GitHub                                      |
| 🎯 **Queue System**          | Background job processing with Bull and Redis                                  |
| 🔌 **WebSocket Updates**     | Live metric streaming via Socket.IO                                            |
| 🌙 **Dark Mode**             | Beautiful dark-mode UI built with Radix UI and Tailwind CSS                    |
| 🐳 **Docker Ready**          | One-command setup with Docker Compose                                          |

---

## 🏗️ Architecture

```
blastapi/
├── apps/
│   ├── server/              # Express.js REST API + WebSocket server
│   └── web/                 # Next.js 16 frontend (App Router)
├── packages/
│   ├── db/                  # Prisma schema, migrations, and client
│   ├── utils/               # Shared utility functions
│   └── validators/          # Zod validation schemas
├── docker-compose.yml       # Production Docker setup
├── docker-compose.dev.yml   # Development Docker overrides
└── render.yaml              # Render deployment blueprint
```

### Tech Stack

<table>
<tr>
<td valign="top" width="50%">

**Frontend**

- Next.js 16 (App Router)
- React 19
- Tailwind CSS + Radix UI
- TanStack Query
- Auth.js v5
- Recharts

</td>
<td valign="top" width="50%">

**Backend**

- Express.js 5
- Prisma ORM + NeonDB
- Bull Queue + Redis
- Socket.IO
- Pino Logger

</td>
<td valign="top" width="50%">

**DevOps & Tools**

- Docker & Docker Compose
- pnpm (Workspace)
- ESLint & Commitlint
- Husky + Lint-staged
- Prettier

</td>
</tr>
</table>

---

## 🚀 Quick Start

Choose your preferred setup method:

| Method                                    | Best For                            | Time   |
| ----------------------------------------- | ----------------------------------- | ------ |
| [🐳 Docker](#option-1-docker-recommended) | Quick setup, consistent environment | ~2 min |
| [💻 Local](#option-2-local-development)   | Full control, debugging             | ~5 min |

### Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** — [Download](https://nodejs.org/)
- **pnpm 10+** — Run `corepack enable` to install
- **Docker** — [Download](https://www.docker.com/) (for Docker setup)
- **NeonDB account** — [Sign up free](https://neon.tech/) (serverless PostgreSQL)

---

### Option 1: Docker (Recommended)

The fastest way to get BlastAPI running locally.

#### Step 1: Clone and configure

```bash
# Clone the repository
git clone https://github.com/lra8dev/blastapi.git
cd blastapi

# Copy the example environment file
cp .env.example .env
```

#### Step 2: Set up environment variables

Open `.env` (root) and fill in your credentials:

```env
# Required: NeonDB (get from https://console.neon.tech)
DATABASE_URL="postgresql://user:pass@host.neon.tech/dbname?sslmode=require"
DIRECT_URL="postgresql://user:pass@host.neon.tech/dbname?sslmode=require"

# Required: Auth.js secret (generate with: openssl rand -base64 32)
AUTH_SECRET="your-secret-here"

# Optional: OAuth providers (for social login)
AUTH_GOOGLE_ID=""
AUTH_GOOGLE_SECRET=""
AUTH_GITHUB_ID=""
AUTH_GITHUB_SECRET=""
```

#### Step 3: Start the services

```bash
# Build and start all containers
docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build
```

#### Step 4: Open the app

| Service             | URL                          |
| ------------------- | ---------------------------- |
| 🌐 **Web App**      | http://localhost:3000        |
| 🔌 **API Server**   | http://localhost:4000        |
| ❤️ **Health Check** | http://localhost:4000/health |

> **💡 Tip:** Changes to your code automatically reload — no restart needed!

#### Docker Commands Reference

```bash
# Start in background (detached mode)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build

# View logs
docker compose -f docker-compose.yml -f docker-compose.dev.yml logs -f

# Stop all services
docker compose -f docker-compose.yml -f docker-compose.dev.yml down

# Rebuild from scratch (if dependencies change)
docker compose -f docker-compose.yml -f docker-compose.dev.yml build --no-cache
```

---

### Option 2: Local Development

For developers who prefer running services directly on their machine.

#### Step 1: Clone and install

```bash
# Clone the repository
git clone https://github.com/lra8dev/blastapi.git
cd blastapi

# Install dependencies
pnpm install
```

#### Step 2: Configure environment

Create `.env` files in the following locations by referring to [.env.example](.env.example):

| File                    | Purpose             |
| ----------------------- | ------------------- |
| `./.env`                | Root level (Docker) |
| `./apps/web/.env.local` | Next.js frontend    |
| `./apps/server/.env`    | Express.js backend  |
| `./packages/db/.env`    | Prisma database     |

#### Step 3: Set up the database

```bash
# Generate Prisma client
pnpm --filter @blastapi/db db:generate

# Run database migrations
pnpm --filter @blastapi/db db:deploy
```

#### Step 4: Start Redis

You need Redis running for the queue system. Choose one:

```bash
# Option A: Using Docker (easiest)
docker run -d --name redis -p 6379:6379 redis:7-alpine

# Option B: Using your system's Redis
redis-server
```

#### Step 5: Start development servers

```bash
# Start all apps (recommended)
pnpm dev

# Or start individually
pnpm --filter @blastapi/web dev     # Frontend → http://localhost:3000
pnpm --filter @blastapi/server dev  # Backend  → http://localhost:4000
```

---

## 📦 Available Scripts

### Monorepo Root

| Command       | Description                        |
| ------------- | ---------------------------------- |
| `pnpm dev`    | Start all apps in development mode |
| `pnpm build`  | Build all apps for production      |
| `pnpm lint`   | Run ESLint on all packages         |
| `pnpm format` | Format code with Prettier          |

### Apps

```bash
# Web (Next.js)
pnpm --filter @blastapi/web dev      # Start dev server
pnpm --filter @blastapi/web build    # Build for production

# Server (Express.js)
pnpm --filter @blastapi/server dev   # Start dev server with hot reload
pnpm --filter @blastapi/server build # Build for production
```

### Database

```bash
pnpm --filter @blastapi/db db:generate  # Generate Prisma client
pnpm --filter @blastapi/db db:migrate   # Create new migration
pnpm --filter @blastapi/db db:deploy    # Apply migrations
pnpm --filter @blastapi/db db:studio    # Open Prisma Studio GUI
```

---

## 📊 Using BlastAPI

### Creating a Load Test

1. **Sign in** using Google or GitHub OAuth
2. **Create a new test** with your configuration:
   - **URL** — The API endpoint to test
   - **Method** — GET, POST, PUT, DELETE, or PATCH
   - **Headers** — Custom headers (JSON format)
   - **Body** — Request body for POST/PUT requests
   - **Virtual Users** — Number of concurrent users (1–1,000)
   - **Duration** — Test length in seconds (1–480)
   - **Ramp-up** — Gradual user increase time

3. **Run the test** and watch metrics in real-time
4. **Analyze results** with detailed performance breakdowns

### Test Configuration Example

```json
{
  "name": "API Performance Test",
  "url": "https://api.example.com/users",
  "method": "GET",
  "vusers": 100,
  "duration": 300,
  "rampUp": 60,
  "rampUpSteps": 10
}
```

### Limits

| Parameter        | Min   | Max             |
| ---------------- | ----- | --------------- |
| Virtual Users    | 1     | 1,000           |
| Duration         | 1 sec | 480 sec (8 min) |
| Concurrent Tests | —     | 5 per user      |
| Ramp-up Steps    | 1     | 50              |

---

## 🚢 Deployment

### Deploy to Render (Recommended)

BlastAPI includes a `render.yaml` blueprint for one-click deployment:

1. Fork this repository
2. Go to [Render Dashboard](https://dashboard.render.com) → **Blueprints**
3. Connect your forked repository
4. Set the required environment variables
5. Deploy!

### Environment Variables for Production

| Variable             | Required | Description               |
| -------------------- | -------- | ------------------------- |
| `DATABASE_URL`       | ✅       | NeonDB connection string  |
| `DIRECT_URL`         | ✅       | NeonDB direct connection  |
| `AUTH_SECRET`        | ✅       | Auth.js encryption secret |
| `AUTH_GOOGLE_ID`     | ❌       | Google OAuth client ID    |
| `AUTH_GOOGLE_SECRET` | ❌       | Google OAuth secret       |
| `AUTH_GITHUB_ID`     | ❌       | GitHub OAuth client ID    |
| `AUTH_GITHUB_SECRET` | ❌       | GitHub OAuth secret       |

---

## 🤝 Contributing

We love contributions! Here's how to get started:

### Development Workflow

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/amazing-feature
   ```
4. **Make your changes** and test thoroughly
5. **Commit** using conventional commits:
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push** to your fork:
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request** with a clear description

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/). Format your commits as:

```
type(scope): description
```

| Type       | Description                        |
| ---------- | ---------------------------------- |
| `feat`     | New feature                        |
| `fix`      | Bug fix                            |
| `docs`     | Documentation changes              |
| `style`    | Code formatting (no logic changes) |
| `refactor` | Code refactoring                   |
| `test`     | Adding or updating tests           |
| `chore`    | Maintenance tasks                  |

**Examples:**

```bash
feat(api): add rate limiting to endpoints
fix(web): resolve login redirect issue
docs: update installation instructions
```

### Code Style

- Run `pnpm lint` before committing
- Run `pnpm format` to auto-format code
- Husky will automatically check commits via lint-staged

---

## 🐛 Troubleshooting

<details>
<summary><strong>Docker: "Cannot find module" error</strong></summary>

This usually means the build cache is stale. Try:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml down
docker compose -f docker-compose.yml -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

</details>

<details>
<summary><strong>Prisma: "Cannot resolve environment variable"</strong></summary>

Make sure `DATABASE_URL` and `DIRECT_URL` are set in your `.env` file and in `packages/db/.env`.

</details>

<details>
<summary><strong>Redis connection refused</strong></summary>

Ensure Redis is running:

```bash
# Check if Redis is running
docker ps | grep redis

# Or start it manually
docker run -d --name redis -p 6379:6379 redis:7-alpine
```

</details>

<details>
<summary><strong>OAuth login not working</strong></summary>

1. Verify your OAuth credentials in `.env`
2. Make sure callback URLs are configured in Google/GitHub:
   - Google: `http://localhost:3000/api/auth/callback/google`
   - GitHub: `http://localhost:3000/api/auth/callback/github`

</details>

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 💬 Support

- 🐛 **Found a bug?** [Open an issue](https://github.com/lra8dev/blastapi/issues)
- 💡 **Have a feature idea?** [Start a discussion](https://github.com/lra8dev/blastapi/issues)
- ⭐ **Like this project?** Give it a star!

---

<p align="center">
  <strong>Built with ❤️ for the developer community</strong>
  <br />
  <sub>If BlastAPI helped you, consider giving it a ⭐</sub>
</p>
