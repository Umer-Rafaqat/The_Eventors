# Design Layers Documentation - The Eventors

## Visual Layer Hierarchy (Bottom to Top)

### Layer 1: Base Foundation
- **Background**: Solid black (`bg-black`) and gradient backgrounds (`bg-gradient-to-b from-black to-gray-900`)
- **Purpose**: Creates the dark, premium foundation for the entire site
- **Usage**: Applied to main sections and body

### Layer 2: Content Containers
- **Structure**: Full-width containers with `max-w-7xl mx-auto` for content centering
- **Z-index**: Default/auto (z-0)
- **Purpose**: Structural layout, spacing, and content organization
- **Padding**: Responsive padding with `px-4 sm:px-6 lg:px-8`

### Layer 3: Elevated Cards (Glass Morphism)
- **Background**: `bg-white/5 backdrop-blur-xl`
- **Borders**: `border border-white/10`
- **Examples**: 
  - Service cards
  - Testimonial boxes
  - Contact information cards
  - Booking form container
- **Purpose**: Content elevation with frosted glass effect
- **Shadow**: `shadow-[0_0_20px_rgba(168,85,247,0.2)]` for subtle glow

### Layer 4: Interactive Elements
- **Primary Buttons**:
  - Background: `bg-gradient-to-r from-purple-600 to-pink-600`
  - Border: `border border-purple-400/30`
  - Shadow: `shadow-[0_0_30px_rgba(168,85,247,0.5)]`
  - Hover: `hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]`
  
- **Secondary Buttons**:
  - Background: `bg-white/10 backdrop-blur-xl`
  - Border: `border border-white/20`
  - Hover: `hover:bg-white/20`

- **Purpose**: User interaction and calls-to-action

### Layer 5: Image Overlays
- **Dark Gradient**: `bg-gradient-to-t from-black/60 to-transparent`
- **Hover Effects**: `opacity-0 group-hover:opacity-100`
- **Transition**: `transition-opacity duration-300`
- **Purpose**: Image enhancement, text readability, and interactive feedback

### Layer 6: Glow/Shadow Effects
- **Purple Glow**: 
  - Default: `shadow-[0_0_30px_rgba(168,85,247,0.5)]`
  - Hover: `hover:shadow-[0_0_50px_rgba(168,85,247,0.8)]`
- **White Glow**: `shadow-[0_0_20px_rgba(255,255,255,0.1)]`
- **Purpose**: Premium aesthetic, depth perception, and visual hierarchy

### Layer 7: Fixed Navigation (Highest)
- **Z-index**: `z-50`
- **Background**: `bg-black/90 backdrop-blur-sm`
- **Border**: `border-b border-gray-800`
- **Position**: `fixed top-0 left-0 right-0`
- **Purpose**: Always accessible navigation that stays on top

---

## Color System

### Primary Colors
- **Purple**: `#a855f7` (purple-500), `#9333ea` (purple-600)
- **Pink**: `#ec4899` (pink-500), `#db2777` (pink-600)
- **Gradient**: `from-purple-600 to-pink-600`

### Background Colors
- **Base**: Black (`#000000`)
- **Secondary**: Gray-900 (`#111827`)
- **Glass Elements**: `white/5`, `white/10`, `white/20` (with backdrop-blur)

### Text Colors
- **Primary**: White (`#ffffff`)
- **Secondary**: Gray-300 (`#d1d5db`)
- **Muted**: Gray-400 (`#9ca3af`)
- **Subtle**: Gray-500 (`#6b7280`)

### Border Colors
- **Default**: `gray-800`, `white/10`, `white/20`
- **Interactive**: `purple-500/50`, `purple-400/30`

---

## Depth Technique

The site achieves depth through a combination of:

1. **Backdrop Blur**: `backdrop-blur-xl` and `backdrop-blur-sm`
2. **Transparency**: Using alpha channels (`/5`, `/10`, `/20`, `/90`)
3. **Layered Shadows**: Multiple shadow intensities for different states
4. **Gradients**: Directional gradients for dimension

---

## Interaction Patterns

### Hover States
- **Glow Intensification**: Shadows increase in size and opacity
- **Border Enhancement**: Borders change color to purple variants
- **Scale Transform**: Images scale to 110% (`group-hover:scale-110`)
- **Opacity Transitions**: Overlays fade in/out

### Transitions
- **Duration**: Typically `duration-300` or `duration-500`
- **Timing**: Default ease function
- **Properties**: `transition-all` for comprehensive effects

---

## Usage Guidelines

### When to Use Each Layer

1. **Base Foundation**: Every section needs a background
2. **Content Containers**: Wrap all major content blocks
3. **Glass Cards**: For grouped content that needs elevation
4. **Primary Buttons**: Main CTAs only (1-2 per section)
5. **Secondary Buttons**: Alternative actions
6. **Image Overlays**: On all hover-able images in galleries
7. **Glow Effects**: On premium elements and interactive components
8. **Fixed Nav**: Site-wide navigation only

### Consistency Rules

- Always use the purple-to-pink gradient for primary actions
- Maintain consistent border radius with Tailwind's rounded classes
- Keep glow shadows consistent across similar elements
- Use the same backdrop-blur intensity for elements at the same layer

---

## Implementation Example

```tsx
// Glass Card with Glow
<div className="bg-white/5 backdrop-blur-xl p-8 rounded-xl border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300">
  {/* Content */}
</div>

// Primary CTA Button
<button className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] transition-all duration-300 border border-purple-400/30">
  Call to Action
</button>

// Image with Overlay
<div className="relative group">
  <img className="transition-transform duration-500 group-hover:scale-110" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
```

---

**Last Updated**: April 22, 2026
**Project**: The Eventors - Event Planning Website
