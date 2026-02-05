import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '60px 0 40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>

                    {/* Column 1: Info */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                            <div style={{ width: '32px', height: '32px', border: '2px solid white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', lineHeight: 1 }}>DEMO</div>
                            </div>
                        </div>

                        <div style={{ fontSize: '0.9rem', lineHeight: '1.8', opacity: 0.9 }}>
                            <strong>DEMO</strong><br />
                            SANTOS QUISPE<br />
                            +591 76257572<br />
                            santoslqc@gmail.com
                        </div>
                    </div>




                    {/* Column 3: Socials */}
                    <div>
                        <a href="#" style={{ display: 'inline-block', background: 'white', padding: '8px', borderRadius: '4px' }}>
                            <Linkedin color="var(--color-primary-dark)" size={24} />
                        </a>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', fontSize: '0.8rem', opacity: 0.6 }}>
                    ©2026 Demo
                </div>
            </div>
        </footer>
    );
};

export default Footer;
