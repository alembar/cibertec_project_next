"use client";
import { useState, useEffect } from "react";
import { cuerpoCotizacionService } from "../../../services/cuerpocotizacion.service";
import { GetMultiply } from "@/components/atom/common/commons";
import { ButtonLink } from "@/components/atom/button";
import { TableOptions } from "@/components/atom/common/table_options";

interface IQuotationsItemsData {
    data: ICotizacionData;
}
const QuotationItems = (props: IQuotationsItemsData) => {
    const [itemsCotizacion, setItemsCotizacion] = useState<
        ICuerpoCotizacionData[]
    >([]);
    useEffect(() => {
        cuerpoCotizacionService
            .retrieve(props.data.id)
            .then((res: ICuerpoCotizacionData[]) => {
                setItemsCotizacion(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [props.data.id]);
    return (
        <div className="w-full">
            <div className="w-full flex justify-end">
                <ButtonLink
                    data="Nuevo item"
                    href={`/cotizacion/${props.data.id}/items/new`}
                />
            </div>
            <div className="table w-full">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className=" py-2 table-cell text-center font-bold border-t border-b border-l">
                            #
                        </div>
                        <div className="px-1 py-2 table-cell text-center font-bold border-t border-b border-l">
                            Descripcion
                        </div>
                        <div className="px-1 py-2 table-cell text-center font-bold border-t border-b border-l">
                            Cantidad
                        </div>
                        <div className="px-1 py-2 table-cell text-center font-bold border-t border-b border-l">
                            P/U
                        </div>
                        <div className="px-1 py-2 table-cell text-center font-bold border-t border-b border-l">
                            Subtotal
                        </div>
                        <div className="px-1 py-2 table-cell text-center font-bold border-t border-b border-l border-r">
                            Opciones
                        </div>
                    </div>
                </div>
                <div className="table-row-group">
                    {itemsCotizacion.map((items, index) => (
                        <div key={items.id} className="table-row">
                            <div className="px-1 w-1/12 border-l py-2 border-b text-center table-cell align-middle">
                                {index + 1}
                            </div>
                            <div className="px-1 w-2/3 border-l py-2 border-b text-center table-cell align-middle">
                                {items.item.description}
                            </div>
                            <div className="px-1 border-l py-2 text-center border-b table-cell align-middle">
                                {items.cantidad}
                            </div>
                            <div className="px-1 border-l py-2 text-center border-b table-cell align-middle">
                                {items.item.precio_unitario}
                            </div>
                            <div className="px-1 border-l py-2 text-center border-b table-cell align-middle">
                                <GetMultiply
                                    data={[
                                        items.item.precio_unitario,
                                        items.cantidad,
                                    ]}
                                />
                            </div>
                            <div className="border-l py-2 text-center border-b border-r table-cell align-middle">
                                <TableOptions
                                    allowed={["delete"]}
                                    prevUrl="items"
                                    id={items.id}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export { QuotationItems };
