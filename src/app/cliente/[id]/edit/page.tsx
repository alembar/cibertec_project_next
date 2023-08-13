/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useEffect, useState } from "react";
import { clienteService } from "../../../../services/cliente.service";
import { Toaster } from "react-hot-toast";
import { Title } from "@/components/atom/common/commons";
import { ItemForm } from "@/components/atom/cliente/item_form";
import { SubmitButton } from "@/components/atom/button";
import { messageToast } from "@/components/atom/common/toast";

export default function EditPage({ params: { id } }: DefaultPageIdProps) {
    const [cliente, setCliente] = useState<IClienteData>();
    const [sentForm, setSentForm] = useState(false);
    const [dataCliente, setDataCliente] = useState<IClienteData>({
        id: 0,
        razonSocial: "",
        ruc: "",
        correoElectronico: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };
    useEffect(() => {
        clienteService
            .retrieve(parseInt(id))
            .then((res: IClienteData) => {
                setDataCliente({
                    id: res.id,
                    razonSocial: res.razonSocial,
                    ruc: res.ruc,
                    correoElectronico: res.correoElectronico,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    useEffect(() => {
        if (sentForm) {
            clienteService
                .update(dataCliente.id, dataCliente)
                .then((res: IClienteData) => {
                    setDataCliente(res);
                    setSentForm(false);
                    messageToast({
                        message: "Cliente editado SATISFACTORIAMENTE.",
                        type: "success",
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [sentForm]);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSentForm(true);
    };

    return (
        <div className="flex flex-col ">
            <Toaster position="top-center" />
            <Title data="Editar cliente" />
            <div className="flex flex-row justify-center items-center w-full pt-10">
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="w-full flex flex-wrap flex-row justify-center"
                >
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Razón Social"
                            name="razonSocial"
                            type="input"
                            value={dataCliente.razonSocial}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="RUC"
                            name="ruc"
                            type="input"
                            value={dataCliente.ruc}
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-1/2">
                        <ItemForm
                            required
                            label="Correo Electrónico"
                            name="correoElectronico"
                            type="email"
                            value={dataCliente.correoElectronico}
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
