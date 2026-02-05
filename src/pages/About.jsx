import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div style={{ padding: '40px 0', maxWidth: '800px', margin: '0 auto' }}>
                <h1 className="h1" style={{ marginBottom: '30px' }}>Sistema Interactivo de Análisis Poblacional</h1>

                <div style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#555' }}>
                    <p style={{ marginBottom: '20px' }}>
                        La plataforma digital de análisis poblacional se constituye en una herramienta interactiva orientada a la visualización, exploración y análisis espacial de los principales indicadores demográficos del país. Desarrollada mediante Power BI, integra información oficial del Instituto Nacional de Estadística (INE), permitiendo examinar la distribución, estructura y dinámica de la población a diferentes escalas territoriales: nacional, departamental, municipal y, cuando la información lo permite, a nivel intraurbano y rural. Esta plataforma facilita la comprensión de patrones demográficos complejos a través de gráficos dinámicos, mapas temáticos y tableros de control intuitivos.
                    </p>
                    <p style={{ marginBottom: '20px' }}>
                        Desde el enfoque de la Geografía de la Población, el portal posibilita el análisis de variables clave como el crecimiento poblacional, la estructura por edad y sexo, la densidad poblacional, los procesos de urbanización y la distribución espacial de la población. El uso de herramientas de inteligencia de negocios permite identificar tendencias, contrastar territorios y evidenciar desigualdades demográficas, fortaleciendo la interpretación geográfica de los datos censales y su relación con factores sociales, económicos y territoriales.
                    </p>
                    <p>
                        Asimismo, la plataforma cumple una función académica y formativa dentro de la Carrera de Ingeniería Geográfica, al promover el desarrollo de competencias en análisis de datos, cartografía temática y toma de decisiones basada en evidencia. Su diseño busca apoyar tanto el aprendizaje de los estudiantes como el uso potencial por parte de investigadores, planificadores y gestores públicos, constituyéndose en un insumo relevante para la planificación territorial, la formulación de políticas públicas y el análisis prospectivo del desarrollo poblacional en Bolivia.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
