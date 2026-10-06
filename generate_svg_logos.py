# Create standalone SVG logo files for dark & light backgrounds

SVG_DARK_LOGO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 68" width="320" height="68" fill="none">
  <defs>
    <linearGradient id="bgGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2638" />
      <stop offset="100%" stop-color="#0B0F17" />
    </linearGradient>
    <linearGradient id="goldGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF9C2" />
      <stop offset="35%" stop-color="#FFE468" />
      <stop offset="85%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="greenGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BEF264" />
      <stop offset="40%" stop-color="#8CC641" />
      <stop offset="100%" stop-color="#4D7C0F" />
    </linearGradient>
    <linearGradient id="borderGradL" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE468" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#8CC641" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.8" />
    </linearGradient>
    <filter id="glowL" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.4" />
    </filter>
  </defs>

  <!-- Mark (52x52) -->
  <g transform="translate(6, 8)">
    <rect x="0" y="0" width="52" height="52" rx="14" fill="url(#bgGradL)" stroke="url(#borderGradL)" stroke-width="1.8" />
    <rect x="2" y="2" width="48" height="48" rx="12" fill="none" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="1" />
    
    <g filter="url(#glowL)" transform="scale(0.406) translate(0, 0)">
      <!-- Cap -->
      <path d="M64 24 L94 38 L64 52 L34 38 Z" fill="url(#goldGradL)" />
      <path d="M48 45.5 L64 53 L80 45.5 V52 C80 57.5 73 61 64 61 C55 61 48 57.5 48 52 Z" fill="#B45309" />
      <path d="M88 41 C90 46 91 53 91 60" fill="none" stroke="#8CC641" stroke-width="3" stroke-linecap="round" />
      <circle cx="91" cy="62" r="3.2" fill="#8CC641" />

      <!-- Wings -->
      <path d="M60 67 C48 62 34 64 24 71 C23.5 71.5 23 72.5 23 73.5 L23 88 C23 89.2 24.2 90 25.5 89.5 C35 84.5 48 83 60 87 Z" fill="url(#goldGradL)" />
      <path d="M68 67 C80 62 94 64 104 71 C104.5 71.5 105 72.5 105 73.5 L105 88 C105 89.2 103.8 90 102.5 89.5 C93 84.5 80 83 68 87 Z" fill="url(#greenGradL)" />
      <path d="M62.5 64.5 C62.5 63.5 65.5 63.5 65.5 64.5 L65.5 89.5 C65.5 90.5 62.5 90.5 62.5 89.5 Z" fill="#FFFFFF" />
    </g>
  </g>

  <!-- Typography -->
  <g transform="translate(70, 42)">
    <text font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="28" letter-spacing="-0.03em" fill="#FFFFFF">Edu</text>
    <text x="54" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="28" letter-spacing="-0.03em" fill="#FFE468">Stow</text>
    <circle cx="132" cy="-6" r="3.5" fill="#8CC641" />
  </g>

  <!-- Tagline -->
  <text x="71" y="56" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="700" font-size="8.5" letter-spacing="0.20em" fill="#94A3B8">SMART SCHOOL CLOUD</text>
</svg>"""

SVG_LIGHT_LOGO = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 68" width="320" height="68" fill="none">
  <defs>
    <linearGradient id="bgGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E2638" />
      <stop offset="100%" stop-color="#0B0F17" />
    </linearGradient>
    <linearGradient id="goldGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF9C2" />
      <stop offset="35%" stop-color="#FFE468" />
      <stop offset="85%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <linearGradient id="greenGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#BEF264" />
      <stop offset="40%" stop-color="#8CC641" />
      <stop offset="100%" stop-color="#4D7C0F" />
    </linearGradient>
    <linearGradient id="borderGradLight" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE468" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#8CC641" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.8" />
    </linearGradient>
    <filter id="glowLight" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3" />
    </filter>
  </defs>

  <!-- Mark (52x52) -->
  <g transform="translate(6, 8)">
    <rect x="0" y="0" width="52" height="52" rx="14" fill="url(#bgGradLight)" stroke="url(#borderGradLight)" stroke-width="1.8" />
    
    <g filter="url(#glowLight)" transform="scale(0.406) translate(0, 0)">
      <!-- Cap -->
      <path d="M64 24 L94 38 L64 52 L34 38 Z" fill="url(#goldGradLight)" />
      <path d="M48 45.5 L64 53 L80 45.5 V52 C80 57.5 73 61 64 61 C55 61 48 57.5 48 52 Z" fill="#B45309" />
      <path d="M88 41 C90 46 91 53 91 60" fill="none" stroke="#8CC641" stroke-width="3" stroke-linecap="round" />
      <circle cx="91" cy="62" r="3.2" fill="#8CC641" />

      <!-- Wings -->
      <path d="M60 67 C48 62 34 64 24 71 C23.5 71.5 23 72.5 23 73.5 L23 88 C23 89.2 24.2 90 25.5 89.5 C35 84.5 48 83 60 87 Z" fill="url(#goldGradLight)" />
      <path d="M68 67 C80 62 94 64 104 71 C104.5 71.5 105 72.5 105 73.5 L105 88 C105 89.2 103.8 90 102.5 89.5 C93 84.5 80 83 68 87 Z" fill="url(#greenGradLight)" />
      <path d="M62.5 64.5 C62.5 63.5 65.5 63.5 65.5 64.5 L65.5 89.5 C65.5 90.5 62.5 90.5 62.5 89.5 Z" fill="#FFFFFF" />
    </g>
  </g>

  <!-- Typography -->
  <g transform="translate(70, 42)">
    <!-- "Edu" in dark charcoal for light background -->
    <text font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="28" letter-spacing="-0.03em" fill="#1E293B">Edu</text>
    <text x="54" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="800" font-size="28" letter-spacing="-0.03em" fill="#D97706">Stow</text>
    <circle cx="132" cy="-6" r="3.5" fill="#8CC641" />
  </g>

  <!-- Tagline -->
  <text x="71" y="56" font-family="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif" font-weight="700" font-size="8.5" letter-spacing="0.20em" fill="#64748B">SMART SCHOOL CLOUD</text>
</svg>"""

with open("public/edustow-logo.svg", "w", encoding="utf-8") as f:
    f.write(SVG_DARK_LOGO)

with open("public/edustow-logo-light.svg", "w", encoding="utf-8") as f:
    f.write(SVG_LIGHT_LOGO)

print("SVG logo files generated successfully.")
