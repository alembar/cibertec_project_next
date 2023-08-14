/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { SubmitButton } from "@/components/atom/button";
import { ItemForm } from "@/components/atom/cliente/item_form";
import { Title } from "@/components/atom/common/commons";
import { itemService } from "@/services/item.service";
import { cuerpoCotizacionService } from "@/services/cuerpocotizacion.service"
import { useEffect, useState } from "react";
import { cotizacionService } from "@/services/cotizacion.service";

export default function NewItemQuotarion({
    params: { id },
}: DefaultPageIdProps) {
    const [sentForm, setSentForm] = useState(false);
    const [cotizacion, setCotizacion] = useState<ICotizacionData>();
    const [itemCotizacionData, setItemCotizacionData] = useState({
        cantidad: "",
        cotizacion: null,
        item: null,
    });
    const [selectDataItem, setSelectDataItem] = useState<ISelectDataClient[]>(
        []
    );
    
    const [selectedItem, setSelectedItem] = useState<IItemData>();
    const [item, setItem] = useState<IItemData[]>([]);
    console.log("itemCotizacionData", itemCotizacionData);
    console.log("selectedItem", selectedItem);
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSentForm(true);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setItemCotizacionData((prevCliente) => ({
            ...prevCliente,
            [name]: value,
        }));
    };
    useEffect(() => {
        cotizacionService
            .retrieve(parseInt(id))
            .then((res: ICotizacionData) => {
                setCotizacion(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);
    useEffect(() => {
        if (sentForm) {
            const ItemQuotationData = {
                ...itemCotizacionData,
                item: selectedItem,
                cotizacion: cotizacion,
            };
            cuerpoCotizacionService
                .create(ItemQuotationData)
                .then((res: ICotizacionData) => {
                    // setResponseClient(res);
                    setSentForm(false);
                    window.location.replace(
                        `/cotizacion/${id}/items?message=Item agregado SATISFACTORIAMENTE&type=success`
                    );
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [sentForm]);
    useEffect(() => {
        itemService
            .list()
            .then((res: IItemData[]) => {
                setItem(res);
                const newData = res.map((dataClient) => ({
                    value: dataClient.id,
                    data: dataClient.nombreItem,
                }));
                setSelectDataItem(newData);
                if (res.length > 0) {
                    setSelectedItem(res[0]);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const handleCuerpoCotizacionSelect = (itemId: number) => {
        const selected = item.find((itemData) => itemData.id === itemId);
        setSelectedItem(selected);
    };
    
    return (
        <div className="flex flex-col ">
            <Title data="Nuevo item en cotizacion" />
            <div className="flex flex-row justify-center items-center w-full pt-10">
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="w-full flex flex-wrap flex-row justify-center"
                >
                    <div className="w-1/5">
                        <ItemForm
                            required
                            label="Cantidad"
                            name="cantidad"
                            type="number"
                            on_change={handleChange}
                        />
                    </div>
                    <div className="w-4/5">
                        <ItemForm
                            required
                            label="Item"
                            name="item"
                            type="combo"
                            data={selectDataItem}
                            on_change={(e: any) =>
                                handleCuerpoCotizacionSelect(parseInt(e.target.value))
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
