import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "About", end: true },
  { to: "/experience", label: "Experience", end: false },
  { to: "/projects", label: "Projects", end: false },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const isAbout = location.pathname === "/";

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8, 6, 26, 0.9)" : "rgba(8, 6, 26, 0.55)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: scrolled
          ? "1px solid rgba(102, 80, 220, 0.24)"
          : "1px solid rgba(102, 80, 220, 0.12)",
        boxShadow: scrolled ? "0 10px 34px rgba(0,0,0,0.45)" : "0 4px 22px rgba(0,0,0,0.25)",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <nav className="flex items-center h-16 gap-6" aria-label="Primary navigation">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 no-underline group flex-shrink-0"
          >
            <span
              className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-[13px] font-bold text-white flex-shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #4652C0, #7B2FBE)",
                boxShadow: "0 0 16px rgba(102, 117, 255, 0.45)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              SN
            </span>
            <span
              className="font-semibold text-[16px] text-white/90 tracking-tight group-hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Saee Nalawade
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 ml-auto list-none m-0 p-0">
            {navLinks.map((l) => {
              const active =
                l.to === "/" ? isAbout : location.pathname.startsWith(l.to);

              return (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    aria-current={active ? "page" : undefined}
                    className={`relative px-4 py-2 rounded-lg text-[13.5px] font-medium transition-all duration-200 no-underline block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75 ${
                      active ? "text-white bg-white/[0.08]" : "text-white/75 hover:text-white hover:bg-white/[0.07]"
                    }`}
                  >
                    {l.label}
                    {/* Animated underline */}
                    <span
                      className="absolute bottom-[4px] left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-250"
                      style={{
                        width: active ? "60%" : "0%",
                        background: "linear-gradient(90deg, #4652C0, #FB33FF)",
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hire Me CTA */}
          <a
            href="mailto:saeenalawade5102@gmail.com"
            className="hidden md:inline-flex items-center px-6 py-[10px] rounded-full text-[13.5px] font-semibold text-white no-underline flex-shrink-0 transition-all duration-300 hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75"
            style={{
              background: "linear-gradient(135deg, #4652C0, #7B2FBE)",
              boxShadow: "0 0 20px rgba(102, 117, 255, 0.32)",
              border: "1px solid rgba(140, 120, 255, 0.25)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 28px rgba(102, 117, 255, 0.55)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 20px rgba(102, 117, 255, 0.32)";
            }}
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-auto md:hidden w-10 h-10 rounded-full flex items-center justify-center text-white/90 border border-white/15 bg-white/10 hover:bg-white/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation-menu"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-navigation-menu"
              className="md:hidden flex flex-col gap-1 py-3 border-t mt-1"
              style={{ borderColor: "rgba(102, 80, 220, 0.22)" }}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.22 }}
            >
              {navLinks.map((l) => {
                const active =
                  l.to === "/" ? isAbout : location.pathname.startsWith(l.to);
                return (
                  <Link
                    key={l.label}
                    to={l.to}
                    aria-current={active ? "page" : undefined}
                    className={`px-4 py-3 rounded-xl text-[14px] font-medium no-underline transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75 ${
                      active
                        ? "text-white bg-white/[0.14]"
                        : "text-white/80 hover:text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <a
                href="mailto:saeenalawade5102@gmail.com"
                className="mt-3 mx-1 px-5 py-3 rounded-full text-[14px] font-semibold text-white text-center no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/75"
                style={{ background: "linear-gradient(135deg, #4652C0, #7B2FBE)" }}
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
