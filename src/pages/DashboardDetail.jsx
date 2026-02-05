import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, Maximize2 } from 'lucide-react';

const DashboardDetail = () => {
    const { id } = useParams();

    // In a real app, fetch data based on ID. For now, static content.
    const title = (id ? `${id}` : "");

    // Map of IDs to Power BI URLs
    const dashboardLinks = {
        'LA PAZ': 'https://app.powerbi.com/view?r=eyJrIjoiMWQwNzI0ODEtOTFjMC00MTI3LTllYjItMGEwMGRiMjMzOWFkIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'COCHABAMBA': 'https://app.powerbi.com/view?r=eyJrIjoiOTQ2OGJlZDQtMGNkZC00ZDFiLThiYWYtZDRhZDcxOWZiZjYwIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'SANTA CRUZ': 'https://app.powerbi.com/view?r=eyJrIjoiZDdiYTRkZGQtMDA5NC00OTNjLTljZTctNmJmYTE5YzIwYzBiIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'BENI': 'https://app.powerbi.com/view?r=eyJrIjoiMTI2YWZmZjEtYmI3MS00ZTE5LTg4OTAtMzQ3NDNiNjRiM2U3IiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'CHUQUISACA': 'https://app.powerbi.com/view?r=eyJrIjoiYzRkMDcyZDUtNjU2Mi00NTQ0LTllODctOTYyZTA3ZTM1MWRlIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'ORURO': 'https://app.powerbi.com/view?r=eyJrIjoiNGQyOWQzN2YtMzQ2YS00ODA5LTg3MDYtNmI5YmIwYWE1ZTA2IiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'POTOSI': 'https://app.powerbi.com/view?r=eyJrIjoiZjg4NGM5ZWUtYmJjZS00OWE3LThkOTItMzBhYTFmN2IyMzNhIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'PANDO': 'https://app.powerbi.com/view?r=eyJrIjoiZmYyNjc4YjktZGYzNC00MGZmLThjNjctNTJlMDIwZTBkY2Q2IiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'TARIJA': 'https://app.powerbi.com/view?r=eyJrIjoiZTc1MmIzMmMtOGNjMC00YTk1LTgxODctMjdjNjlmNjE3OWMwIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9',
        'Diagnostico de Seguridad Ciudadana': 'https://app.powerbi.com/view?r=eyJrIjoiNjY1Mjc2MTAtODhiMi00MzUxLWFiOWEtYjQyMGFiN2Q5NzAyIiwidCI6ImIyNjI1MTcxLWVhOWUtNDVmNC04YTE1LTM3MDc1YTcwNjliMCJ9'
    };

    const iframeUrl = dashboardLinks[id];

    return (
        <div className="container">
            <div style={{ padding: '40px 0' }}>
                <h1 className="h1">{title}</h1>

                <div style={{ maxWidth: '800px', margin: '20px 0 40px', color: '#555', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '15px' }}>
                        {/* Placeholder text or description could go here if needed per section, currently generic or empty */}
                    </p>
                </div>

                {iframeUrl ? (
                    <div style={{ width: '100%', height: '800px', overflow: 'hidden' }}>
                        <iframe
                            src={iframeUrl}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title={title}
                        >
                            Loading…
                        </iframe>
                    </div>
                ) : (
                    <div style={{ height: '300px', background: '#f5f5f5', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>
                        [Interactive Chart Visualization Area]
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardDetail;
