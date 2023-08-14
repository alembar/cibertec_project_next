import { ButtonLink } from "@/components/atom/button";
import { Title } from "@/components/atom/common/commons";
import { QuotationsList } from "@/components/molecule/quotations/quotations_list";

export default function CotizacionPage(){
    return (
    <div className="flex flex-col ">
        <Title data="Cotizaciones" />
        <div className="flex flex-row justify-end w-full pt-10">
            <ButtonLink href='/cotizacion/create' data="Nueva Cotizacion" />
        </div>
        <QuotationsList />
    </div>
    )
}
