# Personal Portfolio Website

A modern, full-stack portfolio built with TypeScript, React, and Node.js. Inspired by the clean aesthetics of Brittany Chiang’s portfolio and Linear’s landing page, this project emphasizes minimalism, smooth interactions, and elegant typography.

![Status](https://img.shields.io/badge/Status-Production%20Ready-green)
![React](https://img.shields.io/badge/React-18.x-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-blue)

---

## ✨ Features

-   **Modern UI/UX:** Clean, minimalist design with a focus on readability and user experience.
-   **Light/Dark Mode:** Theme toggle with system preference detection.
-   **Responsive Design:** Mobile-first layout that adapts to all screen sizes.
-   **Component-Based:** Built with reusable React components using shadcn/ui.
-   **Full-Stack TypeScript:** Type safety across the entire stack.
-   **Extensible:** Modular architecture for easy customization and future integrations (e.g., LLM/RAG for "Ask Me Anything").

---

## 🧩 Tech Stack

| Category      | Technology                                                                                             |
| :------------ | :----------------------------------------------------------------------------------------------------- |
| **Frontend**  | React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, Radix UI, React Query, Wouter, Lucide React         |
| **Backend**   | Node.js, Express.js                                                                                    |
| **Database**  | Drizzle ORM with in-memory storage (PostgreSQL ready)                                                  |
| **Tooling**   | ESLint, Prettier, Vitest                                                                               |

---

## 📂 Project Structure

The project is organized into three main directories: `client`, `server`, and `shared`.

```
.
├── client/                  # Frontend Application (React + Vite)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── lib/             # Utilities and helpers
│   │   ├── App.tsx          # Root component
│   │   └── index.css        # Global styles and Tailwind directives
│   └── index.html
├── server/                  # Backend Server (Express.js)
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   └── storage.ts           # In-memory storage (or database connection)
├── shared/                  # Shared code (e.g., Drizzle schema)
│   └── schema.ts
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
└── package.json
```

---

## ⚙️ Getting Started

### Prerequisites

-   Node.js (v20 or higher)
-   `npm` or your preferred package manager

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nickrwann/personal-website-v3.git
    cd personal-website-v3
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    ```bash
    cp .env.example .env
    ```
    Fill in the `.env` file with your details. Frontend variables must be prefixed with `VITE_`.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5000`.

### Build for Production

To create a production build, run:
```bash
npm run build
npm run start
```

---

## 🎨 Customization

-   **Content:** Modify the content directly in the component files located at `client/src/components/`. For example, edit `Hero.tsx` for the main headline and `About.tsx` for the description.
-   **Styling:** Adjust colors and theme settings in `client/src/index.css`.
-   **Images:** Replace the profile picture in `attached_assets/` and update the import path in the relevant component.

---

## ☁️ Deployment

This application is ready to be deployed on any platform that supports Node.js.

-   **Vercel (Recommended):** Connect your Git repository for automatic deployments.
-   **Netlify:** Deploy the `dist/` directory after running `npm run build`.
-   **Node Host:** Run `npm run build` and `npm run start` on your server.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
