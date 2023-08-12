import { PreviewClient } from "@/components/organism/client/preview_client";

export default function PreviewPage({ params: { id } }: DefaultPageIdProps) {
    return <PreviewClient id={id} />;
}
