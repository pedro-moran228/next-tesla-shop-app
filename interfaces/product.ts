export interface IProduct {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: ISize[];
    slug: string;
    tags: string[];
    title: string;
    createdAt: Date;
    updatedAt: Date;
    gender: IGender;
}

export type ISize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type IType = "shirts" | "pants" | "hoodies" | "hats";
export type IGender = "men" | "women" | "kid" | "unisex";
