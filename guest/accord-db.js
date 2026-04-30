/**
 * YAMUNA SKY · ACCORD — DESIGN DATABASE
 * [INSD]e* · Sky Edit Framework
 *
 * Single source of truth for all configurable elements,
 * options, brands, gates (persona / palette / register),
 * and image slot names.
 *
 * Structure:
 *   ACCORD_DB.personas
 *   ACCORD_DB.palettes
 *   ACCORD_DB.registers
 *   ACCORD_DB.apartmentTypes
 *   ACCORD_DB.elements         ← render-based (Living Room)
 *   ACCORD_DB.specOnly         ← text/swatch only (Kitchen, Bathrooms, Hardware)
 *   ACCORD_DB.imageManifest    ← complete list of required render + swatch images
 */

const ACCORD_DB = {

  // ─────────────────────────────────────────────────────────────
  // PERSONAS
  // ─────────────────────────────────────────────────────────────
  personas: {
    host: {
      id: 'host',
      label: 'The Host',
      tagline: 'The apartment as stage.',
      description: 'Warmth, texture, the deliberate art of welcome. Spaces that invite gathering and hold memory.',
      colorFamily: 'warm',
      palettes: ['casa-mira', 'terra-nox', 'ivory-ritual'],
      preferredFurniture: 'warm-layered',
      preferredLighting: 'warm-ambient',
    },
    seeker: {
      id: 'seeker',
      label: 'The Seeker',
      tagline: 'The apartment as laboratory.',
      description: 'Curated restraint, deliberate form. Spaces that reward attention and resist distraction.',
      colorFamily: 'cool-neutral',
      palettes: ['urban-form', 'raw-edit', 'pacific-grey'],
      preferredFurniture: 'sculptural-modern',
      preferredLighting: 'dramatic-accent',
    },
    settler: {
      id: 'settler',
      label: 'The Settler',
      tagline: 'The apartment as sanctuary.',
      description: 'Comfort, familiarity, the unhurried life. Spaces that release rather than stimulate.',
      colorFamily: 'warm-neutral',
      palettes: ['warm-archive', 'pale-ground', 'amber-thread'],
      preferredFurniture: 'warm-layered',
      preferredLighting: 'diffused-soft',
    },
  },


  // ─────────────────────────────────────────────────────────────
  // PALETTES — 3 per persona, 9 total
  // ─────────────────────────────────────────────────────────────
  palettes: {
    // ── THE HOST ──
    'casa-mira': {
      persona: 'host',
      label: 'Casa Mira',
      swatches: ['#D4C5A9', '#8C7355', '#3D2B1F'],
      description: 'Warm terracotta grounds, ochre accents. Mediterranean in spirit, refined in execution.',
      floorFamily: ['warm'],
      wallFamily: ['warm'],
      suggestedFloor: 'limestone-honed',
      suggestedWall: 'limewash-terracotta',
      suggestedCeiling: 'flat-gypsum',
      suggestedRug: 'solid-wool-natural',
      suggestedDrapes: 'linen-floor-ceiling',
    },
    'terra-nox': {
      persona: 'host',
      label: 'Terra Nox',
      swatches: ['#1C1C1C', '#7B4F3A', '#E8DDD0'],
      description: 'Deep clay grounds, candlelit warmth. For evenings that extend well past midnight.',
      floorFamily: ['warm'],
      wallFamily: ['warm'],
      suggestedFloor: 'timber-walnut',
      suggestedWall: 'timber-panelling-dark',
      suggestedCeiling: 'timber-slat',
      suggestedRug: 'abstract-printed',
      suggestedDrapes: 'velvet-drapes',
    },
    'ivory-ritual': {
      persona: 'host',
      label: 'Ivory Ritual',
      swatches: ['#F5F0E8', '#C9BCA5', '#6B5C4E'],
      description: 'Linen whites, soft sage, quiet brass. Hospitality rendered in the most restrained register.',
      floorFamily: ['warm-neutral'],
      wallFamily: ['warm-neutral'],
      suggestedFloor: 'large-format-tile-cream',
      suggestedWall: 'limewash-warm',
      suggestedCeiling: 'coffered',
      suggestedRug: 'solid-wool-natural',
      suggestedDrapes: 'linen-floor-ceiling',
    },

    // ── THE SEEKER ──
    'urban-form': {
      persona: 'seeker',
      label: 'Urban Form',
      swatches: ['#2A2A2A', '#8A8A8A', '#E0DDD8'],
      description: 'Charcoal, raw cement, polished steel. The disciplined vocabulary of the deliberate mind.',
      floorFamily: ['cool-neutral'],
      wallFamily: ['cool-neutral'],
      suggestedFloor: 'microcement',
      suggestedWall: 'matte-paint-grey',
      suggestedCeiling: 'flat-gypsum',
      suggestedRug: 'no-rug',
      suggestedDrapes: 'no-curtain',
    },
    'raw-edit': {
      persona: 'seeker',
      label: 'Raw Edit',
      swatches: ['#3C3830', '#A09070', '#F2EDE4'],
      description: 'Wabi-sabi in a contemporary frame. Imperfect surfaces, muted warmth, uncommon restraint.',
      floorFamily: ['warm-neutral'],
      wallFamily: ['warm-neutral'],
      suggestedFloor: 'terrazzo',
      suggestedWall: 'textured-plaster',
      suggestedCeiling: 'timber-slat',
      suggestedRug: 'geometric-flatweave',
      suggestedDrapes: 'sheer-roller',
    },
    'pacific-grey': {
      persona: 'seeker',
      label: 'Pacific Grey',
      swatches: ['#6A7A80', '#B0BCC0', '#EEF1F2'],
      description: 'Coastal fog, bleached driftwood, mineral blue-grey. Clarity without coldness.',
      floorFamily: ['cool-neutral'],
      wallFamily: ['cool-neutral'],
      suggestedFloor: 'large-format-tile-charcoal',
      suggestedWall: 'stone-cladding',
      suggestedCeiling: 'flat-gypsum',
      suggestedRug: 'geometric-flatweave',
      suggestedDrapes: 'sheer-roller',
    },

    // ── THE SETTLER ──
    'warm-archive': {
      persona: 'settler',
      label: 'Warm Archive',
      swatches: ['#C8A882', '#8B6E50', '#F2EBE0'],
      description: 'Honey teak, faded linen, worn leather. Rooms that feel inhabited the moment you enter.',
      floorFamily: ['warm'],
      wallFamily: ['warm'],
      suggestedFloor: 'engineered-timber-oak',
      suggestedWall: 'timber-panelling-light',
      suggestedCeiling: 'timber-slat',
      suggestedRug: 'solid-wool-natural',
      suggestedDrapes: 'linen-floor-ceiling',
    },
    'pale-ground': {
      persona: 'settler',
      label: 'Pale Ground',
      swatches: ['#EDE8E0', '#C4BAB0', '#8C8480'],
      description: 'Soft whites, aged stone, quiet greige. Domestic silence, architecturally held.',
      floorFamily: ['warm-neutral'],
      wallFamily: ['warm-neutral'],
      suggestedFloor: 'limestone-honed',
      suggestedWall: 'matte-paint-white',
      suggestedCeiling: 'flat-gypsum',
      suggestedRug: 'solid-wool-natural',
      suggestedDrapes: 'sheer-roller',
    },
    'amber-thread': {
      persona: 'settler',
      label: 'Amber Thread',
      swatches: ['#D4955A', '#8A5C3A', '#F5E8D8'],
      description: 'Turmeric gold, sienna, handloom ivory. A distinctly Indian warmth, quietly resolved.',
      floorFamily: ['warm'],
      wallFamily: ['warm'],
      suggestedFloor: 'terrazzo',
      suggestedWall: 'limewash-terracotta',
      suggestedCeiling: 'coffered',
      suggestedRug: 'abstract-printed',
      suggestedDrapes: 'velvet-drapes',
    },
  },


  // ─────────────────────────────────────────────────────────────
  // REGISTERS
  // ─────────────────────────────────────────────────────────────
  registers: {
    composed: {
      id: 'composed',
      label: 'Composed',
      tagline: 'A coherent, well-resolved interior.',
      description: 'Consistent palette, considered material choices. Sky Edit standard.',
      multiplier: 1.00,
      aptRestriction: null,
      tier: 1,
    },
    provenance: {
      id: 'provenance',
      label: 'Provenance',
      tagline: 'Materials sourced from identified origin.',
      description: 'Regional craft, named suppliers, an interior with documented character.',
      multiplier: 1.22,
      aptRestriction: null,
      tier: 2,
    },
    atelier: {
      id: 'atelier',
      label: 'Atelier',
      tagline: 'The full design vocabulary activated.',
      description: 'Custom joinery, bespoke surface treatments, collaborative artwork commission.',
      multiplier: 1.48,
      aptRestriction: null,
      tier: 3,
    },
    bespoke: {
      id: 'bespoke',
      label: 'Bespoke',
      tagline: 'Begins with a conversation.',
      description: 'An entirely original interior. No catalogue, no constraints.',
      multiplier: 1.80,
      aptRestriction: ['4BHK', '5BHK'],
      tier: 4,
    },
  },


  // ─────────────────────────────────────────────────────────────
  // APARTMENT TYPES
  // ─────────────────────────────────────────────────────────────
  apartmentTypes: {
    '2BHK': { area: 860,  label: '2 BHK', bespokeEligible: false },
    '3BHK': { area: 1100, label: '3 BHK', bespokeEligible: false },
    '4BHK': { area: 1650, label: '4 BHK', bespokeEligible: true  },
    '5BHK': { area: 2200, label: '5 BHK', bespokeEligible: true  },
  },
  baseRatePerSqft: 1307, // ₹ per sq ft


  // ─────────────────────────────────────────────────────────────
  // CONFIGURABLE ELEMENTS — LIVING ROOM (render-based)
  // render tier: 1 = full render swap  |  2 = overlay / swatch swap
  // register: minimum register required to access this option
  // colorFamily: which palette color families this option suits
  // imageSlot: filename key for the render image (no extension)
  // ─────────────────────────────────────────────────────────────
  elements: {

    // ── 1. FLOORING ─────────────────────────────────────────
    flooring: {
      id: 'flooring',
      label: 'Flooring',
      renderTier: 1,
      required: true,
      options: [
        {
          id: 'limestone-honed',
          label: 'Limestone — Honed',
          brand: 'Antolini / Bhandari Marble Group',
          origin: 'Portugal / Rajasthan',
          description: 'Warm grey limestone, honed finish. Subtle texture. Underfloor heating compatible.',
          colorFamily: ['warm', 'warm-neutral', 'cool-neutral'],
          register: 'provenance',
          swatchHex: '#C8BFB2',
          imageSlot: 'floor_limestone_honed',
          note: 'Works across all personas. Strong neutral anchor.',
        },
        {
          id: 'calacatta-marble',
          label: 'Calacatta Marble — Polished',
          brand: 'Antolini / Spider Marble',
          origin: 'Carrara, Italy',
          description: 'White marble with grey-gold veining. Mirror polished. A statement material.',
          colorFamily: ['warm-neutral', 'cool-neutral'],
          register: 'atelier',
          swatchHex: '#F0ECE6',
          imageSlot: 'floor_calacatta_marble',
          note: 'High-maintenance. Pairs with minimal furniture.',
        },
        {
          id: 'engineered-timber-oak',
          label: 'Engineered Timber — Light Oak',
          brand: 'Pergo / Woodpecker / Duro',
          origin: 'Sweden / India',
          description: '14mm engineered board, wire-brushed finish. Light oak tone. Warm, natural, grounding.',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#C4A882',
          imageSlot: 'floor_timber_oak',
        },
        {
          id: 'engineered-timber-walnut',
          label: 'Engineered Timber — Dark Walnut',
          brand: 'Pergo / Duro',
          origin: 'Sweden / India',
          description: '14mm engineered board, smooth finish. Dark walnut tone. Rich and dramatic.',
          colorFamily: ['warm'],
          register: 'composed',
          swatchHex: '#6B4C3B',
          imageSlot: 'floor_timber_walnut',
        },
        {
          id: 'large-format-tile-cream',
          label: 'Large Format Tile — Cream',
          brand: 'Kajaria / Florim (Italy)',
          origin: 'India / Italy',
          description: '1200×600 rectified porcelain, cream/beige tone. Straight lay. Contemporary neutral.',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#E8E0D4',
          imageSlot: 'floor_tile_cream',
        },
        {
          id: 'large-format-tile-charcoal',
          label: 'Large Format Tile — Charcoal',
          brand: 'Kajaria / RAK Ceramics',
          origin: 'India / UAE',
          description: '1200×600 rectified porcelain, charcoal/dark grey. Minimal and resolved.',
          colorFamily: ['cool-neutral'],
          register: 'composed',
          swatchHex: '#4A4848',
          imageSlot: 'floor_tile_charcoal',
        },
        {
          id: 'microcement',
          label: 'Microcement — Warm Grey',
          brand: 'Pandomo / Mapei Ultratop',
          origin: 'Germany / Italy',
          description: 'Seamless 3mm microcement overlay. Matte finish. Continues wall-to-floor for a monolithic effect.',
          colorFamily: ['cool-neutral', 'warm-neutral'],
          register: 'atelier',
          swatchHex: '#9A9898',
          imageSlot: 'floor_microcement',
          note: 'Requires skilled applicator. No grout lines.',
        },
        {
          id: 'terrazzo-warm',
          label: 'Terrazzo — Warm Aggregate',
          brand: 'Bharat Flooring (Mumbai)',
          origin: 'India',
          description: 'Handlaid terrazzo, warm aggregate mix (marble chips, brass flecks). Cast in situ. Unique to each pour.',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'atelier',
          swatchHex: '#D4C4A8',
          imageSlot: 'floor_terrazzo_warm',
          note: 'Each pour is unique. No two apartments identical.',
        },
      ],
    },


    // ── 2. WALL TREATMENT ────────────────────────────────────
    wall: {
      id: 'wall',
      label: 'Wall Treatment',
      renderTier: 1,
      required: true,
      note: 'Applied to primary feature wall. Remaining walls in complementary matte paint.',
      options: [
        {
          id: 'limewash-warm',
          label: 'Limewash — Warm White',
          brand: 'Jotun Sens / Kansai Nerolac',
          description: 'Hand-applied limewash, warm white with ochre undertone. Absorbs light beautifully. Each pass is unique.',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#F0E8D8',
          imageSlot: 'wall_limewash_warm',
        },
        {
          id: 'limewash-terracotta',
          label: 'Limewash — Terracotta',
          brand: 'Jotun / Kansai Nerolac',
          description: 'Deep terracotta limewash, richly pigmented. Aged character that grows with the space.',
          colorFamily: ['warm'],
          register: 'composed',
          swatchHex: '#C4724A',
          imageSlot: 'wall_limewash_terracotta',
        },
        {
          id: 'matte-paint-white',
          label: 'Matte Paint — Architectural White',
          brand: 'Jotun Sens Silky White / Asian Paints Royale',
          description: 'Pure architectural white, flat matte finish. Recedes the wall to let objects and furniture lead.',
          colorFamily: ['cool-neutral', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#F5F5F2',
          imageSlot: 'wall_paint_white',
        },
        {
          id: 'matte-paint-grey',
          label: 'Matte Paint — Stone Grey',
          brand: 'Jotun Sens / Kansai',
          description: 'Mid-tone greige, warm grey with minimal blue undertone. Versatile and grounding.',
          colorFamily: ['cool-neutral', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#B8B2A8',
          imageSlot: 'wall_paint_grey',
        },
        {
          id: 'venetian-plaster',
          label: 'Venetian Polished Plaster',
          brand: 'Mapei / Asian Paints Royale Aspira',
          description: 'Multi-layer polished plaster applied by hand. Marble-like luminosity. Artisanal, each wall is unique.',
          colorFamily: ['warm-neutral', 'cool-neutral'],
          register: 'provenance',
          swatchHex: '#D8D2C8',
          imageSlot: 'wall_venetian_plaster',
          note: 'Requires certified applicator. 3-day process.',
        },
        {
          id: 'timber-panelling-light',
          label: 'Timber Panelling — Light Oak',
          brand: 'Custom fabrication (Bengaluru workshops)',
          description: 'Vertical fluted or flat timber slat panelling. Light oak finish. Feature wall, floor to ceiling.',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'provenance',
          swatchHex: '#C8A87A',
          imageSlot: 'wall_timber_panel_light',
        },
        {
          id: 'timber-panelling-dark',
          label: 'Timber Panelling — Dark Walnut',
          brand: 'Custom fabrication (Bengaluru workshops)',
          description: 'Vertical timber slat panelling. Dark walnut finish. Enveloping and rich. Feature wall.',
          colorFamily: ['warm'],
          register: 'provenance',
          swatchHex: '#5A3E2C',
          imageSlot: 'wall_timber_panel_dark',
        },
        {
          id: 'stone-cladding',
          label: 'Natural Stone Cladding',
          brand: 'Antolini / Nitco / Aparici',
          description: 'Book-matched or split-face natural stone panel. Statement feature wall. Architectural weight.',
          colorFamily: ['warm-neutral', 'cool-neutral'],
          register: 'atelier',
          swatchHex: '#B0A898',
          imageSlot: 'wall_stone_cladding',
          note: 'Full wall in stone, not an accent. Structural loading verified at design stage.',
        },
      ],
    },


    // ── 3. CEILING ───────────────────────────────────────────
    ceiling: {
      id: 'ceiling',
      label: 'Ceiling',
      renderTier: 1,
      required: false,
      options: [
        {
          id: 'flat-gypsum',
          label: 'Flat Gypsum — Clean',
          brand: 'USG Boral / Armstrong',
          description: 'Flat painted gypsum board with concealed perimeter coving. Recessed lighting integrated. The resolved, invisible ceiling.',
          register: 'composed',
          swatchHex: '#FFFFFF',
          imageSlot: 'ceil_flat_gypsum',
        },
        {
          id: 'coffered',
          label: 'Coffered / Box Beam',
          brand: 'USG Boral (custom profile)',
          description: 'Structural grid of recessed rectangular panels. Painted white or tinted. Classical depth and proportion.',
          register: 'provenance',
          swatchHex: '#F0EEE8',
          imageSlot: 'ceil_coffered',
        },
        {
          id: 'timber-slat',
          label: 'Timber Slat / Linear Batten',
          brand: 'Custom fabrication / Fantoni (Italy)',
          description: 'Linear timber battens across ceiling plane. Light oak or walnut finish. Acoustic improvement, visual warmth.',
          register: 'provenance',
          swatchHex: '#C4A882',
          imageSlot: 'ceil_timber_slat',
          note: 'Can integrate concealed lighting tracks between battens.',
        },
        {
          id: 'stretched-fabric',
          label: 'Stretched Fabric — Diffused',
          brand: 'Barrisol (France) / custom',
          description: 'Backlit stretch fabric ceiling. Soft, even, diffused illumination. Enveloping atmosphere.',
          register: 'atelier',
          swatchHex: '#E8E4DE',
          imageSlot: 'ceil_fabric',
          note: 'Most effective in bedrooms and dining rooms.',
        },
      ],
    },


    // ── 4. FURNITURE CHARACTER ────────────────────────────────
    furniture: {
      id: 'furniture',
      label: 'Furniture Character',
      renderTier: 1,
      required: true,
      note: 'The entire furniture set is selected as one coherent character — not piece by piece. Specific pieces are detailed in the Accord Brief.',
      options: [
        {
          id: 'sculptural-modern',
          label: 'Sculptural Modern',
          brands: ['Phantom Hands', 'Minotti', 'Fritz Hansen', 'Cassina'],
          description: 'Strong silhouettes, statement pieces, architectural restraint. Furniture as object. Form as primary language.',
          suitedPersonas: ['seeker'],
          register: 'composed',
          imageSlot: 'furn_sculptural',
          pieces: {
            sofa: 'Low-profile sectional, slim arms, performance linen or wool upholstery',
            coffeeTable: 'Solid stone or cast metal top, minimal frame',
            accentChair: 'Cantilever or barrel form, single fabric upholstery',
            sideTable: 'Powder-coated steel tube or stone disc',
            tvUnit: 'Floating dark timber or lacquer unit, no visible hardware',
            diningTable: 'Stone or glass top, architectural metal or stone base',
            diningChairs: 'Molded plywood or wire-form, stackable',
            shelf: 'Open steel or powder-coated frame, minimal depth',
          },
        },
        {
          id: 'warm-layered',
          label: 'Warm Layered',
          brands: ['The Purple Turtles', 'Gulmohar Lane', 'Bombay Atelier', 'Ethnicraft'],
          description: 'Accumulated, lived-in, generous. Texture on texture. A room that tells a story without forcing one.',
          suitedPersonas: ['host', 'settler'],
          register: 'composed',
          imageSlot: 'furn_warm_layered',
          pieces: {
            sofa: 'Deep-seated tuxedo sofa, chenille or textured velvet upholstery, throw at arm',
            coffeeTable: 'Turned timber legs, rattan tray top or stone, books stacked',
            accentChair: 'Wingback or barrel chair, fabric upholstered with contrast piping',
            sideTable: 'Solid timber with cane or rattan inset detail',
            tvUnit: 'Sideboard-style, brass bar handles, timber carcass with closed storage',
            diningTable: 'Solid teak or mango wood, oval or round, generous proportions',
            diningChairs: 'Upholstered seat pad, turned timber legs',
            shelf: 'Solid timber shelving unit, open with styled objects and books',
          },
        },
        {
          id: 'spare-functional',
          label: 'Spare Functional',
          brands: ['Woud', 'Hem', 'Muuto', 'Ethnicraft'],
          description: 'Minimal, considered, purposeful. Nothing that does not earn its place. The room as cleared space for thought.',
          suitedPersonas: ['seeker'],
          register: 'composed',
          imageSlot: 'furn_spare',
          pieces: {
            sofa: '3-seater with slim frame, removable linen slipcover, no cushions',
            coffeeTable: 'Solid oak slab, honest material, low height',
            accentChair: 'Simple upholstered form, no arms, single fabric',
            sideTable: 'Nesting stacking tables, solid timber, one material only',
            tvUnit: 'Open solid oak or pine shelving unit — television wall-mounted above',
            diningTable: 'Rectangular solid oak or pine, trestle base',
            diningChairs: 'Formed seat, solid timber, no upholstery',
            shelf: 'Ladder-style open shelving, single material',
          },
        },
      ],
    },


    // ── 5. LIGHTING MOOD ──────────────────────────────────────
    lighting: {
      id: 'lighting',
      label: 'Lighting Mood',
      renderTier: 1,
      required: true,
      note: 'Post-process atmospheric overlay. Same geometry render, different light treatment. 4 moods per base render.',
      options: [
        {
          id: 'warm-ambient',
          label: 'Warm Ambient',
          brands: ['Flos', 'Foscarini', 'Lutron (controls)'],
          kelvin: '2700 K',
          description: 'Golden-hour warmth. Cove + pendant sources. All surfaces glow softly. The evening home.',
          fixtures: 'Pendant over dining, cove strip in living, floor lamp in corner',
          imageSlot: 'mood_warm_ambient',
        },
        {
          id: 'dramatic-accent',
          label: 'Dramatic Accent',
          brands: ['Artemide', 'Astro Lighting'],
          kelvin: '3000 K spot',
          description: 'Spotlight pools, deep shadow between. Objects, artwork, and surfaces lit for attention.',
          fixtures: 'Track spotlights, adjustable recessed downlights, wall washers',
          imageSlot: 'mood_dramatic_accent',
        },
        {
          id: 'diffused-soft',
          label: 'Diffused Soft',
          brands: ['Flos', 'Lutron', 'Philips Hue'],
          kelvin: '3000 K diffused',
          description: 'Even, shadow-free illumination. Cove light, no direct sources visible. The studio quality.',
          fixtures: 'Perimeter cove, flush diffused panel, no exposed bulbs',
          imageSlot: 'mood_diffused_soft',
        },
        {
          id: 'natural-led',
          label: 'Natural-Led',
          brands: ['Velux', 'natural'],
          kelvin: '5500 K (daylight)',
          description: 'Daylight dominant. Interior lighting as supplement only. Windows and sky are the source.',
          fixtures: 'Minimal recessed downlights, all off or at 10% for fill',
          imageSlot: 'mood_natural_led',
        },
      ],
    },


    // ── 6. RUG / CARPET ──────────────────────────────────────
    rug: {
      id: 'rug',
      label: 'Rug / Carpet',
      renderTier: 2,
      required: false,
      options: [
        {
          id: 'solid-wool-natural',
          label: 'Solid Wool — Natural Undyed',
          brand: 'Obeetee (Mirzapur, UP)',
          description: 'Hand-tufted wool, natural undyed fleece. Tonal warmth without pattern. Grounds the living zone.',
          size: '8×10 ft, placed under coffee table',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#D4C8B0',
          imageSlot: 'rug_solid_wool_natural',
          note: 'Obeetee ships internationally. Available in custom sizes for Sky Edit.',
        },
        {
          id: 'geometric-flatweave',
          label: 'Geometric Flatweave',
          brand: 'The Rug Republic / Cocoon Fine Rugs',
          description: 'Flatweave in a restrained geometric repeat. Wool + cotton blend. Defines zones without competing.',
          size: '8×10 ft',
          colorFamily: ['cool-neutral', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#8A9090',
          imageSlot: 'rug_geometric',
          note: 'Pattern scale selected to complement furniture layout.',
        },
        {
          id: 'abstract-printed',
          label: 'Abstract — Large Scale',
          brand: 'Jaipur Rugs / Cocoon Fine Rugs',
          description: 'Hand-knotted or printed abstract composition, palette-matched. The rug as the art piece of the floor.',
          size: '9×12 ft or custom',
          colorFamily: ['warm', 'warm-neutral', 'cool-neutral'],
          register: 'provenance',
          swatchHex: '#B09878',
          imageSlot: 'rug_abstract',
        },
        {
          id: 'dhurrie-handwoven',
          label: 'Dhurrie — Handwoven',
          brand: 'Good Earth / Nila House',
          description: 'Traditional flatwoven cotton dhurrie in contemporary colorway. Indian craft, modern proportion.',
          size: '8×10 ft',
          colorFamily: ['warm'],
          register: 'provenance',
          swatchHex: '#C8A868',
          imageSlot: 'rug_dhurrie',
          note: 'Exclusively suited to Settler persona and warm palettes.',
        },
        {
          id: 'no-rug',
          label: 'Bare Floor',
          brand: null,
          description: 'Floor material fully exposed. Clean, monolithic reading of the space.',
          size: null,
          colorFamily: ['all'],
          register: 'composed',
          swatchHex: null,
          imageSlot: null,
        },
      ],
    },


    // ── 7. CURTAINS & DRAPES ──────────────────────────────────
    curtains: {
      id: 'curtains',
      label: 'Curtains & Drapes',
      renderTier: 2,
      required: false,
      options: [
        {
          id: 'linen-floor-ceiling',
          label: 'Linen — Floor to Ceiling',
          brand: 'Zimmer + Rohde / Arora Fabrics',
          description: 'Full-height natural linen drapes. Loosely woven, softly pooling at floor. Warmth and movement.',
          heading: 'Pinch pleat, ceiling-fixed track',
          colorFamily: ['warm', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#E0D4BE',
          imageSlot: 'drape_linen',
        },
        {
          id: 'velvet-drapes',
          label: 'Velvet Drapes — Blackout',
          brand: 'Rubelli / Zimmer + Rohde',
          description: 'Heavyweight velvet, full blackout lining. Rich tactile quality. For deep atmosphere.',
          heading: 'Pinch pleat, recessed ceiling track',
          colorFamily: ['warm'],
          register: 'provenance',
          swatchHex: '#6B4A38',
          imageSlot: 'drape_velvet',
          note: 'Color selected from palette. Terra Nox and Amber Thread palettes primary.',
        },
        {
          id: 'sheer-roller',
          label: 'Sheer + Roller Blind — Dual Layer',
          brand: 'Sunbrella / Luxaflex',
          description: 'Day layer: open-weave sheer. Night layer: blackout roller. Clean when open, flexible in use.',
          heading: 'Concealed cassette, ceiling-fixed',
          colorFamily: ['cool-neutral', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#F0EEE8',
          imageSlot: 'drape_sheer_roller',
        },
        {
          id: 'roman-blind',
          label: 'Roman Blind — Structured',
          brand: 'Zimmer + Rohde / custom',
          description: 'Structured fabric roman blind, no drape. Clean, architectural, suited to minimal interiors.',
          heading: 'Mounted within reveal',
          colorFamily: ['cool-neutral', 'warm-neutral'],
          register: 'composed',
          swatchHex: '#D8D0C2',
          imageSlot: 'drape_roman',
        },
        {
          id: 'no-curtain',
          label: 'No Curtains — View-Led',
          brand: null,
          description: 'Windows fully exposed. The sky and city are the feature. Seeker persona primary.',
          colorFamily: ['all'],
          register: 'composed',
          swatchHex: null,
          imageSlot: null,
        },
      ],
    },


    // ── 8. ARTWORK ────────────────────────────────────────────
    artwork: {
      id: 'artwork',
      label: 'Artwork',
      renderTier: 2,
      required: false,
      options: [
        {
          id: 'commissioned',
          label: 'Commissioned Original',
          galleries: ['DhagaWork (textile)', 'Kynkyny Art (Bengaluru)', 'Artist introduction by [INSD]e*'],
          description: 'Original work created for this apartment. Medium and scale determined in collaboration. May be painting, textile, photography, or sculpture.',
          register: 'provenance',
          swatchHex: null,
          imageSlot: 'art_commissioned',
          note: 'Commission brief written by [INSD]e* at T-12 months. Artist and medium agreed with resident.',
        },
        {
          id: 'curated-archive',
          label: 'Curated Archive',
          galleries: [
            'Kynkyny Art — Bengaluru',
            'Chemould Prescott Road — Mumbai',
            'Gallery Espace — Delhi',
            'Sakshi Gallery — Mumbai',
            'Sumukha Gallery — Bengaluru',
          ],
          description: 'Vetted works from partner galleries. Palette-matched and register-appropriate. Framing specified by [INSD]e*.',
          register: 'composed',
          swatchHex: null,
          imageSlot: 'art_curated',
        },
        {
          id: 'graphic-print',
          label: 'Framed Graphic Print — Archive',
          brand: 'Printed in-house by [INSD]e* / Object & Totem',
          description: 'Limited edition giclée prints from a curated archive of photography and graphic art. Palette-calibrated.',
          register: 'composed',
          swatchHex: null,
          imageSlot: 'art_print',
        },
        {
          id: 'open',
          label: 'Open — Resident\'s Collection',
          brand: null,
          description: 'Resident installs their own collection. [INSD]e* provides placement guidelines, hanging specs, and framing recommendations.',
          register: 'composed',
          swatchHex: null,
          imageSlot: null,
        },
      ],
    },

  }, // end elements


  // ─────────────────────────────────────────────────────────────
  // SPEC-ONLY — No render. Selections appear in Accord Brief only.
  // ─────────────────────────────────────────────────────────────
  specOnly: {

    kitchen: {
      label: 'Kitchen',
      note: 'Spec confirmed at T-3 months with project team.',
      elements: {

        cabinetFront: {
          label: 'Cabinet Fronts',
          options: [
            { id: 'lacquer-slab',   label: 'Lacquer Slab — Matte',      brand: 'Häfele / custom',          register: 'composed',   finishes: ['Arctic White', 'Stone Grey', 'Olive Matte', 'Anthracite'] },
            { id: 'timber-veneer',  label: 'Timber Veneer',              brand: 'Häfele / custom',          register: 'composed',   description: 'Oak or walnut veneer MDF fronts. Warm, natural.' },
            { id: 'stone-veneer',   label: 'Stone Veneer',               brand: 'Antolini / Nitco',         register: 'atelier',    description: 'Real stone veneer on MDF substrate. Dramatic.' },
            { id: 'shaker-painted', label: 'Painted Shaker — Classic',   brand: 'Custom joinery',           register: 'provenance', description: 'Recessed panel, palette-matched paint, turned knobs.' },
          ],
        },

        countertop: {
          label: 'Countertop',
          options: [
            { id: 'silestone',       label: 'Silestone Quartz',         brand: 'Cosentino (Spain)',            register: 'composed',   description: 'Consistent, stain-resistant. Huge color range.' },
            { id: 'marble-counter',  label: 'Calacatta Marble',         brand: 'Antolini',                    register: 'atelier',    description: 'Natural marble. Requires annual sealing.' },
            { id: 'black-granite',   label: 'Black Granite — Polished', brand: 'Pokarna (Hyderabad)',          register: 'composed',   description: 'Indian absolute black. Hardwearing, serviceable.' },
            { id: 'concrete-cast',   label: 'Cast Concrete',            brand: 'Custom fabrication',          register: 'atelier',    description: 'Seamless pour. Industrial warmth. Each one unique.' },
          ],
        },

        backsplash: {
          label: 'Backsplash',
          options: [
            { id: 'metro-tile',  label: 'Bevelled Metro Tile',     brand: 'Nitco / Johnson Tiles',  register: 'composed',   description: 'Classic white subway, bevelled edge.' },
            { id: 'stone-slab',  label: 'Continuous Stone Slab',   brand: 'Antolini',               register: 'atelier',    description: 'No grout lines. Material continues from counter.' },
            { id: 'zellige',     label: 'Zellige / Handmade Tile', brand: 'Carocim / Indian artisan', register: 'provenance', description: 'Irregular handmade tile, Moroccan tradition.' },
            { id: 'glass-panel', label: 'Lacobel Back-Painted Glass', brand: 'Saint-Gobain',        register: 'composed',   description: 'Seamless, easy to clean, colour-matched.' },
          ],
        },

        hardwareFinish: {
          label: 'Hardware Finish',
          options: [
            { id: 'brushed-brass',  label: 'Brushed Brass',   brand: 'Häfele / Sugatsune' },
            { id: 'matte-black',    label: 'Matte Black',     brand: 'Häfele' },
            { id: 'chrome',         label: 'Polished Chrome', brand: 'Häfele / Hettich' },
            { id: 'brushed-nickel', label: 'Brushed Nickel',  brand: 'Häfele' },
          ],
        },

        appliances: {
          label: 'Appliances',
          options: [
            { id: 'bosch',   label: 'Bosch — Standard',  brand: 'Bosch (Germany)',   register: 'composed',   description: 'Reliable, widely serviced across India.' },
            { id: 'siemens', label: 'Siemens — Premium', brand: 'Siemens (Germany)', register: 'provenance', description: 'Same platform as Bosch, upgraded interface.' },
            { id: 'miele',   label: 'Miele — Luxury',    brand: 'Miele (Germany)',   register: 'atelier',    description: 'German engineering. 20-year product lifespan.' },
          ],
        },

      },
    }, // end kitchen

    bathroom: {
      label: 'Bathrooms',
      note: 'Applies to Master Bathroom. Secondary bathrooms follow a simplified version.',
      elements: {

        floorTile: {
          label: 'Bathroom Floor',
          options: [
            { id: 'mosaic-marble',      label: 'Marble Mosaic',           brand: 'Antolini / Nitco',             register: 'provenance', description: '50×50 marble chip mosaic. Slip-resistant. Timeless.' },
            { id: 'large-format-stone', label: 'Large Format Stone Look',  brand: 'Porcelanosa / RAK Ceramics',  register: 'composed',   description: '600×1200 porcelain. Minimal grout, spa quality.' },
            { id: 'zellige-bath',       label: 'Zellige — Handmade',       brand: 'Carocim (Morocco)',            register: 'provenance', description: 'Irregular, iridescent. Each tile distinct.' },
            { id: 'microcement-bath',   label: 'Microcement — Seamless',   brand: 'Mapei Ultratop',               register: 'atelier',    description: 'Floor-to-wall continuity, no grout lines.' },
          ],
        },

        wallTile: {
          label: 'Bathroom Wall',
          options: [
            { id: 'metro-bath',         label: 'Bevelled Metro Tile',     brand: 'Nitco / Johnson Tiles',   register: 'composed',   description: 'Classic white subway, bevelled edge. Timeless.' },
            { id: 'large-format-wall',  label: 'Large Format Slab',       brand: 'Porcelanosa / Aparici',   register: 'composed',   description: 'Stone or concrete look, minimal grout.' },
            { id: 'fluted-tile',        label: 'Fluted / Ribbed Tile',    brand: 'Aparici / Ape Grupo',     register: 'provenance', description: '3D textured tile. Strong tactile presence.' },
            { id: 'natural-stone-wall', label: 'Natural Stone — Honed',   brand: 'Antolini',                register: 'atelier',    description: 'Continuous limestone or marble panel.' },
          ],
        },

        sanitaryware: {
          label: 'Sanitaryware',
          options: [
            { id: 'jaquar',   label: 'Jaquar — Artize Collection', brand: 'Jaquar (India)',          register: 'composed',   description: 'Premium Indian brand. Best service network.' },
            { id: 'kohler',   label: 'Kohler',                     brand: 'Kohler (USA)',             register: 'provenance', description: 'Strong international design range.' },
            { id: 'duravit',  label: 'Duravit',                    brand: 'Duravit (Germany)',        register: 'atelier',    description: 'Designed by Starck, Foster, others.' },
            { id: 'villeroy', label: 'Villeroy & Boch',            brand: 'Villeroy & Boch (Germany)', register: 'atelier',    description: 'European precision and design heritage.' },
          ],
        },

        fittings: {
          label: 'Tapware & Fittings',
          options: [
            { id: 'grohe-chrome',       label: 'Grohe — Polished Chrome',  brand: 'Grohe (Germany)',      register: 'composed',   description: 'Entry luxury. Reliable, widely available.' },
            { id: 'hansgrohe-gold',     label: 'Hansgrohe — Brushed Gold', brand: 'Hansgrohe (Germany)',  register: 'provenance', description: 'Warm metallic. Pairs with brass hardware.' },
            { id: 'grohe-matte-black',  label: 'Grohe — Matte Black',      brand: 'Grohe',                register: 'provenance', description: 'Strong visual statement. Dark bathrooms.' },
            { id: 'vola',               label: 'Vola — Brushed Steel',      brand: 'Vola (Denmark)',       register: 'atelier',    description: 'Iconic minimalist Danish tapware. Timeless.' },
          ],
        },

        bathtub: {
          label: 'Bathtub',
          note: 'Master bathroom only. 4BHK and 5BHK apartments.',
          options: [
            { id: 'no-bath',         label: 'Walk-in Shower Only',   brand: null,                          register: 'composed',   description: 'Space maximised as frameless shower enclosure.' },
            { id: 'freestanding',    label: 'Freestanding Bath',     brand: 'Kaldewei / Villeroy & Boch', register: 'provenance', description: 'Statement freestanding tub. Minimum 6 sqm ensuite.' },
            { id: 'built-in',        label: 'Platform Bath',         brand: 'Jaquar / Kohler',             register: 'composed',   description: 'Deck-mounted, integrated with floor and tile.' },
          ],
        },

      },
    }, // end bathroom

    hardware: {
      label: 'Hardware & Details',
      elements: {

        doorHandles: {
          label: 'Door Handles',
          options: [
            { id: 'hafele-brushed-steel', label: 'Brushed Steel — Minimal',  brand: 'Häfele',             register: 'composed'   },
            { id: 'olivari-brass',        label: 'Brushed Brass — Classic',  brand: 'Olivari (Italy)',    register: 'provenance' },
            { id: 'fsb-matte-black',      label: 'Matte Black — Contemporary', brand: 'FSB (Germany)',    register: 'provenance' },
          ],
        },

        switches: {
          label: 'Switches & Sockets',
          options: [
            { id: 'schneider',      label: 'Schneider Clipsal 2000',  brand: 'Schneider Electric', register: 'composed',   description: 'Standard premium. Wide India availability.' },
            { id: 'legrand-arteor', label: 'Legrand Arteor',          brand: 'Legrand (France)',   register: 'provenance', description: 'Designed by C. Pillet. Elegant and resolved.' },
            { id: 'abb-niessen',    label: 'ABB Niessen',             brand: 'ABB (Spain)',        register: 'provenance', description: 'Minimalist European range.' },
          ],
        },

        cabinetPulls: {
          label: 'Cabinet Pulls & Handles',
          options: [
            { id: 'hafele-bar',     label: 'Bar Pull — Brushed Steel', brand: 'Häfele',           register: 'composed'   },
            { id: 'sugatsune-cup',  label: 'Cup Pull — Brushed Brass', brand: 'Sugatsune (Japan)', register: 'provenance' },
            { id: 'integrated',     label: 'Integrated / Push-to-open', brand: 'Häfele / Hettich', register: 'composed',   description: 'No visible handle. Clean fronts only.' },
          ],
        },

      },
    }, // end hardware

  }, // end specOnly


  // ─────────────────────────────────────────────────────────────
  // IMAGE MANIFEST
  // Complete list of all files that need to be produced.
  // Group: 'render' = 16:9 room render | 'swatch' = small square
  // ─────────────────────────────────────────────────────────────
  imageManifest: [

    // ── FLOORING RENDERS (swap floor, keep everything else default) ──
    { slot: 'floor_limestone_honed',   group: 'render', element: 'flooring', priority: 1 },
    { slot: 'floor_calacatta_marble',  group: 'render', element: 'flooring', priority: 3, registerGate: 'atelier' },
    { slot: 'floor_timber_oak',        group: 'render', element: 'flooring', priority: 1 },
    { slot: 'floor_timber_walnut',     group: 'render', element: 'flooring', priority: 2 },
    { slot: 'floor_tile_cream',        group: 'render', element: 'flooring', priority: 1 },
    { slot: 'floor_tile_charcoal',     group: 'render', element: 'flooring', priority: 2 },
    { slot: 'floor_microcement',       group: 'render', element: 'flooring', priority: 3, registerGate: 'atelier' },
    { slot: 'floor_terrazzo_warm',     group: 'render', element: 'flooring', priority: 3, registerGate: 'atelier' },

    // ── WALL RENDERS ──
    { slot: 'wall_limewash_warm',       group: 'render', element: 'wall', priority: 1 },
    { slot: 'wall_limewash_terracotta', group: 'render', element: 'wall', priority: 1 },
    { slot: 'wall_paint_white',         group: 'render', element: 'wall', priority: 1 },
    { slot: 'wall_paint_grey',          group: 'render', element: 'wall', priority: 1 },
    { slot: 'wall_venetian_plaster',    group: 'render', element: 'wall', priority: 2, registerGate: 'provenance' },
    { slot: 'wall_timber_panel_light',  group: 'render', element: 'wall', priority: 2, registerGate: 'provenance' },
    { slot: 'wall_timber_panel_dark',   group: 'render', element: 'wall', priority: 2, registerGate: 'provenance' },
    { slot: 'wall_stone_cladding',      group: 'render', element: 'wall', priority: 3, registerGate: 'atelier'   },

    // ── CEILING RENDERS ──
    { slot: 'ceil_flat_gypsum',  group: 'render', element: 'ceiling', priority: 1 },
    { slot: 'ceil_coffered',     group: 'render', element: 'ceiling', priority: 2, registerGate: 'provenance' },
    { slot: 'ceil_timber_slat',  group: 'render', element: 'ceiling', priority: 2, registerGate: 'provenance' },
    { slot: 'ceil_fabric',       group: 'render', element: 'ceiling', priority: 3, registerGate: 'atelier'   },

    // ── FURNITURE SET RENDERS ──
    { slot: 'furn_sculptural',    group: 'render', element: 'furniture', priority: 1 },
    { slot: 'furn_warm_layered',  group: 'render', element: 'furniture', priority: 1 },
    { slot: 'furn_spare',         group: 'render', element: 'furniture', priority: 1 },

    // ── LIGHTING MOOD RENDERS (post-process, cheapest to produce) ──
    { slot: 'mood_warm_ambient',     group: 'render', element: 'lighting', priority: 1 },
    { slot: 'mood_dramatic_accent',  group: 'render', element: 'lighting', priority: 1 },
    { slot: 'mood_diffused_soft',    group: 'render', element: 'lighting', priority: 1 },
    { slot: 'mood_natural_led',      group: 'render', element: 'lighting', priority: 1 },

    // ── RUG RENDERS (overlay on floor render) ──
    { slot: 'rug_solid_wool_natural', group: 'render', element: 'rug', priority: 2 },
    { slot: 'rug_geometric',          group: 'render', element: 'rug', priority: 2 },
    { slot: 'rug_abstract',           group: 'render', element: 'rug', priority: 3, registerGate: 'provenance' },
    { slot: 'rug_dhurrie',            group: 'render', element: 'rug', priority: 3, registerGate: 'provenance' },

    // ── DRAPE RENDERS (overlay on window area) ──
    { slot: 'drape_linen',        group: 'render', element: 'curtains', priority: 2 },
    { slot: 'drape_velvet',       group: 'render', element: 'curtains', priority: 3, registerGate: 'provenance' },
    { slot: 'drape_sheer_roller', group: 'render', element: 'curtains', priority: 2 },
    { slot: 'drape_roman',        group: 'render', element: 'curtains', priority: 2 },

    // ── ARTWORK RENDERS (swap artwork on wall) ──
    { slot: 'art_commissioned', group: 'render', element: 'artwork', priority: 3, registerGate: 'provenance' },
    { slot: 'art_curated',      group: 'render', element: 'artwork', priority: 2 },
    { slot: 'art_print',        group: 'render', element: 'artwork', priority: 1 },

    // ── SWATCHES (all small square thumbnails for sidebar picker) ──
    { slot: 'swatch_floor_limestone_honed',   group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_calacatta_marble',  group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_timber_oak',        group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_timber_walnut',     group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_tile_cream',        group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_tile_charcoal',     group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_microcement',       group: 'swatch', element: 'flooring' },
    { slot: 'swatch_floor_terrazzo_warm',     group: 'swatch', element: 'flooring' },
    { slot: 'swatch_wall_limewash_warm',      group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_limewash_terracotta', group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_paint_white',        group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_paint_grey',         group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_venetian_plaster',   group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_timber_panel_light', group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_timber_panel_dark',  group: 'swatch', element: 'wall' },
    { slot: 'swatch_wall_stone_cladding',     group: 'swatch', element: 'wall' },
    { slot: 'swatch_ceil_flat_gypsum',        group: 'swatch', element: 'ceiling' },
    { slot: 'swatch_ceil_coffered',           group: 'swatch', element: 'ceiling' },
    { slot: 'swatch_ceil_timber_slat',        group: 'swatch', element: 'ceiling' },
    { slot: 'swatch_rug_solid_wool',          group: 'swatch', element: 'rug' },
    { slot: 'swatch_rug_geometric',           group: 'swatch', element: 'rug' },
    { slot: 'swatch_rug_abstract',            group: 'swatch', element: 'rug' },
    { slot: 'swatch_rug_dhurrie',             group: 'swatch', element: 'rug' },
    { slot: 'swatch_drape_linen',             group: 'swatch', element: 'curtains' },
    { slot: 'swatch_drape_velvet',            group: 'swatch', element: 'curtains' },
    { slot: 'swatch_drape_sheer_roller',      group: 'swatch', element: 'curtains' },
    { slot: 'swatch_drape_roman',             group: 'swatch', element: 'curtains' },
  ],

}; // end ACCORD_DB


// ─────────────────────────────────────────────────────────────────
// SUMMARY STATS (for reference)
// ─────────────────────────────────────────────────────────────────
//
//  PERSONAS:          3
//  PALETTES:          9 (3 per persona)
//  REGISTERS:         4
//
//  CONFIGURABLE ELEMENTS (Living Room):
//    Flooring          8 options
//    Wall Treatment    8 options
//    Ceiling           4 options
//    Furniture         3 options (sets)
//    Lighting Mood     4 options
//    Rug / Carpet      5 options (incl. bare)
//    Curtains          5 options (incl. none)
//    Artwork           4 options
//    ─────────────────────────
//    Total options:   41
//
//  SPEC-ONLY ELEMENTS:
//    Kitchen:          5 sub-elements, 18 options
//    Bathroom:         5 sub-elements, 20 options
//    Hardware:         3 sub-elements,  9 options
//    ─────────────────────────
//    Total spec options: 47
//
//  IMAGE PRODUCTION:
//    Render slots:   37  (16:9 room renders)
//    Swatch slots:   26  (small square thumbnails)
//    ─────────────────────────
//    Total images:   63
//
//  MINIMUM DEMO SCOPE (Priority 1 only):
//    Render slots:   ~20
//    Swatch slots:   ~26
//    Total:          ~46
//
// ─────────────────────────────────────────────────────────────────
