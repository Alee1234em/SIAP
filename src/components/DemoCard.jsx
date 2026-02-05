import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';

const DemoCard = ({ id, title, imageColor, image }) => {
    return (
        <Link to={`/dashboard/${id}`} className="demo-card" style={{ display: 'block', textDecoration: 'none', background: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s, box-shadow 0.2s', border: '1px solid #eee' }}>
            <style>
                {`
          .demo-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg) !important;
          }
        `}
            </style>
            {/* Image Placeholder Area */}
            <div style={{ height: '180px', backgroundColor: imageColor || '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                {image ? (
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <BarChart3 size={48} color="rgba(0,0,0,0.1)" />
                )}
            </div>

            {/* Content */}
            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary)', fontWeight: '600' }}>{title}</h3>
            </div>
        </Link>
    );
};

export default DemoCard;
