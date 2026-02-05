import React from 'react';
import DemoCard from '../components/DemoCard';
import dashboardPreview from '../assets/dashboard-preview.png';
import beni from '../assets/beni.png';
import lapaz from '../assets/lapaz.png';
import cochabamba from '../assets/cochabamba.png';
import santacruz from '../assets/santacruz.png';
import chuquisaca from '../assets/chuquisaca.png';
import potosi from '../assets/potosi.png';
import tarija from '../assets/tarija.png';
import pando from '../assets/pando.png';
import oruro from '../assets/oruro.png';





const demos = [
    { id: 'global-sales', title: 'Diagnostico de Seguridad Ciudadana', color: '#e3f2fd', image: dashboardPreview },
    { id: 'LA PAZ', title: 'LA PAZ', color: '#e8f5e9', image: lapaz },
    { id: 'COCHABAMBA', title: 'COCHABAMBA', color: '#fff3e0', image: cochabamba },
    { id: 'SANTA CRUZ', title: 'SANTA CRUZ', color: '#f3e5f5', image: santacruz },
    { id: 'BENI', title: 'BENI', color: '#ffebee', image: beni },
    { id: 'CHUQUISACA', title: 'CHUQUISACA', color: '#e0f7fa', image: chuquisaca },
    { id: 'ORURO', title: 'ORURO', color: '#f1f8e9', image: oruro },
    { id: 'POTOSI', title: 'POTOSI', color: '#fff8e1', image: potosi },
    { id: 'PANDO', title: 'PANDO', color: '#ede7f6', image: pando },
    { id: 'TARIJA', title: 'TARIJA', color: '#e3f2fd', image: tarija },
];

const Home = () => {
    return (
        <div className="container">
            <div style={{ padding: '40px 0' }}>
                <h1 className="h1">Sistema Interactivo de Análisis Poblacional</h1>
                <div style={{ width: '100px', height: '4px', backgroundColor: '#ccc', margin: '20px 0 40px' }}></div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '30px' }}>
                    {demos.map((demo) => (
                        <DemoCard key={demo.id} id={demo.id} title={demo.title} imageColor={demo.color} image={demo.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
