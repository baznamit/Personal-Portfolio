# Personal Portfolio - Namit Pratap Singh

A modern portfolio focused on backend engineering case studies, Java systems work, and production-facing architecture decisions. Built with React, TypeScript, and Tailwind CSS.

## 🌐 Live Demo

**[Visit Portfolio](https://baznamit.github.io/Personal-Portfolio/)**

## Features

- Professional backend-engineer positioning instead of a generic template portfolio
- Interactive system walkthrough for the Greenlight release flow
- Case studies with role, scope, architecture, and measurable outcomes
- Responsive layout with direct resume and contact access
- Smooth motion and strong typography tuned for a technical audience

## 🛠️ Built With

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Advanced animations library
- **Lucide React** - Beautiful icon library

### Build Tools & Development
- **Vite** - Next generation frontend tooling
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **GitHub Pages** - Hosted on GitHub Pages
- **GitHub Actions** - Automated deployment pipeline

## Project Structure

```
src/
├── components/          # Rendered portfolio sections
│   ├── Capabilities.tsx
│   ├── CaseStudies.tsx
│   ├── CommandPalette.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Timeline.tsx
├── data/
│   └── portfolio.tsx   # Portfolio content and typed data
├── utils/
│   └── assets.ts       # Asset path utilities
├── App.tsx             # App shell and state wiring
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/baznamit/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run type-check` - TypeScript type checking
- `npm run deploy` - Deploy to GitHub Pages

## Customization

### Colors & Styling
The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. Modify the theme to customize colors, fonts, and spacing.

### Content
Update `src/data/portfolio.tsx` to customize portfolio copy, case studies, links, and system-flow content.

### Assets
Add your images to `public/Pics/` and update the asset references using the `getAssetPath` utility.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Namit Pratap Singh** ([@baznamit](https://github.com/baznamit))
- 📧 Email: namit.singh1269@gmail.com
- 🐙 GitHub: [@baznamit](https://github.com/baznamit)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/baznamit)
- 🐦 Twitter: [@baznamit1269](https://twitter.com/baznamit1269)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

