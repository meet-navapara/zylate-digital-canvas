"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TextAnimateProps {
  children?: React.ReactNode;
  animation?: "scaleUp" | "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight";
  by?: "word" | "character" | "text";
  delay?: number;
  duration?: number;
  className?: string;
}

const animationClasses = {
  scaleUp: "animate-scale-up",
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  slideDown: "animate-slide-down",
  slideLeft: "animate-slide-left",
  slideRight: "animate-slide-right",
};

export function TextAnimate({
  children,
  animation = "scaleUp",
  by = "text",
  delay = 0,
  duration = 0.5,
  className,
}: TextAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const text = typeof children === "string" ? children : "";
  
  if (by === "character" && text) {
    return (
      <span ref={ref} className={cn("inline-block", className)}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={cn(
              "inline-block",
              isVisible && animationClasses[animation],
              !isVisible && "opacity-0"
            )}
            style={{
              animationDelay: `${delay + index * 0.05}s`,
              animationDuration: `${duration}s`,
              animationFillMode: "forwards",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }

  if (by === "word" && text) {
    return (
      <span ref={ref} className={cn("inline-block", className)}>
        {text.split(" ").map((word, index) => (
          <span
            key={index}
            className={cn(
              "inline-block mr-1",
              isVisible && animationClasses[animation],
              !isVisible && "opacity-0"
            )}
            style={{
              animationDelay: `${delay + index * 0.1}s`,
              animationDuration: `${duration}s`,
              animationFillMode: "forwards",
            }}
          >
            {word}
          </span>
        ))}
      </span>
    );
  }

  // Default: animate as whole text
  return (
    <span
      ref={ref}
      className={cn(
        "inline-block",
        isVisible && animationClasses[animation],
        !isVisible && "opacity-0",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: "forwards",
      }}
    >
      {children || text}
    </span>
  );
}

