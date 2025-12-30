# ================================
# Stage 1: Dependencies
# ================================
FROM node:22-alpine AS deps

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy workspace config files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY tsconfig.base.json ./

# Copy all package.json files for workspace packages
COPY apps/server/package.json ./apps/server/
COPY packages/db/package.json ./packages/db/
COPY packages/utils/package.json ./packages/utils/
COPY packages/validators/package.json ./packages/validators/

# Install dependencies
RUN pnpm install --frozen-lockfile

# ================================
# Stage 2: Builder
# ================================
FROM node:22-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/server/node_modules ./apps/server/node_modules
COPY --from=deps /app/packages/db/node_modules ./packages/db/node_modules
COPY --from=deps /app/packages/utils/node_modules ./packages/utils/node_modules
COPY --from=deps /app/packages/validators/node_modules ./packages/validators/node_modules

# Copy source files
COPY . .

# Generate Prisma client
RUN pnpm --filter @blastapi/db db:generate

# Build shared packages first
RUN pnpm --filter @blastapi/db build
RUN pnpm --filter @blastapi/validators build
RUN pnpm --filter @blastapi/utils build

# Build server
RUN pnpm --filter @blastapi/server build

# ================================
# Stage 3: Runner (Production)
# ================================
FROM node:22-alpine AS runner

# Install pnpm for production
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

WORKDIR /app

# Set production environment
ENV NODE_ENV=production

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 expressjs

# Copy workspace structure
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-workspace.yaml ./
COPY --from=builder /app/pnpm-lock.yaml ./

# Copy built packages
COPY --from=builder /app/packages/db/dist ./packages/db/dist
COPY --from=builder /app/packages/db/package.json ./packages/db/
COPY --from=builder /app/packages/db/prisma ./packages/db/prisma

COPY --from=builder /app/packages/utils/dist ./packages/utils/dist
COPY --from=builder /app/packages/utils/package.json ./packages/utils/

COPY --from=builder /app/packages/validators/dist ./packages/validators/dist
COPY --from=builder /app/packages/validators/package.json ./packages/validators/

# Copy built server
COPY --from=builder /app/apps/server/dist ./apps/server/dist
COPY --from=builder /app/apps/server/package.json ./apps/server/

# Install production dependencies only
RUN pnpm install --frozen-lockfile --prod

# Set correct permissions
RUN chown -R expressjs:nodejs /app

USER expressjs

EXPOSE 4000

ENV PORT=4000

# Start the Express server
CMD ["node", "--require", "dotenv/config", "apps/server/dist/index.js"]
