export const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL + '/'
export const base = process.env.NEXT_PUBLIC_STRAPI_URL

export const api = {
    cotizacion: `${baseUrl}cotizacion`,
    cuerpoCotizacion: `${baseUrl}cuerpocotizacion`,
    cuerpoCotizacionsingle: `${baseUrl}cuerpocotizacionsingle`,
    cliente: `${baseUrl}cliente`,
    item: `${baseUrl}item`,
};
