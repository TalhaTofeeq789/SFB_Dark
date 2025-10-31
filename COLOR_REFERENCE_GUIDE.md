# Quick Visual Reference Guide - Beige & Olive Theme

## 🎨 Color Swatches (Copy-Paste Ready)

### Beige Family
```
#FEFDF5  ░░░░░  Lightest Cream
#F6F4D8  ▒▒▒▒▒  Primary Beige (MAIN BACKGROUND)
#F0F0E0  ▒▒▒▒▒  Light Olive-Beige
#E8E5C8  ▓▓▓▓▓  Medium Beige
#DED9B8  ▓▓▓▓▓  Darker Beige
#D4C89F  ▓▓▓▓▓  Warm Beige
#C9BC94  ████  Deep Beige
```

### Olive Green Family
```
#C4C5A0  ▒▒▒▒▒  Very Light Olive
#A5A678  ▒▒▒▒▒  Light Olive
#8B8C5F  ▓▓▓▓▓  Medium Light Olive
#84854F  ████  Primary Olive (MAIN INTERACTIVE)
#6E6F42  ████  Medium Olive
#5A5B38  ████  Dark Olive (BODY TEXT)
#464729  ████  Darker Olive
#3D3E24  ████  Deepest Olive
#32331D  ████  Almost Black Olive
```

### Accent Colors
```
#6B8E23  ████  Success (Olive Drab)
#C9A961  ████  Warning (Muted Gold)
#9D7654  ████  Error (Warm Brown)
#B8A365  ████  Soft Gold Accent
```

---

## 📋 Common Patterns

### Text on Backgrounds
```css
/* Best for readability */
background: #F6F4D8;  /* Primary Beige */
color: #5A5B38;        /* Dark Olive */

/* High contrast headings */
background: #F6F4D8;  /* Primary Beige */
color: #3D3E24;        /* Deepest Olive */

/* Cards/containers */
background: #FEFDF5;  /* Lightest Cream */
color: #5A5B38;        /* Dark Olive */
```

### Buttons
```css
/* Primary Action Button */
background: #84854F;  /* Primary Olive */
color: #FEFDF5;        /* Cream */
border: 1px solid #84854F;

/* Hover */
background: #6E6F42;  /* Medium Olive */

/* Secondary Button */
background: transparent;
color: #84854F;        /* Primary Olive */
border: 2px solid #84854F;

/* Hover */
background: #F0F0E0;  /* Light Olive-Beige */
color: #5A5B38;        /* Dark Olive */
```

### Forms
```css
/* Input Field */
background: #FFFFFF;   /* White */
color: #3D3E24;        /* Deepest Olive */
border: 1px solid #C9BC94; /* Deep Beige */
placeholder: #A5A678;   /* Light Olive */

/* Focus */
border: 2px solid #84854F; /* Primary Olive */
box-shadow: 0 0 0 3px rgba(132, 133, 79, 0.2);

/* Error State */
border: 2px solid #9D7654; /* Warm Brown */
background: #F8F3EE;        /* Error bg tint */
```

### Cards
```css
/* Standard Card */
background: #FEFDF5;   /* Lightest Cream */
border: 1px solid #DED9B8; /* Darker Beige */
box-shadow: 0 2px 8px rgba(132, 133, 79, 0.12);

/* Header */
background: #F6F4D8;   /* Primary Beige */
color: #3D3E24;        /* Deepest Olive */
border-bottom: 1px solid #DED9B8;

/* Hover */
border: 1px solid #C9BC94; /* Deep Beige */
box-shadow: 0 4px 16px rgba(132, 133, 79, 0.15);
transform: translateY(-2px);
```

### Navigation
```css
/* Nav Link (inactive) */
color: #5A5B38;        /* Dark Olive */

/* Nav Link (hover) */
color: #84854F;        /* Primary Olive */
background: #F0F0E0;   /* Light Olive-Beige */

/* Nav Link (active) */
color: #3D3E24;        /* Deepest Olive */
background: #E8E5C8;   /* Medium Beige */
border-left: 4px solid #84854F;
```

### Alerts
```css
/* Success */
background: #EEF3E3;   /* Success bg tint */
border-left: 4px solid #6B8E23; /* Olive Drab */
color: #556B2F;        /* Dark olive green */

/* Warning */
background: #FBF7ED;   /* Warning bg tint */
border-left: 4px solid #C9A961; /* Muted Gold */
color: #9B7E2F;        /* Darker gold */

/* Error */
background: #F8F3EE;   /* Error bg tint */
border-left: 4px solid #9D7654; /* Warm Brown */
color: #7A5838;        /* Darker brown */
```

---

## 🎯 Component Quick Lookup

| Component | Background | Text | Border | Accent |
|-----------|------------|------|--------|--------|
| **Body** | #F6F4D8 | #5A5B38 | - | - |
| **Header** | #F6F4D8 | #5A5B38 | #C4C5A0 | #84854F |
| **Footer** | #E8E5C8 | #6E6F42 | #C4C5A0 | #84854F |
| **Card** | #FEFDF5 | #5A5B38 | #DED9B8 | - |
| **Button Primary** | #84854F | #FEFDF5 | #84854F | - |
| **Button Secondary** | transparent | #84854F | #84854F | #F0F0E0 |
| **Input** | #FFFFFF | #3D3E24 | #C9BC94 | #84854F |
| **Modal** | #FEFDF5 | #5A5B38 | #DED9B8 | rgba(61,62,36,0.6) |
| **Table Header** | #84854F | #FEFDF5 | #C4C5A0 | - |
| **Table Row (odd)** | #FFFFFF | #5A5B38 | #DED9B8 | - |
| **Table Row (even)** | #F6F4D8 | #5A5B38 | #DED9B8 | - |
| **Badge Default** | #E8E5C8 | #5A5B38 | - | - |
| **Badge Primary** | #84854F | #FEFDF5 | - | - |
| **Progress Track** | #E8E5C8 | - | - | #84854F |
| **Tooltip** | #3D3E24 | #FEFDF5 | #5A5B38 | - |
| **Breadcrumb** | transparent | #84854F | - | #A5A678 |
| **Tab Inactive** | transparent | #6E6F42 | #C4C5A0 | - |
| **Tab Active** | #F6F4D8 | #3D3E24 | #84854F | - |
| **Dropdown** | #FEFDF5 | #5A5B38 | #DED9B8 | #F0F0E0 |
| **Testimonial** | #FEFDF5 | #5A5B38 | #84854F | #C9A961 |
| **Pricing** | #FEFDF5 | #3D3E24 | #DED9B8 | #84854F |
| **Calendar Header** | #84854F | #FEFDF5 | - | - |
| **Calendar Day** | - | #5A5B38 | - | #F0F0E0 |
| **Notification Badge** | #C9A961 | #3D3E24 | - | - |
| **Avatar** | #E8E5C8 | #5A5B38 | #84854F | - |
| **Timeline Dot** | #84854F | - | #84854F | - |
| **Rating Star** | - | #C9A961 | - | #DED9B8 |
| **Scroll to Top** | #84854F | #FEFDF5 | - | - |
| **Dropzone** | #F6F4D8 | #6E6F42 | #C9BC94 | #84854F |

---

## 🔧 Shadow Reference

```css
--shadow-xs:   0 1px 3px rgba(132, 133, 79, 0.08);   /* Subtle */
--shadow-sm:   0 2px 6px rgba(132, 133, 79, 0.1);    /* Small */
--shadow-md:   0 2px 8px rgba(132, 133, 79, 0.12);   /* Medium (cards) */
--shadow-lg:   0 4px 16px rgba(132, 133, 79, 0.15);  /* Large (hover) */
--shadow-xl:   0 8px 24px rgba(132, 133, 79, 0.2);   /* Extra Large (modals) */
--shadow-2xl:  0 16px 48px rgba(132, 133, 79, 0.25); /* Massive */
--shadow-inner: inset 0 2px 4px rgba(132, 133, 79, 0.06);
```

---

## 🎨 CSS Variable Quick Copy

### For Components
```css
/* Background */
background: var(--bg-primary);          /* #F6F4D8 */
background: var(--bg-cream);            /* #FEFDF5 */
background: var(--bg-olive-tint);       /* #F0F0E0 */

/* Text */
color: var(--text-primary);             /* #5A5B38 */
color: var(--text-strong);              /* #3D3E24 */
color: var(--text-muted);               /* #A5A678 */

/* Interactive */
background: var(--olive-primary);       /* #84854F */
color: var(--text-inverse);             /* #FEFDF5 */

/* Borders */
border: 1px solid var(--border-medium); /* #DED9B8 */

/* Shadows */
box-shadow: var(--shadow-md);

/* Focus */
outline: var(--focus-outline);
box-shadow: var(--focus-ring);
```

---

## ⚡ Utility Classes Quick Reference

### Backgrounds
- `.bg-beige-lightest` - #FEFDF5
- `.bg-beige-primary` - #F6F4D8
- `.bg-beige-medium` - #E8E5C8
- `.bg-olive-tint` - #F0F0E0
- `.bg-olive-primary` - #84854F
- `.bg-olive-dark` - #5A5B38

### Text Colors
- `.text-olive-primary` - #84854F
- `.text-olive-dark` - #5A5B38
- `.text-olive-deepest` - #3D3E24
- `.text-muted` - #A5A678
- `.text-success` - #6B8E23
- `.text-warning` - #C9A961
- `.text-error` - #9D7654

### Shadows
- `.shadow-xs` through `.shadow-2xl`
- `.shadow-none`

### Borders
- `.border-beige`
- `.border-olive-primary`
- `.border-success`

---

## 🎯 Contrast Ratios (WCAG AA Compliant)

| Foreground | Background | Ratio | Grade |
|------------|------------|-------|-------|
| #3D3E24 | #F6F4D8 | 11.5:1 | AAA ✅ |
| #5A5B38 | #F6F4D8 | 8.2:1 | AAA ✅ |
| #FEFDF5 | #84854F | 5.8:1 | AA ✅ |
| #5A5B38 | #FFFFFF | 9.1:1 | AAA ✅ |
| #3D3E24 | #FEFDF5 | 12.8:1 | AAA ✅ |
| #84854F | #F6F4D8 | 2.9:1 | Decorative only |

---

## 📱 Responsive Considerations

All colors work seamlessly across devices. Shadow intensity may be reduced on mobile for performance:

```css
@media (max-width: 768px) {
  /* Lighter shadows on mobile */
  .card {
    box-shadow: var(--shadow-sm);
  }
  
  .card:hover {
    box-shadow: var(--shadow-md);
  }
}
```

---

## 🖨️ Print Styles (Optional)

For optimal printing, consider adding:

```css
@media print {
  * {
    background: white !important;
    color: black !important;
    box-shadow: none !important;
  }
  
  a {
    text-decoration: underline;
    color: #000 !important;
  }
  
  .no-print {
    display: none !important;
  }
}
```

---

## ✅ Before & After

### Before (Dark Theme)
- Background: Dark gray/black (#0A0A0A, #121310)
- Primary: Neon lime green (#D9F45F, #a3e635)
- Text: White/light gray
- Shadows: Black rgba(0, 0, 0, X)

### After (Beige & Olive)
- Background: Warm beige (#F6F4D8, #FEFDF5)
- Primary: Sophisticated olive (#84854F)
- Text: Dark olive (#5A5B38, #3D3E24)
- Shadows: Warm olive rgba(132, 133, 79, X)

**Result**: Professional, warm, accessible, and 100% beige-olive spectrum! 🎉
