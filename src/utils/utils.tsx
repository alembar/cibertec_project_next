const GetquotationNro = (props: any) => {
    const currentYear = new Date().getFullYear();
    const relNumber = props.number.toString().padStart(3, "0");
    const nro = `QTN.2023${ currentYear }.${relNumber}`;
    return nro
};
const GetquotationStatus = (props: any) => {
    return props.status ? (
        <p className="text-Green">Aceptado</p>
    ) : (
        <p className="text-RedWine">Pendiente</p>
    );
};



export { GetquotationNro, GetquotationStatus };