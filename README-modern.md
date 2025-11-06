# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Responsive Design**: Works on all devices and screen sizes
- **Smooth Animations**: Framer Motion for beautiful transitions
- **Accessible**: Built with accessibility best practices
- **Fast Performance**: Optimized with Vite bundler
- **Type Safety**: Full TypeScript integration
- **Modern Styling**: Tailwind CSS for rapid styling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Utilities**: React Intersection Observer

## 📦 Installation

1. **Install Node.js** (version 16 or higher)
   - Download from [nodejs.org](https://nodejs.org/)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#66BFBF',    // Main brand color
  secondary: '#11999E',  // Secondary color
  accent: '#719fb0',     // Accent color
  dark: '#351f39',       // Dark backgrounds
  light: '#ccf2f4',      // Light backgrounds
}
```

### Content
- Update personal information in each component
- Replace images in the `Pics/` folder
- Modify social media links
- Add your own projects in `Projects.tsx`

### Styling
- Global styles: `src/index.css`
- Component-specific styles: Within each component file
- Tailwind utilities: Throughout the components

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Project portfolio
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── App.tsx              # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Update the `base` path in `vite.config.ts` if needed

### Netlify/Vercel
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- Lazy loading images
- Code splitting
- Optimized animations
- Minimal bundle size
- SEO optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help, feel free to reach out:
- Email: baznamit.github@gmail.com
- GitHub: [@baznamit](https://github.com/baznamit)

---

Built with ❤️ by Namit Pratap Singh