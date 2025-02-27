# Core Module

This module contains the core functionality for the RepoForge learning platform.

## Components

### TaskValidator

The `TaskValidator` class is responsible for validating task completion in the learning platform. It provides a flexible way to define and check requirements for each learning task.

#### Usage

```typescript
import { TaskValidator, TaskRequirement } from './TaskValidator';

// Define your requirements
const requirements: TaskRequirement[] = [
  {
    id: 'has-readme',
    description: 'Repository has a README.md file',
    validator: async () => fs.existsSync('README.md'),
  },
  {
    id: 'has-tests',
    description: 'Repository has test files',
    validator: async () => {
      const files = await glob('**/*.test.{ts,js}');
      return files.length > 0;
    },
  },
];

// Create validator instance
const validator = new TaskValidator(requirements);

// Validate all requirements
const results = await validator.validateAll();
console.log(results);
// Output: { 'has-readme': true, 'has-tests': false }

// Validate single requirement
const hasReadme = await validator.validate('has-readme');
console.log(hasReadme);
// Output: true
```

#### API Reference

##### `TaskRequirement`

Interface representing a task requirement:

- `id: string` - Unique identifier for the requirement
- `description: string` - Human-readable description
- `validator: () => Promise<boolean>` - Async function that checks if requirement is met

##### `TaskValidator`

Class for validating task requirements:

- `constructor(requirements: TaskRequirement[])`
- `validate(id: string): Promise<boolean>`
- `validateAll(): Promise<Record<string, boolean>>`
- `getRequirement(id: string): TaskRequirement | undefined`
- `getAllRequirements(): TaskRequirement[]`

## Testing

Run tests with:

```bash
npm test
```

Or run tests in watch mode:

```bash
npm run test:watch
```
