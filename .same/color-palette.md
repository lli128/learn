# Dr. Li's Learning Clinic - Color Palette Documentation

## Brand Identity
**Primary Brand**: Dr. Li's Learning Clinic (李博士学习诊所)
**Website**: canlearn.pro
**Focus**: English Language Training (CLB, IELTS, CELPIP)

---

## Color System

### Primary Colors

#### Cyan (Primary Accent)
- **cyan-400**: `#22d3ee` - Main brand color, CELPIP Examiner, CLB 5
- **cyan-300**: `#67e8f9` - Hover states
- **Usage**: Primary CTAs, main headings, CELPIP branding

#### Blue (Secondary)
- **blue-400**: `#60a5fa` - High Success Rate feature
- **blue-300**: `#93c5fd` - Hover states
- **Usage**: Success metrics, statistics, positive outcomes

### Feature-Specific Colors

#### Green (Speaking)
- **green-400**: `#4ade80` - Speaking Excellence, IELTS Speaking
- **green-300**: `#86efac` - Hover states
- **Usage**: Speaking-related features, oral communication

#### Orange (Writing)
- **orange-400**: `#fb923c` - Writing Mastery, IELTS Writing
- **orange-300**: `#fdba74` - Hover states
- **Usage**: Writing-related features, essay correction

#### Purple (Customization)
- **purple-400**: `#c084fc` - Customized Plans, CLB 7
- **purple-300**: `#d8b4fe` - Hover states
- **Usage**: Personalization, advanced programs

#### Teal (Career)
- **teal-400**: `#2dd4bf` - Immigration & Career
- **teal-300**: `#5eead4` - Hover states
- **Usage**: Immigration, professional development

#### Pink (Community)
- **pink-400**: `#f472b6` - Teaching Methods, Learning Resources
- **pink-300**: `#f9a8d4` - Hover states
- **Usage**: Community features, teaching approaches

---

## Gradients

### Hero Gradient
```css
from-cyan-400 via-blue-500 to-pink-500
```
Used in main heading and logo accent

### Card Backgrounds
```css
from-gray-900/50 to-gray-800/50
```
Semi-transparent dark gradient for content cards

### Icon Backgrounds
- CELPIP/CLB 5: `from-cyan-500 to-blue-600`
- CLB 7: `from-purple-600 to-pink-600`
- Speaking: `from-green-600 to-teal-600`
- Writing: `from-orange-600 to-red-600`
- Flexible Schedule: `from-cyan-500 to-blue-600`
- Learning Resources: `from-pink-500 to-purple-600`
- Tech Support: `from-green-500 to-teal-600`
- Community: `from-orange-500 to-red-600`

---

## Typography Colors

### Headings
- **H1**: Gradient text (cyan-400 → blue-500 → pink-500)
- **H2**: `text-white` with gradient accents
- **H3 (Features)**: Accent colors matching feature category
  - Add `hover:text-{color}-300` for interactivity
  - Add `transition-colors cursor-default` for smooth transitions

### Body Text
- **Primary**: `text-white`
- **Secondary**: `text-gray-300`
- **Muted**: `text-gray-400`
- **Labels**: `text-cyan-400`

---

## Backgrounds

### Primary Background
- **Base**: `bg-[#0a0a0f]` (Very dark blue-black)

### Card Backgrounds
- **Primary**: `bg-gradient-to-br from-gray-900/50 to-gray-800/50`
- **Accent Sections**: Semi-transparent cyan/blue overlays
- **Dark Overlays**: `bg-black/30` with `border-white/5`

### Section Backgrounds
- **Gradient Sections**: `bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent`

---

## Borders & Effects

### Borders
- **Default**: `border-white/10`
- **Hover**: `border-cyan-500/50`
- **Active**: `border-cyan-500/20`

### Shadows
- Cards: `shadow`, `shadow-2xl`
- Hover effects: Scale and border color transitions

---

## Interactive States

### Hover Effects
All h3 headings include:
```css
hover:text-{color}-300 transition-colors cursor-default
```

### Buttons
- **Primary CTA**:
  - Base: `bg-gradient-to-r from-cyan-500 to-blue-500`
  - Hover: `from-cyan-600 to-blue-600`
- **Secondary**:
  - Base: `border-white/20 bg-white/5`
  - Hover: `bg-white/10`

---

## Statistics Cards

Each stat card uses a unique gradient:
- **15+ Years**: `from-teal-950/30 to-cyan-950/30` with `border-cyan-500/20`
- **800+ Students**: `from-blue-950/30 to-purple-950/30` with `border-blue-500/20`
- **95% Pass Rate**: `from-purple-950/30 to-pink-950/30` with `border-purple-500/20`
- **3 Months Avg**: `from-pink-950/30 to-rose-950/30` with `border-pink-500/20`

---

## Accessibility Notes

✅ All accent colors (400 shade) provide excellent contrast against dark backgrounds
✅ Text is white or light gray for maximum readability
✅ Hover states use lighter shades (300) for visual feedback
✅ Gradient text uses high-contrast color combinations

---

## Usage Guidelines

1. **Consistency**: Use feature-specific colors consistently across all pages
2. **Hierarchy**: H3 headings match their icon/feature color
3. **Interactivity**: All major headings include hover effects
4. **Accessibility**: Maintain WCAG AA contrast ratios (>4.5:1)
5. **Gradients**: Use sparingly for emphasis, not decoration

---

## File Locations

- Homepage: `src/app/page.tsx`
- Features Page: `src/app/features/page.tsx`
- Programs Page: `src/app/programs/page.tsx`
- Global Styles: `src/app/globals.css`
- Tailwind Config: `tailwind.config.ts`

---

## Version History

- **v15**: Added hover effects to all h3 headings
- **v15**: Improved contact information visibility
- **v15**: Applied consistent colors across all pages
- **v14**: Updated layout metadata
- **v13**: Updated contact information
