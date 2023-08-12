"use client";
import { ButtonLink } from "@/components/atom/button";
import { Title } from "@/components/atom/common/commons";
import { ClientList } from "@/components/molecule/client/client_list";
import { Toaster, messageToast } from "@/components/atom/common/toast";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ClientPage() {
    const searchParams = useSearchParams();    
    const messageResponse = searchParams.get("message");
    const messageType = searchParams.get("type");
    useEffect(() => {
        messageToast({ message: messageResponse, type: messageType });
    }, [messageResponse, messageType]);
    return (
        <div className="flex flex-col ">
            <Title data="Clientes" />
            {messageType ? <Toaster position="top-center" /> : null}
            <div className="flex flex-row justify-end w-full pt-10">
                <ButtonLink href="/cliente/create/" data="Nuevo Cliente" />
            </div>
            <ClientList />
        </div>
    );
}
