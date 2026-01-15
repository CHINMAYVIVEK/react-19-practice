# React 19 Practice Lab 🚀

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-runtime-000000?logo=bun\&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite\&logoColor=white)

A **monorepo-style learning lab** for practicing and experimenting with **React 19**.
This repository is organized into multiple isolated workspaces, each focused on a specific React concept or feature.

---

## 🎯 Project Objective

* Explore **React 19** features and APIs
* Practice core React concepts in isolation
* Maintain a **scalable monorepo structure**
* Encourage clean, modular learning patterns
* Serve as a long-term React experimentation lab

---

## 🛠️ Tech Stack

* **React 19**
* **JavaScript (ES6+)**
* **Bun** (package manager & runtime)
* **Vite** (dev server & bundler)
* **HTML5 & CSS3**

---

## 🧱 Monorepo Structure

```
react-19-practice/
├── hello-world/
├── core-concepts/
├── handling-events/
├── state-demo/
├── README.md
└── .gitignore
```

---

## ✨ Topics Covered

* JSX & Functional Components
* Props & State
* Event Handling
* Conditional Rendering
* Lists & Keys
* Hooks (`useState`, `useEffect`, etc.)
* React 19 features
* Component reusability
* Basic performance optimizations

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ChinmayVivek/react-19-practice.git
cd react-19-practice
cd <project-name>
```

### 2️⃣ Install Root Dependencies

```bash
bun install
```

### 3️⃣ Run a Specific App

```bash
cd apps/hello-world
bun install
bun run dev
```

App will be available at:

```
http://localhost:5173
```

---

## ⬆️ Update React to the Latest Version

To upgrade React across an app:

```bash
bun add react@latest react-dom@latest
```

(Optional: verify versions)

```bash
bun pm ls react react-dom
```

---

### Create new project

```bash
bun create vite
```

Selections:

- Project name: `project-name`
- Framework: `React`
- Variant: `react + compiler (JavaScript)`

---

## 🧪 Learning Philosophy

* **One concept per app**
* Minimal boilerplate
* Clean and readable code
* Well-commented examples
* Easy experimentation without side effects

---

## 📚 Resources

* [React Documentation](https://react.dev/)
* [React 19 Release Notes](https://react.dev/blog)
* [Bun Documentation](https://bun.sh/docs)
* [Vite Documentation](https://vitejs.dev)

---

## 📌 Disclaimer

This project is intended **for educational purposes only** and is not production-ready.

---

## 🔮 Future Enhancements

* TypeScript migration
* Shared ESLint & Prettier config
* CI workflow for linting
* Testing playground (Vitest / RTL)

---
