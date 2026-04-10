'use client';

interface GridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  squares?: number[][];
  strokeDasharray?: string;
  opacity?: number;
}

export default function GridPattern({
  className = '',
  width = 40,
  height = 40,
  squares = [],
  strokeDasharray = '0',
  opacity = 0.1,
}: GridPatternProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} style={{ opacity }}>
      <svg className="h-full w-full">
        <defs>
          <pattern
            id="grid-pattern"
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${width} 0 L 0 0 0 ${height}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        {squares.map(([x, y], index) => (
          <rect
            key={index}
            width={width}
            height={height}
            x={x * width}
            y={y * height}
            fill="currentColor"
            fillOpacity="0.2"
          />
        ))}
      </svg>
    </div>
  );
}
