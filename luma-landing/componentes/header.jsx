import { useState, useEffect } from 'react'

const LogoMark = ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="64" y2="64">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
        </defs>
        <rect width="64" height="64" rx="16" fill="url(#logoGrad)" />
        <rect x="16" y="12" width="10" height="36" rx="3" fill="white" opacity="0.95" />
        <rect x="16" y="38" width="32" height="10" rx="3" fill="white" opacity="0.95" />
        <rect x="30" y="12" width="3" height="16" rx="1.5" fill="white" opacity="0.5" />
        <circle cx="48" cy="16" r="4" fill="white" opacity="0.8" />
    </svg>
)

const navLinks = [
    { label: 'Beneficios', href: '#beneficios' },
    { label: 'Proceso', href: '#como-funciona' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'FAQ', href: '#faq' },
]

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0)',
                backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(226,232,240,0.6)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                padding: scrolled ? '12px 0' : '20px 0',
            }}
        >
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <a href="#" className="d-flex align-items-center gap-2 text-decoration-none"
                        style={{ animation: 'fadeIn 0.6s ease' }}>
                        <LogoMark size={34} />
                        <span style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontWeight: 700, fontSize: '1.3rem',
                            letterSpacing: '0.18em',
                            color: scrolled ? '#0B1120' : '#0B1120',
                            transition: 'color 0.3s',
                        }}>LUMA</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="d-none d-md-flex align-items-center gap-4">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.label}
                                href={link.href}
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '0.85rem', fontWeight: 500,
                                    color: '#475569',
                                    textDecoration: 'none',
                                    transition: 'color 0.2s',
                                    animation: `fadeInDown 0.5s ease ${0.1 * (i + 1)}s both`,
                                }}
                                onMouseEnter={e => e.target.style.color = '#2563EB'}
                                onMouseLeave={e => e.target.style.color = '#475569'}
                            >{link.label}</a>
                        ))}
                        <a
                            href="#registro"
                            className="btn-primary"
                            style={{
                                fontSize: '0.82rem', padding: '10px 22px',
                                animation: 'fadeInDown 0.5s ease 0.5s both',
                            }}
                        >
                            Empieza ahora
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <button
                        className="d-md-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        style={{
                            background: 'none', border: 'none', cursor: 'pointer',
                            padding: 8, display: 'flex', flexDirection: 'column', gap: 5,
                        }}
                        aria-label="Menu"
                    >
                        <div style={{
                            width: 22, height: 2, borderRadius: 2,
                            background: '#0B1120',
                            transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                        }} />
                        <div style={{
                            width: 22, height: 2, borderRadius: 2,
                            background: '#0B1120',
                            transition: 'all 0.3s',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <div style={{
                            width: 22, height: 2, borderRadius: 2,
                            background: '#0B1120',
                            transition: 'all 0.3s',
                            transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                        }} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div style={{
                    maxHeight: menuOpen ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                    <div className="d-flex flex-column gap-3 pt-4 pb-2 d-md-none">
                        {navLinks.map(link => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                style={{
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '0.95rem', fontWeight: 500,
                                    color: '#475569', textDecoration: 'none',
                                    padding: '8px 0',
                                    borderBottom: '1px solid #F1F5F9',
                                }}
                            >{link.label}</a>
                        ))}
                        <a
                            href="#registro"
                            className="btn-primary"
                            onClick={() => setMenuOpen(false)}
                            style={{ textAlign: 'center', justifyContent: 'center', marginTop: 4 }}
                        >
                            Empieza ahora
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}