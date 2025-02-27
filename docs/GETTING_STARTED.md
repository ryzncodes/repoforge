# 🚀 Getting Started with RepoForge

Welcome to RepoForge! This guide will help you get started with learning repository best practices.

## 📋 Prerequisites

Before you begin, make sure you have:

1. **Git** installed
   - Windows: Download from [git-scm.com](https://git-scm.com/)
   - Mac: `brew install git`
   - Linux: `sudo apt install git` or equivalent

2. **Node.js** (version 18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

3. **GitHub Account**
   - Sign up at [github.com](https://github.com)
   - Set up SSH keys (recommended): [GitHub Guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

4. **Code Editor**
   - We recommend [Visual Studio Code](https://code.visualstudio.com/)
   - Helpful extensions:
     - GitHub Pull Requests
     - GitLens
     - ESLint
     - Prettier

## 🎯 First Steps

1. **Fork the Repository**
   - Go to [RepoForge Repository](https://github.com/ryzncodes/repoforge)
   - Click the "Fork" button in the top right
   - Select your account as the destination

2. **Clone Your Fork**
   ```bash
   # Replace YOUR_USERNAME with your GitHub username
   git clone https://github.com/YOUR_USERNAME/repoforge.git
   cd repoforge
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Set Up Your Development Environment**
   ```bash
   # Add the original repository as a remote called "upstream"
   git remote add upstream https://github.com/ryzncodes/repoforge.git
   
   # Create a new branch for your work
   git checkout -b my-first-task
   ```

## 🎓 Starting the Learning Journey

1. **Read the Documentation**
   - Start with README.md
   - Review CONTRIBUTING.md
   - Understand our CODE_OF_CONDUCT.md

2. **Begin with Tasks**
   - Open TASKS.md
   - Start with Module 1
   - Complete tasks in order

3. **Make Your First Contribution**
   - Make changes in your branch
   - Commit your changes:
     ```bash
     git add .
     git commit -m "feat: Complete Task 1.1"
     git push origin my-first-task
     ```
   - Create a Pull Request on GitHub

## 🤔 Common Issues & Solutions

### Git Issues

1. **"git push rejected"**
   ```bash
   # Pull latest changes from your fork
   git pull origin main
   
   # If there are conflicts, resolve them and then
   git push origin my-first-task
   ```

2. **"cannot find remote branch"**
   ```bash
   # Update your local repository
   git fetch origin
   ```

### Node.js Issues

1. **"npm install fails"**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Try installing again
   npm install
   ```

2. **"command not found: npm"**
   - Reinstall Node.js
   - Make sure it's added to your PATH

## 🆘 Getting Help

1. **Check Existing Resources**
   - Search Issues tab for similar problems
   - Review the documentation
   - Check the Common Issues section

2. **Ask for Help**
   - Create a new Issue using the "Question" template
   - Be specific about your problem
   - Include:
     - What you were trying to do
     - What happened instead
     - Any error messages
     - Your environment details

## ✅ Next Steps

After completing your first task:
1. Review other's Pull Requests
2. Try more complex tasks
3. Help others in Issues
4. Suggest improvements

## 🎉 Tips for Success

1. **Take It Step by Step**
   - Don't rush through tasks
   - Make sure you understand each concept
   - Ask questions when stuck

2. **Best Practices**
   - Always work in a branch
   - Write clear commit messages
   - Test your changes before pushing
   - Keep PRs focused and small

3. **Stay Updated**
   ```bash
   # Keep your fork updated
   git checkout main
   git pull upstream main
   git push origin main
   ```

Remember: Everyone starts somewhere! Don't be afraid to make mistakes - they're part of the learning process. 🌟 