// ================================================================
//  TEMPLATE DATA — 58 Unique Resume Templates
// ================================================================
const TEMPLATES = [
  // ── FEATURED TOP 8 (shown on homepage) ──
  {
    id: 'classic',
    name: 'Classic Professional',
    description: 'Clean, ATS-friendly design with blue accents. The timeless choice for corporate and traditional roles.',
    category: ['professional'],
    tags: ['ATS-Friendly', 'Corporate', 'Clean'],
    badge: 'popular',
    featured: true,
  },
  {
    id: 'modern',
    name: 'Modern Minimal',
    description: 'Contemporary teal tones with rounded elements. Perfect for tech, marketing, and startup roles.',
    category: ['modern', 'professional'],
    tags: ['Contemporary', 'Tech', 'Startup'],
    badge: 'popular',
    featured: true,
  },
  {
    id: 'executive',
    name: 'Executive Suite',
    description: 'Sophisticated dark header with gold accents and serif headings. Ideal for senior leadership positions.',
    category: ['professional'],
    tags: ['Leadership', 'Senior', 'Luxury'],
    badge: null,
    featured: true,
  },
  {
    id: 'creative',
    name: 'Creative Impact',
    description: 'Bold purple gradients with eye-catching typography. Designed for designers, artists, and creatives.',
    category: ['creative'],
    tags: ['Design', 'Artistic', 'Bold'],
    badge: 'new',
    featured: true,
  },
  {
    id: 'developer',
    name: 'Dev Terminal',
    description: 'Monospaced, terminal-inspired layout with green accents. Built by developers, for developers.',
    category: ['creative', 'modern'],
    tags: ['Developer', 'Engineering', 'Code'],
    badge: 'new',
    featured: true,
  },
  {
    id: 'elegant',
    name: 'Elegant Serif',
    description: 'Refined serif typography with centered layout and burgundy accents. For roles that demand sophistication.',
    category: ['professional', 'creative'],
    tags: ['Serif', 'Refined', 'Academic'],
    badge: null,
    featured: true,
  },
  {
    id: 'minimalist',
    name: 'Clean Slate',
    description: 'Pure black and white with maximum whitespace. Let your content speak — zero distractions.',
    category: ['minimal', 'professional'],
    tags: ['B&W', 'Whitespace', 'ATS-Safe'],
    badge: null,
    featured: true,
  },
  {
    id: 'bold',
    name: 'Bold Statement',
    description: 'Vibrant coral-to-orange gradient header with strong typography. For those who want to be noticed.',
    category: ['creative', 'modern'],
    tags: ['Vibrant', 'Confident', 'Standout'],
    badge: null,
    featured: true,
  },
  // ── ADDITIONAL 50 TEMPLATES ──
  {
    id: 'azure',
    name: 'Azure Horizon',
    description: 'Calm sky-blue tones with clean lines. Perfect for healthcare, education, and public sector roles.',
    category: ['professional'],
    tags: ['Healthcare', 'Blue', 'Calm'],
    badge: null,
    featured: false,
  },
  {
    id: 'sunset',
    name: 'Sunset Glow',
    description: 'Warm amber-to-pink gradients for a friendly, approachable impression. Great for client-facing roles.',
    category: ['creative', 'modern'],
    tags: ['Warm', 'Gradient', 'Friendly'],
    badge: null,
    featured: false,
  },
  {
    id: 'nordic',
    name: 'Nordic Frost',
    description: 'Cool slate blues with icy accents inspired by Scandinavian design. Clean and highly readable.',
    category: ['minimal', 'modern'],
    tags: ['Scandinavian', 'Cool', 'Clean'],
    badge: null,
    featured: false,
  },
  {
    id: 'emerald',
    name: 'Emerald Edge',
    description: 'Deep emerald green accents on white. Confident, fresh, and perfect for finance or consulting.',
    category: ['professional'],
    tags: ['Finance', 'Green', 'Confident'],
    badge: null,
    featured: false,
  },
  {
    id: 'midnight',
    name: 'Midnight Dark',
    description: 'Full dark-mode resume with luminous cyan accents. A bold choice for tech and creative night owls.',
    category: ['creative', 'modern'],
    tags: ['Dark Mode', 'Cyan', 'Tech'],
    badge: 'new',
    featured: false,
  },
  {
    id: 'coral',
    name: 'Coral Reef',
    description: 'Soft coral pinks with rounded shapes and gentle shadows. Warm, inviting, and memorable.',
    category: ['creative'],
    tags: ['Pink', 'Warm', 'Soft'],
    badge: null,
    featured: false,
  },
  {
    id: 'slate',
    name: 'Slate & Stone',
    description: 'Neutral grays with charcoal headings and stone accents. Professional and universally appropriate.',
    category: ['professional', 'minimal'],
    tags: ['Neutral', 'Gray', 'Universal'],
    badge: null,
    featured: false,
  },
  {
    id: 'lavender',
    name: 'Lavender Dreams',
    description: 'Soft purple-lavender tones with gentle gradients. Elegant yet modern for holistic roles.',
    category: ['creative'],
    tags: ['Purple', 'Soft', 'Elegant'],
    badge: null,
    featured: false,
  },
  {
    id: 'ruby',
    name: 'Ruby Luxe',
    description: 'Deep ruby red accents with bold serif typography. Commanding presence for executive roles.',
    category: ['professional'],
    tags: ['Red', 'Luxe', 'Executive'],
    badge: null,
    featured: false,
  },
  {
    id: 'ocean',
    name: 'Ocean Depth',
    description: 'Navy-to-teal gradient header with wave-inspired separators. Ideal for marine, travel, or environmental roles.',
    category: ['creative', 'modern'],
    tags: ['Navy', 'Teal', 'Nature'],
    badge: null,
    featured: false,
  },
  {
    id: 'monochrome',
    name: 'Monochrome Pro',
    description: 'Strictly black and white with heavy contrast and bold type. Maximum readability, zero fluff.',
    category: ['minimal', 'professional'],
    tags: ['B&W', 'Bold', 'Contrast'],
    badge: null,
    featured: false,
  },
  {
    id: 'amber',
    name: 'Amber Glow',
    description: 'Rich amber and burnt orange accents with warm undertones. Energetic yet professional.',
    category: ['modern'],
    tags: ['Amber', 'Warm', 'Energy'],
    badge: null,
    featured: false,
  },
  {
    id: 'ivy',
    name: 'Ivy League',
    description: 'Classic dark green with serif fonts inspired by Ivy League aesthetics. Perfect for academic CVs.',
    category: ['professional'],
    tags: ['Academic', 'Ivy', 'Serif'],
    badge: null,
    featured: false,
  },
  {
    id: 'pastel',
    name: 'Pastel Bloom',
    description: 'Soft pastel pinks, blues, and greens with a playful yet refined layout. Great for creative fields.',
    category: ['creative'],
    tags: ['Pastel', 'Playful', 'Soft'],
    badge: null,
    featured: false,
  },
  {
    id: 'graphite',
    name: 'Graphite Sharp',
    description: 'Dark graphite background sections with crisp white text blocks. Industrial and impactful.',
    category: ['modern', 'professional'],
    tags: ['Graphite', 'Dark', 'Sharp'],
    badge: null,
    featured: false,
  },
  {
    id: 'sakura',
    name: 'Sakura Blossom',
    description: 'Cherry blossom pink accents with delicate floral-inspired dividers. Gentle and memorable.',
    category: ['creative'],
    tags: ['Japanese', 'Pink', 'Delicate'],
    badge: null,
    featured: false,
  },
  {
    id: 'bronze',
    name: 'Bronze Medal',
    description: 'Warm bronze and copper tones with an old-world charm. Distinguished and vintage-inspired.',
    category: ['professional'],
    tags: ['Bronze', 'Vintage', 'Warm'],
    badge: null,
    featured: false,
  },
  {
    id: 'neon',
    name: 'Neon Pulse',
    description: 'Electric neon green on dark background with a cyberpunk edge. For daring tech professionals.',
    category: ['creative', 'modern'],
    tags: ['Neon', 'Cyberpunk', 'Electric'],
    badge: null,
    featured: false,
  },
  {
    id: 'swiss',
    name: 'Swiss Grid',
    description: 'Grid-based Swiss design with Helvetica-inspired typography. Clean, precise, and geometric.',
    category: ['minimal', 'modern'],
    tags: ['Grid', 'Swiss', 'Geometric'],
    badge: null,
    featured: false,
  },
  {
    id: 'royal',
    name: 'Royal Velvet',
    description: 'Deep indigo and gold accents with regal serif typography. Fit for C-suite and boardroom.',
    category: ['professional'],
    tags: ['Indigo', 'Gold', 'Regal'],
    badge: null,
    featured: false,
  },
  {
    id: 'sage',
    name: 'Sage Garden',
    description: 'Muted sage green with earthy tones and organic shapes. Natural and grounding.',
    category: ['minimal', 'creative'],
    tags: ['Sage', 'Earthy', 'Organic'],
    badge: null,
    featured: false,
  },
  {
    id: 'metro',
    name: 'Metro Line',
    description: 'Inspired by metro transit maps — colorful timeline sidebar with clean right-hand content area.',
    category: ['modern', 'creative'],
    tags: ['Metro', 'Timeline', 'Colorful'],
    badge: null,
    featured: false,
  },
  {
    id: 'ivory',
    name: 'Ivory Tower',
    description: 'Warm ivory background with chocolate brown text and gold highlights. Academic and scholarly.',
    category: ['professional'],
    tags: ['Ivory', 'Academic', 'Scholarly'],
    badge: null,
    featured: false,
  },
  {
    id: 'pixel',
    name: 'Pixel Perfect',
    description: 'Sharp pixel-art inspired borders and 8-bit accents. A unique choice for games and tech creatives.',
    category: ['creative'],
    tags: ['Pixel', 'Games', '8-bit'],
    badge: null,
    featured: false,
  },
  {
    id: 'charcoal',
    name: 'Charcoal Sketch',
    description: 'Soft charcoal tones with sketch-like line elements. Artistic yet professional.',
    category: ['creative', 'professional'],
    tags: ['Charcoal', 'Artistic', 'Sketch'],
    badge: null,
    featured: false,
  },
  {
    id: 'citrus',
    name: 'Citrus Fresh',
    description: 'Zesty lime and lemon accents on crisp white. Energetic, fresh, and impossible to ignore.',
    category: ['modern', 'creative'],
    tags: ['Lime', 'Fresh', 'Energetic'],
    badge: null,
    featured: false,
  },
  {
    id: 'blueprint',
    name: 'Blueprint',
    description: 'Engineering blueprint aesthetic with grid lines and technical blue. Perfect for engineers and architects.',
    category: ['professional', 'modern'],
    tags: ['Engineering', 'Blueprint', 'Technical'],
    badge: null,
    featured: false,
  },
  {
    id: 'rose',
    name: 'Rose Gold',
    description: 'Luxurious rose gold accents with soft blush background element. Chic and sophisticated.',
    category: ['creative', 'professional'],
    tags: ['Rose Gold', 'Chic', 'Luxe'],
    badge: null,
    featured: false,
  },
  {
    id: 'timber',
    name: 'Timber & Steel',
    description: 'Warm wood-inspired browns with steel-gray headings. Industrial modern aesthetic.',
    category: ['modern'],
    tags: ['Wood', 'Industrial', 'Warm'],
    badge: null,
    featured: false,
  },
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    description: 'Northern lights inspired with purple-to-teal gradient header. Magical and unforgettable.',
    category: ['creative'],
    tags: ['Aurora', 'Gradient', 'Magical'],
    badge: 'new',
    featured: false,
  },
  {
    id: 'concrete',
    name: 'Concrete Jungle',
    description: 'Urban concrete gray with sharp edges and metropolitan typography. For city professionals.',
    category: ['modern', 'professional'],
    tags: ['Urban', 'Gray', 'Metro'],
    badge: null,
    featured: false,
  },
  {
    id: 'vineyard',
    name: 'Vineyard',
    description: 'Rich wine and burgundy tones with elegant serif type. Mature and refined.',
    category: ['professional'],
    tags: ['Wine', 'Burgundy', 'Elegant'],
    badge: null,
    featured: false,
  },
  {
    id: 'prism',
    name: 'Prism Spectrum',
    description: 'Rainbow-subtle section dividers with clean white sections. Celebrating diversity and creativity.',
    category: ['creative'],
    tags: ['Rainbow', 'Spectrum', 'Diverse'],
    badge: null,
    featured: false,
  },
  {
    id: 'snowfall',
    name: 'Snowfall White',
    description: 'Ultra-clean white with lightest gray dividers and whisper-thin typography. Maximum elegance.',
    category: ['minimal'],
    tags: ['White', 'Clean', 'Thin'],
    badge: null,
    featured: false,
  },
  {
    id: 'mahogany',
    name: 'Mahogany Desk',
    description: 'Rich mahogany brown with cream accents and classic serif headings. Traditional and trustworthy.',
    category: ['professional'],
    tags: ['Brown', 'Classic', 'Trust'],
    badge: null,
    featured: false,
  },
  {
    id: 'electric',
    name: 'Electric Blue',
    description: 'Vivid electric blue accents on dark navy. High-energy and attention-commanding.',
    category: ['modern', 'creative'],
    tags: ['Electric', 'Navy', 'Bold'],
    badge: null,
    featured: false,
  },
  {
    id: 'bamboo',
    name: 'Bamboo Zen',
    description: 'Zen-inspired layout with bamboo green and natural beige tones. Peaceful and balanced.',
    category: ['minimal'],
    tags: ['Zen', 'Green', 'Natural'],
    badge: null,
    featured: false,
  },
  {
    id: 'steel',
    name: 'Stainless Steel',
    description: 'Cool steel gray with chrome-like accents and sharp lines. Industrial strength professional.',
    category: ['professional', 'modern'],
    tags: ['Steel', 'Chrome', 'Strong'],
    badge: null,
    featured: false,
  },
  {
    id: 'peach',
    name: 'Peach Sorbet',
    description: 'Soft peach and apricot tones with rounded elements. Warm, approachable, and friendly.',
    category: ['creative'],
    tags: ['Peach', 'Soft', 'Friendly'],
    badge: null,
    featured: false,
  },
  {
    id: 'horizon',
    name: 'Horizon Line',
    description: 'Clean horizontal lines with a sky-to-earth color palette. Balanced and forward-looking.',
    category: ['modern', 'minimal'],
    tags: ['Horizon', 'Lines', 'Balance'],
    badge: null,
    featured: false,
  },
  {
    id: 'garnet',
    name: 'Garnet & Gold',
    description: 'Deep garnet red paired with antique gold accents. Rich, powerful, and distinguished.',
    category: ['professional'],
    tags: ['Garnet', 'Gold', 'Power'],
    badge: null,
    featured: false,
  },
  {
    id: 'mosaic',
    name: 'Mosaic Art',
    description: 'Geometric mosaic-inspired accents with multi-color borders. Creative and multicultural.',
    category: ['creative'],
    tags: ['Mosaic', 'Geometric', 'Art'],
    badge: null,
    featured: false,
  },
  {
    id: 'glacier',
    name: 'Glacier Blue',
    description: 'Icy glacier blue with frosted glass effect elements. Cool, calm, and deeply professional.',
    category: ['professional', 'modern'],
    tags: ['Ice', 'Blue', 'Frost'],
    badge: null,
    featured: false,
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    description: 'Earthy terracotta and clay tones with organic shapes. Warm, natural, and grounded.',
    category: ['creative', 'modern'],
    tags: ['Earth', 'Clay', 'Organic'],
    badge: null,
    featured: false,
  },
  {
    id: 'papercut',
    name: 'Paper Cut',
    description: 'Layered paper-cut shadow effect with crisp edges. Artisan crafted, uniquely textured.',
    category: ['creative'],
    tags: ['Paper', 'Layers', 'Craft'],
    badge: null,
    featured: false,
  },
  {
    id: 'granite',
    name: 'Granite Rock',
    description: 'Solid granite-inspired dark gray with sharp white text. Rock-solid and immovable.',
    category: ['professional'],
    tags: ['Granite', 'Solid', 'Dark'],
    badge: null,
    featured: false,
  },
  {
    id: 'mint',
    name: 'Mint Fresh',
    description: 'Cool mint green with fresh white spaces and light shadows. Refreshing and clean.',
    category: ['minimal', 'modern'],
    tags: ['Mint', 'Fresh', 'Light'],
    badge: null,
    featured: false,
  },
  {
    id: 'crimson',
    name: 'Crimson Tide',
    description: 'Bold crimson red header fading to clean white. Powerful, passionate, and memorable.',
    category: ['creative', 'professional'],
    tags: ['Crimson', 'Bold', 'Power'],
    badge: null,
    featured: false,
  },
  {
    id: 'sand',
    name: 'Sand Dune',
    description: 'Desert-inspired sandy beige with warm copper accents. Natural, warm, and inviting.',
    category: ['minimal'],
    tags: ['Sand', 'Desert', 'Warm'],
    badge: null,
    featured: false,
  },
  {
    id: 'carbon',
    name: 'Carbon Fiber',
    description: 'Textured dark carbon with sharp red accents. High-performance and cutting-edge.',
    category: ['modern', 'creative'],
    tags: ['Carbon', 'Red', 'Edge'],
    badge: null,
    featured: false,
  },
  {
    id: 'lilac',
    name: 'Lilac Mist',
    description: 'Soft lilac purple with misty pastel overtones. Gentle, dreamy, and sophisticated.',
    category: ['creative'],
    tags: ['Lilac', 'Pastel', 'Dreamy'],
    badge: null,
    featured: false,
  },
  {
    id: 'dusk',
    name: 'Dusk to Dawn',
    description: 'Gradient from deep indigo to warm orange mimicking sunset sky. Transitional and dynamic.',
    category: ['creative', 'modern'],
    tags: ['Dusk', 'Gradient', 'Dynamic'],
    badge: null,
    featured: false,
  },
];

// ================================================================
//  SAMPLE RESUME DATA (for previews)
// ================================================================
const SAMPLE = {
  name: 'ALEX MORGAN',
  title: 'Senior Product Designer',
  email: 'alex@morgan.dev',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  linkedin: 'linkedin.com/in/alexmorgan',
  summary: 'Design leader with 6+ years crafting intuitive products for high-growth startups. Specialized in design systems, user research, and cross-functional collaboration. Led redesigns that improved conversion by 40% and user satisfaction scores by 25%.',
  experience: [
    {
      role: 'Lead Product Designer',
      company: 'Stripe',
      location: 'San Francisco, CA',
      date: 'Jan 2022 — Present',
      bullets: [
        'Led the checkout redesign, improving merchant conversion rates by 34%',
        'Built and maintained a component library used across 12 product teams',
        'Mentored 4 junior designers and established design review processes',
      ],
    },
    {
      role: 'UI/UX Designer',
      company: 'Figma',
      location: 'Remote',
      date: 'Mar 2019 — Dec 2021',
      bullets: [
        'Designed collaboration features used by 4M+ daily active users',
        'Created design system documentation adopted by 200+ enterprise teams',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Des — Interaction Design',
      institution: 'California College of the Arts',
      year: '2015 — 2019',
      gpa: '3.9 / 4.0',
    },
  ],
  skills: {
    technical: ['Figma', 'Sketch', 'Adobe CC', 'Framer', 'HTML/CSS'],
    tools: ['Jira', 'Notion', 'Miro', 'Hotjar', 'Mixpanel'],
    soft: ['Leadership', 'User Research', 'Presentations'],
  },
  certifications: ['Google UX Design Certificate — 2023', 'Interaction Design Foundation — 2022'],
};

// ================================================================
//  TEMPLATE COLOR MAP (for non-original-8 templates to generate unique styles)
// ================================================================
const TEMPLATE_COLORS = {
  azure: { accent: '#3b82f6', light: '#eff6ff', border: '#bfdbfe', text: '#1e40af' },
  sunset: { accent: '#f59e0b', light: '#fffbeb', border: '#fde68a', text: '#b45309', headerBg: 'linear-gradient(135deg, #f59e0b, #ec4899)' },
  nordic: { accent: '#64748b', light: '#f8fafc', border: '#cbd5e1', text: '#334155' },
  emerald: { accent: '#059669', light: '#ecfdf5', border: '#a7f3d0', text: '#065f46' },
  midnight: { accent: '#06b6d4', light: '#0f172a', border: '#1e293b', text: '#06b6d4', dark: true },
  coral: { accent: '#f43f5e', light: '#fff1f2', border: '#fecdd3', text: '#be123c' },
  slate: { accent: '#64748b', light: '#f8fafc', border: '#e2e8f0', text: '#475569' },
  lavender: { accent: '#8b5cf6', light: '#f5f3ff', border: '#ddd6fe', text: '#6d28d9' },
  ruby: { accent: '#dc2626', light: '#fef2f2', border: '#fecaca', text: '#b91c1c' },
  ocean: { accent: '#0284c7', light: '#f0f9ff', border: '#bae6fd', text: '#0369a1', headerBg: 'linear-gradient(135deg, #1e3a5f, #0d9488)' },
  monochrome: { accent: '#1a1a1a', light: '#f5f5f5', border: '#d4d4d4', text: '#262626' },
  amber: { accent: '#d97706', light: '#fffbeb', border: '#fcd34d', text: '#92400e' },
  ivy: { accent: '#166534', light: '#f0fdf4', border: '#86efac', text: '#14532d' },
  pastel: { accent: '#ec4899', light: '#fdf2f8', border: '#fbcfe8', text: '#be185d' },
  graphite: { accent: '#374151', light: '#f3f4f6', border: '#9ca3af', text: '#1f2937' },
  sakura: { accent: '#f472b6', light: '#fdf2f8', border: '#f9a8d4', text: '#be185d' },
  bronze: { accent: '#a16207', light: '#fefce8', border: '#fde047', text: '#854d0e' },
  neon: { accent: '#22c55e', light: '#0a0a0a', border: '#1a1a1a', text: '#22c55e', dark: true },
  swiss: { accent: '#ef4444', light: '#ffffff', border: '#e5e7eb', text: '#1a1a1a' },
  royal: { accent: '#4338ca', light: '#eef2ff', border: '#c7d2fe', text: '#3730a3', headerBg: 'linear-gradient(135deg, #312e81, #1e1b4b)' },
  sage: { accent: '#65a30d', light: '#f7fee7', border: '#bef264', text: '#4d7c0f' },
  metro: { accent: '#2563eb', light: '#eff6ff', border: '#93c5fd', text: '#1d4ed8' },
  ivory: { accent: '#92400e', light: '#fffbf0', border: '#fbbf24', text: '#78350f' },
  pixel: { accent: '#8b5cf6', light: '#faf5ff', border: '#c4b5fd', text: '#7c3aed' },
  charcoal: { accent: '#525252', light: '#fafafa', border: '#a3a3a3', text: '#404040' },
  citrus: { accent: '#84cc16', light: '#f7fee7', border: '#a3e635', text: '#4d7c0f' },
  blueprint: { accent: '#2563eb', light: '#eff6ff', border: '#93c5fd', text: '#1e40af' },
  rose: { accent: '#e11d48', light: '#fff1f2', border: '#fda4af', text: '#be123c' },
  timber: { accent: '#78350f', light: '#fef3c7', border: '#d97706', text: '#713f12' },
  aurora: { accent: '#7c3aed', light: '#f5f3ff', border: '#c4b5fd', text: '#6d28d9', headerBg: 'linear-gradient(135deg, #7c3aed, #06b6d4)' },
  concrete: { accent: '#6b7280', light: '#f9fafb', border: '#d1d5db', text: '#4b5563' },
  vineyard: { accent: '#7f1d1d', light: '#fef2f2', border: '#fca5a5', text: '#991b1b' },
  prism: { accent: '#8b5cf6', light: '#faf5ff', border: '#ddd6fe', text: '#6d28d9' },
  snowfall: { accent: '#94a3b8', light: '#ffffff', border: '#e2e8f0', text: '#64748b' },
  mahogany: { accent: '#78350f', light: '#fffbeb', border: '#d97706', text: '#713f12' },
  electric: { accent: '#3b82f6', light: '#0c1929', border: '#1e3a5f', text: '#60a5fa', dark: true },
  bamboo: { accent: '#16a34a', light: '#f0fdf4', border: '#86efac', text: '#166534' },
  steel: { accent: '#6b7280', light: '#f3f4f6', border: '#9ca3af', text: '#374151' },
  peach: { accent: '#fb923c', light: '#fff7ed', border: '#fed7aa', text: '#c2410c' },
  horizon: { accent: '#0ea5e9', light: '#f0f9ff', border: '#7dd3fc', text: '#0284c7' },
  garnet: { accent: '#be123c', light: '#fff1f2', border: '#fda4af', text: '#9f1239', headerBg: 'linear-gradient(135deg, #881337, #d4a017)' },
  mosaic: { accent: '#8b5cf6', light: '#faf5ff', border: '#c4b5fd', text: '#7c3aed' },
  glacier: { accent: '#0891b2', light: '#ecfeff', border: '#a5f3fc', text: '#0e7490' },
  terracotta: { accent: '#c2410c', light: '#fff7ed', border: '#fb923c', text: '#9a3412' },
  papercut: { accent: '#d946ef', light: '#fdf4ff', border: '#f0abfc', text: '#a21caf' },
  granite: { accent: '#374151', light: '#111827', border: '#374151', text: '#9ca3af', dark: true },
  mint: { accent: '#10b981', light: '#ecfdf5', border: '#6ee7b7', text: '#047857' },
  crimson: { accent: '#dc2626', light: '#fef2f2', border: '#f87171', text: '#b91c1c', headerBg: 'linear-gradient(135deg, #dc2626, #450a0a)' },
  sand: { accent: '#a16207', light: '#fefdf5', border: '#e5d5a0', text: '#854d0e' },
  carbon: { accent: '#ef4444', light: '#18181b', border: '#27272a', text: '#ef4444', dark: true },
  lilac: { accent: '#a78bfa', light: '#f5f3ff', border: '#ddd6fe', text: '#7c3aed' },
  dusk: { accent: '#6366f1', light: '#eef2ff', border: '#a5b4fc', text: '#4f46e5', headerBg: 'linear-gradient(135deg, #312e81, #f97316)' },
};

// ================================================================
//  RENDER MINI RESUME HTML
// ================================================================
function renderMiniResume(templateId) {
  const s = SAMPLE;
  const hasHeaderBand = ['executive', 'bold', 'ocean', 'royal', 'garnet', 'crimson', 'dusk', 'sunset', 'aurora'].includes(templateId);
  const isDark = TEMPLATE_COLORS[templateId]?.dark || false;

  let headerHTML;
  if (hasHeaderBand) {
    headerHTML = `
      <div class="mr-header-band">
        <div class="mr-header-left">
          <div class="mr-name">${s.name}</div>
          <div class="mr-title">${s.title}</div>
          <div class="mr-contacts">
            <span>${s.email}</span><span>${s.phone}</span><span>${s.location}</span>
          </div>
        </div>
        <img class="mr-photo" src="demo-photo.png" alt="Profile" />
      </div>
    `;
  } else {
    headerHTML = `
      <div class="mr-header-row">
        <div class="mr-header-left">
          <div class="mr-name">${s.name}</div>
          <div class="mr-title">${s.title}</div>
          <div class="mr-contacts">
            <span>${s.email}</span><span>${s.phone}</span><span>${s.location}</span>
          </div>
        </div>
        <img class="mr-photo" src="demo-photo.png" alt="Profile" />
      </div>
      <div class="mr-divider"></div>
    `;
  }

  const expHTML = s.experience.map(e => `
    <div class="mr-entry">
      <div class="mr-entry-header">
        <span class="mr-entry-role">${e.role} — ${e.company}</span>
        <span class="mr-entry-date">${e.date}</span>
      </div>
      <div class="mr-entry-sub">${e.location}</div>
      <div class="mr-entry-text">${e.bullets.map(b => '• ' + b).join('\n')}</div>
    </div>
  `).join('');

  const eduHTML = s.education.map(e => `
    <div class="mr-entry">
      <div class="mr-entry-header">
        <span class="mr-entry-role">${e.degree}</span>
        <span class="mr-entry-date">${e.year}</span>
      </div>
      <div class="mr-entry-sub">${e.institution} · GPA: ${e.gpa}</div>
    </div>
  `).join('');

  const skillPills = [...s.skills.technical, ...s.skills.tools.slice(0, 3)]
    .map(sk => `<span class="mr-pill">${sk}</span>`).join('');

  return `
    <div class="mini-resume tpl-${templateId}${isDark ? ' dark-tpl' : ''}">
      ${headerHTML}
      <div class="mr-section mr-section-summary">
        <div class="mr-section-head">
          <span class="mr-section-title">SUMMARY</span>
          <div class="mr-section-line"></div>
        </div>
        <div class="mr-entry-text">${s.summary}</div>
      </div>
      <div class="mr-section mr-section-exp">
        <div class="mr-section-head">
          <span class="mr-section-title">EXPERIENCE</span>
          <div class="mr-section-line"></div>
        </div>
        ${expHTML}
      </div>
      <div class="mr-section mr-section-edu">
        <div class="mr-section-head">
          <span class="mr-section-title">EDUCATION</span>
          <div class="mr-section-line"></div>
        </div>
        ${eduHTML}
      </div>
      <div class="mr-section mr-section-skills">
        <div class="mr-section-head">
          <span class="mr-section-title">SKILLS</span>
          <div class="mr-section-line"></div>
        </div>
        <div class="mr-skills">${skillPills}</div>
      </div>
    </div>
  `;
}

// ================================================================
//  RENDER TEMPLATE CARDS
// ================================================================
const gridEl = document.getElementById('templates-grid');
const noResultsEl = document.getElementById('no-results');
const isHomePage = !window.location.pathname.includes('templates.html');

function renderCards(filter = 'all', search = '') {
  let filtered = TEMPLATES;

  // On the homepage, show only featured templates (top 8)
  if (isHomePage && filter === 'all' && !search) {
    filtered = filtered.filter(t => t.featured);
  } else {
    if (filter !== 'all') {
      filtered = filtered.filter(t => t.category.includes(filter));
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.tags.some(tag => tag.toLowerCase().includes(q)) ||
        t.category.some(c => c.toLowerCase().includes(q))
      );
    }
    // On homepage with filter/search, still limit to featured
    if (isHomePage) {
      filtered = filtered.filter(t => t.featured);
    }
  }

  if (filtered.length === 0) {
    gridEl.innerHTML = '';
    noResultsEl.classList.remove('hidden');
    updateShowMoreBtn(false);
    return;
  }
  noResultsEl.classList.add('hidden');

  gridEl.innerHTML = filtered.map(t => {
    const badgeHTML = t.badge
      ? `<span class="tpl-card-badge ${t.badge}">${t.badge === 'popular' ? '★ Popular' : '✦ New'}</span>`
      : '';
    const tagsHTML = t.tags.map(tag => `<span class="tpl-tag">${tag}</span>`).join('');

    return `
      <div class="tpl-card" data-id="${t.id}">
        <div class="tpl-preview-wrap" id="preview-${t.id}">
          ${renderMiniResume(t.id)}
          <div class="tpl-card-overlay">
            <button class="tpl-overlay-btn preview" onclick="openPreview('${t.id}'); event.stopPropagation();">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Preview
            </button>
            <a class="tpl-overlay-btn use" href="builder.html?template=${t.id}" onclick="event.stopPropagation();">
              Use Template
            </a>
          </div>
        </div>
        <div class="tpl-card-info">
          <div class="tpl-card-top">
            <div class="tpl-card-name">${t.name}</div>
            ${badgeHTML}
          </div>
          <div class="tpl-card-desc">${t.description}</div>
          <div class="tpl-card-tags">${tagsHTML}</div>
        </div>
      </div>
    `;
  }).join('');

  // Show "Show More" button on homepage
  if (isHomePage) {
    updateShowMoreBtn(true);
  }

  // Scale mini-resumes to fit their containers
  requestAnimationFrame(scalePreviews);
}

function updateShowMoreBtn(show) {
  const btn = document.getElementById('show-more-btn');
  if (!btn) return;
  btn.style.display = show ? 'flex' : 'none';
}

function scalePreviews() {
  document.querySelectorAll('.tpl-preview-wrap').forEach(wrap => {
    const mini = wrap.querySelector('.mini-resume');
    if (!mini) return;
    const wrapW = wrap.offsetWidth;
    const scale = wrapW / 600; // mini-resume is 600px wide
    mini.style.transform = `scale(${scale})`;
  });
}

// ================================================================
//  FILTER & SEARCH
// ================================================================
let currentFilter = 'all';

document.querySelectorAll('.mp-filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mp-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderCards(currentFilter, document.getElementById('search-input').value);
  });
});

const searchInput = document.getElementById('search-input');
let searchDebounce;
searchInput.addEventListener('input', () => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    renderCards(currentFilter, searchInput.value);
  }, 200);
});

function clearSearch() {
  searchInput.value = '';
  renderCards(currentFilter, '');
  searchInput.focus();
}

// ================================================================
//  PREVIEW MODAL
// ================================================================
const modalEl = document.getElementById('preview-modal');
const modalBody = document.getElementById('preview-modal-body');
const modalName = document.getElementById('preview-modal-name');
const modalDesc = document.getElementById('preview-modal-desc');
const modalUseBtn = document.getElementById('preview-use-btn');

function openPreview(templateId) {
  const tpl = TEMPLATES.find(t => t.id === templateId);
  if (!tpl) return;

  modalName.textContent = tpl.name;
  modalDesc.textContent = tpl.description;
  modalUseBtn.href = `builder.html?template=${tpl.id}`;
  modalBody.innerHTML = renderMiniResume(tpl.id);

  // Scale for modal (larger)
  const mini = modalBody.querySelector('.mini-resume');
  mini.style.position = 'relative';
  mini.style.width = '680px';
  mini.style.padding = '44px 48px';

  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scale to fit modal
  requestAnimationFrame(() => {
    const bodyW = modalBody.offsetWidth - 64; // minus padding
    const scale = Math.min(bodyW / 680, 1);
    if (scale < 1) {
      mini.style.transformOrigin = 'top center';
      mini.style.transform = `scale(${scale})`;
      mini.style.marginBottom = `-${680 * 1.36 * (1 - scale)}px`;
    }
  });
}

function closePreview() {
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('preview-close-btn').addEventListener('click', closePreview);
modalEl.addEventListener('click', e => {
  if (e.target === modalEl) closePreview();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalEl.classList.contains('open')) closePreview();
});

// ── Card click → open preview ──
document.addEventListener('click', e => {
  const card = e.target.closest('.tpl-card');
  if (!card) return;
  // Don't open preview if clicking "Use Template" link
  if (e.target.closest('.tpl-overlay-btn.use')) return;
  openPreview(card.dataset.id);
});

// ================================================================
//  INIT
// ================================================================
renderCards();

// Rescale on resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(scalePreviews, 100);
});

// Smooth header background on scroll
window.addEventListener('scroll', () => {
  const header = document.getElementById('mp-header');
  if (window.scrollY > 40) {
    header.style.background = 'rgba(255,255,255,0.95)';
  } else {
    header.style.background = 'rgba(255,255,255,0.88)';
  }
});
