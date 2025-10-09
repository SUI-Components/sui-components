# Claude Configuration for SUI Components

This document contains Claude-specific configuration and guidelines for working with the SUI Components project.

## Project Overview

- **Name**: @s-ui/react-components
- **Type**: Monorepo with React components
- **Structure**: Multi-package workspace with components and utils
- **Framework**: React with TypeScript
- **Build Tool**: SUI Studio

## Key Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build the project
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode

# Code Quality
npm run lint         # Run all linters
npm run lint:js      # Lint JavaScript/TypeScript
npm run lint:sass    # Lint SASS/CSS
npm run types:check  # TypeScript type checking

# Component Generation
npm run generate     # Generate new component scaffold

# Monorepo Management
npm run release      # Release components
npm run co          # Commit with conventional format
```

## Project Structure

```
sui-components-2/
├── components/        # Individual component packages
├── utils/            # Utility packages
├── package.json      # Root package configuration
└── public/           # Built assets
```

## Development Guidelines

### Component Development
- Components are organized in individual packages under `components/`
- Each component should follow SUI design system patterns
- Use TypeScript for type safety
- Follow conventional commit messages

### Code Quality
- ESLint and Stylelint are configured via @s-ui/lint
- Prettier is configured for code formatting
- Pre-commit hooks run linting on staged files
- Pre-push hooks run tests

### Testing
- Tests are run with SUI Studio test runner
- Coverage reporting is enabled
- Use headless mode for CI/CD

## Claude-Specific Instructions

When working with this project:

1. **Component Creation**: Use `npm run generate` to scaffold new components
2. **Code Style**: Follow existing patterns in the components directory
3. **Testing**: Always run tests after making changes
4. **TypeScript**: Ensure type safety with `npm run types:check`
5. **Commits**: Use conventional commit format (feat, fix, test, etc.)
6. **Monorepo**: Remember this is a workspace - changes may affect multiple packages

## Common Tasks

### Adding a New Component
1. Run `npm run generate` to create component scaffold
2. Implement component logic and styles
3. Add tests and documentation
4. Run `npm run lint` and `npm run test`
5. Commit with conventional format

### Updating Dependencies
1. Update package.json files as needed
2. Run `npm run phoenix` to clean and reinstall
3. Test affected components
4. Update any breaking changes

### Release Process
1. Run `npm run check:release` to verify readiness
2. Use `npm run release` for publishing
3. Follow semantic versioning principles