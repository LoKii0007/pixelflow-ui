# PixelFlow UI

A modern component library with beautiful microinteractions for React, Next.js, and HTML. PixelFlow UI provides a collection of reusable, accessible, and customizable UI components with smooth animations and transitions.

## Features

- 🎨 **Beautiful Microinteractions**: Enhance user experience with subtle and elegant animations
- 🌓 **Dark Mode Support**: Built-in light and dark mode with smooth transitions
- 📱 **Responsive Design**: Components work seamlessly across all device sizes
- 🧩 **Modular Architecture**: Use only what you need to keep your bundle size small
- 🔄 **Framework Agnostic**: Available for React, Next.js, and plain HTML
- 📝 **TypeScript Support**: Full TypeScript definitions for type safety
- 🎯 **Accessibility First**: WCAG compliant components for inclusive design
- 🎨 **Tailwind CSS Integration**: Works perfectly with Tailwind or use with regular CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

### React/Next.js (JavaScript)

```jsx
import { Button, Card, Hero } from 'pixelflow-ui';

function App() {
  return (
    <div>
      <Hero 
        title="Welcome to My App" 
        subtitle="Built with PixelFlow UI"
      />
      <Card>
        <h2>Getting Started</h2>
        <p>This is a simple example of using PixelFlow UI components.</p>
        <Button>Learn More</Button>
      </Card>
    </div>
  );
}
```

### React/Next.js (TypeScript)

```tsx
import { Button, Card, Hero } from 'pixelflow-ui';
import type { HeroProps } from 'pixelflow-ui';

function App() {
  const heroProps: HeroProps = {
    title: "Welcome to My App",
    subtitle: "Built with PixelFlow UI"
  };

  return (
    <div>
      <Hero {...heroProps} />
      <Card>
        <h2>Getting Started</h2>
        <p>This is a simple example of using PixelFlow UI components.</p>
        <Button>Learn More</Button>
      </Card>
    </div>
  );
}
```

### HTML/CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PixelFlow UI Example</title>
  <link rel="stylesheet" href="pixelflow-ui.css">
  <script src="pixelflow-ui.js" defer></script>
</head>
<body>
  <div class="pf-hero" data-title="Welcome to My App" data-subtitle="Built with PixelFlow UI"></div>
  
  <div class="pf-card">
    <h2>Getting Started</h2>
    <p>This is a simple example of using PixelFlow UI components.</p>
    <button class="pf-button">Learn More</button>
  </div>
</body>
</html>
```

## Available Components

- **Layout**: Hero, Container, Grid, Section
- **Navigation**: Navbar, Sidebar, Tabs, Breadcrumbs
- **Feedback**: Toast, Alert, Modal, Skeleton
- **Forms**: Button, Input, Select, Checkbox, Radio, Toggle
- **Data Display**: Card, Table, List, Badge
- **Media**: Image, Avatar, Carousel, Video
- **Microinteractions**: Hover Effects, Click Effects, Scroll Animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
