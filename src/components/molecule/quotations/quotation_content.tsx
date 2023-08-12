"use client";
import { useState, useEffect } from "react";
import { cuerpoCotizacionService } from "../../../services/cuerpocotizacion.service";
import { GetMultiply } from "@/components/atom/common/commons";
const QuotationContent = (props: any) => {
    const [itemsCotizacion, setItemsCotizacion] = useState<
        ICuerpoCotizacionData[]
    >([]);
    const [total, setTotal] = useState(0.0)
    useEffect(() => {
        cuerpoCotizacionService
            .retrieve(props.idCotizacion)
            .then((res: ICuerpoCotizacionData[]) => {
                setItemsCotizacion(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.idCotizacion]);

    useEffect(() => {
        let qtyTotal = 0
        itemsCotizacion.forEach((item) => {
            qtyTotal += Number(item.cantidad) * item.item.precio_unitario;
        });
        setTotal(qtyTotal);
    }, [itemsCotizacion]);

    return (
        <div className="w-full">
            <div className="table w-full">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className=" py-2 table-cell text-center font-bold border-t border-b border-l">
                            #
                        </div>
                        <div className=" py-2 table-cell text-center font-bold border-t border-b border-l">
                            Descripcion
                        </div>
                        <div className=" py-2 table-cell text-center font-bold border-t border-b border-l">
                            Cantidad
                        </div>
                        <div className=" py-2 table-cell text-center font-bold border-t border-b border-l">
                            P/U
                        </div>
                        <div className=" py-2 table-cell text-center font-bold border-t border-b border-l border-r">
                            Subtotal
                        </div>
                    </div>
                </div>
                <div className="table-row-group">
                    {itemsCotizacion.map((items, index) => (
                        <div key={items.id} className="table-row">
                            <div className="w-1/12 border-l py-2 border-b text-center table-cell">
                                {index + 1}
                            </div>
                            <div className="w-2/3 border-l py-2 border-b text-center table-cell">
                                {items.item.description}
                            </div>
                            <div className="border-l py-2 text-center border-b table-cell">
                                {items.item.precio_unitario}
                            </div>
                            <div className="border-l py-2 text-center border-b table-cell">
                                {items.cantidad}
                            </div>
                            <div className="border-l py-2 text-center border-b border-r table-cell">
                                <GetMultiply
                                    data={[
                                        items.item.precio_unitario,
                                        items.cantidad,
                                    ]}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pt-5 w-full flex flex-row justify-end">
                <div className="w-10/12 flex font-bold flex-row justify-end">
                    TOTAL:
                </div>
                <div className="text-center w-2/12">{total}</div>
            </div>
        </div>
    );
};

export { QuotationContent };
