import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mxd-footer">
      <div className="mxd-container">
        <div className="mxd-footer__top">
          <div>
            <div className="mxd-footer__logo mb-4">
              <svg viewBox="0 0 56 56" className="w-8 h-8">
                <path
                  className="fill-[var(--accent)]"
                  d="M56,28c0,11.1-2.9,28-28,28S0,39.1,0,28S2.9,0,28,0S56,16.9,56,28z"
                />
              </svg>
              <span className="mxd-footer__logo-text">rayo</span>
            </div>
            <p className="mxd-footer__caption">
              Elevate your digital presence with Rayo - dynamic and stylish
              template designed for creative agencies and personal brands.
            </p>
          </div>
          <div>
            <h4 className="mxd-footer__heading">Navigation</h4>
            <ul className="mxd-footer__links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/works">Works</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mxd-footer__heading">Pages</h4>
            <ul className="mxd-footer__links">
              <li><Link href="/about/me">About Me</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/works/masonry">Works Masonry</Link></li>
              <li><Link href="/works/project-details">Project Details</Link></li>
            </ul>
          </div>
        </div>
        <div className="mxd-footer__bottom">
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
          <p>© {new Date().getFullYear()} Rayo Template. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
