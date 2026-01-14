# Handling Events – React + Vite + Bun

A minimal React application bootstrapped with **Vite** and powered by **Bun** for fast installs and development.  
This project uses **React (JavaScript) with the React Compiler** template.

---

## 🚀 Tech Stack

- **Bun** – JavaScript runtime & package manager
- **Vite** – Lightning-fast frontend tooling
- **React** – UI library
- **JavaScript (ESM)** – No TypeScript in this setup

---

## 📦 Project Setup

### Prerequisites

Make sure you have **Bun** installed:

```bash
bun --version
```

If not installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

---

## 🛠️ Getting Started

### 1️⃣ Create the project

```bash
bun create vite
```

Selections:

- Project name: `handling-events`
- Framework: `React`
- Variant: `react + compiler (JavaScript)`

---

### 2️⃣ Install dependencies

```bash
cd handling-events
bun install
```

---

### 3️⃣ Start development server

```bash
bun dev
```

The app will be available at:

```
http://localhost:5173
```

---

## 📁 Project Structure

```
handling-events/
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## 🏗️ Build for Production

```bash
bun run build
```

The output will be generated in the `dist/` folder.

---

## 🔍 Preview Production Build

```bash
bun run preview
```

---

## 🧹 Linting (Optional)

If ESLint is included:

```bash
bun run lint
```

---

## 💡 Notes

- This project uses **JavaScript**, not TypeScript
- React Compiler is enabled via the Vite template
- Bun is used for dependency management and scripts

---

## 📜 License

This project is open-source and available under the **MIT License**.
