import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { label: 'Explore', to: '/explore' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'About', to: '/about' },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [signOutError, setSignOutError] = useState('');
  const { student, signOut } = useAuth();
  const navigate = useNavigate();
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  async function handleSignOut() {
    if (signingOut) return;
    setSigningOut(true);
    setSignOutError('');
    try {
      await signOut();
      closeMenu();
      navigate('/login?reason=signed-out');
    } catch {
      setSignOutError('We could not sign you out. Please try again.');
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <>
      <div className="announcement-bar">
        <span className="announcement-bar__dot" />
        <span>A clearer way to learn science is taking shape.</span>
        <Link to="/explore">Take a look <ArrowUpRight size={13} /></Link>
      </div>
      <header className="site-header">
        <div className="container site-header__inner">
          <BrandLogo />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive && item.to !== '/#how-it-works' ? 'nav-link--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-header__actions">
            {student ? (
              <>
                <Link className="site-header__signin site-header__dashboard-link" to="/dashboard">My dashboard</Link>
                <Link className="site-header__signin site-header__dashboard-link" to="/account">Account</Link>
                <button className="site-header__signout" type="button" onClick={handleSignOut} disabled={signingOut}>
                  {signingOut ? 'Signing out…' : 'Sign out'}
                </button>
              </>
            ) : (
              <>
                <Link className="site-header__signin" to="/login">Sign in</Link>
                <Link className="button button--small button--outline header-account-cta" to="/register">
                  Create account <ArrowUpRight size={15} />
                </Link>
              </>
            )}
            <Link className="button button--small button--primary header-cta" to="/explore">
              Explore lessons <ArrowUpRight size={15} />
            </Link>
            <button
              className="icon-button mobile-menu-toggle"
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.label} to={item.to} onClick={closeMenu}>
                {item.label}<ArrowUpRight size={16} />
              </Link>
            ))}
            {student ? (
              <>
                <Link to="/dashboard" onClick={closeMenu}>My dashboard <ArrowUpRight size={16} /></Link>
                <Link to="/account" onClick={closeMenu}>Account settings <ArrowUpRight size={16} /></Link>
                {signOutError && <p className="site-header__signout-error" role="alert">{signOutError}</p>}
                <button className="site-header__mobile-signout" type="button" onClick={handleSignOut} disabled={signingOut}>
                  {signingOut ? 'Signing out…' : 'Sign out'}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={closeMenu}>Sign in <ArrowUpRight size={16} /></Link>
                <Link className="button button--primary mobile-nav__cta" to="/register" onClick={closeMenu}>
                  Create account <ArrowUpRight size={16} />
                </Link>
              </>
            )}
          </nav>
        )}
        {signOutError && !menuOpen && <span className="site-header__signout-error site-header__signout-error--desktop" role="alert">{signOutError}</span>}
      </header>
    </>
  );
}
