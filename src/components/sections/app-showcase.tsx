"use client";

import { BlurFade } from "@/components/magicui/animated-beam";
import { Iphone } from "@/components/magicui/iphone-15-pro";
import { motion } from "framer-motion";

const screens = [
  {
    title: "Dashboard",
    description: "Your daily overview with streak, today's workout, and weekly stats",
    src: "/images/screens/dashboard.png",
    alt: "GymTrack Pro Dashboard screen",
  },
  {
    title: "Workouts",
    description: "Structured splits with scheduled workouts and exercise details",
    src: "/images/screens/workout.png",
    alt: "GymTrack Pro Workouts screen",
  },
  {
    title: "History",
    description: "Calendar view with workout history and session details",
    src: "/images/screens/history.png",
    alt: "GymTrack Pro History screen",
  },
  {
    title: "Progress",
    description: "Volume trends, 1RM charts, and top lifts by estimated max",
    src: "/images/screens/progress.png",
    alt: "GymTrack Pro Progress screen",
  },
  {
    title: "Tools",
    description: "Timer, stopwatch, BMI, 1RM calculator, plate loader, and unit converter",
    src: "/images/screens/tools.png",
    alt: "GymTrack Pro Tools screen",
  },
];

// Fan layout config: [rotate, translateY, scale, zIndex] per position from center
const fanPositions = [
  { rotate: -12, translateY: 40, scale: 0.85, zIndex: 1 },
  { rotate: -6, translateY: 14, scale: 0.92, zIndex: 2 },
  { rotate: 0, translateY: 0, scale: 1, zIndex: 3 },
  { rotate: 6, translateY: 14, scale: 0.92, zIndex: 2 },
  { rotate: 12, translateY: 40, scale: 0.85, zIndex: 1 },
];

export function AppShowcase() {
  return (
    <section aria-label="App screen showcase" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <BlurFade>
            <p className="text-sm font-medium text-gym-primary mb-3">
              App Screens
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-gym-text">
              Five tabs,{" "}
              <span className="bg-gradient-to-r from-gym-primary to-gym-accent bg-clip-text text-transparent">
                zero friction
              </span>
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-gym-text-muted max-w-2xl mx-auto">
              Home, Workout, History, Progress, and Tools — everything
              you need in one clean, native iOS experience.
            </p>
          </BlurFade>
        </div>

        {/* Desktop: Fan layout */}
        <div className="hidden lg:block">
          <div className="relative flex items-end justify-center gap-[-20px] pt-12 pb-8">
            {/* Glow behind center phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-gradient-to-r from-gym-primary/20 via-gym-primary-light/15 to-gym-accent/20 blur-[100px] rounded-full" />

            <div className="relative flex items-end justify-center">
              {screens.map((screen, index) => {
                const pos = fanPositions[index];
                return (
                  <BlurFade key={screen.title} delay={0.08 * index}>
                    <motion.div
                      initial={{ opacity: 0, y: 60, rotate: 0 }}
                      whileInView={{ opacity: 1, y: 0, rotate: pos.rotate }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: 0.1 * index,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      whileHover={{
                        scale: pos.scale + 0.05,
                        rotate: pos.rotate * 0.5,
                        y: -12,
                        transition: { duration: 0.3, type: "spring", stiffness: 300 },
                      }}
                      className="relative group cursor-pointer"
                      style={{
                        zIndex: pos.zIndex,
                        transform: `rotate(${pos.rotate}deg) translateY(${pos.translateY}px) scale(${pos.scale})`,
                        marginLeft: index === 0 ? 0 : "-28px",
                      }}
                    >
                      <Iphone
                        className={`${index === 2 ? "w-[220px] lg:w-[240px]" : "w-[190px] lg:w-[210px]"} drop-shadow-2xl`}
                        src={screen.src}
                      />
                      {/* Label on hover */}
                      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center whitespace-nowrap">
                        <p className="text-sm font-semibold text-gym-text">
                          {screen.title}
                        </p>
                        <p className="text-xs text-gym-text-muted mt-0.5">
                          {screen.description}
                        </p>
                      </div>
                    </motion.div>
                  </BlurFade>
                );
              })}
            </div>
          </div>

          {/* Screen labels below the fan */}
          <div className="flex justify-center gap-8 lg:gap-12 mt-16">
            {screens.map((screen, index) => (
              <BlurFade key={`label-${screen.title}`} delay={0.3 + 0.05 * index}>
                <div className="text-center max-w-[140px]">
                  <p className="text-sm font-semibold text-gym-text">
                    {screen.title}
                  </p>
                  <p className="text-xs text-gym-text-muted mt-1 leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Mobile + Tablet: Horizontal scroll */}
        <div className="lg:hidden">
          <div className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {screens.map((screen, index) => (
              <BlurFade key={screen.title} delay={0.1 * index}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="snap-center shrink-0 flex flex-col items-center gap-3"
                >
                  <Iphone
                    className="w-[260px] sm:w-[280px] drop-shadow-xl"
                    src={screen.src}
                  />
                  <div className="text-center max-w-[260px] sm:max-w-[280px]">
                    <p className="text-sm font-semibold text-gym-text">
                      {screen.title}
                    </p>
                    <p className="text-xs text-gym-text-muted mt-1 leading-relaxed">
                      {screen.description}
                    </p>
                  </div>
                </motion.div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
