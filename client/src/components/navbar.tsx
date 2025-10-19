import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTeam = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/problem", label: "Problem" },
    { path: "/solution", label: "Solution" },
    { path: "/demo", label: "Demo" },
    { path: null, label: "Team", onClick: scrollToTeam },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 dark:bg-background/90 dark:backdrop-blur-xl dark:border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              item.path ? (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={location === item.path ? "secondary" : "ghost"}
                    size="sm"
                    className="nav-link-hover"
                    data-testid={`link-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="nav-link-hover"
                  onClick={item.onClick}
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              )
            ))}
          </div>

          {/* Right side - Theme toggle + CTA */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            <Link href="/demo" className="hidden sm:block">
              <Button size="sm" data-testid="button-get-started">
                Get Started
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                item.path ? (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={location === item.path ? "secondary" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="w-full justify-start"
                    onClick={() => {
                      item.onClick?.();
                      setMobileMenuOpen(false);
                    }}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
