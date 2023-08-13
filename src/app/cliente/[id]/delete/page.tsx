/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { clienteService } from "../../../../services/cliente.service";
import { ParagraphData, Title } from "@/components/atom/common/commons";
import { ButtonComp, CustomButton } from "@/components/atom/button";

import { messageToast } from "@/components/atom/common/toast";
export default function DeletePage({ params: { id } }: DefaultPageIdProps) {
    const [cliente, setCliente] = useState<IClienteData>();
    const [deleteClient, setDeleteClient] = useState(false);
    const handleConfirmDeletion = () => {
        setDeleteClient(true);
    };
    useEffect(() => {
        clienteService
            .retrieve(parseInt(id))
            .then((res: IClienteData) => {
                setCliente(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    useEffect(() => {
        if (deleteClient) {
            clienteService
                .del(parseInt(id))
                .then((res: string) => {
                    window.location.replace(
                        `/cliente?message=Cliente eliminado SATISFACTORIAMENTE&type=success`
                    );
                    console.log(
                        `/cliente?successMessage=Cliente eliminado SATISFACTORIAMENTE`
                    );
                })
                .catch((err) => {
                    messageToast({
                        message: "Error al eliminar cliente.",
                        type: "error",
                    });
                });
        }
    }, [deleteClient]);
    return (
        <div className="w-full flex flex-col items-center">
            <Title data="ELIMINAR CLIENTE" className="pb-10" />
            <ParagraphData
                data={`¿Realmente desea eliminar al CLIENTE ${cliente?.razonSocial} ?`}
            />
            <p className="text-sm">(Esta acción no se puede deshacer)</p>
            <div className="w-1/2 flex flex-row justify-center items-center pt-4">
                <div className="pr-1">
                    <CustomButton
                        onClick={handleConfirmDeletion}
                        className="bg-DarkGreen border-DarkGreen text-White"
                        data="Confirmar"
                    ></CustomButton>
                </div>
                <div className="pl-1">
                    <ButtonComp
                        className="bg-RedWine border-RedWine text-White"
                        data="Regresar"
                        href={`/cliente/`}
                    />
                </div>
            </div>
        </div>
    );
}
