# Description
This is a ts-mern starter template repo. Follow the steps before starting to work after cloning.

1. Rename directory **ts-mern** to **new-project-name**.
```
Rename-Item -Path "ts-mern" NewName "new-project-name"
```

2. Remove hidden **.git** directory.
```
rm ./git/ -recurse -force

```
3. Verify project isn't initialized with **_git_**.
```
git status
```

4. Remove _package-lock.json_ and _frontend/package-lock.json_.
```
rm .\package-lock.json, .\frontend\package-lock.json
```
5. Rename `"name": "ts-mern"` to `"name": "new-project-name"` _package.json_.
6. Remove `"ts-mern"` under `"dependencies"` in _frontend/package.json_.
7. Execute `npm i`.
8. Change directory to ./frontend, the execute `npm i`.
9. Run `git init` in project root initialize git.

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
