# TechSafi - Innovation Elevated

![TechSafi Banner](https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&h=400&q=80)

**TechSafi** is a futuristic, AI-driven corporate website designed for a next-generation software company based in Kenya. Built with modern web technologies, it features a premium glassmorphism UI, seamless animations, and a fully responsive design that works across all devices.

The application is a Progressive Web App (PWA) offering offline capabilities and installability, complete with a dark/light theme system and an integrated AI assistant chatbot.

## 🚀 Key Features

*   **🎨 Premium UI/UX:** Futuristic design using Glassmorphism, animated gradients, and a "living" background mesh.
*   **🌓 Dynamic Theming:** Fully functional Light, Dark, and System theme toggle with persistent state.
*   **📱 PWA Ready:** Installable on mobile and desktop with offline support (Service Worker & Manifest).
*   **✨ Advanced Animations:** Scroll-triggered reveals, micro-interactions, and page transitions using `Framer Motion`.
*   **🤖 Integrated Chatbot:** A custom-built virtual assistant to answer common business queries instantly.
*   **🖱️ Custom Interactions:** Bespoke magnetic cursor and hover effects for a high-end feel.
*   **🧩 Modular Architecture:** Clean separation of concerns with reusable UI components (Cards, Modals, Buttons).
*   **📄 Comprehensive Pages:**
    *   **Home:** High-impact hero, services preview, and animated stats.
    *   **Services & AI Solutions:** Detailed offerings with interactive feature grids.
    *   **Portfolio:** Filterable project showcase with detail modals.
    *   **Pricing:** Dynamic pricing tables with currency conversion logic (Monthly/Retainer).
    *   **Careers:** Job listings, culture showcase, and application flow.
    *   **Company:** Interactive timeline, leadership hierarchy, and core values.
    *   **Blog & Legal:** Full blog layout and necessary legal pages.

## 🛠️ Technology Stack

*   **Core:** [React 18](https://reactjs.org/) (TypeScript)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **PWA:** Custom Service Worker & Manifest

## 📦 Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/techsafi.git
    cd techsafi
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    The app will start at `http://localhost:5173`.

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
techsafi/
├── public/              # Static assets (Manifest, Service Worker, Images)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # Buttons, Cards, Modals, etc.
│   │   ├── Layout.tsx   # Main app wrapper (Navbar + Footer)
│   │   ├── Navbar.tsx   # Responsive navigation with mega-menu
│   │   └── Chatbot.tsx  # AI Assistant component
│   ├── context/         # React Context (Theme)
│   ├── pages/           # Route views (Home, Pricing, Services, etc.)
│   ├── App.tsx          # Main application entry & Routing
│   ├── constants.tsx    # Static data (Nav items, Projects, Blogs)
│   ├── types.ts         # TypeScript interfaces
│   └── index.css        # Tailwind directives & global styles
├── index.html           # Entry HTML
├── package.json         # Dependencies & Scripts
├── tailwind.config.js   # Tailwind Configuration
└── vite.config.ts       # Vite Configuration
```

## 🎨 Customization

### Theme Colors
The project uses a semantic color scale defined in `tailwind.config.js`:
*   `primary`: Cyan 500
*   `secondary`: Violet 500
*   `accent`: Emerald 500
*   `dark`: Slate 950

To change the brand identity, update these values in the Tailwind config.

### Content
Most static content (Menu items, Project lists, Blog posts) is managed in `src/constants.tsx`. Update this file to change the text and data displayed across the site.

## 🚢 Deployment

The project is optimized for deployment on platforms like **Vercel** or **Netlify**.

**Vercel Deployment:**
1.  Push code to GitHub.
2.  Import project into Vercel.
3.  Framework Preset: `Vite`.
4.  Build Command: `npm run build`.
5.  Output Directory: `dist`.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <strong>Built with ❤️ in Kenya by TechSafi Team</strong>
</div>