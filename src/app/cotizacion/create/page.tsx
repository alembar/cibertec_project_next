/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { SubmitButton } from "@/components/atom/button";
import { ItemForm } from "@/components/atom/cliente/item_form";
import { Title } from "@/components/atom/common/commons";
import { clienteService } from "../../../services/cliente.service";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { cotizacionService } from "@/services/cotizacion.service";
import { messageToast } from "@/components/atom/common/toast";

export default function CreateQuotation() {
    const [client, setClient] = useState<IClienteData[]>([]);
    const [selectDataClient, setSelectDataclient] = useState<
        ISelectDataClient[]
    >([]);
    const [sentForm, setSentForm] = useState(false);
    const [responseClient, setResponseClient] = useState<ICotizacionData>();
    const [selectedClient, setSelectedClient] = useState<IClienteData>();
    const [cotizacionData, setCotizacionData] = useState({
        nombreCotizacion: "",
        nroCotizacion: 0,
        tiempo_entrega: "",
        asuntoCotizacion: "",
        estado: 0,
        cliente: null,
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCotizacionData((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };
    useEffect(() => {
        clienteService
            .list()
            .then((res: IClienteData[]) => {
                setClient(res);
                const newData = res.map((dataClient) => ({
                    value: dataClient.id,
                    data: dataClient.razonSocial,
                }));
                setSelectDataclient(newData);
                if (res.length > 0) {
                    setSelectedClient(res[0]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        if (sentForm) {
            const quotationData = {
                ...cotizacionData,
                cliente: selectedClient,
            };
            cotizacionService
                .create(quotationData)
                .then((res: ICotizacionData) => {
                    setResponseClient(res);
                    setSentForm(false);
                    window.location.replace(
                        `/cotizacion/${res.id}/items?message=Cotizacion creada SATISFACTORIAMENTE&type=success`
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [sentForm]);
    const handleClientSelect = (clientId: number) => {
        const selected = client.find(
            (clientData) => clientData.id === clientId
        );
        setSelectedClient(selected);
    };

    const handleChangeState = (statusId: number) => {
        const name = "estado";
        const value = statusId;
        setCotizacionData((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSentForm(true);
    };

    return (
        <div className="flex flex-col ">
            <Toaster position="top-center" />
            <Title data="Nueva Cotizacion" />
            <div className="flex flex-row justify-center items-center w-full pt-10">
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="w-full flex flex-wrap flex-row justify-center"
                >
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Nombre Cotizacion"
                            name="nombreCotizacion"
                            type="input"
                            value={cotizacionData.nombreCotizacion}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Serializador"
                            name="nroCotizacion"
                            type="input"
                            value={cotizacionData.nroCotizacion}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Tiempo de entrega"
                            name="tiempo_entrega"
                            type="input"
                            value={cotizacionData.tiempo_entrega}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2"></div>
                    <div className="w-full">
                        <ItemForm
                            required
                            label="Asunto de la cotización"
                            name="asuntoCotizacion"
                            type="input"
                            value={cotizacionData.asuntoCotizacion}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Estado"
                            name="estado"
                            type="combo"
                            value={cotizacionData.estado}
                            data={[
                                { value: 0, data: "pendiente" },
                                { value: 1, data: "confirmado" },
                            ]}
                            on_change={(e: any) =>
                                handleChangeState(parseInt(e.target.value))
                            }
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Cliente"
                            name="cliente"
                            type="combo"
                            data={selectDataClient}
                            on_change={(e: any) =>
                                handleClientSelect(parseInt(e.target.value))
                            }
                        />
                    </div>
                    <div className="w-11/12 flex flex-row justify-center">
                        <SubmitButton>Enviar</SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
