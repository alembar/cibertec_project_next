'use client'
import { Loading, ParagraphData, ParagraphTitle, Title } from "@/components/atom/common/commons";
import { Toaster, messageToast } from "@/components/atom/common/toast";
import { QuotationItems } from "@/components/molecule/quotations/quotation_items";
import { cotizacionService } from "@/services/cotizacion.service";
import { GetquotationNro, GetquotationStatus } from "@/utils/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ItemsQuotation({ params: { id } }: DefaultPageIdProps){
    const searchParams = useSearchParams();
    const messageResponse = searchParams.get("message");
    const messageType = searchParams.get("type");
    useEffect(() => {
        messageToast({ message: messageResponse, type: messageType });
    }, [messageResponse, messageType]);

    const [cotizacion, setCotizacion] = useState<ICotizacionData>();
    useEffect(() => {
        cotizacionService
            .retrieve(parseInt(id))
            .then((res: ICotizacionData) => {
                setCotizacion(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    
    return cotizacion ? (
        <>
            <div className="w-full pb-10">
                <Title data={cotizacion?.nombreCotizacion} />
                {messageType ? <Toaster position="top-center" /> : null}
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center">
                <div className="w-1/2 text-center">
                    <ParagraphTitle data={"NÚMERO DE COTIZACIÓN"} />
                    <ParagraphData
                        data={
                            <GetquotationNro
                                number={cotizacion?.nroCotizacion}
                            />
                        }
                    />
                </div>
                <div className="w-1/2 text-center">
                    <ParagraphTitle data={"ESTADO DE COTIZACIÓN"} />
                    <ParagraphData
                        data={
                            <GetquotationStatus status={cotizacion?.estado} />
                        }
                    />
                </div>
                <div className="w-1/2 left text-center">
                    <ParagraphTitle data={"ASUNTO"} />
                    <ParagraphData data={cotizacion?.asuntoCotizacion} />
                </div>
                <div className="w-1/2 left text-center">
                    <ParagraphTitle data={"tiempo de entrega"} />
                    <ParagraphData data={cotizacion?.tiempo_entrega} />
                </div>
                <div className="w-1/2 left text-center">
                    <ParagraphTitle data={"cliente"} />
                    <ParagraphData data={cotizacion?.cliente.razonSocial} />
                </div>
            </div>
            <div className="w-full mt-2 py-2 flex flex-row justify-center items-center bg-DarkBlue">
                <p className="uppercase font-bold text-White">
                    Items de la cotización
                </p>
            </div>
            <div className="w-full mt-2 py-2 flex flex-row">
                {cotizacion.id ? (
                    <QuotationItems data={cotizacion} />
                ) : (
                    <Loading />
                )}
            </div>
        </>
    ) : (
        <Loading />
    );
}