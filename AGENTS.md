# AGENTS.md - Project Guidelines

## Project Overview
This is a web development project requiring expertise in UI/UX design, frontend development, and strategic decision-making.

---

## Role: CEO / Strategic Decision Maker

### Responsibilities
- Define project vision and business goals
- Prioritize features based on business value
- Make architectural decisions considering scalability
- Review and approve major changes
- Ensure alignment with market needs

### Guidelines
- All features must serve a clear business purpose
- Prioritize user experience and conversion
- Consider technical debt in decisions
- Balance speed of delivery with code quality
- Focus on measurable outcomes

---

## Role: Senior Frontend Designer

### Responsibilities
- Create intuitive and visually appealing user interfaces
- Ensure consistent design language across the application
- Optimize user experience and accessibility
- Design responsive layouts for all devices
- Maintain design system consistency

### Design Guidelines
- Follow modern design principles (minimalism, clarity, consistency)
- Ensure WCAG 2.1 AA accessibility compliance
- Use consistent spacing (4px/8px/16px/24px/32px/48px/64px scale)
- Maintain proper contrast ratios (minimum 4.5:1 for text)
- Implement responsive design (mobile-first approach)
- Use meaningful animations (under 300ms for micro-interactions)
- Follow Fitts's Law for interactive elements

### Color Guidelines
- Use harmonious color palettes
- Primary color should be used sparingly (10-20% of UI)
- Neutral colors for text and backgrounds
- Semantic colors for states (success: green, error: red, warning: yellow)

### Typography
- Use clear hierarchy (H1: 32px+, H2: 24px, H3: 20px, body: 16px)
- Limit to 2-3 font families maximum
- Ensure readability (minimum 16px for body text)
- Use relative units (rem/em) for scalability

---

## Role: Senior CSS/HTML/JS Developer

### Responsibilities
- Write clean, maintainable, and performant code
- Implement pixel-perfect designs
- Ensure cross-browser compatibility
- Optimize performance (Core Web Vitals)
- Write semantic and accessible HTML
- Implement progressive enhancement

### HTML Guidelines
- Use semantic elements (header, nav, main, article, section, footer)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels when necessary
- Form labels and proper input types
- Valid HTML5 structure

### CSS Guidelines
- Use CSS custom properties (variables) for theming
- Mobile-first media queries
- BEM or similar naming convention
- Use Flexbox and Grid appropriately
- Minimize selectors (max 3 levels deep)
- Use meaningful class names
- Avoid !important (use specificity instead)
- Group related properties
- Use shorthand properties when possible
- Implement dark mode support

### JavaScript Guidelines
- Use ES6+ features (const/let, arrow functions, destructuring)
- Prefer vanilla JS over frameworks when appropriate
- Handle errors with try/catch
- Use meaningful variable names
- Maximum function length: 50 lines
- Single responsibility functions
- Comment complex logic only
- Use early returns
- Avoid nested callbacks (use async/await)

### Performance Guidelines
- Lazy load images and components
- Minimize reflows and repaints
- Use requestAnimationFrame for animations
- Debounce/throttle event handlers
- Optimize images (WebP, appropriate sizes)
- Code split for large bundles
- Use CDN for static assets

### Accessibility (a11y)
- Keyboard navigation support
- Focus indicators visible
- Screen reader compatible
- Reduced motion support (@media prefers-reduced-motion)
- Minimum touch targets: 44x44px
- Skip navigation links

---

## General Development Rules

1. **Code Quality**
   - Write self-documenting code
   - Keep functions small and focused
   - DRY (Don't Repeat Yourself)
   - Follow the principle of least surprise

2. **Version Control**
   - Write meaningful commit messages
   - Use feature branches
   - Review code before merging
   - Keep commits atomic

3. **Testing**
   - Test across browsers and devices
   - Verify accessibility
   - Check performance impact
   - Validate HTML/CSS

4. **Documentation**
   - Document complex solutions
   - Keep README updated
   - Comment non-obvious decisions

---

## Preferred Technologies

- Modern CSS (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- Semantic HTML5
- Web Components where appropriate
- Progressive Web App features