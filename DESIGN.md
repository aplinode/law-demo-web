---
name: Justice & Heritage
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#44474e'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#74777e'
  outline-variant: '#c4c6cf'
  surface-tint: '#4a5f81'
  primary: '#000d22'
  on-primary: '#ffffff'
  primary-container: '#0a2342'
  on-primary-container: '#768baf'
  inverse-primary: '#b2c7ef'
  secondary: '#35618d'
  on-secondary: '#ffffff'
  secondary-container: '#a2cdff'
  on-secondary-container: '#2a5782'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#cba72f'
  on-tertiary-container: '#4e3d00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#b2c7ef'
  on-primary-fixed: '#021c3a'
  on-primary-fixed-variant: '#324768'
  secondary-fixed: '#d1e4ff'
  secondary-fixed-dim: '#a0cafc'
  on-secondary-fixed: '#001d35'
  on-secondary-fixed-variant: '#184974'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-v: 100px
  container-max: 1200px
  card-gap: 32px
  gutter: 24px
  margin-page: auto
---

## Brand & Style
The design system is engineered to evoke an immediate sense of authority, tradition, and unwavering trust. Targeted at a high-stakes legal clientele in Pakistan, the aesthetic balances **Modern Corporate** precision with **Premium Editorial** touches. 

The style utilizes a "Neo-Traditional" approach: clean, systematic layouts characteristic of international law firms, punctuated by Metallic Gold accents that signify prestige and high-tier service. The interface must remain dignified and austere, avoiding frivolous animations in favor of deliberate, smooth transitions that reflect professional composure. All visual content must strictly adhere to cultural sensitivities, focusing on architectural symmetry, legal parchment, and professional portraiture that conveys seasoned expertise.

## Colors
The palette is rooted in deep, scholarly tones. 
- **Deep Navy (#0A2342)**: The primary anchor, used for headers, primary buttons, and heavy typographic elements to establish institutional weight.
- **Professional Blue (#1F4E79)**: Used for supporting elements, secondary actions, and subtle background gradients to prevent the UI from feeling overly monolithic.
- **Metallic Gold (#D4AF37)**: Reserved strictly for accents—border highlights, iconography, and call-to-action details—representing excellence and the "gold standard" of legal counsel.
- **Surface Tones**: A crisp white base ensures maximum legibility, while the Light Background (#F8FAFC) is used to distinguish between different sections or card containers.

## Typography
The typography strategy pairings high-impact geometric headers with a highly legible, systematic body face. 
- **Montserrat** is utilized for all headings to provide a bold, confident architectural feel. Display sizes should use tighter letter-spacing for a modern, editorial look.
- **Inter** handles all functional and narrative text. It is chosen for its neutral, objective tone and exceptional readability in legal disclaimers and long-form advice.
- **Hierarchy**: Use strong weight contrasts (Bold vs. Regular) rather than excessive size variations to maintain a sophisticated, structured document feel.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy to mirror the stability of the legal profession. 
- **Max Width**: All core content is contained within a 1200px center-aligned wrapper.
- **Section Rhythm**: A generous 100px vertical padding between major sections creates a high-end, spacious feel, allowing the firm's messages "room to breathe."
- **Responsive Behavior**: On mobile devices, section spacing scales down to 64px, and container margins adjust to 20px. 
- **Grid**: A standard 12-column grid is used for desktop, collapsing to a single column for mobile. Cards and informational blocks should consistently use the 32px gap for both horizontal and vertical proximity.

## Elevation & Depth
This design system avoids heavy shadows in favor of **Low-Contrast Outlines** and **Ambient Depth**.
- **Cards**: Use a very soft, diffused shadow (0px 4px 20px rgba(10, 35, 66, 0.05)) to suggest elevation without appearing "floating."
- **Layering**: A "Tonal Layering" approach is preferred. Use the Light Background (#F8FAFC) to create recessed areas, and pure white for elevated interactive components.
- **Accents**: Depth is often communicated through 1px borders in Gold (#D4AF37) for featured items, creating a physical "framed" effect similar to a diploma or legal certificate.

## Shapes
The shape language is **Soft (0.25rem)**. 
While a completely sharp corner can feel too aggressive, a 4px (Soft) radius provides a subtle modern polish while retaining the rigidity and "sharpness" associated with law and order. 
- **Standard Radius**: 4px for buttons and input fields.
- **Large Radius**: 8px (rounded-lg) for content cards and modal containers.
- Avoid pill-shapes or high-roundness circles, as they diminish the authoritative tone of the brand.

## Components
### Header
- **Behavior**: Sticky. Transitions from transparent (with white text) over hero imagery to a solid White background with Deep Navy text upon scrolling.
- **Border**: A thin 2px Gold bottom border appears only when the header is in its "solid" state.

### Buttons
- **Primary**: Deep Navy background, white text, 4px corner radius. On hover, the background shifts to Professional Blue with a 1px Gold bottom border.
- **Secondary**: Ghost style with 1px Professional Blue border. On hover, fills with Professional Blue and white text.
- **Accent/CTA**: Gold background with Deep Navy text for high-priority "Consultation" actions.

### Cards
- **Practice Area Cards**: White background, 8px radius, subtle 1px border (#E2E8F0). Features a Gold icon at the top left.
- **Professional Profiles**: Clean, rectangular framing for male lawyer portraits. Name in Montserrat Bold, title in Gold Inter SemiBold.

### Input Fields
- **Style**: Minimalist. 1px light grey border that turns Professional Blue on focus. Labels sit outside the field in Inter Bold (12px).

### Lists & Accents
- Use Gold-colored checkmarks for "Services" or "Why Choose Us" lists to reinforce the premium value proposition.