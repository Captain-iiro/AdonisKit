# Contributing to AdonisKit

Thank you for considering contributing to AdonisKit. Please take a moment to review the guidelines below before opening an issue or a pull request.

## Development setup

```bash
git clone https://github.com/Captain-iiro/adoniskit.git
cd adoniskit

npm install
cp .env.example .env
node ace generate:key
node ace migration:run

npm run dev
```

## Before opening a pull request

Your changes should satisfy the project's quality gates:

```bash
npm run lint        # code style
npm run typecheck   # server + Inertia type safety
npm run test        # test suites
```

Make sure all three pass. Add tests for any new behavior.

## Branching & pull requests

1. Fork the repository and create your branch from `main`:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Commit your changes with a clear and concise message.
3. Push the branch and open a pull request describing what you changed and why.
4. Keep the pull request focused — one logical change per PR.

## Coding standards

- Use the existing code style (Prettier is configured via `@adonisjs/prettier-config`).
- Follow the existing structure (`app/`, `inertia/`, `database/`, `start/`).
- Write idiomatic AdonisJS and React code; keep the UI consistent with the existing shadcn-style components.

## Code of conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code.
