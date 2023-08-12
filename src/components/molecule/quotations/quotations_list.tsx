"use client";
import { useState, useEffect } from "react";
import { cotizacionService } from "../../../services/cotizacion.service";
import { GetquotationNro, GetquotationStatus } from "@/utils/utils";
import { TableOptions } from "@/components/atom/common/table_options";
const QuotationsList = () => {
    const [cotizacion, setCotizacion] = useState<ICotizacionData[]>([]);
    const params = "";
    useEffect(() => {
        cotizacionService
            .list()
            .then((res: ICotizacionData[]) => {
                setCotizacion(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="table w-full">
            <div className="table-header-group">
                <div className="table-row">
                    <div className="table-cell text-center font-bold border-t border-b border-l">
                        #
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l">
                        Nro. Cotización
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l">
                        Cliente
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l">
                        Estado
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l border-r">
                        Opciones
                    </div>
                </div>
            </div>
            <div className="table-row-group">
                {cotizacion.map((items, index) => (
                    <div key={items.id} className="table-row">
                        <div className="border-l py-2 border-b text-center table-cell">
                            {index + 1}
                        </div>
                        <div className="border-l py-2 border-b text-center table-cell">
                            <GetquotationNro number={items.id} />
                        </div>
                        <div className="border-l py-2 text-center border-b table-cell">
                            {items.cliente.razonSocial}
                        </div>
                        <div className="border-l py-2 text-center border-b table-cell">
                            <GetquotationStatus status={items.estado} />
                        </div>
                        <div className="border-l py-2 text-center border-b border-r table-cell">
                            <TableOptions
                                allowed={["view", "edit", "delete"]}
                                prevUrl="cotizacion"
                                id={items.id}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export { QuotationsList };
