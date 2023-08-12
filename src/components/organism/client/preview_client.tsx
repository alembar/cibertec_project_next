"use client";
import { useState, useEffect } from "react";
import { clienteService } from "../../../services/cliente.service";
import {
    ParagraphData,
    ParagraphTitle,
    Title,
} from "@/components/atom/common/commons";
import { GetquotationNro, GetquotationStatus } from "@/utils/utils";
import { QuotationContent } from "@/components/molecule/quotations/quotation_content";

const PreviewClient = (props: any) => {
    const [cliente, setCliente] = useState<IClienteData>();
    useEffect(() => {
        clienteService
            .retrieve(props.id)
            .then((res: IClienteData) => {
                setCliente(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.id]);

    return cliente ? (
        <>
            <div className="w-full pb-10">
                <Title data={cliente.razonSocial} />
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center">
                <div className="w-1/2 text-center">
                    <ParagraphTitle data={"RUC"} />
                    <ParagraphData data={cliente.ruc} />
                </div>
                <div className="w-1/2 text-center">
                    <ParagraphTitle data={"Correo electrónico"} />
                    <ParagraphData
                        data={
                            cliente.correoElectronico
                                ? cliente.correoElectronico
                                : "---"
                        }
                    />
                </div>
            </div>
        </>
    ) : null;
};

export { PreviewClient };
