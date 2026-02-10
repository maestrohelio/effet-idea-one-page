import { motion } from "framer-motion";

const BAR_HEIGHTS = [35, 55, 45, 70, 60, 85, 75, 95, 80, 90];
const LINE_POINTS = "0,80 40,70 80,65 120,50 160,55 200,40 240,35 280,20 320,25 360,10";

const DashboardBackground = () => (
  <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
    {/* Grid lines */}
    <svg className="absolute inset-0 w-full h-full">
      {[...Array(8)].map((_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={`${(i + 1) * 12.5}%`}
          x2="100%"
          y2={`${(i + 1) * 12.5}%`}
          stroke="hsl(261 85% 43%)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
      ))}
      {[...Array(12)].map((_, i) => (
        <line
          key={`v-${i}`}
          x1={`${(i + 1) * 8.3}%`}
          y1="0"
          x2={`${(i + 1) * 8.3}%`}
          y2="100%"
          stroke="hsl(217 90% 56%)"
          strokeWidth="0.5"
          strokeDasharray="4 8"
        />
      ))}
    </svg>

    {/* Bar chart */}
    <div className="absolute bottom-[10%] left-[5%] flex items-end gap-[2%] h-[40%] w-[35%]">
      {BAR_HEIGHTS.map((h, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{
            background: `linear-gradient(to top, hsl(261 85% 43%), hsl(217 90% 56%))`,
          }}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{
            duration: 1.5,
            delay: i * 0.15,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    {/* Line chart */}
    <motion.svg
      className="absolute top-[15%] right-[5%] w-[40%] h-[35%]"
      viewBox="0 0 360 90"
      fill="none"
      preserveAspectRatio="none"
    >
      <motion.polyline
        points={LINE_POINTS}
        stroke="hsl(155 100% 50%)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
          ease: "easeInOut",
        }}
      />
      <motion.polygon
        points={`${LINE_POINTS} 360,90 0,90`}
        fill="hsl(155 100% 50%)"
        opacity="0.15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 1 }}
      />
    </motion.svg>

    {/* Pie chart */}
    <motion.svg
      className="absolute top-[55%] right-[12%] w-[15%] h-auto"
      viewBox="0 0 100 100"
    >
      <motion.circle
        cx="50" cy="50" r="40"
        fill="none"
        stroke="hsl(261 85% 43%)"
        strokeWidth="8"
        strokeDasharray="188 63"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50% 50%" }}
      />
      <motion.circle
        cx="50" cy="50" r="40"
        fill="none"
        stroke="hsl(217 90% 56%)"
        strokeWidth="8"
        strokeDasharray="63 188"
        strokeDashoffset="-188"
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "50% 50%" }}
      />
    </motion.svg>
  </div>
);

export default DashboardBackground;
