# 🧪 Local Testing Guide

Your modern React portfolio is now running locally! Here's everything you need to know about testing.

## 🚀 **Development Server (Currently Running)**

### **✅ LIVE NOW:**
```
➜  Local:   http://localhost:3000/my-site/
➜  Network: use --host to expose
```

**Click the link above or visit:** `http://localhost:3000/my-site/`

### **Development Features:**
- ✅ **Hot Module Replacement** - Changes appear instantly
- ✅ **React DevTools** - Debug your components
- ✅ **Source Maps** - See original TypeScript code
- ✅ **Error Overlay** - Visual error messages
- ✅ **Fast Refresh** - Preserves state on edits

## 🔄 **Available Testing Commands**

### **1. Development Server (Live Editing)**
```bash
npm run dev
```
- **URL:** `http://localhost:3000/my-site/`
- **Best for:** Development, making changes, debugging
- **Features:** Hot reload, dev tools, unminified code

### **2. Production Preview (Exact GitHub Pages)**
```bash
npm run build
npm run preview
```
- **URL:** `http://localhost:4173/my-site/`
- **Best for:** Final testing before deployment
- **Features:** Minified code, optimized assets, exact production build

### **3. Build Test (Check for Errors)**
```bash
npm run build
```
- **Purpose:** Verify TypeScript compilation and build process
- **Output:** Creates `dist/` folder with optimized files
- **Check:** Look for any build errors or warnings

## 📱 **What to Test Locally**

### **✅ Responsive Design**
1. **Desktop** - Full layout with all sections
2. **Tablet** - Medium screens (768px - 1024px)
3. **Mobile** - Small screens (< 768px)
4. **Navigation** - Mobile menu functionality

### **✅ Interactive Features**
- [ ] **Smooth scrolling** between sections
- [ ] **Navigation links** work correctly
- [ ] **Contact form** accepts input
- [ ] **Hover effects** on buttons and cards
- [ ] **Animations** trigger on scroll

### **✅ Content Display**
- [ ] **Images load** correctly from `Pics/` folder
- [ ] **Text content** displays properly
- [ ] **Skills sections** show all technologies
- [ ] **Projects section** displays your work
- [ ] **Contact info** is accurate

### **✅ Performance**
- [ ] **Fast loading** - Page loads quickly
- [ ] **Smooth animations** - No lag or stuttering
- [ ] **Browser console** - No JavaScript errors

## 🌐 **Browser Testing**

Test in multiple browsers:
- ✅ **Chrome** (recommended for development)
- ✅ **Firefox**
- ✅ **Safari** (if on Mac)
- ✅ **Edge**

## 📱 **Mobile Testing Tools**

### **1. Browser DevTools**
```bash
# In Chrome/Firefox:
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

### **2. Real Device Testing**
```bash
# Expose to network
npm run dev -- --host

# Then access from mobile:
# http://[YOUR_IP]:3000/my-site/
```

## 🔧 **Development Tips**

### **Making Changes:**
1. **Edit any file** in `src/` folder
2. **Save** the file
3. **Browser automatically updates** - no refresh needed!

### **Common Directories:**
- `src/components/` - React components (Header, Hero, About, etc.)
- `src/index.css` - Global styles
- `Pics/` - Images and assets
- `package.json` - Dependencies and scripts

### **Useful Keyboard Shortcuts:**
- `Ctrl+S` - Save file (triggers hot reload)
- `Ctrl+Shift+I` - Open browser DevTools
- `Ctrl+Shift+M` - Toggle mobile view
- `F5` - Full page refresh (if needed)

## 🐛 **Troubleshooting**

### **Server Not Starting:**
```bash
# Check if port 3000 is busy
netstat -ano | findstr :3000

# Or use different port
npm run dev -- --port 3001
```

### **Changes Not Appearing:**
1. **Hard refresh:** `Ctrl+F5`
2. **Clear cache:** `Ctrl+Shift+R`
3. **Restart server:** `Ctrl+C` then `npm run dev`

### **Build Errors:**
```bash
# Check TypeScript errors
npm run build

# Fix linting issues
npm run lint
```

## 📊 **Performance Testing**

### **Lighthouse Audit:**
1. Open **Chrome DevTools** (`F12`)
2. Go to **Lighthouse** tab
3. Click **Generate report**
4. Check **Performance**, **Accessibility**, **SEO** scores

### **Expected Scores:**
- 🎯 **Performance:** 90+
- 🎯 **Accessibility:** 95+
- 🎯 **Best Practices:** 95+
- 🎯 **SEO:** 90+

## 🔄 **Testing Workflow**

### **During Development:**
1. **Start dev server:** `npm run dev`
2. **Make changes** to components
3. **Check in browser** - auto-refreshes
4. **Test on mobile** using DevTools
5. **Repeat** until satisfied

### **Before Deployment:**
1. **Build for production:** `npm run build`
2. **Test production build:** `npm run preview`
3. **Check console** for errors
4. **Test all features** work correctly
5. **Deploy:** `npm run deploy`

## 🎯 **Your Live Local URLs**

### **Development (Currently Running):**
- **Desktop:** `http://localhost:3000/my-site/`
- **Mobile testing:** Use browser DevTools

### **Production Preview:**
```bash
npm run preview
# Then visit: http://localhost:4173/my-site/
```

---

## 🎉 **You're All Set!**

Your modern portfolio is running locally and ready for testing. Make changes to any file in the `src/` folder and watch them appear instantly in your browser!

**Happy coding!** 🚀