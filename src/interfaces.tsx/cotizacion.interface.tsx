interface ICotizacionData {
    id: number;
    nombreCotizacion: string;
    nroCotizacion: number;
    tiempo_entrega: string;
    asuntoCotizacion: string;
    estado: number;
    cliente: {
        correoElectronico: string;
        id: number;
        razonSocial: string;
        ruc: string;
    };
} 