"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gym-border/50 bg-gym-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gym-primary to-gym-accent">
            <Dumbbell className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold text-gym-text">
            GymTrack Pro
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gym-text-muted hover:text-gym-text transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://apps.apple.com/us/app/gymtrack-pro-lifter-log/id6762596384"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex h-9 items-center rounded-lg bg-gradient-to-r from-gym-primary to-gym-primary-light px-4 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Download on App Store
          </a>
          <button
            className="md:hidden p-2 text-gym-text-muted hover:text-gym-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-t border-gym-border/50 bg-gym-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gym-text-muted hover:text-gym-text transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://apps.apple.com/us/app/gymtrack-pro-lifter-log/id6762596384"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-gym-primary to-gym-primary-light text-sm font-medium text-white"
              >
                Download on App Store
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
