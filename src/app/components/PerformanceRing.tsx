import { useEffect, useState, useRef, useId } from 'react';

interface PerformanceRingProps {
  value: number; // 0-100
  size?: number;
  strokeWidth?: number;
  active?: boolean;
  label?: string;
}

export function PerformanceRing({
  value,
  size = 32,
  strokeWidth = 3,
  active = false,
  label = 'Performance',
}: PerformanceRingProps) {
  const gradientId = useId();
  const [displayedValue, setDisplayedValue] = useState(0);
  const [progress, setProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);
  const startProgressRef = useRef(0);
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const normalizedValue = Math.max(0, Math.min(100, value));

  useEffect(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    startTimeRef.current = null;

    if (prefersReducedMotion.current) {
      // Instant update for reduced motion
      setDisplayedValue(normalizedValue);
      setProgress(normalizedValue);
      return;
    }

    if (!active) {
      setDisplayedValue(normalizedValue);
      setProgress(normalizedValue);
      return;
    }

    if (active) {
      // Animate forward from 0 on hover
      startValueRef.current = 0;
      startProgressRef.current = 0;
      setDisplayedValue(0);
      setProgress(0);
      const duration = 1000; // 1000ms = 1s

      const animate = (currentTime: number) => {
        if (!startTimeRef.current) return;

        const elapsed = currentTime - startTimeRef.current;
        const progressRatio = Math.min(elapsed / duration, 1);

        // EaseOut easing function
        const easeOut = 1 - Math.pow(1 - progressRatio, 3);

        const newValue = startValueRef.current + (normalizedValue - startValueRef.current) * easeOut;
        const newProgress =
          startProgressRef.current + (normalizedValue - startProgressRef.current) * easeOut;

        setDisplayedValue(Math.round(newValue));
        setProgress(newProgress);

        if (progressRatio < 1) {
          animationFrameRef.current = requestAnimationFrame(animate);
        }
      };

      animationFrameRef.current = requestAnimationFrame(() => {
        startTimeRef.current = performance.now();
        animationFrameRef.current = requestAnimationFrame(animate);
      });
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [active, normalizedValue]);

  // Calculate stroke-dashoffset for the ring
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
          style={{ transform: 'rotate(-90deg)' }}
        >
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-300"
            style={{
              transition:
                prefersReducedMotion.current || active ? 'none' : undefined,
            }}
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
        {/* Number inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xs font-bold tabular-nums">
            {displayedValue}
          </span>
        </div>
      </div>
      {/* Optional label */}
      <span className="text-gray-500 text-[10px] leading-none">{label}</span>
    </div>
  );
}
