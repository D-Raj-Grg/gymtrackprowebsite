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

export function AppShowcase() {
  return (
    <section aria-label="App screen showcase" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
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

        {/* Horizontal scroll of phone screens */}
        <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 lg:justify-center lg:flex-wrap">
          {screens.map((screen, index) => (
            <BlurFade key={screen.title} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="snap-center shrink-0 flex flex-col items-center gap-4"
              >
                <Iphone
                  className="w-[200px] sm:w-[220px]"
                  src={screen.src}
                />
                <div className="text-center max-w-[200px]">
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
    </section>
  );
}
