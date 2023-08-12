/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";
import { Title } from "@/components/atom/common/commons";
import { ItemForm } from "@/components/atom/cliente/item_form";
import { SubmitButton } from "../../../components/atom/button";
import { clienteService } from "@/services/cliente.service";
import { messageToast, Toaster } from "../../../components/atom/common/toast";

export default function CreateClient() {
    const [sentForm, setSentForm] = useState(false);
    const [cliente, setCliente] = useState<IClienteDataCreateForm>({
        razonSocial: "",
        ruc: "",
        correoElectronico: "",
    });
    const [responseClient, setResponseClient] = useState<IClienteData>();
    const params = "";
    useEffect(() => {
        if (sentForm) {
            clienteService
                .create(cliente)
                .then((res: IClienteData) => {
                    setResponseClient(res);
                    setSentForm(false);
                    setCliente({
                        razonSocial: "",
                        ruc: "",
                        correoElectronico: "",
                    });
                    messageToast({
                        message: "Cliente creado SATISFACTORIAMENTE.",
                        type: "success",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [sentForm]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente((prevCliente) => ({
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
            <Title data="Nuevo cliente" />
            <div className="flex flex-row justify-center items-center w-full pt-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-full flex flex-wrap flex-row justify-center"
                >
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Razón Social"
                            name="razonSocial"
                            type="input"
                            value={cliente.razonSocial}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="RUC"
                            name="ruc"
                            type="input"
                            value={cliente.ruc}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Correo Electrónico"
                            name="correoElectronico"
                            type="email"
                            value={cliente.correoElectronico}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2"></div>
                    <div className="w-11/12 flex flex-row justify-center">
                        <SubmitButton>Enviar</SubmitButton>
                    </div>
                </form>
            </div>
        </div>
    );
}
