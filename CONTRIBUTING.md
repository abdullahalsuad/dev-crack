
<h1 align="center">📚 Contributing to Dev Crack</h1>

<br/>

We welcome and appreciate all contributions to **Dev Crack**! Whether you're fixing a bug, adding a new feature, improving documentation, or suggesting improvements — your efforts make this project better.

>Please take a moment to review this guide before you start.



## 🛠️ Getting Started

### 1. Fork the Repository

Click the **Fork** button on the top right of the GitHub repo, then:

```sh
git clone https://github.com/YOUR_USERNAME/dev-crack.git
cd dev-crack
```

### 2. Set Up Your Environment

Install the dependencies:

```sh
npm install
# or
pnpm install
```

Start the development server:

```sh
npm run dev
# or
pnpm dev
```

---

## 🌿 Branching Strategy

Never work directly on the `main` branch. Create a new feature or fix branch:

```sh
git checkout -b feat/your-feature-name
```

Use prefixes to name your branches:

| Prefix      | Purpose             |
|-------------|---------------------|
| `feat/`     | New features         |
| `fix/`      | Bug fixes            |
| `docs/`     | Documentation only   |
| `refactor/` | Code refactoring     |
| `test/`     | Testing-related      |
| `chore/`    | Tooling or meta work |

---

## ✏️ Commit Message Guidelines

Follow the **Conventional Commits** standard:

```
<type>(scope): short description
```

### Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring (no functional change)
- `test`: Adding or updating tests
- `chore`: Non-code updates (build tasks, dependencies, etc.)

### Examples:

```sh
git commit -m "feat(navbar): add GitHub link to top-right corner"
git commit -m "fix(button): correct hover state color"
git commit -m "docs: update README with new setup instructions"
```

---

## 🚀 Submitting a Pull Request

1. Push your branch:

   ```sh
   git push origin feat/your-feature-name
   ```

2. Open a pull request (PR) on GitHub.

3. Clearly describe:
   - What you changed
   - Why the change is necessary
   - Any related issues (use `Closes #123` if applicable)

4. Be responsive to reviews. We may request changes or suggestions.

---

## ✅ Code Standards

- Follow [Prettier](https://prettier.io/) formatting and style
- Use consistent naming conventions
- Keep components modular and reusable
- Avoid committing large, unrelated changes in a single PR

---

## 🙌 Need Help?

If you have any questions, feel free to open a [discussion](https://github.com/abdullahalsuad/dev-crack/discussions) or reach out via [Issues](https://github.com/abdullahalsuad/dev-crack/issues).

**Join Our Discord Community**:  [Join DEV ZeroOne](https://discord.gg/VRPSPcak)



<br/>

---
<p align="center">
  <strong>Built by developers, for developers 💖</strong><br>
  <b>Happy Learning & Good Luck with Your Interviews! 🚀</b>
</p>
