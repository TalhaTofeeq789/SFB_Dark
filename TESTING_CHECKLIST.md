# Testing & QA Checklist - Beige & Olive Theme

## 🎯 Pre-Launch Testing Checklist

### ✅ Visual Inspection

#### Global Elements
- [ ] Body background is Primary Beige (#F6F4D8)
- [ ] All text is readable (Dark Olive or deeper)
- [ ] No blue colors visible anywhere
- [ ] No purple colors visible anywhere
- [ ] No gray colors visible anywhere (should be beige/olive)
- [ ] No bright neon colors (original lime green replaced)
- [ ] All shadows are warm olive-based
- [ ] All borders are beige or olive tones

#### Navigation & Header
- [ ] Header background is beige
- [ ] Logo/brand text is olive
- [ ] Nav links are dark olive (inactive)
- [ ] Nav links turn primary olive on hover
- [ ] Active page has olive accent/background
- [ ] Mobile menu opens with cream background
- [ ] Mobile menu backdrop is deep olive overlay
- [ ] Search icon/input uses olive theme

#### Hero/Banner Section
- [ ] Background is beige gradient
- [ ] Main title is deepest olive (readable)
- [ ] Subtitle/tagline is olive text
- [ ] Feature chips have cream backgrounds
- [ ] Feature chips turn olive on hover
- [ ] CTA buttons use primary olive background

#### Buttons
- [ ] Primary buttons: Olive background, cream text
- [ ] Primary buttons darken on hover
- [ ] Secondary buttons: Cream bg, olive text & border
- [ ] Secondary buttons get olive-tint bg on hover
- [ ] Disabled buttons are light olive/beige
- [ ] Focus states show olive outline + ring
- [ ] Success buttons use olive drab
- [ ] Warning buttons use muted gold
- [ ] Error/danger buttons use warm brown

#### Forms & Inputs
- [ ] Text inputs have white backgrounds
- [ ] Input borders are deep beige
- [ ] Focused inputs show olive border + ring
- [ ] Placeholders are light olive (italic)
- [ ] Labels are dark olive
- [ ] Error states show warm brown border + error bg tint
- [ ] Success states show olive drab border + success bg tint
- [ ] Disabled inputs are beige with light olive text
- [ ] Checkboxes/radios use olive when checked
- [ ] Select dropdowns match input styling
- [ ] File upload areas use beige with olive accents

#### Cards & Containers
- [ ] Card backgrounds are lightest cream
- [ ] Card borders are darker beige or warm shadows
- [ ] Card headers have primary beige background
- [ ] Card text is dark olive
- [ ] Hover states lift cards with warm shadow
- [ ] Featured cards have olive borders

#### Tables
- [ ] Table headers: Olive background, cream text
- [ ] Table rows alternate white and beige
- [ ] Hover row gets light olive-beige background
- [ ] Selected row has olive left border
- [ ] Table borders are darker beige
- [ ] Sort icons match header text color

#### Alerts & Notifications
- [ ] Success alerts: Light green-beige bg, olive drab border
- [ ] Warning alerts: Light gold bg, muted gold border
- [ ] Error alerts: Light brown bg, warm brown border
- [ ] Info alerts: Light olive-beige bg, olive border
- [ ] Icons match their alert type colors
- [ ] Close buttons are visible and hover correctly

#### Modals & Overlays
- [ ] Modal backdrop is deep olive with transparency
- [ ] Modal container is cream with beige borders
- [ ] Modal headers have primary beige background
- [ ] Modal text is readable (dark olive)
- [ ] Close button is visible and hovers to olive
- [ ] Modal shadows are warm olive-based

#### Tabs & Accordions
- [ ] Inactive tabs: Medium olive text
- [ ] Active tab: Deepest olive text, olive bottom border
- [ ] Tab hover shows light olive-beige background
- [ ] Accordion headers are cream with olive text
- [ ] Accordion hover shows light olive-beige background
- [ ] Open accordion has darker beige background
- [ ] Accordion content has primary beige background

#### Badges & Pills
- [ ] Default badges: Medium beige bg, dark olive text
- [ ] Primary badges: Olive bg, cream text
- [ ] Success badges: Olive drab bg
- [ ] Warning badges: Muted gold bg, deep olive text
- [ ] Error badges: Warm brown bg, cream text
- [ ] Outline badges: Transparent bg, olive border

#### Dropdowns & Menus
- [ ] Dropdown background is cream
- [ ] Dropdown borders are darker beige
- [ ] Dropdown shadow is warm olive-based
- [ ] Menu items are dark olive text
- [ ] Hover items get light olive-beige background
- [ ] Active/selected items have deeper beige bg
- [ ] Dividers are subtle beige lines

#### Breadcrumbs & Pagination
- [ ] Breadcrumb links are primary olive
- [ ] Current page text is dark olive (bold)
- [ ] Separators are light olive
- [ ] Pagination buttons: Cream bg, olive border
- [ ] Active page: Olive bg, cream text
- [ ] Hover pages get light olive-beige background
- [ ] Disabled pages are beige with light olive text

#### Progress Bars & Loaders
- [ ] Progress track is medium beige
- [ ] Progress fill is primary olive
- [ ] Spinners/loaders are olive color
- [ ] Skeleton loaders shimmer beige to light olive-beige

#### Footer
- [ ] Footer background is medium/darker beige
- [ ] Section headings are deepest olive
- [ ] Links are dark olive, hover to primary olive
- [ ] Body text is medium olive
- [ ] Social icons are primary olive
- [ ] Copyright text is medium olive (smaller)

#### Specialized Components
- [ ] Pricing tables: Featured plans have olive borders
- [ ] Pricing headers use olive or beige
- [ ] Popular badges are muted gold
- [ ] Checkmarks are olive drab (success)
- [ ] Timeline dots are olive (active) or olive drab (completed)
- [ ] Timeline line is deep beige
- [ ] Testimonial quotes have olive left border
- [ ] Quote icons are muted gold
- [ ] Stars are muted gold (filled), beige (empty)
- [ ] Calendar headers are olive with cream text
- [ ] Selected dates have olive background
- [ ] Today's date has muted gold border
- [ ] Notification badges are muted gold
- [ ] User avatars have olive borders
- [ ] Status dots use correct colors (success/warning/error/olive)
- [ ] Drag zones have dashed beige borders
- [ ] Drag-over zones turn olive border
- [ ] Scroll-to-top button is olive circle
- [ ] Empty state icons are very light olive

---

## ♿ Accessibility Testing

### Contrast & Readability
- [ ] Run WAVE accessibility checker (no contrast errors)
- [ ] Run axe DevTools (no color contrast violations)
- [ ] All body text meets 4.5:1 minimum
- [ ] All headings meet 4.5:1 minimum
- [ ] All buttons/interactive elements meet 3:1 minimum
- [ ] Small text (< 18pt) meets stricter ratios
- [ ] Links are distinguishable without color alone

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Focus indicators are visible (olive outline + ring)
- [ ] Focus ring is at least 2px
- [ ] Focus never gets lost or trapped
- [ ] Skip-to-content links work (if present)
- [ ] Dropdown menus are keyboard accessible
- [ ] Modals can be closed with Escape key
- [ ] Form fields can be navigated with Tab/Shift+Tab

### Screen Reader Testing
- [ ] Run NVDA or JAWS (Windows)
- [ ] Run VoiceOver (Mac/iOS)
- [ ] All images have alt text
- [ ] Form labels are properly associated
- [ ] Buttons have descriptive text
- [ ] Headings are in logical order (h1 → h2 → h3)
- [ ] ARIA labels used where appropriate

### Color Blindness Simulation
- [ ] Test with Deuteranopia filter (red-green)
- [ ] Test with Protanopia filter (red-green)
- [ ] Test with Tritanopia filter (blue-yellow)
- [ ] Ensure interactive states are distinguishable
- [ ] Success/error/warning states use icons, not just color

---

## 📱 Responsive Testing

### Mobile (< 768px)
- [ ] All text is readable at small sizes
- [ ] Buttons are large enough (min 44x44px)
- [ ] Mobile menu opens correctly
- [ ] Cards stack vertically
- [ ] Tables are scrollable or responsive
- [ ] Forms are usable with touch
- [ ] Shadows are not too heavy
- [ ] No horizontal scrolling

### Tablet (768px - 1024px)
- [ ] Layout adapts appropriately
- [ ] Navigation collapses at correct breakpoint
- [ ] Cards display in grid (2 columns)
- [ ] All hover states work (touch-friendly)

### Desktop (> 1024px)
- [ ] Full navigation visible
- [ ] Cards display in optimal grid
- [ ] Hover states are smooth
- [ ] Shadows enhance depth
- [ ] Wide screens don't stretch content too much

---

## 🌐 Cross-Browser Testing

### Chrome/Edge (Chromium)
- [ ] All colors render correctly
- [ ] CSS variables work
- [ ] Shadows display properly
- [ ] Transitions are smooth
- [ ] Focus states visible

### Firefox
- [ ] Same as Chrome checklist
- [ ] :focus-visible works
- [ ] Scrollbar styling applies

### Safari (Mac/iOS)
- [ ] Same as Chrome checklist
- [ ] Webkit-specific prefixes work
- [ ] Backdrop filters work (if used)

### Internet Explorer 11 (if required)
- [ ] CSS variables fallback provided
- [ ] Colors display (may differ slightly)
- [ ] Layout is functional

---

## 🎨 Color Verification

### No Forbidden Colors
- [ ] No #3B82F6 (bright blue)
- [ ] No #2563EB (darker blue)
- [ ] No #8B5CF6 (purple)
- [ ] No #6B7280 (gray)
- [ ] No #9CA3AF (light gray)
- [ ] No #E5E7EB (very light gray)
- [ ] No #EF4444 (bright red)
- [ ] No #10B981 (bright green)
- [ ] No #000000 (pure black) → should be #32331D
- [ ] No #FFFFFF on colored backgrounds → should be #FEFDF5

### Correct Palette Usage
- [ ] Primary Beige (#F6F4D8) is main background
- [ ] Primary Olive (#84854F) is main interactive color
- [ ] Dark Olive (#5A5B38) is body text
- [ ] Deepest Olive (#3D3E24) is headings
- [ ] All shadows use rgba(132, 133, 79, X)
- [ ] All overlays use rgba(61, 62, 36, X)

---

## 🔍 Edge Cases

### Empty States
- [ ] Empty table displays correctly
- [ ] Empty search results show proper message
- [ ] No data charts/graphs show placeholder

### Loading States
- [ ] Skeleton loaders use beige-olive colors
- [ ] Spinners are olive
- [ ] Loading overlays use deep olive backdrop
- [ ] Progress indicators are olive

### Error States
- [ ] 404 page uses warm brown accents
- [ ] Form validation errors show warm brown
- [ ] Toast notifications for errors use warm brown
- [ ] Network error messages are styled

### Long Content
- [ ] Very long text is readable
- [ ] Tables with many rows are scrollable
- [ ] Dropdown menus with many items scroll properly
- [ ] Modal with long content is scrollable

### Special Characters & Languages
- [ ] Special characters display correctly
- [ ] Emojis don't break layout
- [ ] Right-to-left languages (if supported)
- [ ] Accented characters render properly

---

## ⚡ Performance

### CSS
- [ ] No unnecessary specificity wars
- [ ] CSS variables resolve quickly
- [ ] No layout thrashing
- [ ] Shadows don't cause repaint issues
- [ ] Transitions are hardware-accelerated (when possible)

### Images
- [ ] All images optimized
- [ ] No missing alt text
- [ ] Lazy loading implemented (if applicable)

### Load Time
- [ ] CSS files minified for production
- [ ] No flash of unstyled content (FOUC)
- [ ] Theme loads before page render

---

## 🖨️ Print Testing (Optional)

- [ ] Colors print acceptably (or use print stylesheet)
- [ ] Backgrounds print if needed
- [ ] Text is readable when printed
- [ ] Page breaks are appropriate
- [ ] Shadows/decorations removed in print

---

## 🎯 Final Visual Sweep

Go through every page and check:
- [ ] Home page
- [ ] About page
- [ ] Services pages (all 6)
- [ ] Contact page
- [ ] FAQ page
- [ ] Pricing page (if exists)
- [ ] Team page (if exists)
- [ ] Testimonials page (if exists)
- [ ] Project/Portfolio pages
- [ ] Blog/News pages
- [ ] Shop pages (if exists)
- [ ] 404/Error pages

---

## ✅ Sign-Off

Once all items are checked:

**Designer Approval**: _____________________ Date: _______

**Developer Approval**: _____________________ Date: _______

**Accessibility Approval**: _____________________ Date: _______

**Client Approval**: _____________________ Date: _______

---

## 🚀 Launch Readiness

- [ ] All checklist items completed
- [ ] No critical bugs found
- [ ] Performance is acceptable
- [ ] Accessibility standards met
- [ ] Cross-browser compatibility confirmed
- [ ] Responsive design verified
- [ ] Content reviewed and approved
- [ ] Analytics/tracking implemented
- [ ] SEO optimizations done
- [ ] Backup/rollback plan ready

**Ready for Launch**: YES ☐  |  NO ☐

---

## 📝 Known Issues / Future Improvements

(Document any minor issues or planned enhancements)

1. _______________________________________________________________
2. _______________________________________________________________
3. _______________________________________________________________

---

**Tested By**: ___________________________

**Date**: ___________________________

**Build Version**: ___________________________

**Notes**: _______________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
