"use client";
import { useState, useEffect } from "react";
import { clienteService } from "../../../services/cliente.service";
import { GetquotationNro, GetquotationStatus } from "@/utils/utils";
import { TableOptions } from "@/components/atom/common/table_options";
const ClientList = () => {
    const [client, setClient] = useState<IClienteData[]>([]);
    const params = "";
    useEffect(() => {
        clienteService
            .list()
            .then((res: IClienteData[]) => {
                setClient(res);
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
                        Razón social
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l">
                        RUC
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l">
                        Correo Electrónico
                    </div>
                    <div className="table-cell text-center font-bold border-t border-b border-l border-r">
                        Opciones
                    </div>
                </div>
            </div>
            <div className="table-row-group">
                {client.map((items, index) => (
                    <div key={items.id} className="table-row">
                        <div className="border-l py-2 border-b text-center table-cell">
                            {index + 1}
                        </div>
                        <div className="border-l py-2 text-center border-b table-cell">
                            {items.razonSocial}
                        </div>
                        <div className="border-l py-2 text-center border-b table-cell">
                            {items.ruc}
                        </div>
                        <div className="border-l py-2 text-center border-b table-cell">
                            {items.correoElectronico?items.correoElectronico:"---"}
                        </div>
                        <div className="border-l py-2 text-center border-b border-r table-cell">
                            <TableOptions
                                allowed={["view", "edit", "delete"]}
                                prevUrl="cliente"
                                id={items.id}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export { ClientList };
