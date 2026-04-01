# SMASH Invoices Design System
## 1. Brand Identity
**Project Name:** SMASH Invoices
**Design Philosophy:** Bold, high-impact, typographic-first. Built for trade professionals who need speed and clarity. The aesthetic is "Billboard Brutalism"—massive type, high contrast, and zero friction.
---
## 2. Color Palette
| Name | Hex | Usage |
| :--- | :--- | :--- |
| **Brand Black** | `#0F172A` | Primary text, dark backgrounds, deep slate tones. |
| **SMASH Yellow** | `#DFFF00` | Primary accent, primary buttons, high-visibility alerts. |
| **Surface** | `#F8FAFC` | Secondary backgrounds, input fields, soft containers. |
| **Border** | `#E2E8F0` | UI element borders, subtle separation lines. |
| **Accent Dark** | `#A8CC00` | Hover states for primary buttons. |
| **White** | `#FFFFFF` | Card backgrounds, text on dark surfaces. |
---
## 3. Typography
### Display Headlines
- **Font:** SF Pro Display Black / Inter Black
- **Leading (Line Height):** `0.88`
- **Tracking (Letter Spacing):** `-0.05em` (Tailwind: `tracking-tighter`)
- **Case:** Uppercase
- **Impact:** Used for marketing hero sections and primary screen headers.
### Body & Supporting Text
- **Font:** SF Pro Display Medium / Inter Medium
- **Leading (Line Height):** `1.15`
- **Impact:** Used for descriptions, sub-labels, and general UI content.
### Technical Data
- **Font:** JetBrains Mono
- **Impact:** Used for pricing, code snippets, and metadata.
---
## 4. Spacing System
Built on a 4px base unit.
- **XS:** 4px
- **SM:** 8px
- **MD:** 16px
- **LG:** 24px
- **XL:** 32px
- **2XL:** 48px
- **3XL:** 64px
---
## 5. Layout Primitives
### Cards
- **Radius:** `32px` (`rounded-[32px]`)
- **Border:** `2px solid #E2E8F0`
- **Shadow:** `shadow-sm`
- **Padding:** Standard `32px` (8 units)
### Buttons (Primary)
- **Height:** `56px` (`h-14`)
- **Radius:** `16px` (`rounded-2xl`)
- **Font:** `Black` (900 weight)
- **Case:** `Uppercase`
- **Tracking:** `tracking-widest`
- **Colors:** Background: `#DFFF00`, Text: `#0F172A`
### Inputs
- **Radius:** `12px` (`rounded-xl`)
- **Border:** `2px solid #E2E8F0`
- **Background:** `#F8FAFC`
---
## 6. Marketing Assets (Onboarding Screens)
- **Canvas Size:** 1290 x 2796 px (iPhone 15 Pro Max)
- **Internal Padding:** 120px
- **Element Gap:** 64px
- **Headline Size:** 200px
- **Subheadline Size:** 48px
---
## 7. Tailwind Configuration
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        brand: '#0F172A',
        accent: '#DFFF00',
        accentDark: '#A8CC00',
        surface: '#F8FAFC',
        border: '#E2E8F0',
      },
      borderRadius: {
        '3xl': '24px',
        '2xl': '16px',
        'xl': '12px',
      },
      fontFamily: {
        sans: ["SF Pro Display", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      }
    }
  }
}
```
## 8. Global CSS
```css
@layer components {
  .btn-primary {
    @apply h-14 bg-accent text-brand rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-accent/90 transition-all active:scale-95 shadow-lg shadow-accent/20;
  }

  .card-premium {
    @apply bg-white rounded-[32px] border-2 border-border shadow-sm overflow-hidden;
  }
}
```
