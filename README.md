# Language

TypeScript

# Recommended Project Structure

```
-.env
-.gitignore
-package.json
-package-lock.json
-tsconfig.json
-README.md
-backend
  -server.ts   // Application startup or bootstrap file.
  -routes.ts  // Combine routes from all modules here.
  -modules
    -feature-folder    // Each feature should be segregated by folder.
      -dtos
        -route-feature.dto.ts
      -utils           // Module specific helpers.
        -generate-token.ts
      -feature.schema.ts
      -feature.route.ts   // Module specific routes.
      -feature.controller.ts
      -feature.service.ts
      -feature.repository.ts
      -feature.error.ts
```

# Backend

**express**

serves frontend app in production environment.

## Rate Limiter

Modify the `keyGenerator` in _backend/middleware/rateLimitMiddleware.ts_ as per authentication strategy.

```
const rateLimitByUser = rateLimit({
  windowMs: 3 * 60 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
  keyGenerator: (req, res) => {
    return req.body.username;
  },
  message: "Your account is blocked for 3 hours due to suspicious activity.",
});
```

# Frontend

**react** using _vite_.
