"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeSpring = { type: "spring" as const, stiffness: 320, damping: 28 };

export const defaultViewport = { once: true, margin: "-60px" as const };

export function FadeIn({
  className,
  children,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.58, delay, ease: easeOut }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleReveal({
  className,
  children,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={defaultViewport}
      transition={{ duration: 0.52, delay, ease: easeOut }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({
  className,
  children,
  delay = 0,
  from = "left",
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; from?: "left" | "right" }) {
  const x = from === "left" ? -40 : 40;
  return (
    <motion.div
      initial={{ opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={defaultViewport}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Word-by-word headline reveal */
export function TextStagger({
  text,
  className,
  as: Tag = "span",
  wordClassName,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "span" | "p";
  wordClassName?: string;
}) {
  const words = text.split(" ").filter(Boolean);
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.04, delayChildren: 0.06 },
    },
  };
  const child: Variants = {
    hidden: { opacity: 0, y: 28, rotateX: -10 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.48, ease: easeOut },
    },
  };

  const Heading = Tag;

  return (
    <Heading className={cn(className)}>
      <motion.span
        className="inline-flex flex-wrap justify-center gap-x-[0.3em] gap-y-1 sm:justify-start"
        variants={container}
        initial="hidden"
        animate="show"
        style={{ perspective: 720 }}
      >
        {words.map((word, i) => (
          <motion.span key={`${word}-${i}`} variants={child} className={cn("inline-block", wordClassName)}>
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Heading>
  );
}

export function Stagger({
  className,
  children,
  stagger = 0.1,
  delayChildren = 0.06,
}: {
  className?: string;
  children: React.ReactNode;
  stagger?: number;
  delayChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={defaultViewport}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.55, ease: easeOut },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Interactive card lift + glow */
export function MotionCard({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        transition: easeSpring,
      }}
      whileTap={{ scale: 0.99 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FloatingOrb({
  className,
  colorClass,
  delay = 0,
}: {
  className?: string;
  colorClass?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("glow-orb pointer-events-none absolute rounded-full", colorClass, className)}
      animate={{
        y: [0, -18, 0],
        x: [0, 10, 0],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    />
  );
}

export { easeOut, easeSpring };
