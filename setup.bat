@echo off
echo 🚀 Setting up Modern Portfolio Website...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npm is not installed. Please install npm.
    pause
    exit /b 1
)

echo ✅ npm found
npm --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

if %errorlevel% equ 0 (
    echo ✅ Dependencies installed successfully!
) else (
    echo ❌ Failed to install dependencies
    pause
    exit /b 1
)

REM Create .gitignore if it doesn't exist
if not exist .gitignore (
    echo 📝 Creating .gitignore...
    (
        echo # Dependencies
        echo node_modules/
        echo npm-debug.log*
        echo yarn-debug.log*
        echo yarn-error.log*
        echo.
        echo # Production build
        echo dist/
        echo build/
        echo.
        echo # Environment variables
        echo .env
        echo .env.local
        echo .env.development.local
        echo .env.test.local
        echo .env.production.local
        echo.
        echo # IDE
        echo .vscode/
        echo .idea/
        echo *.swp
        echo *.swo
        echo.
        echo # OS
        echo .DS_Store
        echo Thumbs.db
        echo.
        echo # Logs
        echo logs
        echo *.log
        echo.
        echo # Runtime data
        echo pids
        echo *.pid
        echo *.seed
        echo *.pid.lock
        echo.
        echo # Coverage directory used by tools like istanbul
        echo coverage/
        echo.
        echo # TypeScript cache
        echo *.tsbuildinfo
    ) > .gitignore
    echo ✅ .gitignore created!
)

echo.
echo 🎉 Setup complete!
echo.
echo 📋 Available commands:
echo   npm run dev     - Start development server
echo   npm run build   - Build for production
echo   npm run preview - Preview production build
echo   npm run lint    - Lint code
echo   npm run format  - Format code
echo.
echo 🚀 To start developing:
echo   npm run dev
echo.
echo 🌐 The dev server will open at http://localhost:3000
pause