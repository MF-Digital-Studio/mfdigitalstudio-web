# MF Digital Studio - Agency Website

A modern, high-performance agency website built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern dark theme design
- ⚡ High-performance and optimized
- 📱 Fully responsive across all devices
- 🎯 Clean component architecture
- 🚀 Fast page load times
- ♿ Accessible navigation

## Tech Stack

- **React 18.3.1** - UI library
- **Vite 6.3.5** - Build tool
- **Tailwind CSS 4.1.12** - Styling
- **Inter Font** - Typography

## Project Structure

```
/src
  /app
    App.tsx                 # Main app component
    /components
      Header.tsx           # Fixed navigation header
      Hero.tsx             # Hero section with CTA
      Services.tsx         # Services showcase
      Standards.tsx        # Company standards
      Work.tsx             # Portfolio/projects
      NeedHelp.tsx         # Service options
      About.tsx            # About the company
      Contact.tsx          # Contact form
      Footer.tsx           # Footer with links
  /styles
    index.css              # Main CSS entry
    tailwind.css           # Tailwind imports
    theme.css              # Theme variables
    fonts.css              # Font imports
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Customization

### Colors
The main brand colors can be adjusted in `/src/app/App.tsx` and component files. Current color scheme:
- Background: `#0a0e1a` (dark blue)
- Primary CTA: White
- Accent: Blue and Purple gradients

### Content
All text content is in Turkish and can be modified directly in the component files.

### Sections
Each section is a separate component and can be easily reordered or removed from `App.tsx`.

## License

© 2024 MF Digital Studio. All rights reserved.
