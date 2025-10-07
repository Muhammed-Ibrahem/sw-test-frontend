# 🛍️ Scandiweb Frontend

This is the **frontend** for the Scandiweb Test Project.  
It’s a React application that communicates with the PHP GraphQL backend.

---

## 🚀 Overview

The app allows users to:

- Browse product categories
- View product details
- Add items to cart

The frontend fetches data from the backend GraphQL API and displays it dynamically.

---

## 🧩 Tech Stack

- **React**
- **Vite**
- **Apollo Client**
- **Tailwind CSS**
- **TypeScript**
- **GraphQL**

---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Muhammed-Ibrahem/sw-test-frontend.git
   cd <project folder>
   ```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory and add:

```bash
VITE_API_URL=https://<your-backend-url>/graphql
```

For local development:

```bash
VITE_API_URL=http://localhost:8080/graphql
```

---

## 🧠 Development

Start the development server:

```bash
pnpm dev
```

Then open your browser at:

```
http://localhost:5173
```

(or whichever port Vite assigns)

---
