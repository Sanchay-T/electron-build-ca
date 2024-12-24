Electron App - Offline CA Variant

This repository contains an Electron-based application with a React frontend. The app is configured for building and packaging on both macOS and Windows platforms.

Features
• Cross-platform application built with Electron and React.
• Built using electron-builder for macOS and Windows.
• Packaged for macOS (DMG, ZIP) and Windows (EXE, ZIP).
• Includes shadcn/ui components and styling.

Prerequisites

Common Prerequisites (For Both Platforms) 1. Node.js (v14 or higher recommended) 2. npm (comes with Node.js) 3. Git (to clone the repository)

Platform-Specific Tools

For macOS
• Ensure you have Xcode Command Line Tools installed:

xcode-select --install

For Windows
• Install Visual Studio Build Tools for Node.js native modules.
• Add Git to your PATH environment variable (if not done during Git installation).

Setting Up the Project

Follow these steps to set up the project after cloning the repository.

1. Clone the Repository

git clone https://github.com/Sanchay-T/electron-build-ca.git
cd electron-build-ca

2. Install Dependencies

npm install

Building the Application

For macOS

Step 1: Build the React App

npm run build

Step 2: Build the Electron Executable

npm run build:electron -- --mac

For Windows

Step 1: Build the React App

npm run build

Step 2: Build the Electron Executable

npm run build:electron -- --win

Cleaning and Rebuilding

If you encounter issues during the build process, follow these steps: 1. Remove the node_modules directory:

rm -rf node_modules # macOS/Linux
del /s /q node_modules # Windows

    2.	Reinstall dependencies:

npm install

    3.	Rebuild the Electron app:
    •	macOS:

npm run build:electron -- --mac

    •	Windows:

npm run build:electron -- --win

Output Files

The following files will be created in the dist/ directory:
• macOS DMG File: dist/Electron App-1.0.0-arm64.dmg (Installer)
• macOS ZIP File: dist/Electron App-1.0.0-arm64-mac.zip (Standalone Archive)
• Windows EXE File: dist/Electron App Setup 1.0.0.exe (Installer)
• Windows ZIP File: dist/Electron App 1.0.0-win.zip (Standalone Archive)

Running the Application

On macOS

Using the DMG File 1. Open the DMG file:

open "dist/Electron App-1.0.0-arm64.dmg"

    2.	Drag the app to your Applications folder.
    3.	Launch it from Applications.

Using the ZIP File 1. Extract the ZIP file:

unzip "dist/Electron App-1.0.0-arm64-mac.zip" -d ./output/

    2.	Navigate to the extracted folder and run the app.

On Windows

Using the EXE File 1. Navigate to the dist/ folder and double-click the EXE file:

dist\Electron App Setup 1.0.0.exe

    2.	Follow the on-screen installation instructions.
    3.	Launch the app from the Start Menu or desktop shortcut.

Using the ZIP File 1. Extract the ZIP file:

Expand-Archive -Path "dist\Electron App 1.0.0-win.zip" -DestinationPath .\output\

    2.	Navigate to the extracted folder and run the EXE file.

Notes 1. macOS:
• Built for Apple Silicon (arm64).
• Not code-signed, so macOS might show a security prompt. Right-click the app and select “Open” to bypass the warning. 2. Windows:
• Installer and ZIP package available.
• Not code-signed, so Windows might flag the app as unverified. Select “More info” > “Run anyway” to proceed. 3. Cross-Platform Issues:
• Some ESLint warnings (e.g., unused variables) may appear but do not affect functionality.

Contributing

Feel free to contribute by submitting issues or pull requests. Follow the project’s code style and standards.

License

This project is licensed under the MIT License.

With this README, you can seamlessly set up and build the application on both macOS and Windows. Let me know if you need any further adjustments!
