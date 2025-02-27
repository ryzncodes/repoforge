# Contributing to RepoForge

Thank you for your interest in contributing to RepoForge! This document provides guidelines and instructions for contributing to this project.

## 🎯 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🚀 How to Contribute

### 1. Setting Up Your Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/repoforge.git
   cd repoforge
   ```
3. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/original/repoforge.git
   ```

### 2. Creating a New Branch

1. Update your main branch:
   ```bash
   git checkout main
   git pull upstream main
   ```
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### 3. Making Changes

1. Make your changes following our coding standards
2. Write clear, concise commit messages:

   ```
   type(scope): brief description

   Longer description if needed
   ```

   Types: feat, fix, docs, style, refactor, test, chore

### 4. Submitting a Pull Request

1. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```
2. Create a Pull Request through GitHub
3. Fill out the PR template completely
4. Wait for review

## 📝 Pull Request Guidelines

- Keep PRs focused on a single change
- Update documentation as needed
- Add tests for new features
- Follow the PR template
- Ensure CI passes

## 🧪 Testing Guidelines

- Write unit tests for new features
- Ensure all tests pass locally before submitting
- Include both positive and negative test cases

## 📚 Documentation Guidelines

- Use clear, concise language
- Include code examples where appropriate
- Update README.md if needed
- Document breaking changes

## 🔍 Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, maintainers will merge your PR

## ⭐ Style Guide

- Follow existing code style
- Use meaningful variable/function names
- Comment complex logic
- Keep functions focused and small

## 🐛 Reporting Bugs

- Use the bug report template
- Include steps to reproduce
- Provide system/environment details
- Include relevant logs/screenshots

## 💡 Suggesting Enhancements

- Use the feature request template
- Explain the benefit/value
- Consider implementation complexity
- Be open to feedback and discussion

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.
