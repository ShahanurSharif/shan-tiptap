# 🧑‍💻 Contributing & Extension Guide

Thank you for your interest in contributing to ShanTiptap! Follow these steps to get started and extend the project.

---

## 🚀 Getting Started

### 1. Fork & Clone

First, fork the repository on GitHub, then clone it to your local machine:

```bash
# Replace YOUR_GITHUB_USERNAME with your GitHub username
git clone https://github.com/ShahanurSharif/shan-tiptap.git
cd ShanTiptap
```

### 2. Set Upstream Remote

Link your local repo to the original repository to keep up-to-date:

```bash
git remote add upstream https://github.com/ShahanurSharif/shan-tiptap.git
```

### 3. Install Dependencies

Install all required packages:

```bash
npm install
# or
yarn install
```

### 4. Create a Feature Branch

Always create a new branch for your feature or fix:

```bash
git checkout -b feature/your-feature-name
```

### 5. Make Your Changes

- Add new features, fix bugs, or improve documentation.
- Follow the existing code style and naming conventions.
- Add tests if applicable.

### 6. Run Lint, Type Check, and Tests

Before committing, ensure your code is clean and working:

```bash
npm run lint
npm run type-check
npm test
```

### 7. Commit & Push

Commit your changes with a descriptive message:

```bash
git add .
git commit -m "Add: Short description of your change"
git push origin feature/your-feature-name
```

### 8. Keep Your Branch Up-to-date

Sync your branch with the latest changes from the main repository:

```bash
git fetch upstream
git merge upstream/main
# Resolve conflicts if any, then:
git push origin feature/your-feature-name
```

### 9. Open a Pull Request

Go to your fork on GitHub and click "Compare & pull request". Fill out the PR template and submit.

---

## 🛠️ Extending ShanTiptap

Want to add a new extension or UI component? Here's a quick guide:

1. **Create a New Extension or Component**
   - Place new Tiptap extensions in the appropriate directory (e.g., `tiptap-ui/` or `tiptap-ui-primitive/`).
   - For UI, follow the structure in `tiptap-ui/`.

2. **Register Your Extension**
   - Import and add your extension to the `extensions` array in `MenuBar.tsx`.

3. **Style Your Component**
   - Add or update SCSS modules for consistent styling.

4. **Document Your Changes**
   - Update the README with usage instructions and examples.

---

## 🧪 Useful Bash Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linter
npm run lint

# Run tests
npm test
```

---

**Happy coding! If you have questions, open an issue or start a discussion. I am happy to help!** 