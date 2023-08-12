interface ICuerpoCotizacionData {
    id: number;
    cantidad: string;
    cotizacion: ICotizacionData;
    item: {
        id: number;
        nombreItem: string;
        description: string;
        precio_unitario: number
    };
}
