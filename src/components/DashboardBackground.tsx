const DashboardBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.15 }}>
    {/* Grid pattern */}
    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(261 85% 43%)" strokeWidth="0.5" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>

    {/* Animated bar chart - left side */}
    <svg
      className="absolute bottom-[5%] left-[5%] w-[35%] h-[50%]"
      viewBox="0 0 200 120"
      preserveAspectRatio="xMidYMax meet"
    >
      {[
        { x: 10, h: 40, delay: "0s" },
        { x: 30, h: 65, delay: "0.2s" },
        { x: 50, h: 50, delay: "0.4s" },
        { x: 70, h: 80, delay: "0.6s" },
        { x: 90, h: 60, delay: "0.8s" },
        { x: 110, h: 95, delay: "1s" },
        { x: 130, h: 75, delay: "1.2s" },
        { x: 150, h: 100, delay: "1.4s" },
        { x: 170, h: 85, delay: "1.6s" },
      ].map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={120 - bar.h}
          width="14"
          height={bar.h}
          rx="2"
          fill="url(#barGrad)"
          opacity="0.8"
        >
          <animate
            attributeName="height"
            values={`0;${bar.h};${bar.h * 0.7};${bar.h}`}
            dur="3s"
            begin={bar.delay}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`120;${120 - bar.h};${120 - bar.h * 0.7};${120 - bar.h}`}
            dur="3s"
            begin={bar.delay}
            repeatCount="indefinite"
          />
        </rect>
      ))}
      <defs>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(261 85% 43%)" />
          <stop offset="100%" stopColor="hsl(217 90% 56%)" />
        </linearGradient>
      </defs>
    </svg>

    {/* Animated line chart - right side */}
    <svg
      className="absolute top-[10%] right-[5%] w-[45%] h-[45%]"
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(155 100% 50%)" />
          <stop offset="100%" stopColor="hsl(217 90% 56%)" />
        </linearGradient>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(155 100% 50%)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(155 100% 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Area fill */}
      <polygon
        points="0,100 40,85 80,90 120,60 160,65 200,40 240,45 280,25 320,30 360,10 400,15 400,120 0,120"
        fill="url(#areaGrad)"
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0.6;1"
          dur="5s"
          repeatCount="indefinite"
        />
      </polygon>
      {/* Line */}
      <polyline
        points="0,100 40,85 80,90 120,60 160,65 200,40 240,45 280,25 320,30 360,10 400,15"
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 1000;600 0"
          dur="3s"
          repeatCount="indefinite"
        />
      </polyline>
      {/* Animated dot */}
      <circle r="4" fill="hsl(155 100% 50%)">
        <animateMotion
          path="M0,100 L40,85 L80,90 L120,60 L160,65 L200,40 L240,45 L280,25 L320,30 L360,10 L400,15"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>

    {/* Donut chart - bottom right */}
    <svg
      className="absolute bottom-[15%] right-[15%] w-[12%]"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="38" fill="none" stroke="hsl(261 85% 43%)" strokeWidth="6" opacity="0.4" />
      <circle
        cx="50" cy="50" r="38"
        fill="none"
        stroke="hsl(217 90% 56%)"
        strokeWidth="6"
        strokeDasharray="160 80"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          dur="12s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="50" cy="50" r="38"
        fill="none"
        stroke="hsl(155 100% 50%)"
        strokeWidth="6"
        strokeDasharray="60 180"
        strokeLinecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 50 50"
          to="0 50 50"
          dur="8s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

export default DashboardBackground;
