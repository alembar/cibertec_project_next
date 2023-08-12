"use client";
import { useState, useEffect } from "react";
import { cotizacionService } from "../../../services/cotizacion.service";
import {
    ParagraphData,
    ParagraphTitle,
    Title,
} from "@/components/atom/common/commons";
import { GetquotationNro, GetquotationStatus } from "@/utils/utils";
import { QuotationContent } from "@/components/molecule/quotations/quotation_content";

const PreviewQuotation = (props: any) => {
    const [cotizacion, setCotizacion] = useState<ICotizacionData>();
    const params = "";
    useEffect(() => {
        cotizacionService
            .retrieve(props.id)
            .then((res: ICotizacionData) => {
                setCotizacion(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    return cotizacion ? (
        <>
            <div className="w-full pb-10">
                <Title data={cotizacion.nombreCotizacion} />
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center">
                <div className="w-1/2 text-center">
                    <ParagraphTitle data={"NÚMERO DE COTIZACIÓN"} />
                    <ParagraphData
                        data={
                            <GetquotationNro
                                number={cotizacion.nroCotizacion}
                            />
                        }
                    />
                </div>
                <div className="w-1/2 text-center">
                    <ParagraphTitle data={"ESTADO DE COTIZACIÓN"} />
                    <ParagraphData
                        data={<GetquotationStatus status={cotizacion.estado} />}
                    />
                </div>
                <div className="w-1/2 left text-center">
                    <ParagraphTitle data={"ASUNTO"} />
                    <ParagraphData data={cotizacion.asuntoCotizacion} />
                </div>
                <div className="w-1/2 left text-center">
                    <ParagraphTitle data={"tiempo de entrega"} />
                    <ParagraphData data={cotizacion.tiempo_entrega} />
                </div>
                <div className="w-1/2 left text-center">
                    <ParagraphTitle data={"cliente"} />
                    <ParagraphData data={cotizacion.cliente.razonSocial} />
                </div>
            </div>
            <div className="w-full mt-2 py-2 flex flex-row justify-center items-center bg-DarkBlue">
                <p className="uppercase font-bold text-White">
                    Items de la cotización
                </p>
            </div>
            <div className="w-full mt-2 py-2 flex flex-row">
                <QuotationContent idCotizacion={cotizacion.id} />
            </div>
        </>
    ) : null;
};

export { PreviewQuotation };
