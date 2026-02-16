import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  source?: string;
  duration?: number;
}

const AnimatedCounter = ({
  end,
  suffix = "%",
  prefix = "",
  label,
  description,
  source,
  duration = 2000,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div
      ref={ref}
      className="glass-card p-6 sm:p-8 text-center glow-purple-hover transition-all duration-500 group"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold gradient-purple-text mb-2 transition-transform duration-300 group-hover:scale-105">
        {prefix}{isVisible ? count : 0}{suffix}
      </div>
      <p className="text-sm sm:text-base text-foreground font-medium mb-2">{label}</p>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{description}</p>
      {source && (
        <p className="text-[10px] text-muted-foreground/60 mt-3 uppercase tracking-wider">{source}</p>
      )}
    </div>
  );
};

export default AnimatedCounter;
