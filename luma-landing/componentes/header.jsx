import { useState, useEffect } from 'react'

const LogoMark = ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        <rect width="64" height="64" rx="14" fill="#162236" />
        <rect x="16" y="12" width="10" height="36" rx="2" fill="white" />
        <rect x="16" y="38" width="32" height="10" rx="2" fill="white" />
        <rect x="30" y="12" width="3" height="16" rx="1.5" fill="#3B82F6" opacity="0.9" />
        <circle cx="48" cy="16" r="4" fill="#2563EB" />
    </svg>
)

export default function Header() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
                background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(12px)',
                borderBottom: scrolled ? '1px solid #DDE3EC' : '1px solid transparent',
                transition: 'all 0.3s ease',
                padding: '14px 0',
            }}
        >
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">

                    {/* Logo */}
                    <a href="#" className="d-flex align-items-center gap-2 text-decoration-none">
                        <LogoMark size={32} />
                        <span style={{
                            fontFamily: 'Cormorant Garamond, serif',
                            fontWeight: 600, fontSize: '1.2rem',
                            letterSpacing: '0.15em', color: '#0D1B2A',
                        }}>LUMA</span>
                    </a>

                    {/* CTA Button */}
                    <a
                        href="#registro"
                        style={{
                            fontFamily: 'DM Sans, sans-serif',
                            fontSize: '0.82rem', fontWeight: 600,
                            padding: '10px 24px', borderRadius: '4px',
                            background: '#2563EB', color: '#fff',
                            textDecoration: 'none',
                            transition: 'background 0.2s, transform 0.2s',
                            display: 'inline-block',
                            letterSpacing: '0.02em',
                        }}
                        onMouseEnter={e => { e.target.style.background = '#1d4ed8'; e.target.style.transform = 'translateY(-1px)' }}
                        onMouseLeave={e => { e.target.style.background = '#2563EB'; e.target.style.transform = 'translateY(0)' }}
                    >
                        Empieza gratis
                    </a>

                </div>
            </div>
        </header>
    )
}