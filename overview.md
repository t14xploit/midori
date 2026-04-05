# Project Overview: Midori Café

This document outlines the technical specifications and design tokens for recreating the Midori Café landing page using **Next.js 15+** and **Tailwind CSS**.

---

## Tech Stack & Versions
* **Framework:** Next.js 15.x (App Router)
* **Styling:** Tailwind CSS 4.x
* **Icons:** Lucide React (for Nav/UI icons)
* **Fonts:** Next/Font (Google Fonts)
* **Language:** TypeScript

---

## Design Tokens

### 1. Color Palette
| Element | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Background** | `#0D1B15` | Deep forest green base |
| **Secondary Overlay** | `#1A2E26` | Hero card / Button backgrounds |
| **Accent Green** | `#2D4F3F` | Hover states and button containers |
| **Text Primary** | `#F5F2ED` | Headings and navigation (Off-white) |
| **Text Secondary** | `#A0AC9F` | Icons and descriptive labels |
| **Price/CTA Text** | `#FFFFFF` | Pure white for high contrast |

### 2. Typography
* **Heading Font:** Serif (e.g., *Playfair Display* or *Instrument Serif*)
    * **Hero Title:** `text-8xl` (~96px), Font-weight: 400.
* **Body/Nav Font:** Sans-serif (e.g., *Inter* or *Montserrat*)
    * **Navigation:** `text-sm`, Letter-spacing: Wide.
    * **Labels:** `text-xs`, Uppercase/Capitalized.

### 3. Layout & Sizing
* **Max Width:** `max-w-7xl` (1280px) for content alignment.
* **Navigation Height:** `h-20` (80px).
* **Border Radius:** * Buttons: `rounded-full`.
    * Hero Image: `rounded-3xl`.
* **Pricing:** `159 SEK`, `text-2xl`.

---

## File Structure
```text
/src
  /app
    layout.tsx
    page.tsx
  /components
    Navbar.tsx
    Hero.tsx
    ProductSelector.tsx
  /assets (Images)
```

---

## Libraries to Install
```bash
npm install lucide-react clsx tailwind-merge
```

---

### Implementation Notes
* **Background:** Use a radial gradient to mimic the soft light pool behind the glass.
* **Glassmorphism:** Use `backdrop-blur-md` and `bg-white/5` for the bottom carousel navigation.
* **Hero Image:** Positioned centrally with a subtle "smoke" or "mist" overlay using absolute positioned PNGs or CSS filters.