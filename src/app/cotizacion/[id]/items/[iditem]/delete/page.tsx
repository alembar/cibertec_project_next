/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { cuerpoCotizacionService } from "@/services/cuerpocotizacion.service";
import { useParams } from "next/navigation";

export default function DeleteItemQuotation({
    params: { iditem },
}: DefaultPageIdItemProps) {
    const params = useParams();
    useEffect(() => {
        cuerpoCotizacionService
            .delSingle(parseInt(iditem))
            .then((res: ICuerpoCotizacionData) => {
                window.location.replace(
                    `/cotizacion/${params.id}/items?message=Item eliminado SATISFACTORIAMENTE&type=success`
                );
            })
            .catch((err) => {
                console.log(err);
            });
    }, [iditem]);
    return null;
}
