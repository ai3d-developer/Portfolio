# How to Add Your Photo to the Portfolio

## Step 1: Upload Your Photo
1. Click the **file upload** button in the top right of your v0 workspace
2. Select your photo file (JPG, PNG, WebP)
3. It will be added to the `public` folder automatically
4. Note the file name (e.g., `my-photo.jpg`)

## Step 2: Update the Image Path
Go to `components/floating-hero.tsx` and change this line:

\`\`\`tsx
imageUrl="/hariprasad-profile.jpg"
\`\`\`

To your new file name:

\`\`\`tsx
imageUrl="/my-photo.jpg"
\`\`\`

## Step 3: Choose Your Photo Design

In `app/page.tsx`, find the FloatingHero component and add a design prop:

\`\`\`tsx
<FloatingHero design="circular" />
\`\`\`

### Available Design Options:

1. **circular** - Circular photo with rotating ring (current)
2. **square-with-border** - Square with animated glowing border
3. **hexagon** - Hexagon shape with gradient
4. **rounded-rectangle** - Tall rounded rectangle with color bar
5. **artistic** - Artistic frame with gradient overlays

## Step 4: Example
If you want a square design, change:

\`\`\`tsx
<FloatingHero design="square-with-border" />
\`\`\`

---

## About the Large "I" Text

The capital "I" in "Hariprasad" appears large because of the font styling. This is part of the typography design. If you want to change this:

1. Go to `app/page.tsx`
2. Find the `<h1>` tag with "Hariprasad"
3. Modify the className to adjust styling

The current setup uses consistent capitalization styling for prominence.
