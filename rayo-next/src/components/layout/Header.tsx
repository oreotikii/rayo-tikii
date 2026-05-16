'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/theme';
import { NAV_ITEMS } from '@/lib/config';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Navigation Overlay */}
      <nav
        className={`fixed inset-0 z-50 ${menuOpen ? 'visible' : 'invisible'}`}
        data-lenis-prevent=""
      >
        {/* Hamburger */}
        <div className="fixed top-6 right-6 z-[60] md:right-10 md:top-10">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block w-6 h-[2px] bg-[var(--base-opp)] transition-all duration-300 ${
                menuOpen ? 'translate-y-[4px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[var(--base-opp)] transition-all duration-300 ${
                menuOpen ? '-translate-y-[4px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Menu Background */}
        <div
          className={`absolute inset-0 bg-[var(--base)] transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 transition-all duration-500 ${
            menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl">
            <p className="text-sm text-[var(--t-muted)] mb-8">
              🦄 Innovative design
              <br />
              and cutting-edge development
            </p>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  {'children' in item && item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="flex items-center gap-3 font-[family-name:var(--_font-accent)] text-2xl md:text-4xl font-bold text-[var(--t-bright)] hover:text-[var(--accent)] transition-colors"
                      >
                        {item.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className={`transition-transform duration-300 ${
                            openSubmenu === item.label ? 'rotate-45' : ''
                          }`}
                          fill="currentColor"
                        >
                          <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
                        </svg>
                      </button>
                      <ul
                        className={`overflow-hidden transition-all duration-300 ${
                          openSubmenu === item.label
                            ? 'max-h-96 opacity-100 mt-2'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMenuOpen(false)}
                              className="block py-1.5 pl-4 text-sm text-[var(--t-muted)] hover:text-[var(--accent)] transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-block font-[family-name:var(--_font-accent)] text-2xl md:text-4xl font-bold text-[var(--t-bright)] hover:text-[var(--accent)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto pb-8 flex items-center justify-between text-xs text-[var(--t-muted)]">
            <p>
              Made with <span className="text-[var(--additional)]">♥</span> by{' '}
              <a
                href="https://1.envato.market/EKA9WD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)]"
              >
                Mix_Design
              </a>
            </p>
            <p>© 2025</p>
          </div>
        </div>
      </nav>

      {/* Header Bar */}
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-10 md:py-8 transition-colors duration-300"
      >
        <Link href="/" className="flex items-center gap-2">
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-[var(--base-opp)]"
              d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
            />
            <g>
              <clipPath id="mxd-logo__id">
                <path d="M28,0C2.9,0,0,16.9,0,28s2.9,28,28,28s28-16.9,28-28S53.1,0,28,0z" />
              </clipPath>
              <path
                className="fill-[var(--base)]"
                clipPath="url(#mxd-logo__id)"
                d="M33.6,34.5h0.9c0.5,0,0.9,0.4,0.9,0.9v3.7c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-3.7C32.7,34.9,33.1,34.5,33.6,34.5z M20.5,37.3v1.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-3.7c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V37.3z M39.2,21.5v0.9c0,0.5-0.4,0.9-0.9,0.9h-0.9c-0.5,0-0.9-0.4-0.9-0.9v-0.9c0-0.5,0.4-0.9,0.9-0.9h0.9C38.8,20.5,39.2,21,39.2,21.5z M34.5,26.1h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9v0.9C33.6,25.7,34,26.1,34.5,26.1z M28,26.1h-4.7c-0.5,0-0.9,0.4-0.9,0.9V28c0,0.5,0.4,0.9,0.9,0.9h9.3c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9H28z M19.6,24.3v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C20,23.3,19.6,23.8,19.6,24.3z M16.8,21.5v0.9c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-0.9c0-0.5-0.4-0.9-0.9-0.9h-0.9C17.2,20.5,16.8,21,16.8,21.5z M14,26.1v4.7c0,0.5,0.4,0.9,0.9,0.9h0.9c0.5,0,0.9-0.4,0.9-0.9v-6.5c0-0.5-0.4-0.9-0.9-0.9h-0.9c-0.5,0-0.9,0.4-0.9,0.9V26.1z"
              />
            </g>
          </svg>
          <span className="hidden sm:inline font-[family-name:var(--_font-accent)] font-bold text-sm leading-tight">
            rayo
            <br />
            template
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-[var(--st-muted)] flex items-center justify-center text-[var(--base-opp)] transition-colors hover:border-[var(--accent)]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,1,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128Zm-8-72a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V48A8,8,0,0,0,168,56Zm48,48h24a8,8,0,0,0,0-16H216a8,8,0,0,0,0,16ZM58,56A8,8,0,0,0,46.34,67.33l16,16a8,8,0,0,0,11.32-11.32l-16-16A8,8,0,0,0,58,56Zm-8,72a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H42A8,8,0,0,0,50,128Zm18.34,46.34-16,16A8,8,0,0,0,63.98,201.66l16-16a8,8,0,0,0-11.32-11.32ZM128,192a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V200A8,8,0,0,0,128,192Zm69.66-17.66a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM240,120H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16ZM197.66,72A8,8,0,0,0,189,83.33l16,16a8,8,0,0,0,11.32-11.32l-16-16A8,8,0,0,0,197.66,72Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,53.46a8,8,0,0,1,12.66,1.21,88,88,0,0,0,147.59,9.72,8,8,0,0,1,12.66,1.21A104.32,104.32,0,0,1,235.54,150.21Z" />
              </svg>
            )}
          </button>
          <Link href="/contact" className="btn btn-default btn-mobile-icon">
            <span className="btn-caption">Say Hello</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M200,136H136v64a8,8,0,0,1-16,0V136H56a8,8,0,0,1,0-16h64V56a8,8,0,0,1,16,0v64h64a8,8,0,0,1,0,16Z" transform="rotate(45 128 128)" />
            </svg>
          </Link>
        </div>
      </header>
    </>
  );
}
