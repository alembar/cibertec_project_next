import { PreviewQuotation } from "@/components/organism/quotation/preview_quotation";

export default function PreviewPage({ params: { id } }: DefaultPageIdProps) {
    return <PreviewQuotation id={id}/>;
}
