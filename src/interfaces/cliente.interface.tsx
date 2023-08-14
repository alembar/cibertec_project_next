interface IClienteData {
    id: number;
    razonSocial: string;
    ruc: string;
    correoElectronico: string;
}


interface IClienteDataCreateForm {
    razonSocial: string;
    ruc: string;
    correoElectronico: string;
}


interface ISelectDataClient {
    value: any;
    data: string;
}