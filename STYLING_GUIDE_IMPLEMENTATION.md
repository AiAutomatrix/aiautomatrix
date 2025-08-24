# Styling Guide: Replicating the Header and Button Styles

This document provides a step-by-step guide for another agent to replicate the visual styling of the headers and buttons from this application. The core of the styling is achieved through a combination of CSS custom properties (variables), Tailwind CSS utility classes, and custom CSS classes.

---

## 1. Setting Up the Color Palette

The color scheme is the foundation of the design. It's defined using HSL values in `src/app/globals.css`. This allows for a flexible and easily maintainable theme.

**Action:** Add the following color definitions inside the `@layer base` in your global CSS file.

```css
@layer base {
  :root {
    /* Define light mode colors here if needed */
  }
 
  .dark {
    --background: 247 4% 10%; /* Charcoal Black */
    --foreground: 240 8% 97%;
    --card: 240 5% 14%;
    --card-foreground: 240 8% 97%;
    --popover: 255 6% 11%;
    --popover-foreground: 240 8% 97%;
    --primary: 187 100% 50%; /* Electric Blue */
    --primary-foreground: 255 6% 11%;
    --secondary: 240 5% 18%;
    --secondary-foreground: 240 8% 97%;
    --muted: 240 5% 18%;
    --muted-foreground: 240 5% 63%;
    --accent: 338 100% 62%; /* Neon Magenta */
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5% 20%;
    --input: 240 5% 20%;
    --ring: 187 100% 50%;
  }
}
```

**Action:** Ensure your `tailwind.config.ts` is configured to use these CSS variables.

```javascript
// tailwind.config.ts
// ...
theme: {
  extend: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      // ... other colors
    },
  },
},
// ...
```

---

## 2. Configuring the Fonts

The application uses two specific fonts from Google Fonts to achieve its modern aesthetic.

**Action:** Add the following font import links to the `<head>` of your main HTML layout file (e.g., `src/app/layout.tsx`).

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
<link
  href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
  rel="stylesheet"
/>
```

**Action:** Configure these fonts in your `tailwind.config.ts`.

```javascript
// tailwind.config.ts
// ...
theme: {
  extend: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      headline: ['Space Grotesk', 'sans-serif'],
    },
  },
},
// ...
```

---

## 3. Implementing the "Glassmorphism" Header

The header has a semi-transparent, blurred background that floats over the content.

**Action:** Create a Header component in React (e.g., `header.tsx`) and use the following Tailwind CSS classes on the root `<header>` element.

```jsx
<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
  {/* Header content goes here */}
</header>
```

- `sticky top-0 z-50`: Makes the header stick to the top of the viewport.
- `border-b border-border/40`: Adds a subtle, semi-transparent bottom border.
- `bg-background/95`: Sets the background to your main background color but with 95% opacity.
- `backdrop-blur`: Applies a blur effect to the content scrolling underneath.

---

## 4. Creating the Gradient Glow Button

The vibrant button effect comes from a custom CSS class.

**Action:** Add the following custom classes to your global CSS file (e.g., `src/app/globals.css`) inside a `@layer components` directive.

```css
@layer components {
  .btn-gradient {
    @apply bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold;
    box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
    transition: all 0.3s ease;
  }
  .btn-gradient:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 0 30px hsl(var(--accent) / 0.6);
  }
}
```

**Action:** To use this style, apply the `btn-gradient` class to any `<button>` or button component in your application.

**Example with ShadCN Button:**
```jsx
import { Button } from '@/components/ui/button';
import Link from 'next/link';

<Link href="#contact">
  <Button className="btn-gradient">Get a Quote</Button>
</Link>
```

By following these steps, the agent will be able to successfully replicate the core visual styles of the header and buttons in the target application.