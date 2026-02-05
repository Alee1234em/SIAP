import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';

import logoUmsa from '../assets/logo-umsa.jpg';

const Layout = ({ children }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header style={{ borderBottom: '1px solid #eee', padding: '15px 0', position: 'sticky', top: 0, background: 'white', zIndex: 100 }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    {/* Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                        <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={logoUmsa} alt="Logo UMSA" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-primary)', letterSpacing: '1px' }}>Sistema Interactivo de Análisis Poblacional</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                        <NavLink to="/" style={{ color: '#555', textDecoration: 'none' }}>INICIO</NavLink>
                        <NavLink to="/about" style={{ color: '#555', textDecoration: 'none' }}>INFORMACIÓN</NavLink>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '40px 0' }}>
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
