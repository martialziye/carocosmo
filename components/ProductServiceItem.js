import Link from "next/link"

export default function ProductServiceItem({ 
    title, 
    description, 
    image, 
    link = "/contact1" 
}) {
    return (
        <div className="col-lg-6 col-md-6">
            <div className="service3-boxarea margin-b30 bgservice2">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="service3-text2">
                            <Link href={link}>
                                <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">{title}</h1>
                            </Link>
                            <p className="font-ks font-16 lineh-26 weight-500 color-30">{description}</p>
                            <Link 
                                href={link} 
                                className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                                style={{
                                    cursor: 'pointer',
                                    zIndex: 10,
                                    position: 'relative',
                                    pointerEvents: 'auto'
                                }}
                            >
                                Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="service3-imag1" style={{
                            width: '100%',
                            minHeight: '180px',
                            overflow: 'hidden',
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            paddingBottom: '30px'
                        }}>
                            <img 
                                src={image} 
                                alt="" 
                                style={{
                                    width: '30%',
                                    height: 'auto',
                                    minHeight: '180px',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    marginBottom: '50px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 