import os
import math
from PIL import Image, ImageDraw, ImageFont

# Define brand colors
GOLD_LIGHT = "#FFE468"
GOLD_MID = "#FCD34D"
GOLD_DEEP = "#F59E0B"
GOLD_DARK = "#D97706"

LIME_LIGHT = "#E4F4D9"
LIME_MID = "#8CC641"
LIME_DARK = "#73A82C"

DARK_BG = "#131722"
DARK_SURFACE = "#1E2433"
CHARCOAL = "#272630"
WHITE = "#FFFFFF"

# 1. Favicon SVG (64x64 viewBox)
FAVICON_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none">
  <defs>
    <linearGradient id="favBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2433" />
      <stop offset="100%" stop-color="#0F141F" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF085" />
      <stop offset="50%" stop-color="#FFE468" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <linearGradient id="limeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A6E05B" />
      <stop offset="100%" stop-color="#73A82C" />
    </linearGradient>
    <filter id="subtleGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#F59E0B" flood-opacity="0.35"/>
    </filter>
  </defs>

  <!-- Squircle Base with premium subtle stroke -->
  <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#favBg)" stroke="#FFE468" stroke-opacity="0.25" stroke-width="1.5" />

  <!-- Inner Academic Mark: Open Book Wings + Modern Graduation Cap + Excellence Spark -->
  <g filter="url(#subtleGlow)">
    <!-- Graduation Cap / Diamond Crown -->
    <path d="M32 14L45 20.5L32 27L19 20.5L32 14Z" fill="url(#goldGrad)" />
    <!-- Cap Underneath Shadow / Rim -->
    <path d="M25 24L32 27.5L39 24V27.5C39 30 35.8 32 32 32C28.2 32 25 30 25 27.5V24Z" fill="#D97706" fill-opacity="0.85" />
    
    <!-- Tassel String & Bobble -->
    <path d="M42 22V31" stroke="#8CC641" stroke-width="1.75" stroke-linecap="round" />
    <circle cx="42" cy="32" r="1.5" fill="#8CC641" />

    <!-- Open Knowledge Book Wings -->
    <!-- Left Page -->
    <path d="M30 33.5C25 31.5 19 32.5 15 35.5V45C19 42 25 41 30 43V33.5Z" fill="url(#goldGrad)" />
    <!-- Right Page -->
    <path d="M34 33.5C39 31.5 45 32.5 49 35.5V45C45 42 39 41 34 43V33.5Z" fill="url(#limeGrad)" />
    
    <!-- Central Spine Light Beam -->
    <rect x="31" y="32" width="2" height="12" rx="1" fill="#FFFFFF" fill-opacity="0.9" />
  </g>
</svg>"""

# 2. EduStow Logo SVG - Dark Navbar Variant (white "Edu" + brand yellow "Stow")
LOGO_DARK_BG_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 76" fill="none">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#242B3B" />
      <stop offset="100%" stop-color="#121722" />
    </linearGradient>
    <linearGradient id="goldGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF285" />
      <stop offset="40%" stop-color="#FFE468" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
    <linearGradient id="limeGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#AEE764" />
      <stop offset="100%" stop-color="#76B02E" />
    </linearGradient>
    <filter id="markShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#000000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <!-- Icon Container (56x56) -->
  <g transform="translate(6, 10)">
    <rect x="0" y="0" width="56" height="56" rx="15" fill="url(#bgGrad)" stroke="#FFE468" stroke-opacity="0.3" stroke-width="1.5" filter="url(#markShadow)"/>
    
    <!-- Graduation Cap / Diamond Crest -->
    <path d="M28 11.5L40 17.5L28 23.5L16 17.5L28 11.5Z" fill="url(#goldGradL)" />
    <!-- Cap Rim -->
    <path d="M21.5 20.8L28 24.2L34.5 20.8V24C34.5 26.2 31.6 28 28 28C24.4 28 21.5 26.2 21.5 24V20.8Z" fill="#D97706" fill-opacity="0.8" />
    <!-- Tassel -->
    <path d="M37.5 19V27" stroke="#8CC641" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="37.5" cy="28" r="1.3" fill="#8CC641" />

    <!-- Open Knowledge Book Wings -->
    <!-- Left Wing (Golden Warmth) -->
    <path d="M26.2 29.5C21.8 27.8 16.5 28.6 13 31.2V39.5C16.5 37 21.8 36.2 26.2 37.8V29.5Z" fill="url(#goldGradL)" />
    <!-- Right Wing (Vibrant Lime Growth) -->
    <path d="M29.8 29.5C34.2 27.8 39.5 28.6 43 31.2V39.5C39.5 37 34.2 36.2 29.8 37.8V29.5Z" fill="url(#limeGradL)" />
    
    <!-- Central Spine Pillar -->
    <rect x="27.2" y="28" width="1.6" height="11" rx="0.8" fill="#FFFFFF" fill-opacity="0.95" />
  </g>

  <!-- Typography: EduStow -->
  <g transform="translate(76, 46)">
    <!-- "Edu" in crisp brilliant white -->
    <text font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="33" letter-spacing="-0.03em" fill="#FFFFFF">Edu</text>
    
    <!-- "Stow" in signature formal yellow -->
    <text x="65" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="33" letter-spacing="-0.03em" fill="url(#goldGradL)">Stow</text>
    
    <!-- Dot / Accent Mark in Lime Green -->
    <circle cx="159" cy="-8" r="3.5" fill="#8CC641" />
  </g>

  <!-- Sub-label / Tagline -->
  <text x="77" y="62" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="700" font-size="8.5" letter-spacing="0.22em" fill="#94A3B8" opacity="0.9">SMART SCHOOL CLOUD</text>
</svg>"""

# 3. EduStow Logo SVG - Light Background Variant (Dark Charcoal "Edu" + Golden "Stow")
LOGO_LIGHT_BG_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 76" fill="none">
  <defs>
    <linearGradient id="bgGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2433" />
      <stop offset="100%" stop-color="#0F141F" />
    </linearGradient>
    <linearGradient id="goldGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#EAB308" />
      <stop offset="100%" stop-color="#CA8A04" />
    </linearGradient>
    <linearGradient id="limeGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#84CC16" />
      <stop offset="100%" stop-color="#65A30D" />
    </linearGradient>
    <filter id="markShadowLight" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#1E2433" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Icon Container (56x56) -->
  <g transform="translate(6, 10)">
    <rect x="0" y="0" width="56" height="56" rx="15" fill="url(#bgGradLight)" stroke="#FFE468" stroke-opacity="0.4" stroke-width="1.5" filter="url(#markShadowLight)"/>
    
    <!-- Graduation Cap / Diamond Crest -->
    <path d="M28 11.5L40 17.5L28 23.5L16 17.5L28 11.5Z" fill="#FFE468" />
    <!-- Cap Rim -->
    <path d="M21.5 20.8L28 24.2L34.5 20.8V24C34.5 26.2 31.6 28 28 28C24.4 28 21.5 26.2 21.5 24V20.8Z" fill="#D97706" fill-opacity="0.9" />
    <!-- Tassel -->
    <path d="M37.5 19V27" stroke="#8CC641" stroke-width="1.6" stroke-linecap="round" />
    <circle cx="37.5" cy="28" r="1.3" fill="#8CC641" />

    <!-- Open Knowledge Book Wings -->
    <!-- Left Wing -->
    <path d="M26.2 29.5C21.8 27.8 16.5 28.6 13 31.2V39.5C16.5 37 21.8 36.2 26.2 37.8V29.5Z" fill="#FFE468" />
    <!-- Right Wing -->
    <path d="M29.8 29.5C34.2 27.8 39.5 28.6 43 31.2V39.5C39.5 37 34.2 36.2 29.8 37.8V29.5Z" fill="url(#limeGradLight)" />
    
    <!-- Central Spine Pillar -->
    <rect x="27.2" y="28" width="1.6" height="11" rx="0.8" fill="#FFFFFF" />
  </g>

  <!-- Typography: EduStow -->
  <g transform="translate(76, 46)">
    <!-- "Edu" in dark charcoal for light background -->
    <text font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="33" letter-spacing="-0.03em" fill="#1E2433">Edu</text>
    
    <!-- "Stow" in rich gold -->
    <text x="65" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="33" letter-spacing="-0.03em" fill="#D97706">Stow</text>
    
    <!-- Dot / Accent Mark in Lime Green -->
    <circle cx="159" cy="-8" r="3.5" fill="#8CC641" />
  </g>

  <!-- Sub-label / Tagline -->
  <text x="77" y="62" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="700" font-size="8.5" letter-spacing="0.22em" fill="#64748B">SMART SCHOOL CLOUD</text>
</svg>"""

print("SVGs prepared successfully.")
