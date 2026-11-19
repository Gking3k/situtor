import { ArrowUpRight, Camera, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <BrandLogo inverse />
            <p>Science, made easier. A more thoughtful way to understand the things you learn.</p>
            <span className="footer-note"><span className="footer-note__dot" /> Made for curious minds.</span>
          </div>
          <div className="footer-links-group">
            <div>
              <h3>Explore</h3>
              <Link to="/explore">Chemistry</Link>
              <Link to="/explore">All topics</Link>
              <Link to="/about">Our approach</Link>
            </div>
            <div>
              <h3>Support</h3>
              <Link to="/faqs">FAQs</Link>
              <Link to="/contact">Send feedback</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <h3>Discover</h3>
              <Link to="/about">About Si Tutor</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/contact">Send feedback <ArrowUpRight size={13} /></Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Si Tutor. All rights reserved.</span>
          <span className="footer-bottom__tagline">Curiosity looks good on you.</span>
          <div className="footer-socials" aria-label="Social links coming soon">
            <span title="Social links will be added before launch"><Camera size={16} aria-hidden="true" /></span>
            <span title="Contact options will be confirmed before launch"><MessageCircle size={16} /></span>
          </div>
        </div>
        <p className="footer-disclaimer">Si Tutor is being developed. Lesson availability, access arrangements and contact details will be confirmed before public launch.</p>
      </div>
    </footer>
  );
}
