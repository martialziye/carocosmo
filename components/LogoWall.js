export default function LogoWall() {
    const logoData = [
        { name: "STAUBLI", image: "/assets/images/logo/clients/重点STAUBLI.png" },
        { name: "DINEL", image: "/assets/images/logo/clients/重点DINEL.png" },
        { name: "Di-soric", image: "/assets/images/logo/clients/重点Di-soric.png" },
        { name: "GEV", image: "/assets/images/logo/clients/重点GEV.png" },
        { name: "ISOLOC", image: "/assets/images/logo/clients/重点ISOLOC.png" },
        { name: "OLEOCON HYDRAULIC", image: "/assets/images/logo/clients/重点OLEOCON HYDRAULIC.png" },
        { name: "MW Components", image: "/assets/images/logo/clients/重点MW-Components-logo-open-graph.png" },
        { name: "Sterling", image: "/assets/images/logo/clients/重点logo-sterling.png" },
        { name: "Autosen", image: "/assets/images/logo/clients/重点autosen-logo.png" },
        { name: "DRUSEIDT", image: "/assets/images/logo/clients/重点DRUSEIDT ELEKTROTECHNIK.png" },
        { name: "RAC Fluid", image: "/assets/images/logo/clients/重点Logo-Rac-Fluid.png" },
        { name: "AM Systems", image: "/assets/images/logo/clients/重点amsystems-logo.png" },
        { name: "KAMAT", image: "/assets/images/logo/clients/KAMAT.png" },
        { name: "MARPOSS", image: "/assets/images/logo/clients/MARPOSS.png" },
        { name: "Deublin", image: "/assets/images/logo/clients/deublin-logo.png" },
        { name: "Baldor", image: "/assets/images/logo/clients/Baldor.png" },
        { name: "Henkel", image: "/assets/images/logo/clients/henkel_logo.png" },
        { name: "Maxion", image: "/assets/images/logo/clients/Maxion-logo.png" },
        { name: "Huron", image: "/assets/images/logo/clients/Huron-Logo-Shop.png" },
        { name: "Joslyn Clark", image: "/assets/images/logo/clients/Joslyn-Clark-Logo.png" },
        { name: "Microtap", image: "/assets/images/logo/clients/microtap-logo.png" },
        { name: "Atek", image: "/assets/images/logo/clients/Atek_Logo_rot_cmyk.png" }
    ]

    return (
        <div className="logo-wall-section" style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto text-center mb-5">
                        <h2 className="font-lora font-40 lineh-48 color-29 weight-600 margin-b24">
                            Trusted by Industry Leaders Worldwide
                        </h2>
                        <p className="font-ks font-18 lineh-28 weight-500 color-30">
                            We're proud to partner with these exceptional companies across various industries
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '30px',
                            alignItems: 'center'
                        }}>
                            {logoData.map((logo, index) => (
                                <div 
                                    key={index}
                                    style={{
                                        backgroundColor: 'white',
                                        borderRadius: '12px',
                                        padding: '30px 20px',
                                        height: '120px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        border: '1px solid rgba(0,0,0,0.05)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-8px)'
                                        e.target.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)'
                                        e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'
                                    }}
                                >
                                    <img 
                                        src={logo.image} 
                                        alt={logo.name}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '60px',
                                            width: 'auto',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            filter: 'grayscale(100%)',
                                            transition: 'filter 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.filter = 'grayscale(0%)'
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.filter = 'grayscale(100%)'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 text-center">
                        <p className="font-ks font-16 lineh-26 weight-500 color-30" style={{ opacity: 0.7 }}>
                            Join over 100+ companies who trust Carocosmo for their sourcing needs
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 