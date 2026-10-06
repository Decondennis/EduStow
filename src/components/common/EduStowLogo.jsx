import React from 'react';

/**
 * EduStow Modern Professional Brand Logo
 * 
 * Uses the isolated vector mark (/edustow-mark.svg) with native typographic
 * rendering to ensure 100% reliable, sharp display across all responsive
 * breakpoints, dark/light themes, and dashboard layouts with zero SVG ID collisions.
 * 
 * @param {Object} props
 * @param {'dark'|'light'|'default'} [props.variant='dark'] - 'dark' for dark backgrounds (#272630), 'light'/'default' for light backgrounds
 * @param {'sm'|'md'|'lg'|'xl'} [props.size='md'] - Sizing preset
 * @param {boolean} [props.showTagline=false] - Whether to show the "Smart School Cloud" tagline
 * @param {boolean} [props.markOnly=false] - Whether to render only the icon emblem
 * @param {string} [props.className=''] - Additional CSS classes
 */
export default function EduStowLogo({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  markOnly = false,
  className = '',
  style = {}
}) {
  // Sizing definitions
  const dimensions = {
    sm: { icon: 32, textMain: 18, textSub: 7.5, gap: 9, height: 32 },
    md: { icon: 40, textMain: 22, textSub: 8.5, gap: 11, height: 40 },
    lg: { icon: 48, textMain: 26, textSub: 9.5, gap: 13, height: 48 },
    xl: { icon: 56, textMain: 32, textSub: 11, gap: 15, height: 56 }
  };

  const dim = dimensions[size] || dimensions.md;
  const isDark = variant === 'dark';

  return (
    <div 
      className={`inline-flex items-center select-none shrink-0 ${className}`}
      style={{ 
        display: 'inline-flex',
        alignItems: 'center',
        gap: `${dim.gap}px`,
        textDecoration: 'none',
        lineHeight: 1,
        ...style 
      }}
    >
      {/* 3D Crest & Soaring Pages Vector Emblem */}
      <img 
        src="/edustow-mark.svg"
        alt="EduStow Emblem"
        width={dim.icon}
        height={dim.icon}
        className="shrink-0 flex-shrink-0"
        style={{
          width: `${dim.icon}px`,
          height: `${dim.icon}px`,
          minWidth: `${dim.icon}px`,
          minHeight: `${dim.icon}px`,
          objectFit: 'contain',
          display: 'block'
        }}
        onError={(e) => {
          // Robust fallback to PNG if SVG is unsupported
          e.currentTarget.onerror = null;
          e.currentTarget.src = '/edustow-mark.png';
        }}
      />

      {/* Typographic Wordmark */}
      {!markOnly && (
        <div 
          className="flex flex-col justify-center"
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left'
          }}
        >
          <div 
            className="flex items-center tracking-tight"
            style={{ 
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1
            }}
          >
            {/* "Edu" */}
            <span 
              style={{ 
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 800,
                fontSize: `${dim.textMain}px`,
                letterSpacing: '-0.03em',
                color: isDark ? '#FFFFFF' : '#272630',
                display: 'inline-block'
              }}
            >
              Edu
            </span>

            {/* "Stow" */}
            <span 
              style={{ 
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 800,
                fontSize: `${dim.textMain}px`,
                letterSpacing: '-0.03em',
                color: '#FFE468',
                marginLeft: '1px',
                display: 'inline-block',
                textShadow: isDark ? '0 1px 2px rgba(0,0,0,0.3)' : 'none'
              }}
            >
              Stow
            </span>

            {/* Vibrant Lime Growth Accent Dot */}
            <span 
              style={{
                width: `${Math.max(4, Math.round(dim.textMain * 0.22))}px`,
                height: `${Math.max(4, Math.round(dim.textMain * 0.22))}px`,
                backgroundColor: '#8CC641',
                borderRadius: '50%',
                display: 'inline-block',
                marginLeft: '3px',
                marginBottom: `${Math.round(dim.textMain * 0.35)}px`,
                boxShadow: '0 0 6px rgba(140, 198, 65, 0.5)'
              }}
            />
          </div>

          {/* Optional Tagline */}
          {showTagline && (
            <span 
              style={{
                fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 700,
                fontSize: `${dim.textSub}px`,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: isDark ? '#94A3B8' : '#64748B',
                marginTop: '3px',
                display: 'block'
              }}
            >
              Smart School Cloud
            </span>
          )}
        </div>
      )}
    </div>
  );
}
