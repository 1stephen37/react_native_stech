interface ProductBox {
    id_product: string;
    name: string,
    image: string,
    brand_name: string,
    price: number,
    sale_off: number,
    views: number,
    memory: string,
    color: string,
}

interface Brand {
    id_brand: string;
    name: string;
    description: string;
    logo: string;
    status: number
}
