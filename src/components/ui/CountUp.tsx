import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  startOnView?: boolean;
  className?: string;
  decimals?: number;
}

export const CountUp = ({
  end,
  suffix = '',
  duration = 2000,
  delay = 0,
  startOnView = true,
  className,
  decimals = 0,
}: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!startOnView) {
      // Start immediately after delay
      timeoutRef.current = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }

    // Use Intersection Observer to detect when element is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            timeoutRef.current = setTimeout(() => {
              setHasStarted(true);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [startOnView, delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      let currentCount = easeOutQuart * end;

      // If we've reached or exceeded the target (or displayed value reached end), snap to exact value and stop
      const displayedValue = Math.floor(currentCount);
      if (currentCount >= end || displayedValue >= end) {
        setCount(end);
        return;
      }

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [hasStarted, end, duration]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count);

  return (
    <div ref={ref} className={cn(className)}>
      {displayValue}{suffix}
    </div>
  );
};

interface CountUpStatsProps {
  value: string; // e.g., "500+", "1000+", "24/7"
  className?: string;
  duration?: number;
  delay?: number;
}

export const CountUpStat = ({
  value,
  className,
  duration = 2000,
  delay = 0,
}: CountUpStatsProps) => {
  // Parse value to extract number and suffix
  // Supports formats like: "500+", "1000+", "24/7"
  const parseValue = (val: string) => {
    // Handle formats like "24/7"
    if (val.includes('/')) {
      const [num, denom] = val.split('/');
      return {
        end: parseInt(num, 10),
        suffix: `/${denom}`,
      };
    }
    
    // Handle formats like "500+", "1000+"
    const match = val.match(/(\d+)(.*)/);
    if (match) {
      return {
        end: parseInt(match[1], 10),
        suffix: match[2] || '',
      };
    }
    
    return { end: 0, suffix: '' };
  };

  const { end, suffix } = parseValue(value);

  // For "24/7", we don't want to count up, just show it
  if (value === '24/7') {
    return <div className={className}>24/7</div>;
  }

  return (
    <CountUp
      end={end}
      suffix={suffix}
      duration={duration}
      delay={delay}
      startOnView={true}
      className={className}
    />
  );
};

